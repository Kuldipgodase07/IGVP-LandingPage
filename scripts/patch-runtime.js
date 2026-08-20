// Post-build script: patches Nitro's generated .vc-config.json to use nodejs22.x
// Nitro detects the LOCAL Node version (currently 24.x) and writes that as the
// Vercel serverless runtime. But Vercel only supports up to nodejs22.x, so the
// function crashes silently. This script overwrites the runtime to nodejs22.x.
import { readFileSync, writeFileSync, existsSync } from "fs";

const vcConfigPath =
  ".vercel/output/functions/__server.func/.vc-config.json";

if (!existsSync(vcConfigPath)) {
  console.log("[patch-runtime] .vc-config.json not found — skipping.");
  process.exit(0);
}

const config = JSON.parse(readFileSync(vcConfigPath, "utf8"));
const original = config.runtime;
config.runtime = "nodejs22.x";
writeFileSync(vcConfigPath, JSON.stringify(config, null, 2) + "\n");
console.log(
  `[patch-runtime] Patched runtime: ${original} → nodejs22.x`
);
