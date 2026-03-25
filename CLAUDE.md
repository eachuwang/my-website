# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.2.1 project bootstrapped with `create-next-app`, using the App Router, React 19, and Tailwind CSS v4.

**Important:** This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Commands

```bash
npm run dev     # Start development server at http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture

### App Router Structure
- `app/layout.tsx` — Root layout with fonts (Geist) and metadata
- `app/page.tsx` — Home page component
- `app/globals.css` — Global styles and Tailwind imports
- `public/` — Static assets

### Key Technologies
- **Next.js 16.2.1** with App Router (not Pages Router)
- **React 19** (concurrent features available)
- **Tailwind CSS v4** (uses `@tailwindcss/postcss`, CSS-based config)
- **TypeScript** with strict mode
- **ESLint** with `eslint-config-next/core-web-vitals` and TypeScript rules
- **Path alias:** `@/*` maps to project root

### Styling
Tailwind v4 uses CSS-based configuration via `@import "tailwindcss"` in globals.css rather than tailwind.config.js.

## Code Patterns

- Server Components are the default (no "use client" directive)
- Client Components require explicit "use client" directive
- Fonts loaded via `next/font/google` (Geist, Geist_Mono)
- Images use `next/image` component
