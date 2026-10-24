# Architecture and provenance

Authority: GDD v1.0 in `design/GDD-v1.0.md`; UGDS v1.0.0 pinned to `d5c6696efdd6efc028118600466db44aecae0c9b` (unaltered local copy).

The production foundation is `jaychtw/shape-match` at `857dfe124cbce152b4aa118550f11276cbb7414e`. Its controller, event projection, animation, level manifest, input handling, localization, audio, save recovery, tests and workflows were reused under the repository owner's explicit GDD authorization. That source documents its artwork and synthesized audio as original, with no third-party artwork licenses. No source LICENSE was present; this handoff asserts no broader relicensing. Attribution to the original repositories and original release evidence is retained here and in vendor. Old geometric artwork is replaced, and no old screenshots or QA approvals are inherited.

The immutable `@jaychtw/match3-core@1.0.0` distribution is copied byte-for-byte from the approved foundation: source `9863f8e023a227540a58491282e87d9f11a0cf79`. `vendor/SHA256SUMS`, release evidence, npm integrity and an automated hash test preserve identity. No engine changes or rule reimplementation occurred. Its README, API, RULES, EVENTS, STATE, acceptance criteria and documented bounded-resolution limitations were inspected.

- `level.ts`: 15-level manifest, three chapters and unlimited Free Play. Stable engine type identifiers map circle→rabbit, triangle→mouse, square→hamster, rectangle→squirrel, pentagon→dolphin, star→frog. These internal identifiers are not player-facing geometric identities. Most level seeds remain unchanged for reuse of the proven design; application-prefixed first-level/Free Play seeds are independently namespaced and regenerated validation witnesses cover them.
- `controller.ts` / `projection.ts`: engine applies transactional turns; ordered events animate an independent projection; exact reconciliation precedes commit. Input is locked while resolving. Rules, RNG, moves, objectives, scoring and outcomes remain engine-owned.
- `pieces.ts`: original game-ready dimensional SVG characters, with gradients, shading, facial expressions and distinct silhouettes. Ears, cheeks, tail and fins are individual contours. Four high-contrast special badges render over all six animals, preserving faces. No third-party image assets or concept screenshots are used as gameplay artwork.
- `style.css`: familiar Classic layout; `themes.css`: pastel Cute presentation and responsive control fixes. Settings updates a root theme attribute instantly, without reinitializing the controller. Both themes use identical character assets.
- `i18n.ts`: centralized English/Traditional Chinese menus, objectives, animal identities, hints, recovery and accessibility text.
- `session.ts` / `progress.ts`: validated exact engine/RNG state, action traces, backups, separate mode slots and progression under `animal-match-*`; no source-game save keys. Free Play bounds its trace after 256 turns without resetting engine state.
- `audio.ts`: reused original local Web Audio synthesis; optional melody, volume/effects/mute, bounded voices and background pausing.

All 15 authored win/loss routes are regenerated in `evidence/level-validation.json`. Greedy policies plus bounded beam search establish feasibility, not exhaustive solvability, intended human difficulty or enjoyment. Engine limits such as SHUFFLE_LIMIT, UNSHUFFLABLE and RESOLUTION_LIMIT remain typed, transactional recoverable outcomes.

No generalized shared UI framework, server, analytics, paid service, engine feature, dark mode or cloud save was added. Publication is a separate hosted operation; QA records actual verification gaps.
