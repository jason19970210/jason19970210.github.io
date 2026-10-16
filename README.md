# jason19970210.github.io

Personal site of Jason (Yi-Cheih) Hsu, built with [Astro](https://astro.build) as a static site with no client-side JavaScript. Deployed to https://jason19970210.github.io (root path) by GitHub Pages.

## Local development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # static output in dist/
npm run preview   # serve dist/ at http://localhost:4321
```

## Structure

- `src/data/site.ts`: site copy, experience, projects, publications.
- `src/content/posts/*.md`: blog posts (content collection). Frontmatter: `title`, `date`, `category`, `slug`, `tags`.
  A post is served at `/YYYY/MM/DD/<category>/<slug>/`, the same URLs as the old Hexo blog.
- `src/pages/`: pages, RSS feed (`/rss.xml`), and the post route.
- `public/`: favicon, Open Graph image, and the CV PDF (`/Yi-Cheih_Hsu_CV.pdf`).

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes with `actions/deploy-pages` on push to `main`. In the repository settings, set Pages source to "GitHub Actions". The previous Hexo build is preserved on the `hexo-archive` branch.
