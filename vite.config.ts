import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Ensure Nitro builds with the 'vercel' preset for proper Vercel SSR/static output
process.env.NITRO_PRESET = process.env.NITRO_PRESET || "vercel";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    vercel: {
      functions: {
        nodeVersion: "22.x"
      }
    }
  }
});
