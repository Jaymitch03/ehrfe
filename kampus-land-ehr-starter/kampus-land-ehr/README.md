# Kampus Land EHR Starter

This is a starter full-stack behavioral health EHR scaffold for Azure.

## Stack
- Frontend: Next.js 15 + React 19 + TypeScript + Tailwind
- Backend: NestJS 11 + TypeScript + Prisma + PostgreSQL
- CI/CD: GitHub Actions
- Hosting: Azure App Service (Linux)

## Why not a monorepo?
You asked a fair question. A monorepo is not required. I used it here because:
- one pull request can update FE, API, and shared env assumptions together
- one CI/CD layout can build both apps cleanly
- easier version alignment for Node, TypeScript, linting, and workflows
- faster for a new product where FE and API evolve together daily

If you prefer, you can split this into two repos later:
- kampus-land-ehr-web
- kampus-land-ehr-api

The code in this starter is already separated into `apps/web` and `apps/api`, so splitting later is straightforward.

## Quick start
1. Install Node 22 and pnpm.
2. Create PostgreSQL database.
3. Copy env files from examples.
4. Run `pnpm install` from repo root.
5. Run `pnpm --filter api prisma:generate`
6. Run `pnpm --filter api prisma:migrate:dev`
7. Run `pnpm dev`

## Azure deployment
Create two Linux App Services:
- Frontend app service for Next.js
- API app service for NestJS

Set GitHub secrets described in the workflow files.
