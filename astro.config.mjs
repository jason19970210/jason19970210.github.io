import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jason19970210.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: { '/about/': '/#about' },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
