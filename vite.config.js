import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
    allowedHosts: [
      "7bae5c6e-d37c-4253-9da3-97276f2bdcb3-00-3i9dfrk59nguy.pike.replit.dev",
    ],
  },
});
