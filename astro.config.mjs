import { defineConfig } from 'astro/config';

// Published to GitHub Pages at https://ak-mdn.github.io/DRSWC/
// The repo name IS the base path — if the repo is ever renamed, change both.
export default defineConfig({
  output: 'static',
  site: 'https://ak-mdn.github.io',
  base: '/DRSWC',
});
