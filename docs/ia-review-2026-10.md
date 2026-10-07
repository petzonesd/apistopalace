# ApistoPalace site structure review (October 2026)

Prepared with the Intent `/organize` skill. Based on the 34 pages a local build generates, not on traffic data. Visual site map: [ia-sitemap.html](ia-sitemap.html).

**Status (7 October 2026):** sections 2–6 and 8 are implemented on branch `seo/ia-overhaul`. Two corrections to the original audit: guide, article, comparison and group pages already had breadcrumbs, and Steindachneri's related links weren't duplicated (each card links twice, once on the photo and once on the title). Single-species groups got an anchored list on `/groups/` instead of their own pages, to avoid thin content.

## Summary

The foundation is strong. Species pages carry breadcrumbs, structured data (`Article` and `BreadcrumbList` schema), an in-page table of contents, and a "Check availability" link to Pet Zone SD. The weak spots are how pages connect to each other and the wording of hub page titles:

1. **Four hub pages have slogan titles.** `/care/` is titled "Build the habitat. Then choose the fish." Google uses the title as the main ranking and click signal, and none of the slogans contain "Apistogramma."
2. **Comparisons and articles are near-orphans.** Each comparison gets 1 internal link (from `/comparisons/` only). Each article gets 2. These are the pages most likely to rank for "X vs Y" and beginner searches.
3. **Species pages are dead ends for the guides.** No species page links to Care, Breeding, Habitats, Identify, or the comparisons it appears in.
4. **Groups are half-built in the menu.** The directory filter offers 9 groups but only 2 have pages, and "Groups" isn't in the main menu.
5. **82 of the 94 registered species names are invisible.** People search those names, and the site has no page that answers.

## 1. Link audit (internal links pointing to each page)

| Page | Inbound links | Note |
|---|---|---|
| Menu pages (Species, Finder, Care…) | 33 | Every page links to them through the menu |
| `/groups/` | 11 | Not in the menu |
| `/species/cacatuoides/` | 10 | Best-connected species |
| `/species/steindachneri/` | **1** | Reachable only from the directory |
| `/species/trifasciata/`, `bitaeniata`, `elizabethae`, `hongsloi` | 3 | |
| `/articles/*` (both) | **2** | Article index and home page only |
| `/comparisons/*` (all three) | **1** | Comparison index only |

Search engines read the number of internal links as a signal of how important a page is. Right now the site tells Google that its comparison pages are its least important content.

## 2. Proposed main menu

Current menu (8 items, all at the same level): Species · Finder · Care · Breeding · Habitats · Identify · Comparisons · Articles

Proposed menu (6 items, grouped by what visitors want to do):

| Label | Contains | Why |
|---|---|---|
| **Species** | Directory, plus Groups as a secondary link | Groups is a way to browse species, not a separate topic |
| **Find your Apisto** | Finder | Says what the tool does. "Finder" alone doesn't. |
| **Keeping guides** ▾ | Care · Breeding · Identification · Habitats | The four how-to guides belong together. This shortens the menu from 8 items to 6. |
| **Compare** | Comparison table and the curated comparisons | |
| **Field notes** | Articles | The article index is already titled "Field notes"; the menu should match it |
| **Shop at Pet Zone ↗** | Link to petzonesd.com/apistogrammas | Gives every page a path to buying, not just species pages |

The menu shouldn't be organized around where content happens to live in the code. It should be organized around the three things visitors come to do: choose a fish, learn to keep it, and buy it.

## 3. Page titles and headings (biggest SEO win)

Keep the editorial voice in the opening paragraph, but put the search words in the title and the H1.

| Page | Current title | Proposed title |
|---|---|---|
| `/care/` | Build the habitat. Then choose the fish. | Apistogramma care guide: water, tank size & setup |
| `/breeding/` | A spawning cave is only the beginning. | How to breed Apistogramma: pairs, caves & fry |
| `/habitats/` | Follow the water beyond the Amazon. | Apistogramma habitats: Amazon, Rio Negro, Orinoco & south |
| `/identify/` | Read the markings, not just the color. | How to identify Apistogramma species |
| `/finder/` | Find your Apisto | Apistogramma finder: match a species to your tank |
| `/articles/` | Field notes from ApistoPalace | Apistogramma field notes & articles |
| `/comparisons/borellii-vs-cacatuoides/` | Borellii or cacatuoides for your first Apisto? | Apistogramma borellii vs cacatuoides: which first? |
| `/comparisons/cacatuoides-vs-agassizii/` | Cacatuoides or agassizii? | Apistogramma cacatuoides vs agassizii compared |
| `/comparisons/panduro-vs-nijsseni/` | Panduro and nijsseni: look beyond the panda name | Apistogramma panduro vs nijsseni (panda dwarf cichlids) |
| `/species/cacatuoides/` (pattern for all 12) | Apistogramma cacatuoides care & field notes | Apistogramma cacatuoides (cockatoo dwarf cichlid) care guide |

The species title change matters because many buyers search the common name ("cockatoo cichlid", "panda apisto"), not the Latin one. Common names are already in the data; they just aren't in the titles.

## 4. Internal linking rules

These should be generated automatically from the data, not added by hand:

1. **Species → comparisons.** Every species page lists the comparisons it appears in. This takes each comparison from 1 inbound link to 3.
2. **Species → guides.** Each "Aquarium care" section links to `/care/`, "Breeding" to `/breeding/`, "Natural habitat" to its basin's section of `/habitats/` (anchor link), and "Identification" to `/identify/`.
3. **Guides → species.** Replace the external-only "Further reading" lists with 3–4 internal species examples first, then the outside sources.
4. **Articles in context.** Link "Before your first Apisto" from `/care/`, the Finder, and every species marked Beginner. Link "Blackwater is more than color" from `/habitats/` and soft-water species.
5. **Two-way related species.** A species page also lists every profile that names it as similar. That brings Steindachneri from 1 inbound link to 6.

## 5. Taxonomy and groups

- **Groups facet.** The directory filter lists 9 groups, but only `macmasteri` and `nijsseni` have pages. Either build lightweight pages for the other 7 (each with 1–2 species is fine for now), or mark filter options that have no page. Don't let it look like 9 equal destinations.
- **Full registry page.** Publish a single `/species/all-names/` page listing all 94 FishBase names. Each of the 12 profiled species links to its profile; the rest show "Profile coming." That gives you one indexable page that matches long-tail searches without creating 82 thin pages, which Google penalizes.
- **Next profiles.** Choose the next profiles by (a) what Pet Zone stocks or can source and (b) what Search Console shows people already searching for. Overlap between the two pays twice.

## 6. Search and browse

- The directory supports both search and browse (text search plus experience and group filters). The search box placeholder's example names (cacatuoides, Opal, Inka) suggest searching by common name already works. Keep that.
- **No-results state.** "No profiles match those filters." should offer a way out: clear filters, try the Finder, or see the full name registry (for searches like "A. hippolytae" that have no profile yet).
- **Finder is `noindex` on purpose** (it's an interactive tool). That's correct, so its SEO value has to come from the pages it links to. Make its results link to species pages *and* "Check availability at Pet Zone."

## 7. Wayfinding

- Species pages handle wayfinding well (breadcrumb, current-page marker in the menu, table of contents).
- Guide, comparison, article, and group pages already have breadcrumbs and `BreadcrumbList` schema. Their labels now match the new menu (Compare, Field notes, Identification), and group pages sit under Species.

## 8. Pet Zone connection

- The availability link appears on every species page. Cacatuoides links straight to 2 product listings; most others link only to the general Apistogramma category. Link directly to the product listing whenever one exists.
- Add one consistent "Shop" destination to the menu and footer (see section 2).
- Footer note "An independent field guide in the PetZoneSD network" is good for trust. Consider linking "PetZoneSD" to the store's location/contact page for local SEO.

## 9. Test plan (lightweight, cheap)

| Method | How | Good result |
|---|---|---|
| Search Console queries | After 4–6 weeks live, export queries by page | Top queries map to page titles; queries with no matching page become the next profiles |
| First-click test | Ask 8–10 store customers: "Where would you go to learn about breeding?" / "…to check if Pet Zone has this fish?" | 80%+ click the right menu item first |
| Internal-link check | Re-run the link audit after changes | No content page has fewer than 3 inbound links |

## 10. Open questions

1. **Is the live site built with `SITE_ENV=production`?** The default build blocks all search engines (`robots.txt: Disallow: /` plus noindex). If the live site was deployed from a default build, none of this SEO work counts until that's fixed. This is the first thing to check.
2. Should the menu link out to petzonesd.com, or should the site stay visibly "independent"?
3. Which species does Pet Zone reliably stock? That list should decide the next profiles and comparisons.
4. Is there Search Console data yet? (The verification file is in place.)

## Recommended order

1. Confirm the production build and robots settings (question 1).
2. Rewrite titles and H1s (section 3). Small change, biggest SEO effect.
3. Add the automatic internal-linking rules (section 4).
4. Restructure the menu (section 2) and add breadcrumbs everywhere (section 7).
5. Add the full name registry page and fill in the groups (section 5).
