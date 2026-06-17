# Scottish Court of Session Papers — Modernisation Site

Public-facing explainer site for the Scottish Court of Session Papers
modernisation project at the University of Virginia School of Law
Library.

Built with [Astro Starlight](https://starlight.astro.build/). Deployed
to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site to dist/
npm run preview      # serve the built site locally
```

## Content

Site content lives in `src/content/docs/` as Markdown files. Pages are
organised into four sections:

- `collection/` — what the Session Papers are, why they matter, where
  they live
- `platform/` — what the project has built since 2018
- `future/` — the 2026 modernisation programme
- `about/` — team, funding, citation

Sidebar navigation is auto-generated from the directory structure
(see `astro.config.mjs`).

## Editing pages

Each page is a standalone Markdown file with a YAML front-matter
block:

```yaml
---
title: Page title
description: One-line description for navigation and previews.
---

Markdown content follows.
```

Pages may use `template: splash` in the front matter to use the
splash-page layout (currently only the home page does this).

## Adding a page

1. Create a new `.md` file in the appropriate section directory under
   `src/content/docs/`
2. Add the YAML front matter
3. Write the content
4. The sidebar updates automatically on next build

## Deployment

Pushing to `main` triggers a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the site and deploys to
GitHub Pages.

The site URL is configured in `astro.config.mjs` as
`https://uvalawlibrary.github.io/scos-modernization-site`.

## Project context

For the internal planning documentation, design specifications, and
technical handoffs that underlie the work this site describes, see
the private companion repository
[`acquia-law-modernization-docs`](https://github.com/uvalawlibrary/acquia-law-modernization-docs).

For the project itself, see [scos.law.virginia.edu](https://scos.law.virginia.edu/).
