---
title: SaaS
img: "/lazocns.png"
url: "https://saas-v9m2c.kinsta.app/"
---

SaaS es una plataforma web moderna centrada en la gestión de eventos y la categorización, con autenticación de usuarios y planes de suscripción escalonados (Free y Pro). La aplicación tiene como objetivo proporcionar a los usuarios un tablero para crear, administrar y clasificar eventos, con integraciones como mensajes de Discord y procesamiento de pagos. La presencia de páginas de actualización y límites de cuotas sugiere que un modelo freemium alienta a los usuarios a actualizar para mejorar las capacidades.

## Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React 18 con Typescript.
- **Routing:** Tanstack Router.
- **Gestión de estados y obtención de datos:** TanStack Query.
- **Componentes UI:** Componentes personalizados con TailwindCSS.
- **Autenticación:** Clerk SDK para autenticación y gestión de sesiones.
- **Compilación:** VITE con React SWC.
- **Animaciones:** Movimiento de Framer para animaciones de interfaz de usuario.
- **Otras bibliotecas de UI:** componentes de UI radix (diálogo, etiqueta, ranura, pestañas) para primitivas de interfaz de usuario accesibles.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Runtime:** Bun runtime para gestión del servidor.
- **Framework:** Hono con OpenAPI (gestión de documentación).
- **Diseño API:** RESTful.
- **Base de datos:** Drizzle ORM con Zod (validación y seguridad).
- **Authentication:** Clerk.
- **Mensajería:** Discord para enviar mensajes e incrustaciones.
- **Método de pago:** Stripe para sesiones de pago y gestión de suscripción.
- **Caching/Queue:** Redis.

### Herramientas y Servicios

- **TypeScript**.
- **Linting y Formateo:** ESLint y Prettier.
- **Testing:** Vitest.
- **Version Control:** Git.
- **CI/CD:** Github actions
- **OpenAPI:** Auto generación de documentación de la API.

## Características

- **Autenticación de usuario:** Sign-in, sign-up, manejo de sesiones via Clerk.
- **Manejo de eventos:** Crear, Categorizar, y listar eventos con paginación y filtrado.
- **Dashboard:** dashboard de usuario con manejo de categorias y eventos (modals).
- **Planes de Subscripción:** Free y Pro con cuotas según cantidad de eventos y categorías.
- **Payment Processing:** Stripe checkout integration for upgrading plans.
- **Procesamiento de pagos:** Integración de pago con Stripe para actualización de planes.
- **Discord Messaging:** Ability to send Discord embeds/messages via backend integration.
- **Mensajería Discord:** Envío de mensajes según eventos creados.
- **UI responsivo**
- **API:** Full documentación de la API REST con OpenAPI.
