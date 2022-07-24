import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const path = require("path")


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
        "@": path.resolve(__dirname, "./client-apps"),
        "@src": path.resolve(__dirname, "./client-apps"),
        "@comps": path.resolve(__dirname, "./client-apps/comps"),
        "@helpers": path.resolve(__dirname, "./client-apps/helpers"),
        "@globals": path.resolve(__dirname, "./client-apps/globals"),
        "@assets": path.resolve(__dirname, "./client-assets"),
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
