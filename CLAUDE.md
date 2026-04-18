# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
cp .env.example .env   # NODE_ENV=local, PORT=3001
npm i
npm start              # node server.js
```

- No test runner configured (`npm test` exits 1).
- Node >=18 required.

## Architecture

Single-file Express 5 REST API (`server.js`). Deployed to Render at `dev-wisdom.onrender.com`.

- Proverbs are a hardcoded in-memory array in `server.js`. No DB, no persistence layer. Adding/editing a proverb = editing that array.
- Each proverb shape: `{ id, ja, en, author }`.
- Route order is load-bearing: `/api/proverbs/random` is registered **before** `/api/proverbs/:id`. Reordering breaks `/random` because it would match `:id` and fail `parseInt`. Keep static paths above param paths.
- `GET /` serves a self-describing HTML landing page inline — no template engine, no static dir.
- Startup log branches on `NODE_ENV`: logs `http://localhost:${port}` only when `NODE_ENV === 'local'`. Render sets its own `NODE_ENV`, so prod log intentionally omits URL.

## Proverb content

- Bilingual: `ja` (Japanese) + `en` (English) both required.
- `author` field exists on all entries; use `'Anonymous'` when unknown. Real attributions preserved verbatim (e.g. `'荒巻大輔'`, `'Benjamin Parker'`).
- Punctuation style is not uniform across entries — match the tone of surrounding entries when adding.
