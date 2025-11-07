# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an "Infinite End Credits" (無限エンドロール) web application that generates endless scrolling movie credits inspired by Evangelion. The application creates fake Japanese names using faker-js and displays them in a traditional end credits format with various production roles.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- Next.js 14 (Pages Router, not App Router)
- TypeScript 5
- React 18
- Tailwind CSS 3
- @faker-js/faker for Japanese name generation

## Project Structure

The project uses the Pages Router with source files in `src/`:

- **`src/pages/`** - Next.js pages
  - `index.tsx` - Auto-scrolling credits mode (default)
  - `manual.tsx` - Manual scrolling mode with native scroll
  - `_app.tsx`, `_document.tsx` - Next.js custom app/document
  - `api/` - API routes (currently just example hello endpoint)

- **`src/components/`** - React components
  - `CreaditsCanvas.tsx` / `ManualCreaditsCanvas.tsx` - Main canvas containers for each mode
  - `CreditsList.tsx` / `ManualCreaditsList.tsx` - List components with scroll logic
  - `CreditsItem.tsx` - Individual credit item display
  - `MouseActionObserver.tsx` - Mouse wheel speed control
  - `SwipeActionObserver.tsx` - Touch swipe speed control

- **`src/hooks/`** - Custom React hooks
  - `useCredits.ts` - Core state management for credits (titles, credits data, registration)
  - `useResize.ts` - Window resize handling

- **`src/utils/`** - Utility functions
  - `generate.ts` - Generate fake Japanese names, IDs, and titles using faker-js
  - `role.ts` - Contains `EVANGELIONRole` template with all production roles and generates random staff assignments
  - `object.ts` - Helper utilities for object manipulation

- **`src/types/`** - TypeScript type definitions
  - `credits.d.ts` - `Credit` and `Credits` types
  - `role.d.ts` - `Roles` type
  - `staff.d.ts` - `Staffs` type

## Architecture & Key Concepts

### Two Display Modes

1. **Auto-scroll mode** (`/`): Uses `requestAnimationFrame` to animate credits upward automatically. Speed can be controlled via mouse wheel (up/down) or touch swipes.

2. **Manual mode** (`/manual`): Uses native browser scrolling with `onScroll` event handler. New content loads when scrolling near the bottom.

### Infinite Scrolling Pattern

Both modes implement infinite scrolling by:
1. Monitoring scroll position (either via `requestAnimationFrame` or `onScroll`)
2. Triggering `addRandomWork()` when within 1000px of the content bottom
3. Dynamically appending new credits to the DOM

The `useCredits` hook manages this by:
- Maintaining `titles` array (list of work titles)
- Maintaining `credits` object (maps title to Credit[] array)
- `addRandomWork()` generates a fake work title and random staff assignments from the Evangelion role template

### Animation System (Auto-scroll mode)

The animation in `CreditsList.tsx` uses:
- `requestAnimationFrame` loop
- CSS `transform: translateY()` for performance
- `movingRef` to track current scroll position
- `speed` state (default: 1) adjusted by mouse wheel/swipes

### Observer Pattern for User Input

Both `MouseActionObserver` and `SwipeActionObserver`:
- Render invisible full-screen overlay (`z-50`)
- Attach global event listeners (`wheel`, `touchstart`, `touchend`, `click`)
- Call provided callbacks (`onWheelUp`, `onSwheelDown`, etc.)
- Clean up listeners on unmount

### Role System

The `EVANGELIONRole` object in `src/utils/role.ts` defines all production roles (企画・原作・脚本, 総作画監督, etc.) with:
- `required`: boolean (must be included)
- `max`: number (max staff members for that role)
- `index`: number (ordering/priority for display)

The `generateRoleStaff()` function randomly selects roles and generates fake names for each.

## Path Aliases

The project uses `@/*` to reference `./src/*` (configured in `tsconfig.json`).

Example: `import { useCredits } from "@/hooks/useCredits"`

## Styling

The project uses Tailwind CSS exclusively. No CSS modules or styled-components.

## Common Patterns

- Components use functional components with hooks (no class components)
- Refs are used for DOM manipulation (`scrollRef`, `containerRef`)
- Event handlers use `useCallback` for memoization
- Type imports use `import type` syntax for better tree-shaking
