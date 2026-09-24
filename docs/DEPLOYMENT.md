# Deployment preparation — approval required

Status: build and PR preparation only. No website publication, hosting account provisioning, merge, DNS edit or custom-domain activation is authorized by this document. The user owns apistopalace.com.

## Release shape

The site is portable static output. Node 22+ generates `dist/`; a production host serves that directory at the domain root. There is no server application, database, secret, checkout or live-stock integration. No provider has been selected or provisioned. Host selection and publication must follow explicit user confirmation.

## Review before deployment

1. Review the draft PR, especially the 12 launch profiles and the editorial water-target methodology. This is source-checked editorial material, not an independent ichthyologist review.
2. Run `npm test`. Tests build production metadata for assertions, then restore a preview build. Run the intended release build AFTER tests.
3. For local review, run `npm run build` and `npm run preview`. Preview files carry noindex/nofollow and robots Disallow. Robots controls are not access control; no public preview is created by this project.
4. If an externally hosted preview is later authorized, use the preview build and provider-level access control where available. Do not connect the owned domain yet.
5. Get explicit confirmation before publishing any hosted version or changing DNS.

## After publication approval

1. Record the approved commit SHA and selected provider.
2. Build from that commit with `SITE_ENV=production npm run build`. No install is required.
3. Upload/serve `dist/` with directory-index routing and proper MIME types for `.mjs`, `.webp`, `.svg` and `.xml`.
4. Route `/missing-path/` to `404.html` with HTTP 404, not a blanket SPA rewrite to the home page. Do not use a successful 200 response for unknown paths.
5. Redirect `/species/cacatuoides` to `/species/cacatuoides/` with 301/308. Serve the final canonical root `https://apistopalace.com/`; redirect HTTP and any enabled www alias to that single origin.
6. Confirm the provider URL works before proposing exact DNS records. DNS values depend on the selected provider and must be obtained from it; none are invented here. Preserve all unrelated MX, TXT and other records.
7. Get explicit confirmation for the concrete DNS change. Then verify domain ownership, TLS and redirects before treating the custom domain as live.
8. Verify robots allows crawling, canonical URLs use the final domain, the sitemap returns XML, and utilities such as Finder remain noindex. Submit the sitemap only after the launch is authorized and verified.

## Smoke checks

- Home, each of the eight sections, one profile, one group and a curated comparison return 200.
- All 12 complete profiles exist; `/species/acrensis/` returns 404.
- `robots.txt` and `sitemap.xml` correspond to the release mode.
- Search “Opal” returns borellii; Reset restores all profiles.
- Default Finder example returns borellii and cacatuoides; shrimp-essential returns none with reasons.
- Duplicate comparison selections produce a clear message.
- Mobile menu, keyboard navigation and form labels work.
- External retail links say “check availability” and do not imply verified stock.

## Rollback

Retain the preceding verified static artifact and its commit SHA. Roll back at the selected hosting provider without rewriting repository history. If first launch is withdrawn, disable the new deployment at the provider; DNS rollback must use the recorded prior values and user authorization. Do not edit the Apistogrammarama repository or its hosting as part of rollback.

## Related-retailer link verification

PetZoneSD’s Apistogrammas category was verified during the build and is the active availability destination. Apistogrammarama’s repository CNAME identifies apistogrammarama.com, but that hostname did not resolve in the build environment. Its live link is held until DNS resolution can be verified; its repository and DNS were not changed.
