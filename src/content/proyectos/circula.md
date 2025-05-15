---
title: Circula
img: "/lazocns.png"
url: "https://analisiscircular.com/circula-d"
---

## Purpose and Proposal

Plataforma Circula is a comprehensive frontend web application designed to support Looptest's Circula D and Circula M platforms. Its
primary purpose is to provide users with an intuitive and efficient interface for managing, analyzing, and reporting data related to
environmental responsibility, sustainability, and compliance. The platform aims to help companies and users assess their environmental
impact, optimize material usage, and comply with relevant regulations through detailed diagnostics, evaluations, and reporting tools.

The proposal behind Plataforma Circula is to unify multiple functionalities into a single, scalable React-based application that
supports two main product lines (Circula D and Circula M), each with tailored features such as user account management, product and
material analysis, subscription handling, and educational resources.

## Web Stack

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

- **React.js**: The application is built using React 19, leveraging its component-based architecture for modularity and reusability.
- **Vite**: Used as the build tool and development server, providing fast bundling and hot module replacement.
- **TypeScript**: Strongly typed JavaScript superset for improved developer experience and code safety.
- **React Router v7**: For client-side routing, enabling nested routes and lazy loading of components.
- **React Query (@tanstack/react-query)**: Efficient data fetching, caching, and synchronization with server state.
- **React Hook Form**: For performant and easy-to-use form handling.
- **Zod**: Schema validation library for type-safe form and data validation.
- **Chart.js and react-chartjs-2**: For rich data visualization with charts such as pie, radar, and doughnut charts.
- **jsPDF and html2canvas**: For generating PDF reports from the application UI.
- **Cloudinary**: Image management and optimization service integrated for handling user-uploaded images.
- **React Toastify**: For elegant and customizable toast notifications.
- **React Tooltip**: To provide interactive tooltips enhancing user experience.
- **DaisyUI and TailwindCSS**: Utility-first CSS framework and component library for styling and responsive design.

### Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?logo=redis&logoColor=white)

## Tools and Libraries

- **Express**: Web framework for routing and middleware.
- **Helmet**: Security headers to protect HTTP responses.
- **express-rate-limit**: Rate limiting middleware to protect endpoints from abuse.
- **express-mongo-sanitize**: Sanitizes user inputs to prevent NoSQL injection attacks.
- **cors**: Configures Cross-Origin Resource Sharing policies.
- **morgan**: HTTP request logger middleware.
- **express-actuator**: Adds health and metrics endpoints for monitoring.
- **toobusy-js**: Protects server from overload by detecting event loop lag.
- **compression**: Gzip compression for HTTP responses.
- **dotenv**: Loads environment variables from `.env` files.
- **Sentry**: Error tracking and monitoring service integration.
- **number-precision (NP)**: Library for precise floating-point arithmetic.

## Services

- **MongoDB connection**: Managed via `mongoConnect` service for database connectivity.
- **Redis connection**: Managed via `redisConnect` service for caching or session management.
- **File system**: Creates and manages a JSON file (`indicador.json`) for indicator data persistence.

## Features

- **Error Handling**: Differentiates error responses between development/testing and production environments, with operational error
  detection.
- **Rate Limiting**: Limits login attempts to 10 per hour, skipping successful requests to reduce user friction.
- **CORS Configuration**: Dynamically configured based on environment variables and deployment environment.
- **Health Check Endpoint**: `/api/health` endpoint to verify server status.
- **Root Endpoint**: Returns client IP and forwarded IP information for diagnostics.
- **DoS Protection**: Uses `toobusy-js` to detect server overload and respond with a friendly message.
- **Modular Routing**: Organized routers for newsletter, indicador, usuario, producto, consultas, calendario, and flow-related APIs.
- **Security Enhancements**: Input sanitization, security headers, and disabling of `x-powered-by` header.
- **Logging**: Uses `morgan` for concise HTTP request logging.
- **Proxy Trust**: Configured to trust reverse proxies for accurate client IP detection.
- **Sentry Integration**: Initialized with environment-specific settings for error monitoring.
- **Environment-based Configuration**: Uses environment variables for URLs, ports, and operational modes.
- **Response Compression**: Compresses HTTP responses to improve performance.
- **User Authentication and Authorization**: Components like `LoggedInComponent` ensure protected routes and user session management.
- **Multi-Product Support**: Separate routes and layouts for Circula D and Circula M, each with their own dashboards, product
  management, and evaluation tools.
- **Lazy Loading and Code Splitting**: Use of React's `lazy` and `Suspense` to optimize initial load times by loading components on
  demand.
- **Subscription and Payment Handling**: Integration of subscription status components and payment steps for managing user
  subscriptions and purchases.
- **Data Visualization and Reporting**: Multiple chart types and PDF export capabilities to help users visualize and share their
  environmental data.
- **Responsive and Accessible UI**: Use of TailwindCSS and DaisyUI ensures the app is responsive across devices and accessible.
- **Routing and Navigation**: Nested routing structure supports complex navigation flows including user profiles, product details, and
  educational resources.
- **Testing and Quality Tools**: Use of Vitest for testing, ESLint for linting, and Prettier for code formatting ensures code quality
  and maintainability.
- **CI/CD Pipeline**: GitHub Actions workflow for automated testing and deployment to Vercel.

Plataforma Circula is a modern, well-architected React application focused on environmental data management and compliance. It
leverages a rich ecosystem of tools and libraries to provide a performant, scalable, and user-friendly experience. The dual-platform
support (Circula D and M) with lazy loading and modular routing demonstrates thoughtful design for maintainability and user
segmentation. The integration of data visualization, PDF reporting, and subscription management rounds out a comprehensive solution
for its target users.
