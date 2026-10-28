# Page selection and imagery — 23 October 2026

This update supersedes the earlier handover's page counts, image-generation statement and claims about unchanged navigation markup.

- `index.html` now uses multipage Home Example Three.
- Contact uses `contact.html` (Example One); Resources uses `blog.html` (grid). Detail pages remain available as content pages.
- The public site contains 12 HTML pages. Alternate home, onepage, contact and resource list examples are archived in `.oasis-work/unused-examples`. Pre-change pages are in `.oasis-work/before-page-selection`.
- Desktop and mobile navigation expose a single Home and Contact destination. Links to alternate examples are removed or point to the selected page. The template's View RTL/LTR demo button is removed.
- CSS, SCSS, typography, colors and component layouts were not changed. Background images now also have initial inline image declarations, matching the template JavaScript's presentation, so images can display before scripts initialize.
- Four new AI-generated illustrative scenes are saved in `assets/images/generated`: maize farming, farmer training, fresh harvests and drip irrigation. Forty-eight crops match their corresponding original template image dimensions. These depict illustrative farming settings, not verified Oasis personnel or programme documentation. Original supplied assets remain available.
- `generated-image-manifest.json` records generated assets, sources and dimensions. `page-selection-checks.json` records the current verification: all 12 pages at 1440px and 390px, no broken local links, alternate example links, failed images/backgrounds, horizontal overflow or JavaScript errors. Mobile navigation and Home Three slider initialization passed.

Preview: http://127.0.0.1:4173 while the local server runs. No deployment was performed. Exclude `.oasis-work` from public hosting. Existing contact-delivery configuration requirements from `OASIS-HANDOVER.md` still apply.
