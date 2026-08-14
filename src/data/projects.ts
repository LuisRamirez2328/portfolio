export const projects = [
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
