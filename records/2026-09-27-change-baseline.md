# 2026-09-27 change baseline — everydayphonehelp.com

Immutable dated baseline created before the iCloud Photos safety-check change.

## Repository and production evidence

- Repository: `bake-haz/live-your-apple-life`
- Production branch: `main`
- Baseline commit: `ca23251b295ab696a6798806f708510253f7e735`
- Domain evidence: `CNAME` contains `www.everydayphonehelp.com`; canonical URLs in the source use the same domain.
- Production URL: `https://www.everydayphonehelp.com/guides/is-icloud-photos-a-backup.html`
- Deployment configuration: GitHub Pages (`CNAME`, `.nojekyll`); no build tool is declared in the repository.

## GSC availability and locked forecast

The local GSC bridge was checked on 2026-09-27. Its `.env.local` has no `GSC_BRIDGE_API_KEY` or `GOOGLE_REFRESH_TOKEN`, so it cannot list properties or report the latest available GSC date. The actual GSC cutoff is therefore **unavailable**, not assumed.

No impression or click history was accessible, so a numeric 7/14/28-day forecast would be fabricated. The locked two-scenario forecast is intentionally marked **not computable**:

| Window | No-update impressions/clicks | Update impressions/clicks |
| --- | --- | --- |
| 7 days | Not computable — no GSC access | Not computable — no GSC access |
| 14 days | Not computable — no GSC access | Not computable — no GSC access |
| 28 days | Not computable — no GSC access | Not computable — no GSC access |

Do not interpret a later difference from the no-update column as causal impact. Follow-up validation date: 2026-10-25, after GSC access and complete daily data are available.
