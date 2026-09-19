# rcoloma.dev

Personal portfolio of Rodrigo Coloma Gutiérrez, built with Next.js (App Router) and Tailwind.

The page is framed as a Markdown document open in an editor: the left pane is the
source with line numbers, the right pane is the rendered preview. Both are generated
from the same data, so editing content in one place updates both views.

## Editing content

- `lib/site.ts` — profile, "how I work" principles, experience, stack, education, contact.
- `lib/projects.ts` — project list; optional `problem` / `solution` / `impact` / `stack` / `links` fields render as an expandable case study.
- `lib/source.ts` — turns the data above into the Markdown shown in the source pane.

Design tokens (palette, fonts) live in `tailwind.config.ts` and `app/globals.css`.

## Development

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm start        # serves on port 4000
```
