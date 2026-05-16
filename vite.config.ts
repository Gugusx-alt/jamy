import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Actions define `VITE_BASE_URL` como `/<nome-do-repo>/` para Pages em projeto. */
const base = process.env.VITE_BASE_URL ?? "/";

export default defineConfig({
  plugins: [react()],
  base,
});
