# Side-B — React landing page

Responsive React implementation of Figma file `6zYMrU4qkuw7wq1WESe7FA`, node `5:3`. Built with Vite and plain CSS.

## Development

Run `npm install`, then `npm run dev` and open http://127.0.0.1:5173.

Run `npm run build` for production output in `dist/`. Run `npm run preview` to serve the production build.

## Source

- `src/App.jsx`: page sections, reusable components, and native dialogs controlled by React state.
- `src/styles.css`: Figma typography, colors, desktop geometry, and responsive layouts.
- `src/config.js`: official product link configuration.

## Privacy page and image assets

The header and footer Privacy links open `/privacy`, implemented in `src/PrivacyPage.jsx` from Figma node `15:68`. The page preserves all 14 policy sections, the summary, and the design’s `[INSERT DATE]` placeholder. Set the approved policy date before launch. Configure production hosting with an SPA fallback to `index.html` so direct visits to `/privacy` work.

Original supplied images are copied unchanged into `public/assets/`:

- `side-b-collection-phone.png`: landing hero, rendered at 298 × 610.
- `side-b-screenshot-detail-phone.png`: landing feature, rendered at 274 × 560.
- `side-b-splash-phone.png`: saved for future use; no corresponding image slot exists in these Figma screens.

Set official app, terms, and support URLs in `src/config.js`. Until supplied, those buttons show informational dialogs.

Bricolage Grotesque and Inter load through Google Fonts, with Arial fallbacks. Production build and image integrity checks pass. Browser visual verification was blocked by unavailable browser access and a Safari timeout.
