import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
    },
    build: {
      outDir: "2030-web",
    },
    base: "/2030-web/",
  };
});
