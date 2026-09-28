# Professional Developer Portfolio

A polished, responsive single-page portfolio for an early-career Computer Science Engineer.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/developer-portfolio run dev` — run the portfolio preview
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/developer-portfolio/src/App.tsx` — page structure, interactions, navigation, theme toggle, and contact form
- `artifacts/developer-portfolio/src/data/portfolio.ts` — single editable source of truth for portfolio content and links
- `artifacts/developer-portfolio/src/index.css` — theme tokens, typography, layout utilities, and motion/accessibility styles

## Architecture decisions

- The portfolio is frontend-only; the contact form validates and prepares a message but does not claim to send email.
- Personal content is centralized in `src/data/portfolio.ts` so replacement does not require searching component files.
- Empty external URLs intentionally render as instructions instead of dead links or invented profiles.
- Light/dark theme selection is persisted in local storage and respects the system preference on first load.

## Product

Recruiters can scan the hero, about, skills, projects, education, experience, profiles, and contact information from one responsive page. The layout supports keyboard navigation, mobile navigation, accessible focus states, reduced motion, metadata, and placeholder-safe personalization.

## User preferences

The portfolio should stay professional, recruiter-friendly, readable, and honest about placeholder information.

## Gotchas

- Replace identity, education, experience, certification, achievement, project URLs, coding profile URLs, and resume URL in `src/data/portfolio.ts` before publishing.
- Keep contact integrations explicit; the current form is intentionally not connected to an email service.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
