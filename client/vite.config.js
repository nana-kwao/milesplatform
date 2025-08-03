import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/milesplatform",
  server: {
    proxy: {
      "/api": {
        target: "https://milesplatform.onrender.com:10000",
        changeOrigin: true,
      },
    },
  },
});
