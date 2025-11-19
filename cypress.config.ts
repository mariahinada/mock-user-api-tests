import { defineConfig } from "cypress";

const PORT = 3001;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
  },
});
