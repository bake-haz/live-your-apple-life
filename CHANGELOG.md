# Change Log

## Everyday Phone Help — Release 1 Foundation

Date: 2026-09-20

### Scope

Foundation audit and narrowly scoped structural/trust improvements. Existing Guide URLs, slugs, titles, descriptions, and core Guide bodies were preserved. This release is not deployed.

### Files changed

- `about.html` — added a concise, truthful explanation of how guides are checked and how readers can report outdated steps. Visible trust content changed; no URL or metadata changed.
- `sitemap.xml` — removed the two existing Intent pages marked `noindex` (`apple-ecosystem.html` and `make-my-iphone-look-better.html`) so the sitemap contains indexable production URLs only. Indexing behavior changed; no public URL was deleted or redirected.
- `CHANGELOG.md` — recorded this Release 1 foundation work.

### Validation notes

- 44 Guide pages and 8 Intent pages remain in the repository.
- Internal links resolve to existing local HTML targets.
- Canonical URLs remain on `https://www.everydayphonehelp.com/`.
- Robots policy remains crawlable and unchanged.
- No deployment, DNS change, Search Console change, or external sitemap submission was performed.
