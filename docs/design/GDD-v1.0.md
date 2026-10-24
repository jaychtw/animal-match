# Codex Production Handoff — Cute Animal Match v1.0

## Mission

Build **Cute Animal Match**, a complete, bilingual, family-friendly match-3 browser game based on the proven Shape Match v1.0 implementation.

This is a new standalone game with its own repository, identity, artwork, settings, and saved progress.

**Target repository:** `jaychtw/animal-match`

The primary goal is to reuse the established foundation rather than develop another match-3 game from scratch.

## 1. Mandatory reference repositories

Before implementation, inspect these three repositories.

### A. Match3 Core — Authoritative gameplay engine

https://github.com/jaychtw/match3-core

- Release: `v1.0.0`
- Source commit: `9863f8e023a227540a58491282e87d9f11a0cf79`

Review the engine README, API, rules, events, serialization, acceptance tests, and documented limitations.

Use the same immutable engine dependency as Shape Match.

Do not reimplement matching, gravity, cascades, scoring, special-piece combinations, or deterministic state management.

Do not modify the engine without explicit authorization.

### B. Shape Match — Production reference implementation

https://github.com/jaychtw/shape-match

- Approved production baseline: `857dfe124cbce152b4aa118550f11276cbb7414e`
- Playable reference: https://jaychtw.github.io/shape-match/

Study and reuse applicable production code and assets, including:

- Engine integration and event projection.
- Board rendering and animations.
- Mouse, keyboard, touch, and swipe controls.
- Responsive layouts and mobile interaction alternatives.
- Level manifests, progression, and Free Play.
- Localization and accessibility infrastructure.
- Audio and settings.
- Local persistence and recovery.
- Automated tests and browser verification.
- GitHub Actions CI and Pages deployment.

Prefer adapting proven code over rewriting it.

Review asset provenance and reuse permissions before copying assets. Preserve applicable notices and attribution.

Do not retain Shape Match-specific names, save keys, branding, or deployment paths in the new game.

### C. UGDS — Governing development standard

https://github.com/jaychtw/game-development-standards

- Version: `v1.0.0`
- Pinned commit: `d5c6696efdd6efc028118600466db44aecae0c9b`

Read and apply UGDS to architecture, implementation, accessibility, visual quality, testing, release verification, and documentation.

Produce a final UGDS compliance checklist with evidence and explicitly identified limitations.

Do not modify or silently waive UGDS requirements.

## 2. Product requirements

Cute Animal Match retains the complete Shape Match gameplay experience:

- 8×8 match-3 board.
- 15 levels across three chapters.
- Free Play.
- Level progression, unlocking, replay, and retry.
- Four special-piece categories and ten combinations.
- Scoring, objectives, move limits, gravity, and cascades.
- Exact local session restoration.
- English and Traditional Chinese.
- Desktop and mobile controls.
- Audio, accessibility, and reduced-motion settings.

No new engine rules are required.

## 3. Animal pieces

Replace the six geometric shapes with six original, cute animal characters:

| Animal | Color | Essential visual traits |
|---|---|---|
| Rabbit | Yellow | Long ears, rounded cheeks |
| Mouse | Blue | Large round ears, small nose |
| Hamster | White | Chubby cheeks, small ears |
| Squirrel | Brown | Distinctive curled tail |
| Dolphin | Purple | Snout, dorsal fin, flippers |
| Frog | Green | Prominent eyes, wide mouth |

Requirements:

- Cohesive, polished, dimensional 2D illustration style.
- Friendly, expressive, recognizable designs.
- Distinct silhouettes at mobile board size.
- Legible special-piece markers.
- Consistent selection, match, and activation feedback.

Create original artwork rather than simply recoloring geometric shapes.

The approved Shape Match presentation establishes the quality baseline.

## 4. Two selectable UI themes

Implement two visual themes.

### Classic

Adapt the Shape Match interface, preserving its familiar layout, readability, and established interaction patterns.

Replace shape-specific decoration and branding with animal-appropriate equivalents.

### Cute

Create a softer, playful presentation featuring:

- Pastel backgrounds.
- Rounded, pillowy panels.
- Friendly typography.
- Gentle highlights and shadows.
- Cheerful buttons and icons.
- Subtle animal-inspired decorative details.

Both themes use the same game logic, characters, and progression.

Theme switching must:

- Be available from Settings.
- Work in both languages.
- Preserve the active session.
- Persist locally.
- Require no page reload.

**Default theme: Cute.**

Dark mode is excluded from v1.0.

## 5. Reuse and architecture

Start from the approved Shape Match baseline where practical.

Preserve tested functionality and adapt only what is necessary for Cute Animal Match.

Keep the engine, game controller, rendering, localization, and presentation concerns appropriately separated.

Do not introduce a generalized shared UI framework solely for this project.

The game must use its own:

- Application identity.
- Local storage namespace.
- Repository configuration.
- GitHub Pages base path `/animal-match/`.
- Artwork and visual themes.
- Documentation and release records.

Existing Shape Match tests should be adapted and retained wherever applicable.

## 6. Production workflow

This project uses **one continuous production cycle**, not separate G1/G2/G3 approval checkpoints.

You are authorized to:

1. Inspect all three reference repositories.
2. Initialize `jaychtw/animal-match`.
3. Reuse and adapt the Shape Match production foundation.
4. Create and integrate the six animal characters.
5. Implement both UI themes.
6. Complete gameplay, localization, audio, and settings.
7. Run full automated and browser verification.
8. Configure hosted CI and GitHub Pages.
9. Deploy and verify the production candidate.
10. Stop for final creative acceptance.

Perform internal visual and functional checks during development, but do not require intermediate user approvals.

Escalate material scope changes, new engine requirements, security exceptions, or unavoidable departures from the approved design.

## 7. Quality assurance

Retain the relevant Shape Match test coverage.

Add tests for:

- Correct animal identity mapping.
- Special-piece visibility on animal artwork.
- Classic/Cute theme switching.
- Theme persistence after reload.
- Theme changes during active gameplay.
- Both languages in both themes.
- Desktop/mobile presentation.
- All 15 levels and Free Play.
- All ten special-piece combinations.
- Engine/UI state reconciliation.
- Save/reload and recovery.
- Reduced motion and accessibility.
- Audio settings and persistence.

Capture actual browser screenshots of both themes on desktop and mobile.

Run deterministic level validation and preserve reproducible evidence.

Distinguish automated browser testing from actual physical-device testing.

## 8. Release requirements

Before requesting final acceptance:

- Pass build and TypeScript checks.
- Pass unit/integration and browser tests.
- Pass hosted GitHub Actions CI.
- Deploy to GitHub Pages.
- Verify actual public gameplay.
- Publish a QA report and UGDS checklist.
- Document unresolved defects and verification gaps.
- Provide the exact production commit.

Target URL:

https://jaychtw.github.io/animal-match/

Do not claim the site is deployed until the deployment and live checks actually succeed.

Do not change HTTPS trust settings or disable certificate verification to bypass environment problems.

## 9. Definition of done

The production candidate must contain:

- Six original animal characters.
- Two complete selectable UI themes.
- All 15 levels and Free Play.
- Unchanged Match3 Core gameplay.
- Full English and Traditional Chinese localization.
- Responsive desktop/mobile interfaces.
- Audio and accessibility settings.
- Exact persistence and recovery.
- Passing automated and hosted tests.
- Verified public deployment.
- Complete QA evidence and disclosed limitations.

The creative director retains final product acceptance authority.

Do not self-certify G5 approval.

## 10. Immediate instruction

Begin by inspecting the three reference repositories and establishing the implementation plan.

Then proceed through production, testing, and deployment without unnecessary approval interruptions.

**Stop only when the completed production candidate is ready for final creative review, or when a material decision genuinely requires user input.**