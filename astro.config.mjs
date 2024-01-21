import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://incandescent-nasturtium-e951cd.netlify.app",
  integrations: [preact()]
});