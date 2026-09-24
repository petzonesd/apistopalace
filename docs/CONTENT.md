# Content and data contract

## What is in v1

Twelve published profiles: cacatuoides, agassizii, borellii, macmasteri, hongsloi, panduro, nijsseni, baenschi, trifasciata, bitaeniata, steindachneri and elizabethae. Each contains more than 300 words of source-checked species information and original practical planning advice, with eight substantive sections and references.

The taxonomy registry is a 94-name FishBase snapshot checked on 2026-09-24. It is not an assertion of permanent taxonomic completeness or agreement between every authority. Add subsequent taxa through documented research; do not silently equate trade forms or undescribed fish with accepted names. Formal name validation should consult current taxonomic literature before new profiles launch.

## Field semantics

`id` is a stable epithet slug; `name` is the scientific name. `aliases` contains trade labels, not extra species. `group` is an informal navigation label. `similar` contains IDs of other published profiles. `status` controls publication. The name registry exists separately and never generates public pages by itself.

`size` is approximate adult male standard length in cm, excluding the tail. Profile source descriptions and FishBase figures can differ in sample and measurement context; avoid treating the number as a guaranteed maximum.

`ph`, `gh`, `temperature`, `tankLitres` and `footprint` are editorial aquarium planning targets. They deliberately favor a manageable starting setup, sometimes with larger space margins than source minimums. They are not a transplant of wild collection extremes, universal biological tolerances or guaranteed breeding parameters. Captive-bred and wild populations can differ. Confirm the actual fish's source and accustomed water. Source pages are linked, not copied wholesale.

`difficulty`, `community`, `colors` and `breedingDifficulty` are disclosed editorial Finder classifications. No score is a scientific probability. Hard constraints are applied first; aesthetic preferences cannot overrule a space/water/experience/community exclusion. The tool does not evaluate stocking count, filtration, exact tankmates, individual fish health or behavior.

## Publication checklist

1. Add a reviewed taxonomy record with a source; do not create a public placeholder.
2. Draft a species record with valid ranges, experience classification, origin information, references and substantial original sections.
3. Check identification, habitat, care, feeding, breeding, compatibility and provenance. Review claims against the referenced source and distinguish synthesis from sourced facts.
4. Add only licensed factual photos of the species; never substitute an unrelated fish or generated identification image. Preserve credit and license information.
5. Set `status: 'published'` only after editorial review. The build rejects any published record failing the shared completeness gate.
6. Add relevant internal links and curated comparisons only when they carry useful original decision guidance. Arbitrary pair combinations remain interactive states on the comparison hub.
7. Run tests and review rendered output before submitting a PR.

## Editorial limitations

The initial source check is not an independent specialist scientific review. Group membership and difficult trade identifications deserve continued specialist scrutiny. No conservation category is guessed, no species stock is claimed, and no automatic photo identification is provided. Availability is a clearly disclosed related-retailer link, not a feed.
