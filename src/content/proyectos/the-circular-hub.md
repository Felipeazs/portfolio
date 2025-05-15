---
title: The Circular Hub
img: "/the-circular-hub.png"
url: "https://the-circular-hub-c8cc8.kinsta.app/"
---

## Purpose and Proposal

This web application is a user-centric platform designed to manage and evaluate user responses related to sustainability or
environmental impact assessments. Users can register, log in, and submit detailed responses to a structured questionnaire covering
various sustainability topics such as collaboration, circular design, education, energy efficiency, repairability, resource
management, waste management, environmental impact, and community engagement.

The proposal is to provide an interactive, data-driven tool for users to self-assess or be assessed on sustainability practices, with
a clean UI and responsive charts to visualize results. It integrates analytics tracking and uses modern web technologies to ensure a
smooth user experience.

## Web Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- React with TypeScript for building UI components.
- Zustand for state management.
- TanStack Router for routing and route context management.
- React Query for data fetching and caching.
- Sonner for toast notifications.
- Various UI components and charts for data visualization.
- CSS with utility classes (likely Tailwind CSS).
- Suspense and lazy loading for performance optimization.
- PostHog for analytics tracking.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![SQLite](https://img.shields.io/badge/SQLite-%2307405e.svg?logo=sqlite&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- Node.js with Hono framework for building the API server.
- Drizzle ORM with PostgreSQL for database schema and queries.
- Zod for schema validation and type inference.
- Redis for caching or session management.
- Cloudinary for image uploads.
- Email provider integration for password reset and notifications.
- Middleware for security (CSP, CORS, secure headers), logging, error handling, and route protection.
- Environment variables managed via a custom env module.

### Build and Tooling

- Bun as the package manager and runtime.
- Monorepo structure with client, server, and packages workspaces.
- ESLint for linting and code quality.
- TypeScript for static typing.
- React DOM for rendering.
- TanStack React Query Devtools and Router Devtools for development.

### External Services

- **PostHog:** For user behavior analytics and event tracking
- **Redis:** For caching and session storage
- **Railway:** Deployment platform (badge shown)

### Features

- User authentication and session management
- Global state management with Zustand
- Declarative routing with nested routes and error boundaries
- Responsive UI components with accessibility considerations
- Data fetching and caching with React Query
- Date formatting and relative time display in Spanish locale
- Analytics integration with PostHog
- Secure HTTP headers and CORS configuration
- Static file serving and SPA fallback routing
- Development tooling with route visualization and logging
