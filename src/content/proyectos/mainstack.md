---
title: Mainstack
img: "/lazocns.png"
url: "https://mainstack.up.railway.app/"
---

## Purpose and Proposal

This web application appears to be a user-centric platform with authentication and user management features. It supports user
registration, login, password reset, and profile editing. The app likely serves an organizational or administrative purpose, given the
user roles such as "super_admin", "admin", and "user". The presence of breadcrumbs and routing suggests a multi-page or multi-section
interface, aiming for a smooth user experience with state management and error handling.

## Web Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React with TypeScript
- **Routing:** `@tanstack/react-router` for declarative and nested routing
- **State Management:** Zustand for global state (user session, breadcrumbs)
- **Data Fetching:** `@tanstack/react-query` for server state management and caching
- **UI Components:** Custom components (e.g., ErrorComponent, NotFoundComponent) and utility hooks
- **Build Tool:** Bun (as per package.json scripts)
- **Styling:** CSS imported via `index.css` (likely Tailwind or custom CSS)

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Framework:** Hono (a lightweight TypeScript web framework)
- **Database:** PostgreSQL accessed via Drizzle ORM with schema definitions in TypeScript
- **Schema Validation:** Zod schemas for input validation and type safety
- **Authentication:** User roles and password management with secure password policies
- **Middleware:** Security headers, CORS, logging, error handling, and static file serving
- **Services:** Redis and PostHog integrations initialized on app startup
- **API Structure:** Modular with clear separation of routes, middleware, and providers

## Tools and Services

- **Bun:** JavaScript runtime and package manager for fast development and builds
- **React Query:** Efficient data fetching and caching on the client
- **Zustand:** Lightweight state management for React
- **Drizzle ORM:** Type-safe database schema and queries
- **Zod:** Runtime schema validation for API inputs
- **PostHog:** Analytics and event tracking integration
- **Redis:** Caching or session management backend
- **Hono:** Backend web framework optimized for edge and serverless environments
- **CUID2:** For generating unique IDs in the database
- **Sonner:** Toast notifications on the frontend

## Features

- **User Authentication:** Signup, login, password reset, and password change with strong password policies
- **Role-Based Access Control:** User roles with middleware restricting access accordingly
- **Routing and Navigation:** Nested routes with error and not found components, breadcrumbs for navigation context
- **State Persistence:** Access token stored in localStorage with rehydration on app start
- **Error Handling:** Centralized error component for displaying API or app errors
- **Analytics:** PostHog integration for tracking page views and user events
- **Security:** CORS configured with allowed origins, secure headers, and logging middleware
- **Static File Serving:** Efficient serving of frontend assets and index.html fallback for SPA routing
- **Responsive UI:** Responsive container components and layout hints in frontend code

---

This stack and architecture provide a modern, scalable, and maintainable full-stack web application with a focus on developer
experience, security, and user-centric features.
