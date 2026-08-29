/**
 * Resolves logo filenames from `src/content/site.js` to hashed build URLs.
 *
 * `require.context` is a webpack feature (CRA bundles webpack) — it lets the
 * content file stay as plain data with filenames, instead of every entry
 * needing its own static import at the top of a component.
 *
 * A missing file resolves to `null` rather than throwing, so removing an image
 * from the repo degrades to the card's typographic fallback instead of a
 * broken build.
 *
 * Only logos referenced by the site live in `assets/logos` — the folder is
 * bundled wholesale, so keeping it tight keeps the payload down.
 */
const context = require.context(
  "../assets/logos",
  false,
  /\.(png|jpe?g|webp|svg)$/
);

const files = new Set(context.keys());

export default function logoUrl(filename) {
  if (!filename) return null;
  const key = `./${filename}`;
  if (!files.has(key)) return null;
  return context(key);
}
