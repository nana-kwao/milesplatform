import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://miles-ck5d.onrender.com/",
  server: {
    proxy: {
      "/api": {
        target: "https://milesplatform.onrender.com:10000",
        changeOrigin: true,
      },
    },
  },
});
