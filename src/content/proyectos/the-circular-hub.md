---
title: Fundación The Circular Hub 🚧
img: "/the-circular-hub.png"
---

_(en construcción)_

## Propósito y Propuesta

Esta aplicación web es una plataforma centrada en el usuario, diseñada para gestionar y evaluar respuestas relacionadas con evaluaciones de sostenibilidad o impacto ambiental. Los usuarios pueden registrarse, iniciar sesión y enviar respuestas detalladas a un cuestionario estructurado que abarca diversos temas de sostenibilidad como colaboración, diseño circular, educación, eficiencia energética, reparabilidad, gestión de recursos, gestión de residuos, impacto ambiental y compromiso comunitario.

La propuesta es ofrecer una herramienta interactiva y basada en datos para que los usuarios puedan autoevaluarse o ser evaluados en prácticas de sostenibilidad, con una interfaz limpia y gráficos responsivos para visualizar los resultados. Integra seguimiento analítico y utiliza tecnologías web modernas para garantizar una experiencia fluida.

## Stack Web

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- React con TypeScript para la construcción de componentes de interfaz.
- Zustand para gestión del estado.
- TanStack Router para enrutamiento y manejo del contexto de ruta.
- React Query para obtención y caché de datos.
- Sonner para notificaciones tipo toast.
- Componentes UI y gráficos para visualización de datos.
- CSS con clases utilitarias (probablemente Tailwind CSS).
- Suspense y carga diferida (`lazy`) para optimización de rendimiento.
- PostHog para seguimiento analítico.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![SQLite](https://img.shields.io/badge/SQLite-%2307405e.svg?logo=sqlite&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- Node.js con framework Hono para construir el servidor de API.
- Drizzle ORM con PostgreSQL para esquemas de base de datos y consultas.
- Zod para validación de esquemas e inferencia de tipos.
- Redis para caché o gestión de sesiones.
- Cloudinary para cargas de imágenes.
- Integración con proveedor de correo para recuperación de contraseña y notificaciones.
- Middleware para seguridad (CSP, CORS, cabeceras seguras), logging, manejo de errores y protección de rutas.
- Variables de entorno gestionadas a través de un módulo personalizado.

### Compilación y Herramientas

- Bun como gestor de paquetes y entorno de ejecución.
- Estructura monorepo con workspaces para cliente, servidor y paquetes.
- ESLint para linting y calidad de código.
- TypeScript para tipado estático.
- React DOM para renderizado.
- TanStack React Query Devtools y Router Devtools para desarrollo.

### Servicios Externos

- **PostHog:** Para análisis de comportamiento del usuario y seguimiento de eventos.
- **Redis:** Para almacenamiento en caché y gestión de sesiones.
- **Railway:** Plataforma de despliegue (presencia de badge).

## Funcionalidades

- Autenticación de usuarios y gestión de sesiones.
- Gestión global de estado con Zustand.
- Enrutamiento declarativo con rutas anidadas y manejo de errores (`error boundaries`).
- Componentes UI responsivos con consideraciones de accesibilidad.
- Obtención y caché de datos con React Query.
- Formateo de fechas y visualización de tiempo relativo en español.
- Integración analítica con PostHog.
- Cabeceras HTTP seguras y configuración de CORS.
- Servicio de archivos estáticos y enrutamiento SPA con fallback.
- Herramientas de desarrollo con visualización de rutas y registros (logging).
