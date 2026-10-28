# Oasis website handover

Latest update: see [PAGE-SELECTION.md](PAGE-SELECTION.md) for the selected pages, generated imagery and current verification. The historical implementation notes below describe the earlier version.

Customized in the existing workspace; not deployed or published.

## Pages and content

Updated all 20 business template pages: index.html and its two variants; the three one-page variants; about; services and service details; projects and project details; team; contact and its two variants; FAQ; pricing; and the three blog/resource pages. Updated headers, navigation labels, metadata, footer details, calls to action, image descriptions and contact destinations.

Official name: Oasis Agribusiness (U) Limited. The supplied Oatech logo is used intact, with its original proportions and colors, inside the existing logo canvas. No CSS, SCSS, fonts, breakpoints, image presentation rules or original animation/menu/slider implementation were edited. Original element order, wrappers, classes, inline styles and width/height attributes were compared programmatically; final markup checks report no layout differences. The only added script handles forms without submission services. The existing contact form script now rejects unexpected success responses.

Staff cards explain the support network instead of naming unidentified people. Pricing cards invite enquiries instead of showing invented charges. Resource cards describe verified services instead of fictional articles. Testimonial components present the company mission instead of invented endorsements. Programme text identifies historical periods and does not claim current operation or unsupported outcomes.

## Authoritative sources

- ../oasis_raw_image_data/About Oasis.pdf: official company name, history, mission, vision, values, services, operating model, inclusion and three historical programmes.
- ../oasis_raw_image_data/Oasis Point-Of Sale (POS) set up data.docx: company name, head office and branch contacts. Head office email: oasisagroagent@gmail.com; telephone: 0393 238073.
- Supplied logo, brand symbol and photographs in ../oasis_raw_image_data/ were visually inspected. Originals were preserved.

The profile uses Independence Road / Women peace building; the POS document uses Independent Road / Women Peace House. Public copy primarily uses the common verified Plot 63-69, Lira City address. Confirm the exact street/building wording before publication. The profile's farmer demographic totals are inconsistent, so these figures were not promoted as current statistics. The second “Our Vision” heading precedes a list of values; those entries are treated as values.

## Images

136 assets were processed at the original template pixel dimensions, including 208 x 55 logo canvases, the favicon, photograph crops and company-value tiles replacing unrelated client logos. See image-manifest.json for each target, source and dimensions. Wide home banners retain a light text area in the image asset. Decorative backgrounds and vector motifs remain unchanged. Each processed asset was checked for matching dimensions; no mismatches were found.

No AI-generated imagery was used. Photographs are not attributed to specific programmes, people or places without evidence. Crop-field imagery in the network cards is illustrative. Staff portraits and programme-specific photography still require verified identification if desired.

## Verification actually performed

- Captured original homepage desktop (1440px) and mobile (390px) screenshots.
- Captured and checked image loading and horizontal overflow for all 20 modified pages at both widths: no broken images or overflow detected; no browser JavaScript errors collected.
- Visually reviewed desktop/mobile homepage and representative mobile about, service, programme detail, network, contact and enquiry-card sections. Adjusted the homepage heading to fit the template.
- Checked all local src/href file destinations and file-based section anchors: no broken destinations in the final scan.
- Checked original element sequence, classes and layout attributes; final structure comparison passes. CSS and SCSS were not edited.
- Exercised mobile menu opening/closing, gallery popup, slider initialization and FAQ expansion.
- Submitted a local contact enquiry against the static preview server: it correctly reported that nothing was sent, without showing success. No email was transmitted.
- Verified all 136 processed assets retained their recorded original dimensions.

Machine-readable reports accompany these notes. Screenshots and original template backups are in ../.oasis-work/. This workspace has no Git repository, so review used original file backups and DOM comparison rather than git diff.

## Remaining configuration and decisions

- Online contact delivery requires a PHP host with working mail transport and OASIS_CONTACT_TO=oasisagroagent@gmail.com. Until configured, mailer.php returns HTTP 503 and directs users to the verified email/phone. Real PHP mail delivery has not been tested; PHP is unavailable in the local runtime. Use direct email/telephone links in the meantime.
- Newsletter components now open the verified office email. No mailing-list subscription is claimed. Other unconnected forms explicitly report that nothing was sent.
- No verified social account URLs were supplied. Existing social-icon slots link to the contact page with explanatory accessible labels. Replace those destinations only with confirmed accounts.
- No staff roster, authenticated staff portraits, approved prices, formal privacy/terms documents or video were supplied. Network/service enquiry/profile/contact content uses the existing components truthfully. Video calls to action lead to documented work rather than an unrelated demo video.
- The map shows Lira city, not an unverified exact office pin.
- All supplied programme dates end by March 2024. Confirm current programme status before presenting any as ongoing.
- Exclude .oasis-work (development dependencies, original backups and screenshots) from any future public hosting package. No hosting package or deployment was requested.

## Local preview

The temporary static preview is available at http://127.0.0.1:4173 while its development process remains running. Static preview does not execute PHP.
