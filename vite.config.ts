import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts", "dotenv/config"],
    testTimeout: 35000,
  },
  worker: {
    plugins: [react()],
  },
});
