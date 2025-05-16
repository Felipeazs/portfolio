---
title: Circula
img: "/lazocns.png"
url: "https://analisiscircular.com/circula-d"
---

**Plataforma Circula** es una aplicación web frontend integral diseñada para dar soporte a las plataformas **Circula D** y **Circula M** de Looptest. Su objetivo principal es proporcionar a los usuarios una interfaz intuitiva y eficiente para gestionar, analizar y reportar datos relacionados con la responsabilidad ambiental, sostenibilidad y cumplimiento normativo. La plataforma busca ayudar a empresas y usuarios a evaluar su impacto ambiental, optimizar el uso de materiales y cumplir con regulaciones vigentes mediante herramientas detalladas de diagnóstico, evaluación y generación de reportes.

La propuesta detrás de Plataforma Circula es unificar múltiples funcionalidades en una única aplicación escalable basada en **React**, que respalda dos líneas principales de producto (Circula D y Circula M), cada una con funciones específicas como gestión de cuentas de usuario, análisis de productos y materiales, administración de suscripciones y recursos educativos.

## Stack Web

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

- **React.js**: La aplicación está construida con React 19, aprovechando su arquitectura basada en componentes para lograr modularidad y reutilización.
- **Vite**: Utilizado como herramienta de construcción y servidor de desarrollo, ofrece bundling rápido y reemplazo en caliente de módulos.
- **TypeScript**: Superset fuertemente tipado de JavaScript que mejora la experiencia del desarrollador y la seguridad del código.
- **React Router v7**: Para el enrutamiento del lado del cliente, permitiendo rutas anidadas y carga diferida de componentes.
- **React Query (@tanstack/react-query)**: Obtención de datos eficiente, con caché y sincronización con el estado del servidor.
- **React Hook Form**: Para el manejo de formularios de forma performante y sencilla.
- **Zod**: Librería de validación de esquemas para validación segura de datos y formularios.
- **Chart.js y react-chartjs-2**: Visualización rica de datos mediante gráficos de torta, radar, doughnut, entre otros.
- **jsPDF y html2canvas**: Para generación de reportes en PDF desde la interfaz de la aplicación.
- **Cloudinary**: Servicio de gestión y optimización de imágenes integrado para archivos subidos por usuarios.
- **React Toastify**: Notificaciones tipo "toast" elegantes y personalizables.
- **React Tooltip**: Tooltips interactivos para mejorar la experiencia de usuario.
- **DaisyUI y TailwindCSS**: Framework CSS utilitario y librería de componentes para diseño responsivo y estilizado.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

## Herramientas y Librerías

- **Express**: Framework web para enrutamiento y middleware.
- **Helmet**: Cabeceras de seguridad para proteger las respuestas HTTP.
- **express-rate-limit**: Middleware de limitación de tasa para proteger los endpoints contra abuso.
- **express-mongo-sanitize**: Sanea entradas del usuario para prevenir ataques de inyección NoSQL.
- **cors**: Configuración de políticas de CORS (Compartición de Recursos de Origen Cruzado).
- **morgan**: Middleware para logging de solicitudes HTTP.
- **express-actuator**: Endpoints de salud y métricas para monitoreo.
- **toobusy-js**: Detecta sobrecarga del servidor mediante el monitoreo del event loop.
- **compression**: Compresión Gzip para respuestas HTTP.
- **dotenv**: Carga variables de entorno desde archivos `.env`.
- **Sentry**: Integración con servicio de monitoreo y seguimiento de errores.
- **number-precision (NP)**: Librería para cálculos precisos con números flotantes.

## Servicios

- **Conexión a MongoDB**: Gestionada mediante el servicio `mongoConnect`.
- **Conexión a Redis**: Gestionada mediante el servicio `redisConnect` para caché o manejo de sesiones.
- **Sistema de Archivos**: Creación y gestión de un archivo JSON (`indicador.json`) para persistencia de datos de indicadores.

## Funcionalidades

- **Manejo de Errores**: Diferencia respuestas de error entre entornos de desarrollo/pruebas y producción, con detección de errores operacionales.
- **Limitación de Tasa**: Limita intentos de inicio de sesión a 10 por hora, omitiendo solicitudes exitosas para mejorar la experiencia del usuario.
- **Configuración de CORS**: Configuración dinámica basada en variables de entorno y entorno de despliegue.
- **Endpoint de Salud**: Endpoint `/api/health` para verificar el estado del servidor.
- **Endpoint Raíz**: Devuelve IP del cliente y dirección IP reenviada para diagnósticos.
- **Protección contra DoS**: Usa `toobusy-js` para detectar sobrecargas del servidor y responder con mensajes amigables.
- **Enrutamiento Modular**: Rutas organizadas para newsletter, indicador, usuario, producto, consultas, calendario y APIs relacionadas a flujo.
- **Mejoras de Seguridad**: Sanitización de entradas, cabeceras seguras y desactivación del encabezado `x-powered-by`.
- **Logging**: Uso de `morgan` para registro conciso de solicitudes HTTP.
- **Proxy Trust**: Configuración para confiar en proxies reversos y detectar correctamente la IP del cliente.
- **Integración con Sentry**: Inicialización con configuración específica según entorno para monitoreo de errores.
- **Configuración Basada en Entorno**: Uso de variables de entorno para URLs, puertos y modos de operación.
- **Compresión de Respuestas**: Compresión de respuestas HTTP para mejorar el rendimiento.
- **Autenticación y Autorización de Usuarios**: Componentes como `LoggedInComponent` aseguran rutas protegidas y manejo de sesiones.
- **Soporte Multi-Producto**: Rutas y layouts separados para Circula D y Circula M, con dashboards, gestión de productos y herramientas de evaluación propias.
- **Carga Diferida y División de Código**: Uso de `lazy` y `Suspense` de React para cargar componentes bajo demanda y optimizar tiempos de carga.
- **Gestión de Suscripciones y Pagos**: Integración de componentes de estado de suscripción y pasos de pago para manejo de compras.
- **Visualización y Reporte de Datos**: Múltiples tipos de gráficos y capacidades de exportación a PDF para que usuarios visualicen y compartan sus datos ambientales.
- **UI Responsiva y Accesible**: Uso de TailwindCSS y DaisyUI para asegurar compatibilidad en múltiples dispositivos y accesibilidad.
- **Navegación y Enrutamiento**: Estructura de rutas anidadas que permite flujos complejos como perfiles de usuario, detalles de productos y recursos educativos.
- **Pruebas y Herramientas de Calidad**: Uso de Vitest para testing, ESLint para linting y Prettier para formateo de código que aseguran calidad y mantenibilidad.
- **Pipeline CI/CD**: Flujo de trabajo con GitHub Actions para pruebas automáticas y despliegue en Vercel.

---

**Plataforma Circula** es una aplicación moderna y bien estructurada en React, enfocada en la gestión de datos ambientales y cumplimiento normativo. Aprovecha un ecosistema rico de herramientas y librerías para ofrecer una experiencia rápida, escalable y amigable. El soporte dual para Circula D y M con carga diferida y enrutamiento modular demuestra un diseño pensado para la mantenibilidad y segmentación de usuarios. La integración de visualización de datos, reportes PDF y manejo de suscripciones conforma una solución integral para sus usuarios objetivo.
