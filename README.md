# Cute Animal Match

A standalone English / 繁體中文 match-3 game with six original animal characters, 15 levels across three chapters, and unlimited Free Play. Cute is the default presentation; Settings switches instantly between Cute and Classic without changing the game. Dark mode is outside v1.0.

## Develop

Node 24 and npm. Use the existing checkout; no worktree is needed.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

The Vite base is `/animal-match/`. No backend, accounts, credentials, external artwork, fonts or runtime network services are required. Audio is synthesized locally after interaction.

```sh
npm run typecheck
npm test
npm run build
npm run test:browser -- --workers=3
npm run validate:levels
npm run test:compat
```

Chromium tests use `/usr/bin/chromium` when available; `CHROMIUM_PATH` overrides it. Compatibility tests need Playwright 1.58.2 Firefox/WebKit and their system dependencies. Hosted workflows use a digest-pinned Playwright image. To install locally into a writable cache, use `PLAYWRIGHT_BROWSERS_PATH=/workspace/.cache/ms-playwright npx playwright install firefox webkit`, and use the same variable for compatibility tests. Keep HTTPS verification enabled. Tests start a production preview on port 4173; keep that port free.

## Play

Tap two neighboring animals, swipe/drag toward a neighbor, or navigate with arrow keys and select with Enter/Space. Escape cancels selection. Four large direction buttons provide an alternative. Larger pieces offers 44px+ cells with bounded horizontal scrolling and pan controls.

Match three identical animals; four creates a line, five a prism, and intersecting matches a bomb. Specials activate through swaps, matches and chains. Ten special pairings use the unchanged engine rules. Complete every listed objective before moves run out. Free Play has no move or target limit.

Progress, exact engine/RNG sessions, separate Journey/Free Play boards, language, theme, board size, reduced motion and audio settings are stored under the independent `animal-match-*` namespace. Restarts and unfinished-board replacement require confirmation. Corrupt storage is retained until explicit recovery; unavailable storage permits in-memory play with a warning.

## Authority, reuse and release

See [GDD](docs/design/GDD-v1.0.md), [architecture and provenance](docs/ARCHITECTURE.md), [QA report](docs/QA.md), and [UGDS checklist](docs/UGDS-CHECKLIST.md). Final creative acceptance is pending. Existing source tests were retained and adapted; historical Shape Match QA/screenshots are not presented as evidence for this game.

GitHub Actions validates pushes. The `pages.yml` workflow (push to main or manual dispatch) validates, deploys `dist`, and verifies actual public gameplay and asset hashes at `https://jaychtw.github.io/animal-match/`. A configured workflow does not prove successful CI or deployment. `ANIMAL_MATCH_VERIFY_URL` may select a local preview for verification; local results are explicitly local.
