---
title: Mainstack Template
img: "/lazocns.png"
url: "https://mainstack.up.railway.app/"
---

Esta aplicación web está centrada en el usuario e incluye funciones de autenticación y gestión de usuarios. Soporta registro, inicio de sesión, restablecimiento de contraseña y edición de perfil. Probablemente cumple una función organizacional o administrativa, considerando la existencia de roles como "super_admin", "admin" y "user". La presencia de breadcrumbs y enrutamiento sugiere una interfaz con múltiples páginas o secciones, orientada a brindar una experiencia fluida con manejo de estado y errores.

## Stack Web

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)

- **Framework:** React con TypeScript
- **Enrutamiento:** `@tanstack/react-router` para enrutamiento declarativo y anidado
- **Gestión de Estado:** Zustand para estado global (sesión de usuario, breadcrumbs)
- **Obtención de Datos:** `@tanstack/react-query` para sincronización del estado del servidor y caché
- **Componentes UI:** Componentes personalizados (por ejemplo, `ErrorComponent`, `NotFoundComponent`) y hooks utilitarios
- **Herramienta de Construcción:** Bun (según scripts en `package.json`)
- **Estilos:** CSS importado desde `index.css` (posiblemente Tailwind o CSS personalizado)

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

- **Framework:** Hono (framework web ligero en TypeScript)
- **Base de Datos:** PostgreSQL, accedida mediante Drizzle ORM con definiciones de esquema en TypeScript
- **Validación de Esquema:** Esquemas Zod para validación de entradas y seguridad de tipos
- **Autenticación:** Gestión de contraseñas con políticas seguras y control de acceso basado en roles
- **Middleware:** Cabeceras de seguridad, CORS, logging, manejo de errores y servicio de archivos estáticos
- **Servicios:** Integraciones con Redis y PostHog inicializadas al arrancar la aplicación
- **Estructura de API:** Modular, con separación clara entre rutas, middleware y proveedores

## Herramientas y Servicios

- **Bun:** Runtime de JavaScript y gestor de paquetes para desarrollo y compilación rápidos
- **React Query:** Obtención de datos eficiente y con caché en el cliente
- **Zustand:** Gestión de estado ligera para React
- **Drizzle ORM:** ORM tipado para esquemas y consultas SQL
- **Zod:** Validación de esquemas en tiempo de ejecución para entradas de API
- **PostHog:** Integración de analítica y seguimiento de eventos
- **Redis:** Backend para caché o gestión de sesiones
- **Hono:** Framework backend optimizado para entornos edge y serverless
- **CUID2:** Generación de identificadores únicos para la base de datos
- **Sonner:** Notificaciones tipo toast en el frontend

## Funcionalidades

- **Autenticación de Usuario:** Registro, inicio de sesión, restablecimiento y cambio de contraseña con políticas de seguridad robustas
- **Control de Acceso Basado en Roles:** Roles de usuario con middleware que restringe el acceso según permisos
- **Enrutamiento y Navegación:** Rutas anidadas con componentes para errores y páginas no encontradas, breadcrumbs para contexto de navegación
- **Persistencia de Estado:** Token de acceso almacenado en `localStorage` y rehidratación al iniciar la app
- **Manejo de Errores:** Componente centralizado para mostrar errores de la API o de la aplicación
- **Analítica:** Integración con PostHog para seguimiento de vistas y eventos del usuario
- **Seguridad:** CORS configurado con orígenes permitidos, cabeceras seguras y middleware de logging
- **Servicio de Archivos Estáticos:** Entrega eficiente de archivos del frontend y fallback a `index.html` para enrutamiento SPA
- **UI Responsiva:** Componentes contenedores responsivos y sugerencias de diseño en el código del frontend

---

Este stack y arquitectura proveen una aplicación web full-stack moderna, escalable y mantenible, con enfoque en la experiencia del desarrollador, la seguridad y funcionalidades centradas en el usuario.
