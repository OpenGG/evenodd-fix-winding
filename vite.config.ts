import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const server = {
  proxy: {
    // string shorthand
    "/api": "http://localhost:3080"
  }
};

if (process.cwd() === "/sandbox") {
  Object.assign(server, {
    hmr: {
      port: 443
    }
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  server,
  plugins: [vue()]
});
