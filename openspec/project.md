# Project Context

## Purpose
Popper Browser is a lightweight desktop browser built with Tauri that experiments with an attribute-first UI and a custom `pppr:` document mode.

Primary goals:
- Provide a minimal, hackable browser shell with address bar, navigation controls, and status feedback.
- Support built-in routes (`about:home`, `about:spec`, `about:demo`) and external web URLs.
- Render `pppr:` documents using a constrained, attribute-only styling model.

## Tech Stack
- Frontend: Vanilla HTML + JavaScript (ES modules) in `src/index.html` and `src/main.js`
- Desktop runtime: Tauri v2
- Native layer: Rust (edition 2021) in `src-tauri/`
- Build/package tooling: `@tauri-apps/cli` and Cargo

## Project Conventions

### Code Style
- Use plain JavaScript modules; avoid adding framework dependencies unless justified.
- Prefer `const` by default, `let` only when mutation is required.
- Use semicolons and double-quoted strings to match existing style.
- Keep functions small and explicit; prioritize readability over abstraction.
- Prefer descriptive names (`loadPppr`, `normalizeUrl`, `applyAttributeStyles`) over short aliases.

### Architecture Patterns
- UI markup is in `src/index.html`; runtime behavior and style system are in `src/main.js`.
- Styling is attribute-driven via `data-*` tokens mapped in `STYLE_MAP`.
- `popper-bar` and `popper-label` are Web Components used as reusable primitives.
- Navigation and history are managed client-side (`historyStack`, `historyIndex`).
- Content is rendered inside a sandboxed `<iframe id="view">`.
- Built-in pages are composed from in-memory HTML templates (`HOME_DOC`, `SPEC_DOC`, `DEMO_DOC`).
- Tauri Rust layer is intentionally thin and currently only exposes a sample `greet` command.

### Testing Strategy
- There is currently no automated test suite in this repository.
- Validation is manual: run the app, exercise navigation (`back`, `forward`, `reload`), built-in routes, `pppr:` routes, and external URL loading.
- For future changes, prefer adding focused tests where practical (JS unit tests for URL normalization/navigation logic and integration checks for major flows).

### Git Workflow
- Keep changes scoped and atomic; avoid mixing unrelated refactors with behavior changes.
- Use short-lived feature branches and open PRs with clear intent.
- Use descriptive, imperative commit messages (e.g., `add pppr payload decoding`, `fix navigation history bounds`).
- Do not rewrite shared history on collaborative branches.

## Domain Context
- This project explores a "Popper Markup" concept where UI presentation is controlled by allowed attributes instead of traditional CSS.
- `pppr:` URLs act as a constrained document mode.
- `pppr:home`, `pppr:demo`, and `pppr:spec` are built-in shortcuts.
- Other `pppr:` payloads are URL-decoded HTML, sanitized to strip `<style>` tags and inline `style` attributes, then bootstrapped with Popper styling.
- The app is currently optimized for rapid local iteration, not production-grade browsing completeness.

## Important Constraints
- Preserve the attribute-only rendering model for Popper documents.
- Do not depend on external CSS files for Popper UI primitives; style behavior should remain in the attribute map/bootstrap logic.
- Keep Tauri permissions minimal (`core:default`, `opener:default`).
- `iframe` sandbox settings currently allow `allow-scripts allow-forms allow-same-origin`; changes here have security implications and must be deliberate.
- Tauri CSP is currently `null` in `src-tauri/tauri.conf.json`; tightening CSP is a future hardening task.

## External Dependencies
- `@tauri-apps/cli` (dev dependency) for running and packaging the desktop app.
- `tauri` and `tauri-build` for application runtime/build integration.
- `tauri-plugin-opener` for opener capability wiring.
- `serde` and `serde_json` in Rust (currently minimal usage, available for command payload serialization).
