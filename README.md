# rcoloma.dev

Personal portfolio of Rodrigo Coloma Gutiérrez, built with Next.js (App Router) and Tailwind.

The page is a dark, interactive BI-style report: profile card, KPI tiles, a career
timeline, the stack as one pipeline, a sortable project table, a skills radar and one
deliberately silly donut chart. A domain slicer and click-to-cross-filter visuals
(timeline bars, stack layers) filter the report; every chart has a table view and a
focus mode.

## Editing content

- `lib/site.ts` — profile, KPIs, skills radar, career timeline, stack layers, principles, the joke.
- `lib/projects.ts` — projects, each with a `domain`, the stack `layers` it touches and a headline `metric`; optional `problem` / `solution` / `impact` / `stack` / `links` render as the expandable case study.
- `components/dash/` — one component per visual; `filters.tsx` holds the shared slicer state and the domain → colour mapping.

Colours live in `app/globals.css`. The categorical slots `--s1`…`--s5` were validated as a set
on the dark card surface (lightness band, chroma, colour-blind separation, contrast); keep their order.

## Development

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm start        # serves on port 4000
```
