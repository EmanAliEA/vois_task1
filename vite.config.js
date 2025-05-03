import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import jsonServer from "vite-plugin-json-server";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
});
