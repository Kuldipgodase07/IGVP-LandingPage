// Post-build script: patches Nitro's generated .vc-config.json to use nodejs22.x
// Nitro detects the LOCAL Node version (currently 24.x) and writes that as the
// Vercel serverless runtime. But Vercel only supports up to nodejs22.x, so the
// function crashes silently. This script overwrites the runtime to nodejs22.x.
//
// Also patches .vercel/output/config.json to add explicit Content-Type headers
// for JS and CSS assets — without this, Vercel can serve module scripts with
// text/html (the SSR fallback), causing strict MIME type errors in browsers.
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";

// ── 1. Patch serverless runtime ──────────────────────────────────────────────
const vcConfigPath =
  ".vercel/output/functions/__server.func/.vc-config.json";

if (!existsSync(vcConfigPath)) {
  console.log("[patch-runtime] .vc-config.json not found — skipping.");
} else {
  const config = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  const original = config.runtime;
  config.runtime = "nodejs22.x";
  writeFileSync(vcConfigPath, JSON.stringify(config, null, 2) + "\n");
  console.log(`[patch-runtime] Patched runtime: ${original} → nodejs22.x`);
}

// ── 2. Patch output config — add MIME-type headers for static assets ─────────
const outputConfigPath = ".vercel/output/config.json";

if (!existsSync(outputConfigPath)) {
  console.log("[patch-runtime] output/config.json not found — skipping MIME patch.");
  process.exit(0);
}

const outputConfig = JSON.parse(readFileSync(outputConfigPath, "utf8"));

// Inject type-specific asset routes BEFORE the generic /assets/(.*) catch-all
const assetsCatchAll = outputConfig.routes?.findIndex(
  (r) => r.src === "/assets/(.*)"
) ?? -1;

const mimeRoutes = [
  {
    headers: {
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": "application/javascript; charset=utf-8",
    },
    src: "/assets/(.*)\\.js",
  },
  {
    headers: {
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": "text/css; charset=utf-8",
    },
    src: "/assets/(.*)\\.css",
  },
];

// Remove any existing MIME routes we previously added (idempotent)
outputConfig.routes = outputConfig.routes.filter(
  (r) => r.src !== "/assets/(.*)\\.js" && r.src !== "/assets/(.*)\\.css"
);

// Re-find insertion point after filtering
const insertAt = outputConfig.routes.findIndex(
  (r) => r.src === "/assets/(.*)"
);

if (insertAt !== -1) {
  outputConfig.routes.splice(insertAt, 0, ...mimeRoutes);
} else {
  // Fallback: prepend before first route
  outputConfig.routes.unshift(...mimeRoutes);
}

writeFileSync(outputConfigPath, JSON.stringify(outputConfig, null, 2) + "\n");
console.log("[patch-runtime] Patched output/config.json with JS/CSS MIME-type headers.");

// ── 3. Patch renderer-template — delegate to real SSR server ─────────────────
// Nitro bakes the raw index.html (with `/src/start.ts`) as a static fallback
// renderer. In production this file doesn't exist, so requests for it get
// intercepted by the SSR catch-all which returns text/html — causing the browser
// to reject the module script with a strict MIME type error.
// We replace the static renderer with a pass-through to the real SSR service.
const rendererTemplatePath =
  ".vercel/output/functions/__server.func/_chunks/renderer-template.mjs";

if (!existsSync(rendererTemplatePath)) {
  console.log("[patch-runtime] renderer-template.mjs not found — skipping renderer patch.");
} else {
  // Find the built index JS asset — prefer static assets dir (most reliable),
  // then fall back to scanning the manifest file (hash changes each build).
  let indexAsset = "/assets/index.js"; // safe fallback

  // Strategy A: read directly from the built static assets directory
  const staticAssetsPath = ".vercel/output/static/assets";
  if (existsSync(staticAssetsPath)) {
    const assetFiles = readdirSync(staticAssetsPath);
    const indexFile = assetFiles.find((f) => f.startsWith("index-") && f.endsWith(".js"));
    if (indexFile) indexAsset = `/assets/${indexFile}`;
  }

  // Strategy B: parse any _tanstack-start-manifest_*.mjs in the func directory
  if (indexAsset === "/assets/index.js") {
    const funcDir = ".vercel/output/functions/__server.func";
    if (existsSync(funcDir)) {
      const funcFiles = readdirSync(funcDir);
      const manifestFile = funcFiles.find(
        (f) => f.startsWith("_tanstack-start-manifest_") && f.endsWith(".mjs")
      );
      if (manifestFile) {
        const manifestContent = readFileSync(`${funcDir}/${manifestFile}`, "utf8");
        const match = manifestContent.match(/src:\s*["']([^"']+index-[^"']+\.js)["']/);
        if (match) indexAsset = match[1];
      }
    }
  }

  // Write a new renderer-template that delegates to the real SSR service
  // instead of returning the static dev-mode HTML fallback.
  const patchedRenderer = `import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
// [patch-runtime] Patched: delegates to SSR service instead of returning
// static index.html with /src/start.ts (which 404s in production).
// If SSR service is available via globalThis.__nitro_vite_envs__, use it;
// otherwise serve a minimal valid HTML shell that loads the built assets.
async function renderIndexHTML(event) {
  // Try the SSR Vite service first (the real TanStack Start SSR handler)
  const ssrService = globalThis.__nitro_vite_envs__?.["ssr"];
  if (ssrService && typeof ssrService.fetch === "function") {
    try {
      return await ssrService.fetch(event.req);
    } catch (e) {
      console.error("[renderer-template] SSR service error:", e);
    }
  }
  // Fallback: serve minimal HTML shell with correct production asset path
  return new HTTPResponse(
    \`<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IGVP · Healthcare Venture Operating System</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${indexAsset}"><\/script>
  </body>
</html>
\`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
export { renderIndexHTML as default };
`;

  writeFileSync(rendererTemplatePath, patchedRenderer);
  console.log(
    `[patch-runtime] Patched renderer-template.mjs — SSR delegate with fallback to ${indexAsset}`
  );
}


