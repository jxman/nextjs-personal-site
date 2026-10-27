# Google Analytics Optimizations

Tracking doc for GA4 improvements identified from a review of the `synepho.com` GA4 property (measurement ID `G-2HLT4VSZHW`) on 2026-09-05. Property: Synepho Sites > synepho.com, stream ID `3234304275`.

## Findings (from Sep 5 2026 review, last 28 days: Aug 8 - Sep 4)

- 226 sessions / 121 users, 57% engagement rate, ~1m21s avg engagement time.
- Top pages by views: "AWS Services Dashboard" (213) and "Cloud Status Hub" (196) far outpace Home (23 views).
- Traffic sources: Direct 79.2%, Referral 9.7%, Organic Social 7.1%, **Organic Search only 2.65%** (6 sessions).
- Devices: desktop-heavy (95 vs 26 mobile).
- Search Console is not linked to GA4 (Admin > Product links only shows AdMob).
- Only key event configured is the default `purchase` event, which never fires on this site.
- Enhanced Measurement is on and already capturing `file_download` and `click` (outbound) events, but neither is marked as a key event.
- No `form_submit` event appears in Recent events — contact form likely isn't wired to fire a trackable submission yet (matches the open "Contact form functionality integration" item in [ROADMAP.md](./ROADMAP.md)).

## Action items

- [x] **Link Search Console to GA4** — Admin > Product links > Search Console links. Gives visibility into search queries/impressions/CTR given organic search is only 2.65% of traffic. _(Linked 2026-09-05: `https://www.synepho.com/` Search Console property → `synepho` GA4 web stream. New Search Console reports will appear under Acquisition once data starts flowing, typically within a day or two.)_
- [x] **Mark `file_download` as a key event** — Admin > Events > Recent events > star `file_download`. Already firing (resume PDF). _(Done 2026-09-05.)_
- [x] **Mark outbound `click` as a key event** — same screen, star `click`. Captures clicks out to GitHub/live demos/LinkedIn. _(Done 2026-09-05.)_
- [x] **Remove or ignore the default `purchase` key event** — investigated 2026-09-05: GA4 does not allow unmarking/removing the default `purchase` key event via the UI ("Key event can't be unmarked" / "Unmark as key event" is disabled in the overflow menu). It's harmless — shows "No stream data detected" and will never fire on this site — so left as-is.
- [ ] **Wire up a `contact_form_submit` event** once the contact form backend is built ([ROADMAP.md](./ROADMAP.md) item), and mark it a key event. This is the real conversion for a portfolio site.
- [ ] **Reconsider Home page prominence** — Home gets far fewer views (23) than project demo pages (196-213). Consider surfacing/linking popular project demos more prominently from Home, or building a canonical case-study page under `/projects` to capture that interest for SEO.

## Notes

- GA wiring lives in `src/components/GoogleAnalytics.tsx`, gated by `NEXT_PUBLIC_ENABLE_ANALYTICS`.
- Enhanced Measurement (scrolls, outbound clicks, file downloads, etc.) is enabled at the stream level — no code changes needed for that part.
