---
title: SaaS
img: "/lazocns.png"
url: "https://saas-v9m2c.kinsta.app/"
---

## Purpose and Proposal

This web application appears to be a modern SaaS platform focused on event management and categorization, with user authentication and
tiered subscription plans (free and pro). The app aims to provide users with a dashboard to create, manage, and categorize events,
likely with integrations such as Discord messaging and payment processing. The presence of upgrade pages and quota limits suggests a
freemium model encouraging users to upgrade for enhanced capabilities.

## Web Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React 18 with TypeScript, using React Router (TanStack Router) for routing.
- **State Management & Data Fetching:** React Query (@tanstack/react-query) for server state management and caching.
- **UI Components:** Custom components with Tailwind CSS for styling, enhanced by utility libraries like `clsx` and `tailwind-merge`.
- **Authentication:** Clerk React SDK for user authentication and session management.
- **Build Tool:** Vite with React SWC plugin for fast builds and development.
- **Routing:** TanStack Router with generated route tree for type-safe routing.
- **Animations:** Framer Motion for UI animations.
- **Syntax Highlighting:** react-syntax-highlighter for code display.
- **Other UI Libraries:** Radix UI components (dialog, label, slot, tabs) for accessible UI primitives.
- **Icons:** Lucide React for iconography.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Runtime:** Bun runtime for server-side execution.
- **Framework:** Hono (a lightweight web framework) with OpenAPI integration for API documentation.
- **API Design:** RESTful API routes organized by domain (auth, user, category, event, payment, clerk).
- **Database:** Drizzle ORM with Zod schemas for type-safe database interactions.
- **Authentication:** Clerk backend SDK for user management.
- **Logging:** Pino with pino-pretty for structured and readable logs.
- **Discord Integration:** Discord.js REST client for sending messages and embeds.
- **Payment:** Stripe integration for checkout sessions and subscription management.
- **Caching/Queue:** Redis client present, likely for caching or background jobs.
- **Environment:** Configured via environment variables with strong typing.

### Tools and Services

- **TypeScript:** Strictly typed codebase with modern ES2021 target.
- **Linting and Formatting:** ESLint and Prettier integrated in dev scripts.
- **Testing:** Vitest for unit and integration tests.
- **Version Control:** Git repository (implied).
- **CI/CD:** Not explicitly shown but likely present or planned.
- **Deployment:** Bun server configured to serve static assets and API routes, optimized for production and development modes.
- **OpenAPI:** Auto-generated API docs and validation via hono-openapi and zod.

## Features

- **User Authentication:** Sign-in, sign-up, and session management via Clerk.
- **Event Management:** Create, categorize, and list events with pagination and filtering.
- **Dashboard:** User dashboard with category management and event creation modals.
- **Subscription Plans:** Free and Pro plans with quotas on event counts and categories.
- **Payment Processing:** Stripe checkout integration for upgrading plans.
- **Discord Messaging:** Ability to send Discord embeds/messages via backend integration.
- **Responsive UI:** Mobile and desktop friendly with drawer menus and modals.
- **Routing:** Nested and dynamic routes with type safety.
- **API:** Well-structured REST API with OpenAPI docs.
- **Logging and Monitoring:** Structured logging with pino.
- **Static Asset Serving:** Efficient serving of frontend assets with fallback to index.html.
- **Development Experience:** Fast refresh, type safety, and integrated dev server with Vite and Bun.
