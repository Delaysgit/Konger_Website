# Design QA

final result: passed

## Scope

Checked the KONGER portfolio replacement at `http://127.0.0.1:5173` after migrating the previous prototype into the current workspace.

## Viewports

- Desktop: 1440 x 1100
- Mobile: 390 x 1200
- Desktop modal: featured work opened

## Checks

- Old fictional artist content was replaced with KONGER / 空二 content.
- Real artwork from `src/assets/konger` renders in the hero, featured area, work grid, about/footer imagery, and modal.
- Desktop layout keeps a strong first-viewport artist signal and a dense but readable curation wall.
- Mobile layout collapses navigation, keeps the hero readable, and presents work cards in a single-column flow at narrow widths.
- The long vertical `月秋游龙` artwork is cropped in Featured view so it does not monopolize the page; clicking opens the modal for a fuller view.
- Filters, featured next/previous buttons, mobile menu, work cards, modal close, and source links are interactive.
- Production build passes with `npm run build`.

## Notes

The original source artwork remains in `source-assets/konger-works/Art`. The frontend uses optimized WebP derivatives in `src/assets/konger` so the latest GitHub version stays lightweight while preserving the local source archive.
