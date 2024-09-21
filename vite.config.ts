import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/react-store-products": {
        target: "https://course-api.com/react-store-products",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/react-store-products/, ""),
      },
    },
  },
});
