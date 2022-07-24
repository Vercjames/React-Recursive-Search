import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://vitejs.dev/config/  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default defineConfig(({ command, mode }: any) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [
      react(),
    ],
    build: {
      outDir: "build"
    },
    resolve: {
      alias: {
        "@": "./client-apps",
        "@src": "./client-apps",
        "@comps":  "./client-apps/comps",
        "@globals": "/client-apps/globals",
        "@modules": "./client-modules",
        "@assets": "./client-assets",
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
