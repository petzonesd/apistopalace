# V1 validation and review

## Automated checks

`node --test tests/*.test.mjs` / `npm test`: 15 passing tests after the independent review fix.

- Source-backed content gate; required prose and all downstream consumer fields.
- Rejection of incomplete records, impossible ranges and non-finite measurements.
- Compatible Finder result with explanations.
- Independent volume and footprint exclusions.
- pH, GH and temperature exclusions before aesthetic ranking.
- Invalid/blank numeric input handling.
- Experience, community and draft exclusions.
- Breeding preference ranking and cautions.
- All eight sections and twelve substantive species routes.
- Registry-only taxon exclusion from output and sitemap.
- All generated internal navigation and asset references resolve.
- Canonical URL, single H1 and parseable JSON-LD on all pages.
- Production sitemap excludes utilities; preview build defaults to noindex and robots disallow.

The initial domain tests were run against unimplemented behavior and failed before implementation. The build assertions failed before the generator was written. The review regression failed with the old completeness gate and passed after the fix.

## Browser verification

Local in-app browser, desktop 1280 × 800 and mobile 390 × 844:

- Homepage typography, photograph and navigation visually inspected; card image proportions corrected after inspection. All three visible card photos load.
- Keyboard entry reaches the Skip to content link first.
- Mobile menu expands and navigates to Finder.
- Finder fields have associated labels; mobile page has no horizontal overflow.
- Example input returns borellii and cacatuoides with explanations.
- Shrimp-essential input returns no suitable matches and exclusion reasons.
- Finder reset restores example values and initial result instructions.
- Directory “Opal” search returns one profile; nonsense search shows a useful empty state; Reset restores 12 profiles.
- Comparison rejects selecting the same species twice; changing to elizabethae updates the actual table values.
- Species page main image loads; comparison table scrolls within its container on mobile without overflowing the page.
- No browser warning/error logs were reported during these checks.

These are functional and visual smoke checks, not a formal WCAG audit or exhaustive cross-browser certification.

## Independent review

A separate reviewer inspected commits a7db0ab..46f0bcf read-only and ran the 14-test pre-fix suite in an isolated temporary copy. It found no Critical issues and one Important issue: the publication gate did not validate every field consumed by the Finder and templates.

Fixed with regression `incomplete consumer fields and impossible measurements never publish or enter Finder`: RED → GREEN, full suite 15/15. The gate now validates arrays, enums, booleans, finite dimensions and sensible numeric domains. No Minor findings were deferred. Duplicate comparison behavior was checked directly in the browser rather than adding an implementation-mirroring unit test.

Review scope and owner assessment:
- Scientific accuracy was not independently reviewed by an ichthyologist. Species sources were checked, editorial target ranges are labeled as synthesis, and this limitation is public on About. A specialist may revise targets or identification notes.
- Source claims and image licenses were outside code review. The owner/source-research pass checked species references and Commons author/license metadata; source links and photo adaptation credits ship with the site.
- Browser appearance/accessibility was outside code review and received the owner’s smoke checks listed above. A formal accessibility audit remains separate.
- Delivery docs and CI were unfinished at the review snapshot; the owner completed and inspected them afterward. CI has read-only permissions and no deployment steps.
- Hosting/domain behavior cannot be verified before an authorized deployment. Manual host smoke checks, 404 rules and canonical/DNS procedure are documented in DEPLOYMENT.md. No host or DNS changes were made.

## Boundaries

Apistogrammarama was read only to verify its configured domain; no changes were made to that repository, hosting or DNS. The configured hostname did not resolve during verification, so the active availability link uses the verified PetZoneSD category. No live inventory is implied. There is no runtime data collection, checkout or automatic deployment.
