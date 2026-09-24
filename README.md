# ApistoPalace

**Explore the Kingdom of Apistogramma.** An expedition-inspired field guide, independent of the Apistogrammarama repository.

V1 includes 12 substantial species profiles, a dated 94-name taxonomy registry, searchable directory, explained Finder, interactive comparison table, three curated comparisons, two group hubs and complete care/breeding/habitat/identification guides.

## Run locally

Requires Node.js 22 or later. There are no package dependencies to install.

```sh
npm test
npm run build
npm run preview
```

Open http://localhost:4321. `PORT=4322 npm run preview` chooses another local port. The preview binds only to 127.0.0.1. `npm run build` defaults to noindex metadata and a disallow-all robots file.

A future production build uses:

```sh
SITE_ENV=production npm run build
```

This only generates files. It never publishes, modifies DNS or connects the domain.

## Project map

- `src/data/species.mjs`: shared profile prose, sources, aquarium targets and Finder traits.
- `src/data/taxonomy.mjs`: dated genus registry, separate from publication.
- `src/data/editorial.mjs`: guides, articles, groups and comparisons.
- `src/lib/`: publication gate, Finder rules and HTML helpers.
- `src/pages/`: semantic static page templates.
- `public/`: responsive styling, progressive interactive tools and licensed photos.
- `scripts/build.mjs`: static generator, route manifest, sitemap and robots.
- `scripts/serve.mjs`: local preview with proper missing-page responses.
- `tests/`: domain behavior and generated-site checks.

See [design](docs/superpowers/specs/2026-09-24-apistopalace-design.md), [implementation plan](docs/superpowers/plans/2026-09-24-apistopalace-v1.md), [content policy](docs/CONTENT.md), [deployment instructions](docs/DEPLOYMENT.md) and [validation](docs/VALIDATION.md).

No host is provisioned and no domain is connected by this branch. The only CI workflow checks and builds; it has no deployment permissions or steps. Remote work is confined to `petzonesd/apistopalace`.

## Photography

Three Commons photographs are adapted as WebP images with responsive display crops. Attribution, sources, modifications and licenses are in `src/data/photos.json` and the public `/credits/` page. CC BY-SA adaptations retain their respective ShareAlike licenses. No rights to third-party source material are implied by this repository.
