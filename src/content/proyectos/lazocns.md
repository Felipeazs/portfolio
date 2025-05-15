---
title: LazoCNS
img: "/lazocns.png"
url: "https://lazocns-4thdy.kinsta.app/"
---

## Purpose and Proposal

This web application designed to support sustainable business consulting. It aims to provide tools and insights to help
businesses analyze and improve their organizational capacities, strategic positioning, and sustainability practices. The platform
integrates various analytical frameworks and data visualization components to assist consultants and business users in making informed
decisions.

## Web Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React with TypeScript
- **Routing:** @tanstack/react-router for declarative routing and nested route management
- **State Management:** Zustand for global state management (authentication status, user info, selected project, breadcrumb paths)
- **Data Fetching:** @tanstack/react-query for server state synchronization, caching, and query management
- **UI Components:** Custom React components (e.g., error handling, breadcrumbs, forms)
- **Build Tool:** Vite (implied by presence of `vite.svg` in static assets)
- **API Client:** Custom client built with Hono client (`hc`) typed against the backend API routes for type-safe API calls
- **Authentication:** Token-based authentication stored in localStorage, with automatic token refresh and logout on expiration or rate
  limiting
- **External Providers:** Knock for notifications integration

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Framework:** Hono (a lightweight TypeScript web framework)
- **Database:** PostgreSQL accessed via Drizzle ORM with schema definitions and relations
- **Data Validation:** Zod schemas for input validation and type inference
- **Authentication:** JWT tokens with refresh mechanism, role-based access control (roles: super_admin, admin, user)
- **Middleware:** Secure headers, CORS configured for specific origin, logging, error handling, and 404 handling
- **Static Assets:** Served from `public/` directory with SPA fallback to `index.html`
- **API Routes:** Typed routes generated and consumed by frontend client for consistent API contract
- **External Services:** PostHog for analytics, Redis for caching or session management, Cloudinary for image uploads (implied from
  providers folder), Resend for email services

## Features

- User registration, login, logout, password reset, and password change flows with validation and error handling
- Role-based user management with editable user profiles including image uploads
- Project creation and management linked to authenticated users
- FODA (SWOT) analysis management with categories for strengths, weaknesses, opportunities, and threats, each with importance and
  rating
- Real-time notifications integration via Knock
- Analytics tracking with PostHog
- Responsive UI with error and loading states handled gracefully
- Secure API with token refresh and rate limit handling
- Breadcrumb navigation reflecting current path for better UX
- Modular and scalable codebase with clear separation of concerns between frontend and backend
