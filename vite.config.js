import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    exclude: ["**/e2e/**", "node_modules", "dist", "e2e"],
    setupFiles: "./src/test/setup.js",
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
