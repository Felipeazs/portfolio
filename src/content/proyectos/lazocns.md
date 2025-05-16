---
title: LazoCNS
img: "/lazocns.png"
url: "https://lazocns-4thdy.kinsta.app/"
---

Esta aplicación web está diseñada para apoyar la consultoría de negocios sostenibles. Su objetivo es proporcionar herramientas y conocimientos que ayuden a las empresas a analizar y mejorar sus capacidades organizacionales, posicionamiento estratégico y prácticas de sostenibilidad. La plataforma integra diversos marcos analíticos y componentes de visualización de datos para asistir tanto a consultores como a usuarios empresariales en la toma de decisiones informadas.

## Stack Web

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React con TypeScript
- **Enrutamiento:** @tanstack/react-router para enrutamiento declarativo y manejo de rutas anidadas
- **Gestión de Estado:** Zustand para manejo de estado global (estado de autenticación, información de usuario, proyecto seleccionado, rutas de navegación)
- **Obtención de Datos:** @tanstack/react-query para sincronización del estado del servidor, caché y gestión de consultas
- **Componentes UI:** Componentes personalizados de React (por ejemplo: manejo de errores, breadcrumbs, formularios)
- **Herramienta de Compilación:** Vite (implícita por la presencia de `vite.svg` en los assets estáticos)
- **Cliente API:** Cliente personalizado construido con Hono client (`hc`), tipado según las rutas de la API del backend para llamadas seguras
- **Autenticación:** Autenticación basada en tokens almacenados en `localStorage`, con refresco automático y cierre de sesión ante expiración o límite de tasa
- **Proveedores Externos:** Knock para integración de notificaciones

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Framework:** Hono (framework web ligero en TypeScript)
- **Base de Datos:** PostgreSQL accedida mediante Drizzle ORM con definiciones de esquema y relaciones
- **Validación de Datos:** Esquemas Zod para validación de entradas e inferencia de tipos
- **Autenticación:** Tokens JWT con mecanismo de refresco, control de acceso basado en roles (roles: super_admin, admin, user)
- **Middleware:** Cabeceras seguras, CORS configurado para origen específico, logging, manejo de errores y 404
- **Assets Estáticos:** Servidos desde el directorio `public/` con fallback SPA hacia `index.html`
- **Rutas de API:** Rutas tipadas generadas y consumidas por el cliente frontend para un contrato de API consistente
- **Servicios Externos:** PostHog para analítica, Redis para caché o manejo de sesiones, Cloudinary para subida de imágenes (implícito en la carpeta de proveedores), Resend para servicios de correo electrónico

## Funcionalidades

- Registro de usuarios, inicio y cierre de sesión, recuperación y cambio de contraseña con validación y manejo de errores
- Gestión de usuarios basada en roles con perfiles editables incluyendo subida de imágenes
- Creación y gestión de proyectos vinculados a usuarios autenticados
- Gestión de análisis FODA con categorías para fortalezas, debilidades, oportunidades y amenazas, cada una con nivel de importancia y puntuación
- Integración de notificaciones en tiempo real vía Knock
- Seguimiento analítico con PostHog
- Interfaz responsiva con estados de error y carga bien manejados
- API segura con refresco de token y manejo de límites de tasa
- Navegación mediante breadcrumbs que reflejan la ruta actual para una mejor UX
- Código modular y escalable con separación clara entre frontend y backend
