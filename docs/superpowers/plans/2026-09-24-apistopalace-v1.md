# ApistoPalace Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Build and verify the approved ApistoPalace field guide and prepare a draft PR without publication.
**Architecture:** Static generated editorial pages share species records with browser tools. A publication gate controls routes and indexing; hosting remains a separate manual action.
**Tech Stack:** Node 22+, native ES modules, semantic HTML, CSS, node:test.
**Spec:** docs/superpowers/specs/2026-09-24-apistopalace-design.md

## Global Constraints
- Only petzonesd/apistopalace is writable remotely.
- Work on codex/apistopalace-v1.
- No hosting publication, merge, DNS or domain change.
- No thin indexable pages.
- Preview builds default to noindex and robots disallow.

## Review Focus
- Small/tall tanks: volume must not conceal insufficient floor space.
- Invalid numeric values: blank, NaN and impossible inputs must not produce matches.
- Incompatible water: preference points never override pH/GH/temperature exclusions.
- Duplicate comparison selections: show a useful error rather than comparing a fish with itself.
- Draft or incomplete records: no route, sitemap entry or directory link is generated.

### Task 1: Species foundation and Finder engine
**Files:** src/data/species.mjs, src/data/taxonomy.mjs, src/lib/species.mjs, src/lib/finder.mjs, tests/domain.test.mjs, package.json.
**Interfaces:** exports species array; isPublishable(record) boolean; findMatches(input, records) returns {matches, excluded, errors}. Match contains species, reasons, cautions, score.
- [x] Write behavior tests using hand-picked fixtures: small tank gives zero matches; bad number produces errors; incompatible water excludes; beginner cannot match specialist; draft never publishes.
- [x] Run `node --test tests/domain.test.mjs`; expect failing assertions against initial empty function implementations.
- [x] Implement gate with required prose/source fields and validated ranges. Implement constraints before preference ranking. Seed 94 dated taxonomy names separately from 12 complete editorial profiles.
- [x] Run `node --test tests/domain.test.mjs`; expect all tests passing. Commit foundation.

### Task 2: Complete editorial site and interactive tools
**Files:** scripts/build.mjs, src/pages/*.mjs, src/data/editorial.mjs, public/styles.css, public/app.mjs, public/assets/*, tests/build.test.mjs.
**Interfaces:** build exports a route manifest at dist/routes.json; static HTML at directory/index.html; app consumes serialized public species data from /data/species.json and shared Finder module.
- [x] Write output tests: all eight core routes exist, drafts absent, internal links resolve, canonical/breadcrumb JSON parses, production sitemap excludes utilities, default preview disallows crawlers.
- [x] Run `node --test tests/build.test.mjs`; expect route/build output assertions to fail before generator implementation.
- [x] Implement layout, homepage, directory, species profile, group hubs, Finder form, comparison form and curated articles. Integrate verified photographic assets with credits. Use native labeled inputs and an explicit submit action; empty states always explain next steps.
- [x] Build with `node scripts/build.mjs` and run `node --test`; expect passing tests. Inspect desktop/mobile browser and exercise controls.
- [x] Commit the complete site.

### Task 3: Delivery validation, independent review and PR
**Files:** README.md, docs/DEPLOYMENT.md, docs/CONTENT.md, docs/VALIDATION.md, .github/workflows/check.yml.
**Interfaces:** `npm run build`, `npm test`, `npm run preview`; manually gated production build, no deploy job.
- [x] Document local preview, production build, host root/404 requirements, domain plan, rollback and explicit publication confirmation.
- [x] Add read-only CI tests/build. Verify all pages, assets, internal links, metadata and noindex behavior using `node --test`.
- [x] Request one independent whole-branch review while checking browser accessibility and launch documents locally; fix important findings with regression tests.
- [x] Commit, push only the feature branch and open a draft PR. Verify PR head matches local committed state. Report site/PR and outstanding approval for publication.

## Execution record
Approved strategy and direct user instruction authorize execution continuously; no repeat design approval needed. Native implementation preserves the already approved shared-data architecture. Node static output is chosen for portability and minimal maintenance.
