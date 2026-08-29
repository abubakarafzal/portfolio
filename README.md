# Abu Bakar Afzal — SDET Portfolio

Personal portfolio for **Abu Bakar Afzal**, Software Development Engineer in Test.

**Live:** https://abubakarafzal.github.io/portfolio/

---

## Stack

| | |
|---|---|
| Framework | React 16 + Create React App 5 |
| Styling | Plain CSS with custom-property design tokens |
| Animation | CSS transitions/keyframes + `IntersectionObserver` |
| Deploy | GitHub Actions → `gh-pages` branch → GitHub Pages |

There is deliberately **no animation library, no CSS framework, and no UI kit**.
The runtime dependencies are React, React DOM, `react-scripts`, and `gh-pages`
— nothing else. Every interaction is CSS plus a few small hooks.

---

## Editing the content

**All copy and data live in one file: [`src/content/site.js`](src/content/site.js).**

Nothing on the site is hard-coded into a component. To change a job, a project,
a tool, or a headline, edit that file — the components read from it.

Placeholders marked `[ADD ...]` are facts that were not available when the site
was built. **Replace them; do not delete them.** They exist so the site never
states something unverified.

Currently outstanding:

- `experience[0]` — **Expleo** start date (`[ADD DATES]`), responsibilities, stack.
- `experience[1]` — **AWS** end date (`[ADD END DATE]`).
- `work[*]` — `challenge` / `solution` / `result` for each project.

> **Note on the experience list.** The previous version of this portfolio listed
> Amazon Web Services as the current role ("Jun 2025 – Present"). Expleo is now
> listed first as the current role. The AWS end date is a placeholder rather than
> an invented date — please set both.

---

## Design tokens

[`src/styles/tokens.css`](src/styles/tokens.css) is the single control surface
for the look of the site: colours, the fluid type scale, spacing, radii,
container widths, animation durations, and easing curves. Retune the site from
there rather than editing individual components.

---

## Project layout

```
src/
  content/site.js      all copy and data — the source of truth
  content/assets.js    resolves logo filenames to bundled URLs
  styles/tokens.css    design tokens
  styles/base.css      reset, typography primitives, shared utilities
  hooks/               reveal, scroll state, active section, pointer type
  ui/                  reusable primitives (Reveal, ArrowLink, Marquee, …)
  sections/            one component + one stylesheet per page section
  assets/logos/        only the logos the site actually renders
```

`src/assets/logos/` is bundled wholesale by `require.context`, so keep it to
images the site uses. Unused imagery lives in `src/assets/images/` and is not
shipped.

---

## Commands

```bash
npm ci            # install exactly what the lockfile pins
npm start         # dev server on :3000
npm run build     # production build into ./build
npm run format    # prettier write
npm run check-format
```

---

## Deployment

`.github/workflows/deploy.yml` runs on every push to `master`: `npm ci`,
`npm run build`, then publishes `build/` to the `gh-pages` branch, which
GitHub Pages serves.

The build is a plain CRA build — no API calls, no tokens, no network access at
build time. The `homepage` field in `package.json` sets the `/portfolio/` base
path; **if the repository is ever renamed, update `homepage` or every asset URL
will 404.**

`npm run deploy` publishes manually from a local machine to the same branch.

---

## Accessibility & motion

- Semantic landmarks, one `h1`, every section labelled, skip link.
- Full keyboard support; the mobile menu traps focus, restores it, and closes on `Escape`.
- All text meets WCAG AA contrast against the background.
- `prefers-reduced-motion` disables the reveal system, marquee, and custom cursor,
  and renders the page fully painted.
- Without JavaScript the page shows a fallback message with a contact address.
