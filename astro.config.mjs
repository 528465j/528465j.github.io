// @ts-check
import { defineConfig } from "astro/config";

// Username is hardcoded only here (per ARCHITECTURE.md section 2) and in the
// profile data. A later GitHub rename is a one-line change in src/config/site.ts
// plus this URL. GitHub redirects the old username, so this is non-breaking.
export default defineConfig({
  site: "https://528465j.github.io",
  base: "/",
});
