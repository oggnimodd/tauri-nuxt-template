import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxt/icon", "shadcn-nuxt", "@pinia/nuxt"],
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  icon: {
    collections: ["lucide"],
    mode: "svg",
    cssLayer: "base",
  },
  pages: {
    pattern: [
      "**/*.vue",
      "!**/components/**",
      "!**/stores/**",
      "!**/composables/**",
    ],
  },
  components: [
    "~/components",
    {
      path: "~/pages",
      pattern: "**/components/**",
      pathPrefix: false,
    },
  ],
  pinia: {
    storesDirs: ["./app/stores/**", "./app/pages/**/stores/**"],
  },
  css: ["~/assets/main.css"],
  // Enable SSG
  ssr: false,
  // Enables the development server to be discoverable by other devices when running on iOS physical devices
  devServer: {
    host: "0",
    port: 1420,
  },
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
    },
  },
  // Avoids error [unhandledRejection] EMFILE: too many open files, watch
  ignore: ["**/src-tauri/**"],
  nitro: {
    preset: "static",
  },
});
