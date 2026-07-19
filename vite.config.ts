import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),

    // PWA with offline support
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["Logo.png"],
      manifest: {
        name: "A Child's Perspective - Child Life Support",
        short_name: "A Child's Perspective",
        description:
          "Boutique child life support for children, teens, siblings, and caregivers navigating medical experiences.",
        theme_color: "#4A1E3A",
        background_color: "#FBF6EE",
        display: "standalone",
        icons: [
          {
            src: "/Logo.png",
            sizes: "1254x1254",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/Logo.png",
            sizes: "1254x1254",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // Cache Google Fonts
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Cache images
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          // Cache pages with network-first strategy
          {
            urlPattern: /^https:\/\/localhost:\d+\//i,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },
        ],
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg}"],
        // Increase file size limit for large images
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
