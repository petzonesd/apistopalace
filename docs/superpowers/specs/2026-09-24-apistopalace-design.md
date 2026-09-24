# ApistoPalace v1 design

Approved brief: informational authority for the full Apistogramma genus, independent of Apistogrammarama. Hero: “Explore the Kingdom of Apistogramma.” Amazon expedition and field-guide identity: ink-green surfaces, ivory editorial typography, brass rules, real specimen photography, understated coordinate/grid motifs. No invented locations or literal castles.

## Experience
Homepage introduces the genus and leads directly to Species and Finder. Persistent navigation covers Species, Finder, Care, Breeding, Habitats, Identify, Comparisons, Articles. Responsive navigation remains keyboard usable. Twelve substantial profiles launch: cacatuoides, agassizii, borellii, macmasteri, hongsloi, panduro, nijsseni, baenschi, trifasciata, bitaeniata, steindachneri, elizabethae. Species directory supports search and difficulty/group filters. Species pages contain distinguishing traits, range/habitat, husbandry, breeding, compatibility, provenance, references and related species.

Finder uses volume AND footprint, pH/GH/temperature, experience, community intent, breeding goals and visual preference. Hard constraints exclude unsuitable matches rather than allowing color to outweigh welfare. Results explain matches, limitations and why no match may exist. Values represent editorial aquarium planning targets, not universal biological limits or breeding recipes. User entries stay in the browser.

Comparison tool uses the same data and supports any two published species. Three curated pairs get substantial static indexable pages; arbitrary selections do not create indexable URLs. Informal group hubs explain the limits of group classifications. Taxonomy registry supports the full genus independently of publication, using a dated FishBase seed; no claim of perpetual completeness. Undescribed forms and trade names remain distinct from accepted taxa.

## Implementation
Dependency-free Node 22+ static generator with semantic HTML, CSS and progressive browser ES modules. Output is portable static HTML under dist; all reading routes work without JavaScript. No server/database, credentials, analytics or checkout needed for v1. Shared schema validates publishable records. Original editorial copy distinguishes source-backed species facts from practical planning advice. Three licensed factual photos carry attribution.

Indexing derives from a route manifest and a completeness gate. Draft taxa generate neither routes nor sitemap entries. Canonicals use https://apistopalace.com with trailing slashes; Article, WebSite, CollectionPage and BreadcrumbList JSON-LD describe real content. Finder is noindex; comparison query states canonicalize to their hub. Preview builds default to noindex and robots disallow. Production metadata requires explicit SITE_ENV=production build; this does not deploy anything.

## Delivery constraints
Only petzonesd/apistopalace is writable remotely. Work on codex/apistopalace-v1. Prepare draft PR and deployment instructions; no hosting publication, merge, DNS or domain change. Availability is a disclosed network link with “check availability,” never a live stock claim. No thin indexable pages.

## Acceptance
Node unit tests exercise validation, publication and Finder exclusions/ranking. Build checks audit internal links, metadata, structured data, sitemap and draft exclusion. Browser checks cover directory, Finder, comparisons, keyboard/mobile navigation and layout. Fresh independent review before PR. No automatic deployment workflow.
