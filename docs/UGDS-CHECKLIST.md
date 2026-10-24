# UGDS v1.0.0 compliance checklist

Pinned standard: `d5c6696efdd6efc028118600466db44aecae0c9b`. This checklist records engineering evidence, not G5 approval. See QA.md for commands, current results and limitations.

| Requirement | Status | Evidence / limitation |
|---|---|---|
| P01 complete loop | Pass | Campaign browser playthrough, victory/defeat/retry, replay and Free Play tests |
| P02 input | Pass | Mouse, keyboard, Chromium touch taps/swipe, direction/pan alternatives; physical devices unverified |
| P03 responsive | Pass | Actual 320, 390, 768, 1440 screenshots and overflow assertions in both themes/languages |
| P04 observable mechanics | Pass | Exact engine/projection/DOM reconciliation and all ten combinations |
| P05 recovery | Pass | Restart/replace confirmation, corruption, backups and blocked-storage tests |
| L01 bilingual | Pass | Centralized resources, parity tests and browser flows |
| L02 live switching | Pass | Bilingual gameplay and exact-session tests |
| A01 interaction | Pass | Keyboard, labels, focus and axe audits; compact cells have larger-board/direction alternatives |
| A02 motion/audio | Pass | OS reduced motion, explicit setting and visual feedback; audio settings persist |
| V01 production assets | Pass | Original individual SVG animal artwork; provenance in ARCHITECTURE.md |
| V02 production visual gate | Not Verified | Composed running-build screenshots reviewed internally; creative director acceptance pending |
| V03 integration | Not Verified | Internal screenshot review, coherent characters and feedback; final aesthetic review pending |
| V04 visual POC | Pass | Representative live scene inspected before refining hamster and responsive controls; GDD authorizes continuous production without intermediate approvals |
| V05 quality | Not Verified | Dimensional original character set supplied; intended quality requires director review; no quality waiver claimed |
| V06 evidence | Pass | Actual browser screenshots for both themes at all four target widths and both languages; animation-state screenshots |
| S01 persistence | Pass | Exact state/RNG, separate modes, progression and theme/audio preferences; recovery tests |
| S02 independence | Pass | Bundled engine/assets; no runtime service, telemetry or remote font |
| S03 performance | Not Verified | Automated Chromium sessions complete; ordinary physical-device sustained performance is untested |
| S04 safety | Pass | Family-friendly fictional animal matching; no data collection or real-world claims |
| Q01 engine | Pass | Unchanged pinned tarball hash; unit/integration tests and transactional error fixtures |
| Q02 browser | Pass | Actual Chromium campaign, touch, failure/retry, languages and persistence checks |
| Q03 balance | Not Verified | Fifteen reproducible win/loss witnesses; human balance/enjoyment review pending |
| Q04 accessibility | Pass | Automated audits, keyboard and label tests; physical screen-reader usability unverified |
| Q05 release integrity | Not Verified | Local build verified separately; hosted CI/deployment/live public checks pending access |
| Q06 evidence | Pass | QA.md, reproducible commands, screenshot matrix and explicit gaps |
| C01 ownership | Pass | GDD preserved; final creative acceptance reserved for director |
| C02 escalation | Pass | No rules/engine changes or scope cuts; external access blockers disclosed |
| C03 standards changes | Not Applicable | No change to UGDS proposed or made |

No unverified row constitutes acceptance or an approved exception. Full release readiness remains pending the listed checks.
