# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, vanilla-JS browser game built as a personalized birthday surprise ("La multi ani, Ilinca!"). The visitor passes a password gate, plays through a sequence of mini-games to "earn" a gift, then sees a photo album + typed message + a rigged lucky wheel. Deployed as a static site to GitHub Pages at `2026.ilincaparus.ro` (see `CNAME`).

## Stack & tooling

- **No build system, no package.json, no dependencies.** Three hand-written static files (`index.html`, `styles.css`, `app.js`) plus media assets, served as-is.
- All audio/video/images are committed directly to the repo root and bundled into the deploy.
- Fonts are self-hosted and base64-embedded in `fonts.css` (no external font requests).
- Web Audio API is used to synthesize the piano (no audio files for the piano notes).

### Running locally

Serve the directory over HTTP (the password gate uses `crypto.subtle.digest`, which requires a secure context — `localhost` counts, `file://` does not):

```
python3 -m http.server 8000
# then open http://localhost:8000
```

### Deploy

Push to the default branch; GitHub Pages serves the repo root. `CNAME` sets the custom domain. There is no CI/build step.

## Language conventions

All user-facing text and code comments are in **Romanian without diacritics** (e.g. "Urmatoarea", "Felicitari"). Keep new strings/comments in the same style.

## Architecture (all in `app.js`, ~1520 lines, one global scope)

`app.js` is organized into labeled sections (`// ---------- SECTION ----------`). There are no modules or classes — everything is top-level functions and module-scoped `let`/`const` state, wired to the DOM via inline `onclick=` handlers in `index.html`. The file executes top-to-bottom on load; the last lines (`hydrateIcons()`, `applyMute()`, `checkAlbumButton()`, `initGate()`) bootstrap the page.

### Code map

Line numbers are approximate anchors (they drift with edits) — use them to jump near a section, then confirm by the `// ----` header or function name. Search the header text if a number is stale.

**`app.js`** (top-to-bottom; section header → key functions/constants):

| ~Line | Section | Key symbols |
|------|---------|-------------|
| 1 | ICONS | `ICON_PATHS` (Phosphor fill paths), `icon(name, cls)`, `hydrateIcons(root)` |
| 57 | QUIZ | `questions`, `wrongMessages`, `correctMessage`, `showQuestion`, `pickAnswer`, `nextQuestion` (routes to piano after Q2, Wordle after Q3) |
| 106 | PROGRESS BAR | `setProgress`, `QUIZ_PCT` |
| 116 | REWARD SOUND + ANIMATION | `playSound`, `celebrateCorrect`, `MLG_TOKENS`, `mlgCelebrate`, `playVideoOverlay` (green-screen chroma key), `closeMedia` |
| 244 | RESUME ON REFRESH | `saveStage`, `clearStage`, `restartGame`, `resumeIfSaved`, `startQuiz`, `preloadMedia` |
| 401 | PIANO INTERLUDE | `NOTE_FREQ`, `CHORDS`, `PROGRESSION`, `ensureAudio`, `applyMute`/`toggleMute`, `playNote`, `SONG_OPTIONS`, `playProgression`, `guessSong`, `initPiano`, `finishPiano` |
| 637 | WORDLE INTERLUDE | `WORDLE_TARGET`, `initWordle`, `buildWordleKeyboard`, `pressWordleKey`, `submitGuess`, `finishWordle` |
| ~843 | DRIVING GAME (no header) | `canvas`/`ctx`/`car`/`gift` globals, `carImg`, `giftImg`, `startJam`, `startDriving`, `initGame`, `update`, `draw`, `loseLevel`, `drawFire`, `loop`, `arrive`, `walls` maze |
| 1193 | GIFT / GIFT FINALE | `GIFT_PHOTOS`, `GIFT_MESSAGE`, `openGift`, `renderGiftReveal`, `revealWheelCta`, `goToWheel`, `showAlbum`, `typeMessage`, `startSlideshow` |
| 1327 | ROATA NOROCULUI (rigged wheel) | `WHEEL_SEGMENTS`, `SEG`/`WHEEL_FROM`/`WHEEL_INITIAL_ROT`, `buildWheel`, `spinWheel`, `showWheelResult`, `launchConfetti` |
| 1496 | PASSWORD GATE | `GATE_HASH`, `sha256hex`, `checkGate`, `initGate`, `afterUnlock` + bootstrap calls |

**`index.html`** — each screen is a `<div class="screen" id="...">`, in order: `gate` (overlay), `welcome`, `quiz`, `driving`, `lose`, `gift`, `wheelScreen`, `pianoLevel`, `wordleLevel`. Overlays: `mediaOverlay`, `mlgStrobe`, `progressWrap`.

**`styles.css`** — `:root` theme tokens at top; `/* ---- roata norocului ---- */` (~line 352) for the wheel; `/* ---- ICONITE ---- */` (~line 527) for icon sizing/colors.

### Screen model

`index.html` declares every screen as a `<div class="screen">` (welcome, quiz, driving, lose, gift, wheelScreen, pianoLevel, wordleLevel). Only one is visible at a time; navigation is done by toggling the `hidden` class. Overlays (`mediaOverlay`, `mlgStrobe`, `progressWrap`, `gate`) sit above the screens.

### Game flow

welcome → quiz (questions interleaved with the **piano** "guess the song" and **Wordle** interludes) → **driving** canvas mini-game (arrow keys / touch buttons; crash → lose screen → retry) → **gift** (tap box → photo slideshow + typed message) → **lucky wheel** finale. A persistent progress bar (`setProgress`, checkpoints in `QUIZ_PCT`) tracks "Drumul spre cadou" across all screens.

### Key subsystems

- **Password gate** (`checkGate`, `initGate`, `afterUnlock`): client-side SHA-256 check against `GATE_HASH`. On success sets `localStorage ili_unlocked=1`. `afterUnlock()` runs once and either jumps to the album (`?album=1`) or resumes saved progress. This is obfuscation, not real security — the gate is purely to keep the surprise.
- **Resume/persistence** (`saveStage`, `resumeIfSaved`, `clearStage`, `restartGame`): progress is stored in `localStorage` (`ili_stage`, `ili_current`, `ili_unlocked`) so a refresh continues where she left off.
- **Audio** (`ensureAudio`, `playNote`, `playProgression`, `applyMute`/`toggleMute`): a single Web Audio master bus drives the synthesized piano; one global mute toggle covers piano, SFX, and the looping "jam" track during the race.
- **Driving game** (`initGame`, `update`, `draw`, `loop`, `loseLevel`): `requestAnimationFrame` loop on `#gameCanvas`, collision against a hard-coded `walls` maze, enemies, and oil pools. The car is a base64 PNG (`carImg`); the gift target is the Phosphor `gift` icon rendered to an SVG-data-URL `Image` (`giftImg`) and drawn with `drawImage`.
- **Lucky wheel** (`buildWheel`, `spinWheel`, `WHEEL_SEGMENTS`): an intentionally **rigged** wheel — the spin is choreographed in three beats to tease "Nimic" then land on 1000 lei. Read the comment block above `spinWheel` before touching the angles; segment layout and `SEG`/`WHEEL_FROM` are interdependent. To hide the rig, the jackpot wedge is **not** visually highlighted (same cream/tan as the rest) and the disk rests at `WHEEL_INITIAL_ROT` (-135°, so "Vacanta" sits under the pointer at rest, not the jackpot). The final rotation is still `2520deg` (= 7×360), so 1000 lei lands under the pointer.
- **Icons** (`ICON_PATHS`, `icon(name, cls)`, `hydrateIcons`): every former emoji is a Phosphor `fill`-weight inline SVG. `ICON_PATHS` is the single source of truth (raw path data, fetched from `phosphor-icons/core`). In JS, build markup with `icon('gift')` and assign via `innerHTML` (not `textContent`). In `index.html`, use placeholders `<span data-ic="gift" data-ic-cls="...">`; `hydrateIcons()` fills them on load. Icons scale to `1em` (inherit the parent's `font-size`) and use `currentColor`; `.ic-heart` is themed orchid. To add an icon, fetch its `<path>` from Phosphor and add it to `ICON_PATHS`.

### Customizing the content

The personal/content knobs are constants near the top of their sections, meant to be edited directly:
- `questions` + `wrongMessages` / `correctMessage` — the quiz.
- `SONG_OPTIONS` / `CORRECT_SONG`, `PROGRESSION`, `CHORDS` — the piano interlude.
- `WORDLE_TARGET` — the Wordle answer.
- `GIFT_PHOTOS` (image filenames in repo root) and `GIFT_MESSAGE` (typed lines) — the finale.
- `WHEEL_SEGMENTS` — wheel labels.

## Styling

`styles.css` defines a CSS-variable theme (`:root` tokens like `--orchid`, `--plum`, `--cream`, font families). Prefer these variables over new hard-coded colors when matching the existing look.

## Notes / gotchas

- `_unlock.html` is a bypass helper that sets `ili_unlocked` and redirects to `?album=1` — a shortcut for previewing the album without the gate.
- Driving-game globals (`canvas`, `ctx`, `car`, etc.) must stay declared at the top of their section; a past bug was an undeclared-variable `ReferenceError` breaking the game (see comment at the driving-state declarations).
