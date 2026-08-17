export const projects = [
  {
    title: "TaskNest — Task Management REST API",
    type: "Backend REST API",
    role: "Laravel API: auth Sanctum, CRUD, filtros & tests",
    description:
      "A task management REST API built with Laravel 13 and PHP 8.4. Token authentication with Sanctum (register/login/logout), a scoped CRUD for tasks with soft deletes and restore, plus filters by status/priority, full-text search, sorting and pagination. Validation lives in Form Requests with whitelisted enums, responses are shaped with API Resources and every mutation is guarded by a TaskPolicy so users only touch their own tasks. Ships with a 25-test Feature suite (auth, CRUD, filters, ownership, 401/403/422) run by a GitHub Actions pipeline together with Laravel Pint code-style checks, and a demo seeder (demo@tasknest.app / password).",
    img: "/tasknest-preview.svg",
    tags: ["Laravel 13", "PHP 8.4", "Sanctum", "Eloquent", "REST API", "Soft Deletes", "Form Requests", "API Resources", "Policies", "SQLite/PostgreSQL", "PHPUnit", "Laravel Pint", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/tasknest",
  },
  {
    title: "CineNest — Movie & TV Explorer",
    type: "Mobile App (React Native)",
    role: "Expo app: UI, TMDB client, favorites & web demo",
    description:
      "A cross-platform movie and TV explorer built with React Native + Expo (SDK 57). Dark golden-themed UI with home sections for trending movies/series, search with debounce and type filters, a detail screen with poster, genres and rating, and per-device favorites persisted with AsyncStorage. The TMDB client is fully typed and degrades gracefully to a rich mock catalog when no API key is set. Ships with 24 jest-expo unit tests, a react-native-web build exported to static HTML and a live demo deployed to GitHub Pages via GitHub Actions.",
    img: "/cinenest-preview.svg",
    tags: ["React Native", "Expo", "TypeScript", "React Navigation", "AsyncStorage", "TMDB API", "react-native-web", "jest-expo", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/cinenest",
    caseStudy: "/case-studies/cinenest",
  },
  {
    title: "JobNest — Job Application Tracker",
    type: "Vue SPA",
    role: "Vue 3 frontend, kanban drag & drop & dashboards",
    description:
      "A Vue 3 + TypeScript SPA that tracks job applications with an in-memory mock service (no backend). Dashboard with KPIs, monthly bar chart and stage distribution (ECharts loaded lazily, cutting the route bundle from ~550 kB to ~10 kB), a kanban pipeline with native drag & drop and per-column quick-add, and a filterable applications table with full CRUD. Forms validated with vee-validate + zod, server state with TanStack Vue Query, Pinia for theme/filters and a 53-test suite (42 unit + 11 Playwright E2E) run in a GitHub Actions pipeline.",
    img: "/jobnest-preview.svg",
    tags: ["Vue 3", "TypeScript", "Vite", "Tailwind v4", "shadcn-vue", "Pinia", "TanStack Query", "ECharts", "vee-validate + zod", "Vitest", "Playwright", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/jobnest",
    demo: "https://luisramirez2328.github.io/jobnest/",
  },
  {
    title: "BookNest Angular — Enterprise Client",
    type: "Full-Stack Web App",
    role: "Angular SPA: catalog, JWT auth, loans & admin",
    description:
      "An enterprise-grade Angular 19 single-page application that consumes the BookNest Spring Boot API. Standalone components with lazy-loaded routes, state managed with Signals (AuthService + ToastService without external libraries), typed Reactive Forms with per-field server validation, a functional JWT interceptor and a centralized HTTP error handler (401 → auto logout with return URL, 400 field errors → form display, 5xx → toast). Protected routes via functional guards by role (ADMIN/USER), an admin panel for books/authors/categories and a 46-test Karma/Jasmine suite run headless in a GitHub Actions pipeline.",
    img: "/booknest-angular-preview.svg",
    tags: ["Angular 19", "TypeScript", "Signals", "Reactive Forms", "JWT", "HTTP Interceptors", "Guards", "Lazy Loading", "Karma + Jasmine", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/booknest-angular",
  },
  {
    title: "BookNest — Library Management System",
    type: "Full-Stack Web App",
    role: "Java/Spring Boot backend, REST API & JWT auth",
    description:
      "A library management platform with a Spring Boot 4 REST API in Java 17. JWT authentication with ADMIN/USER roles, a public paginated book catalog with search and category filters, and a loan system that automatically tracks available copies on borrow/return. Persistence with Spring Data JPA (H2 in-memory for dev, PostgreSQL via Docker), OpenAPI docs in Swagger UI, a React + Vite frontend, 29 backend unit/integration tests (Mockito + MockMvc/H2) and 30 frontend tests (Vitest + React Testing Library), all run by a GitHub Actions pipeline.",
    img: "/booknest-preview.svg",
    tags: ["Java 17", "Spring Boot 4", "Spring Security", "JWT", "Spring Data JPA", "REST API", "H2/PostgreSQL", "React", "Vitest", "JUnit + Mockito", "Docker", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/booknest",
  },
  {
    title: "HabitHarbor — SwiftUI Habit Tracker",
    type: "iOS App",
    role: "SwiftUI development, data model & unit testing",
    description:
      "A native iOS habit tracker built with SwiftUI and Swift Charts. Dark minimal UI with streak tracking, weekly charts and a today-progress ring, powered by an @Observable store with Codable JSON persistence. All business logic (streaks, weekly progress, persistence) lives in a separate HabitCore Swift package covered by XCTest, with a GitHub Actions pipeline running swift test plus an xcodebuild simulator build.",
    img: "/habithub-preview.svg",
    tags: ["Swift", "SwiftUI", "Swift Charts", "iOS", "@Observable", "XCTest", "Swift Package Manager", "XcodeGen"],
    code: "https://github.com/LuisRamirez2328/habithub",
  },
  {
    title: "ExpenseSense — Personal Finance Analytics",
    type: "Full-Stack Data App",
    role: "Python backend, data analytics & dashboard development",
    description:
      "A full-stack analytics platform that turns an expenses CSV into interactive insights. A FastAPI + pandas engine cleans the data and computes category breakdowns, monthly trends, weekly patterns and top expenses, served through a documented REST API and visualized in a dark React + Recharts dashboard with a demo-mode fallback. Shipped with 18 pytest tests, multi-stage Docker images in docker-compose and a GitHub Actions CI pipeline.",
    img: "/expensesense-preview.svg",
    tags: ["Python", "FastAPI", "pandas", "REST API", "React", "Recharts", "pytest", "Docker", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/expensesense",
  },
  {
    title: "DevBoard — Team Project Management",
    type: "Full-Stack App",
    role: "Full-stack: GraphQL API, PostgreSQL & real-time frontend",
    description:
      "A real-time team kanban platform. GraphQL API on Apollo Server (Express) with JWT auth, per-board roles (owner/admin/member), drag & drop task reordering and WebSocket live updates via graphql-subscriptions. PostgreSQL with Prisma in production and SQLite for zero-config dev/CI, Next.js + urql frontend, Docker Compose and a GitHub Actions pipeline that runs the 18-test suite against a real Postgres service.",
    img: "/devboard-preview.png",
    tags: ["Next.js", "TypeScript", "GraphQL", "Apollo", "Prisma", "PostgreSQL", "SQLite", "WebSocket", "Docker", "CI/CD"],
    code: "https://github.com/LuisRamirez2328/devboard",
  },
  {
    title: "FireNotes — Next.js + Firebase",
    type: "Full-Stack App",
    role: "Frontend, auth & cloud backend",
    description:
      "A full-stack notes app with Google sign-in (Firebase Auth) and per-user persistence in Cloud Firestore. Built on the Next.js App Router with server-rendered pages and a client dashboard, plus a zero-config demo mode that stores notes locally until a Firebase project is connected.",
    img: "/firenotes-preview.png",
    tags: ["Next.js", "React", "Firebase", "Firestore", "Tailwind"],
    code: "https://github.com/LuisRamirez2328/firenotes",
  },
  {
    title: "TaskFlow — Full-Stack Task Manager",
    type: "Full-Stack App",
    role: "Backend, REST API & frontend development",
    description:
      "A full-stack task manager with a REST API built in Node.js, Express and TypeScript with a MongoDB repository (plus an in-memory fallback), and a React + Redux Toolkit client styled with Tailwind. Containerized with Docker Compose and wired to a CI/CD pipeline that runs lint, tests and builds.",
    img: "/taskflow-preview.png",
    tags: ["TypeScript", "Node.js", "Express", "MongoDB", "React", "Redux", "Docker"],
    code: "https://github.com/LuisRamirez2328/taskflow",
  },
  {
    title: "Cyclistic Bike-Share Dashboard",
    type: "Data Dashboard",
    role: "Data analysis & dashboard design",
    description:
      "A data analytics case study on Chicago bike-share usage (Divvy dataset). I built an interactive React dashboard with KPI cards, stacked monthly rides, member vs. casual split, hourly and weekly patterns and top docking stations, revealing how annual members and casual riders use the service differently.",
    img: "/cyclistic-preview.png",
    tags: ["React", "Vite", "Tailwind", "Recharts"],
    code: "https://github.com/LuisRamirez2328/cyclistic-dashboard",
  },
  {
    title: "Social Network for Scientists",
    type: "Mobile App",
    role: "Kotlin & Compose Multiplatform development",
    description:
      "An Android app built with Kotlin Multiplatform and Compose that connects researchers and scientists to collaborate and share knowledge. It features onboarding and sign-up flows, a home feed, scientist profiles, research groups, live streaming with real-time comments, reports, visits and payments, wired to a REST API with Retrofit, Hilt dependency injection and Coil image loading.",
    img: "/redsocial.jpg",
    tags: ["Kotlin", "Compose Multiplatform", "Android", "Retrofit", "Hilt", "Coil"],
    code: "https://github.com/Noctis-Dev/sci-all.git",
    figma: "https://www.figma.com/design/CQR6rzqPXvIe1IL3PNvIan/Sci---all?node-id=0-1&t=dEeqHHjjbnEFvPp5-1",
  },
  {
    title: "Bus Routes Mobile App",
    type: "Mobile App",
    role: "Flutter mobile development",
    description:
      "A Flutter app that shows bus routes and points of interest in Tuxtla Gutiérrez, helping users navigate public transport and discover places. It renders routes on Google Maps with polylines and markers via the Directions API, includes route details, comments, interest zones, parks/restaurants/schools search, sign-up and profile with photo upload.",
    img: "/bus.jpg",
    tags: ["Flutter", "Dart", "Google Maps", "Geolocation", "REST API"],
    code: "https://github.com/LuisRamirez2328/MovilRouteExplorer.git",
    figma: "https://www.figma.com/design/NhyG5INHZOS054lCF0UMRo/Route-Explorer?node-id=0-1&p=f&t=FkjG03lWNlra9psU-0",
  },
  {
    title: "Agronomist Web Store",
    type: "Web App",
    role: "Frontend development",
    description:
      "A React storefront for agronomists to browse and buy tools, seeds and supplies. Built with Vite and styled-components using an atomic component architecture, it includes a product catalog, gallery, product and image upload, user registration and login with SweetAlert2 feedback, and React Router navigation.",
    img: "/tienda.jpg",
    tags: ["React", "Vite", "styled-components", "React Router", "SweetAlert2"],
    code: "https://github.com/LuisRamirez2328/Agron-shop.git",
    figma: "https://www.figma.com/design/q4Ynlz1wWGYJyDtewDPrUt/Agron-Shop%2B221260-221249-213537?node-id=184-15&t=33WHfKBi9sVzgEue-1",
  },
  {
    title: "React Fashion Store: E-commerce Web Application",
    type: "Web App",
    role: "Frontend development",
    description:
      "A clothing e-commerce app built with React: users browse products, view details, manage a shopping cart and go through checkout. State is managed with the Context API (cart, products and sidebar), and an Express server serves the production build inside a Docker container managed with PM2.",
    img: "/ecomerce.jpg",
    tags: ["React", "Tailwind", "React Router", "Context API", "Express", "Docker"],
    code: "https://github.com/LuisRamirez2328/Ecomerce.git",
  },
  {
    title: "ZenPulse Dashboard",
    type: "Web App",
    role: "Frontend development",
    description:
      "A React dashboard that monitors stress levels from a wearable device, tracking activity, heart rate, oxygenation and body temperature in real time. Live sensor data streams over WebSocket into ApexCharts visualizations, with login, register and settings flows powered by React Router and a shared user context.",
    img: "/dashborad.jpg",
    tags: ["React", "Vite", "Tailwind", "ApexCharts", "WebSocket", "React Router"],
    code: "https://github.com/LuisRamirez2328/ZPulseFront.git",
  },
  {
    title: "Flower Shop Mobile App",
    type: "Mobile App",
    role: "UI/UX design",
    description:
      "A UI/UX prototype in Figma for a flower shop e-commerce app. It covers the full purchase flow: welcome screen, login and register (with terms and social sign-in), a flower catalog with categories (Roses, Tulips, Sunflowers), product detail with description and Add to Cart, shopping cart and a payment-method selection screen. Includes both a static mockup and an interactive prototype.",
    img: "/flores.jpg",
    tags: ["Figma", "UI/UX Design"],
    figma: "https://www.figma.com/design/AuAYkTCmplYzOaWMw2M2CD/Floreria?node-id=21-10&p=f&t=eSNV1Q88pxV5iYD2-0",
  },
];
