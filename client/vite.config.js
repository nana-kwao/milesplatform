import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target: "https://milesplatform.onrender.com:10000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
