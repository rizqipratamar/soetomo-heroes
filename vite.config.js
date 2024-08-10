import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "./src/public"),
      constants: path.resolve(__dirname, "./src/constants"),
      helpers: path.resolve(__dirname, "./src/helpers"),
    },
  },
});
