import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Award, Check, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { FaTools, FaUsers, FaLaptopCode } from "react-icons/fa"
import { PiDatabase } from "react-icons/pi"
import { MdDesignServices } from "react-icons/md"
import { IoCodeSlash } from "react-icons/io5"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"
import cvUrl from "../cv/CV_Luis_Ramirez_ATS.pdf"
import cvEnUrl from "../cv/CV_Luis_Ramirez_EN.pdf"

const HEADER_NAV = [
  { id: "about-me-details", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

const LEVEL_STYLES = {
  Avanzado: "border-[#22c55e]/30 text-[#22c55e]",
  Intermedio: "border-[#febc2e]/30 text-[#febc2e]",
  Básico: "border-[#737373]/40 text-[#a3a3a3]",
}

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: IoCodeSlash,
    skills: [
      { name: "JavaScript", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "HTML/CSS", level: "Avanzado" },
      { name: "Dart", level: "Intermedio" },
      { name: "Python", level: "Intermedio" },
      { name: "Java", level: "Intermedio" },
      { name: "Kotlin", level: "Intermedio" },
      { name: "Swift", level: "Básico" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: FaLaptopCode,
    skills: [
      { name: "React", level: "Avanzado" },
      { name: "Next.js", level: "Intermedio" },
      { name: "React Native", level: "Intermedio" },
      { name: "Expo", level: "Intermedio" },
      { name: "Redux", level: "Intermedio" },
      { name: "Flutter", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "Vue.js", level: "Intermedio" },
      { name: "Vite", level: "Intermedio" },
      { name: "Pinia", level: "Intermedio" },
      { name: "TanStack Query", level: "Intermedio" },
      { name: "ECharts", level: "Intermedio" },
      { name: "Angular", level: "Intermedio" },
      { name: "Laravel", level: "Intermedio" },
      { name: "FastAPI", level: "Intermedio" },
      { name: "Spring Boot", level: "Intermedio" },
      { name: "SwiftUI", level: "Intermedio" },
      { name: "Recharts", level: "Intermedio" },
      { name: "pandas", level: "Intermedio" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    skills: [
      { name: "Git/GitHub", level: "Avanzado" },
      { name: "Figma", level: "Avanzado" },
      { name: "VS Code", level: "Avanzado" },
      { name: "CI/CD", level: "Intermedio" },
      { name: "Jest (Testing)", level: "Intermedio" },
      { name: "Vitest", level: "Intermedio" },
      { name: "Playwright", level: "Intermedio" },
      { name: "Firebase", level: "Intermedio" },
      { name: "Adobe XD", level: "Intermedio" },
      { name: "Performance (Core Web Vitals)", level: "Intermedio" },
      { name: "Docker", level: "Básico" },
      { name: "Karma/Jasmine", level: "Intermedio" },
      { name: "XCTest", level: "Intermedio" },
      { name: "pytest", level: "Intermedio" },
      { name: "OpenAPI/Swagger", level: "Intermedio" },
      { name: "Swift Package Manager", level: "Intermedio" },
    ],
  },
  {
    title: "Databases & APIs",
    icon: PiDatabase,
    skills: [
      { name: "REST APIs", level: "Avanzado" },
      { name: "Node.js", level: "Intermedio" },
      { name: "MongoDB", level: "Intermedio" },
      { name: "SQL", level: "Intermedio" },
      { name: "NoSQL", level: "Intermedio" },
      { name: "GraphQL", level: "Básico" },
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "Prisma", level: "Intermedio" },
      { name: "Firebase Firestore", level: "Intermedio" },
    ],
  },
  {
    title: "UX/UI Design",
    icon: MdDesignServices,
    skills: [
      { name: "Wireframing", level: "Avanzado" },
      { name: "Prototyping", level: "Avanzado" },
      { name: "Visual Design", level: "Avanzado" },
      { name: "User Research", level: "Intermedio" },
      { name: "Usability Testing", level: "Intermedio" },
      { name: "Design Systems", level: "Intermedio" },
      { name: "Accessibility (WCAG)", level: "Intermedio" },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    skills: [
      { name: "Problem Solving", level: "Avanzado" },
      { name: "Teamwork", level: "Avanzado" },
      { name: "Communication", level: "Avanzado" },
      { name: "Adaptability", level: "Avanzado" },
    ],
  },
]

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "luisantonionucamendi@gmail.com",
    action: () => window.open("mailto:luisantonionucamendi@gmail.com", "_blank"),
    button: "Send Email",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "LuisRamirez2328",
    action: () => window.open("https://github.com/LuisRamirez2328", "_blank"),
    button: "View Profile",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Luis Antonio Ramirez Nucamendi",
    action: () => window.open("https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/", "_blank"),
    button: "Connect",
  },
]

const CERTIFICATIONS = [
  {
    title: "Google UX Design",
    issuer: "Google · Coursera",
    status: "In progress",
    description:
      "Google UX Design Professional Certificate — 5 of 7 courses completed. End-to-end UX process: research, wireframing, prototyping, and usability testing.",
    courses: [
      {
        name: "Foundations of User Experience (UX) Design",
        url: "https://coursera.org/share/ec186b9f8590b23b104351c0577f8280",
      },
      {
        name: "Start the UX Design Process: Empathize, Define, and Ideate",
        url: "https://coursera.org/share/8d61ce08c2c118dba4eeb311d11589c8",
      },
      {
        name: "Build Wireframes and Low-Fidelity Prototypes",
        url: "https://coursera.org/share/afc2737ab41f32d7be35714c7ae1dd1c",
      },
      {
        name: "Conduct UX Research and Test Early Concepts",
        url: "https://coursera.org/share/e5ff8af4fd5aca437bdd13961396cde9",
      },
      {
        name: "Create High-Fidelity Designs and Prototypes in Figma",
        url: "https://coursera.org/share/db022a390d19ddb002aa5d26d5720df4",
      },
    ],
  },
  {
    title: "Google Data Analytics",
    issuer: "Google · Coursera",
    status: "Completed",
    description:
      "Google Data Analytics Professional Certificate — 8 courses completed. End-to-end data analysis: cleaning, analysis, visualization, and data-driven storytelling.",
    courses: [
      {
        name: "Foundations: Data, Data, Everywhere",
        url: "https://coursera.org/share/aa637797bbd71711b02a4b77bb68d09b",
      },
      {
        name: "Ask Questions to Make Data-Driven Decisions",
        url: "https://coursera.org/share/4b8a7b9397661f1936c569b387621c13",
      },
      {
        name: "Prepare Data for Exploration",
        url: "https://coursera.org/share/3d5d368d47b4b730b312798ea2ffecfc",
      },
      {
        name: "Process Data from Dirty to Clean",
        url: "https://coursera.org/share/50640871f285451d5861cba105ea21c0",
      },
      {
        name: "Analyze Data to Answer Questions",
        url: "https://coursera.org/share/be710bec7bfdf508fd1fb15186964797",
      },
      {
        name: "Share Data Through the Art of Visualization",
        url: "https://coursera.org/share/9ee0a83a66f4e75a96af256433af58a5",
      },
      {
        name: "Data Analysis with R Programming",
        url: "https://coursera.org/share/91e33fe942d6c6ff372c5f67b51f5c5d",
      },
      {
        name: "Google Data Analytics Capstone: Complete a Case Study",
        url: "https://coursera.org/share/f5dcc992cc0f648d0390a578187f9739",
      },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

function SectionHeading({ tag, title, description }) {
  return (
    <motion.div className="mb-14" variants={fadeUp}>
      <span className="section-tag">{tag}</span>
      <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-[#737373]">{description}</p>}
    </motion.div>
  )
}

function SkillTag({ name, level }) {
  return (
    <div className="mb-2.5 flex items-center justify-between gap-3 font-mono text-sm">
      <span className="text-[#a3a3a3]">{name}</span>
      <span className={`rounded-full border px-2.5 py-0.5 text-xs ${LEVEL_STYLES[level] || LEVEL_STYLES.Básico}`}>
        {level}
      </span>
    </div>
  )
}

function ProfileWindow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm perspective-[1000px]"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <motion.div
        className="terminal-window glow-green"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-[#525252]">profile.jpg</span>
          <div className="w-[52px]" />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/foto2.jpg"
            alt="Luis Ramírez"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111]/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function HeroTypewriter() {
  const [text] = useTypewriter({
    words: ["I build clean, user-centered interfaces."],
    loop: 1,
    typeSpeed: 45,
    deleteSpeed: 0,
    delaySpeed: 800,
  })

  return (
    <span className="text-[#737373]">
      {text}
      <Cursor cursorStyle="|" cursorColor="#22c55e" />
    </span>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="dev-bg-animated flex min-h-screen flex-col text-[#fafafa]">
      <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.a
            href="#about"
            className="font-mono text-lg font-semibold text-[#fafafa]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#22c55e]">&lt;/&gt;</span> luis.dev
          </motion.a>

          <nav className="hidden items-center gap-6 md:flex">
            {HEADER_NAV.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <span className="hash">#</span> {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={cvUrl}
              download="CV_Luis_Ramirez_ES.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#404040] px-3 py-1.5 font-mono text-xs text-[#fafafa] transition-colors hover:border-[#22c55e] hover:text-[#22c55e]"
            >
              <Download className="size-3.5" />
              CV ES
            </a>
            <a
              href={cvEnUrl}
              download="CV_Luis_Ramirez_EN.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#404040] px-3 py-1.5 font-mono text-xs text-[#fafafa] transition-colors hover:border-[#22c55e] hover:text-[#22c55e]"
            >
              <Download className="size-3.5" />
              CV EN
            </a>
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="text-[#737373] transition-colors hover:text-[#22c55e]"
              aria-label="GitHub profile"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="text-[#737373] transition-colors hover:text-[#22c55e]"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          <button
            className="text-[#fafafa] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            className="border-t border-[#262626] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col gap-1 p-4">
              {HEADER_NAV.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link block rounded-lg px-4 py-3 hover:bg-[#1a1a1a]"
                  >
                    <span className="hash">#</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section id="about" className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute top-1/4 left-1/4 size-96 rounded-full bg-[#22c55e]/5 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 bottom-1/4 size-64 rounded-full bg-[#22c55e]/3 blur-3xl" />

          <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
            <motion.div className="space-y-6" initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span className="status-badge">
                  <span className="status-dot" />
                  Available for work
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-2">
                <p className="code-bracket text-base md:text-lg">
                  <span className="code-comment">{"// "}</span>
                  const developer = {"{"}
                </p>
                <h1 className="pl-4 text-3xl leading-snug font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  <span className="text-[#fafafa]">Hi, I&apos;m Luis Ramirez.</span>
                  <br />
                  <HeroTypewriter />
                </h1>
                <p className="code-bracket text-base md:text-lg">{"}"}</p>
              </motion.div>

              <motion.p variants={fadeUp} className="max-w-lg leading-relaxed text-[#737373]">
                Front-end developer and UX/UI designer focused on building intuitive web and mobile experiences with
                modern tools and thoughtful design.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <a href="#projects">
                  <button className="btn-neon glow-green-hover">
                    View my work <ArrowUpRight className="size-4" />
                  </button>
                </a>
                <a href={cvUrl} download="CV_Luis_Ramirez_ES.pdf">
                  <button className="btn-outline">
                    <Download className="size-4" />
                    CV Español
                  </button>
                </a>
                <a href={cvEnUrl} download="CV_Luis_Ramirez_EN.pdf">
                  <button className="btn-outline">
                    <Download className="size-4" />
                    CV English
                  </button>
                </a>
                <a href="#contact">
                  <button className="btn-outline">
                    <Mail className="size-4" />
                    Get in touch
                  </button>
                </a>
              </motion.div>
            </motion.div>

            <ProfileWindow />
          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about-me-details"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="about"
              title="Passion for building digital products"
              description="My journey, what drives me, and how I approach every project."
            />

            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                variants={fadeUp}
                className="dev-card overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="terminal-titlebar">
                  <div className="terminal-dots">
                    <span className="terminal-dot bg-[#ff5f57]" />
                    <span className="terminal-dot bg-[#febc2e]" />
                    <span className="terminal-dot bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-xs text-[#525252]">about.md</span>
                  <div className="w-[52px]" />
                </div>
                <div className="space-y-4 p-6 font-mono text-sm leading-relaxed">
                  <p className="text-[#737373]">
                    <span className="text-[#22c55e]">const</span>{" "}
                    <span className="text-[#fafafa]">passion</span> ={" "}
                    <span className="text-[#febc2e]">&quot;creating intuitive apps&quot;</span>;
                  </p>
                  <p className="text-[#737373]">
                    <span className="text-[#22c55e]">const</span>{" "}
                    <span className="text-[#fafafa]">focus</span> ={" "}
                    <span className="text-[#febc2e]">&quot;web &amp; mobile UX&quot;</span>;
                  </p>
                  <p className="text-[#737373]">
                    <span className="text-[#22c55e]">const</span>{" "}
                    <span className="text-[#fafafa]">mindset</span> ={" "}
                    <span className="text-[#febc2e]">&quot;continuous learning&quot;</span>;
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5">
                <p className="leading-relaxed text-[#a3a3a3]">
                  I&apos;m a front-end developer and UX/UI designer passionate about creating intuitive and visually
                  appealing web and mobile applications. My journey in tech started with curiosity and evolved into
                  building seamless digital experiences.
                </p>
                <p className="leading-relaxed text-[#a3a3a3]">
                  With a strong foundation in modern web technologies and a keen eye for design, I thrive on bringing
                  ideas to life — from initial concept to polished product.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
                  {[
                    { value: "-40%", label: "UX error reduction" },
                    { value: "+60%", label: "Faster load times" },
                    { value: "2", label: "Google certificates" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="dev-card p-5 text-center"
                      whileHover={{ borderColor: "rgba(34,197,94,0.4)" }}
                    >
                      <p className="font-mono text-3xl font-bold text-[#22c55e]">{stat.value}</p>
                      <p className="mt-1 text-xs text-[#737373]">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* PROFESSIONAL EXPERIENCE */}
        <motion.section
          id="experience"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="experience"
              title="Professional experience"
              description="Hybrid roles combining UI/UX design with frontend/full-stack development across mobile games, startups, and enterprise systems."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  role: "Full-Stack Developer & UI/UX Designer",
                  company: "Rio's Garden Management System",
                  period: "Feb 2026 – Jun 2026",
                  type: "Freelance · Full-time",
                  description: "Diseño y desarrollo end-to-end de una plataforma web con tres portales interconectados (Admin, Trabajador, Cliente) y arquitectura de base de datos para gestión de usuarios, asignación de tareas y facturación.",
                  responsibilities: [
                    "Digitalicé el flujo operativo de la empresa creando un sistema de reportes y aprobación en un solo clic, eliminando la pérdida de información y reduciendo drásticamente el tiempo para generar y enviar recibos vía SMS",
                    "Arquitecté el backend integrando autenticación basada en roles y operaciones por lotes (Batches), con consultas optimizadas y paginación en el panel administrativo para carga rápida y privacidad de datos",
                  ],
                  technologies: ["React", "Firebase", "Node.js", "Authentication", "Database Design"],
                },
                {
                  role: "UI/UX Designer & Flutter Developer",
                  company: "Videojuego Móvil — Fase Beta",
                  period: "Nov 2025 – Apr 2026",
                  type: "Freelance · Part-time",
                  description: "Responsable de la interfaz del jugador: desde la conceptualización, wireframes y prototipos de alta fidelidad en Figma, hasta la implementación y animación fluida de vistas nativas en Flutter.",
                  responsibilities: [
                    "Diseñé y desarrollé un Design System personalizado con componentes reutilizables en Flutter, garantizando consistencia visual y acelerando el desarrollo de nuevas pantallas en un 30%",
                    "Lideré sesiones de User Testing enfocadas en el onboarding y programé iteraciones ágiles basadas en el feedback, eliminando fricciones de aprendizaje y reduciendo significativamente la tasa de abandono del primer día (Day-1 Churn)",
                  ],
                  technologies: ["Flutter", "Figma", "Design System", "User Testing", "Design Thinking"],
                },
                {
                  role: "Frontend Developer & UI/UX Designer",
                  company: "Sistema de Gestión de Inventarios de Urgegas",
                  period: "Oct 2025 – Dec 2025",
                  type: "Freelance · Full-time",
                  description: "Lideré el diseño de arquitectura de la información e implementación pixel-perfect de interfaces complejas, enfocadas en la visualización de datos masivos y optimización de flujos de trabajo.",
                  responsibilities: [
                    "Simplifiqué el proceso central de gestión de inventario, reduciendo el flujo de creación de productos de 5 pasos a solo 2 y disminuyendo los errores de captura manual en un 40%",
                    "Resolví problemas críticos de rendimiento mediante virtualización de listas (windowing), incrementando la velocidad de carga de los dashboards interactivos en un 60%",
                  ],
                  technologies: ["React", "TypeScript", "Virtualización", "Data Visualization", "Performance"],
                },
                {
                  role: "UI/UX Designer & Frontend Developer",
                  company: "Startup Tecnológica — Confidencial",
                  period: "Jun 2025 – Sep 2025",
                  type: "Freelance · Part-time",
                  description: "Colaboración estratégica con el equipo fundador en Product Roadmap. Diseño de interfaces y desarrollo ágil de prototipos funcionales para validar modelos de negocio y viabilidad técnica.",
                  responsibilities: [
                    "Dirigí talleres de Design Thinking que redefinieron el User Journey y destaparon nuevas vías de monetización, llevando iniciativas desde la ideación hasta el testeo con usuarios en ciclos menores a 5 días",
                    "Construí una arquitectura de prototipado rápido en React que permitió al equipo iterar funcionalidades en sprints semanales, acelerando el Time-to-Market del MVP",
                  ],
                  technologies: ["React", "TypeScript", "Figma", "Design Thinking", "Scrum"],
                },
              ].map((job, i) => (
                <motion.div
                  key={job.role}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="dev-card p-6"
                  whileHover={{ borderColor: "rgba(34,197,94,0.3)" }}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[#fafafa]">{job.role}</h3>
                      <p className="font-mono text-xs text-[#22c55e]">{job.company}</p>
                      {job.type && <p className="font-mono text-[10px] text-[#525252]">{job.type}</p>}
                    </div>
                    <span className="rounded-full border border-[#262626] px-3 py-1 font-mono text-xs text-[#525252]">
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-[#a3a3a3]">{job.description}</p>
                  <ul className="mb-4 space-y-1.5">
                    {job.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#737373]">
                        <span className="mt-1 text-[#22c55e]">›</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#262626] bg-[#111] px-2.5 py-0.5 font-mono text-xs text-[#737373]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 dev-card p-5">
              <p className="text-center text-sm text-[#737373]">
                <span className="font-mono text-[#22c55e]">Key results:</span>{" "}
                <span className="text-[#fafafa]">-40%</span> capture errors,{" "}
                <span className="text-[#fafafa]">+60%</span> load speed,{" "}
                <span className="text-[#fafafa]">-30%</span> development time,{" "}
                <span className="text-[#fafafa]">significant Day-1 Churn reduction.</span>
              </p>
              <p className="mt-3 text-center text-xs text-[#525252]">
                Some professional projects are not publicly shown due to confidentiality agreements (NDA).{" "}
                I'm happy to discuss my role and responsibilities during an interview.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="projects"
              title="Selected work"
              description="Projects showcasing my skills in web and mobile development."
            />

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="skills"
              title="Tech stack"
              description="Technologies and tools I work with daily."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="dev-card p-6"
                  variants={fadeUp}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/10 p-2.5">
                      <category.icon className="size-5 text-[#22c55e]" />
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-[#fafafa]">{category.title}</h3>
                  </div>
                  {category.skills.map((skill) => (
                    <SkillTag key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CERTIFICATIONS */}
        <motion.section
          id="certifications"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="certifications"
              title="Certifications"
              description="Professional credentials that back up my design and data skills."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div key={cert.title} variants={fadeUp} transition={{ delay: index * 0.1 }}>
                  <div className="dev-card flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/10 p-2.5">
                          <Award className="size-5 text-[#22c55e]" />
                        </div>
                        <div>
                          <h3 className="font-mono text-sm font-semibold text-[#fafafa]">{cert.title}</h3>
                          <p className="font-mono text-xs text-[#737373]">{cert.issuer}</p>
                        </div>
                      </div>
                      {cert.status && (
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${
                            cert.status === "In progress"
                              ? "border-[#febc2e]/30 text-[#febc2e]"
                              : "border-[#22c55e]/30 text-[#22c55e]"
                          }`}
                        >
                          {cert.status}
                        </span>
                      )}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-[#a3a3a3]">{cert.description}</p>

                    {cert.courses && (
                      <ul className="mt-4 space-y-2">
                        {cert.courses.map((course) => (
                          <li key={course.url}>
                            <a
                              href={course.url}
                              target="_blank"
                              rel="noreferrer"
                              className="group flex items-center gap-2 font-mono text-xs text-[#a3a3a3] transition-colors hover:text-[#22c55e]"
                            >
                              <Check className="size-3.5 shrink-0 text-[#22c55e]" />
                              <span className="group-hover:underline">{course.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                    {cert.url && !cert.courses && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#22c55e] hover:underline"
                      >
                        View credential <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="border-t border-[#262626] py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              tag="contact"
              title="Let's connect"
              description="Reach out through any of these channels."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {CONTACT_CHANNELS.map((channel, index) => (
                <motion.div key={channel.title} variants={fadeUp} transition={{ delay: index * 0.1 }}>
                  <Card className="dev-card h-full border-[#262626] bg-[#111]">
                    <CardHeader className="flex justify-center p-6 pb-2">
                      <motion.div
                        className="rounded-xl border border-[#22c55e]/20 bg-[#22c55e]/10 p-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <channel.icon className="size-6 text-[#22c55e]" />
                      </motion.div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <h3 className="font-mono font-semibold text-[#fafafa]">{channel.title}</h3>
                      <p className="mt-1 text-sm text-[#737373]">{channel.subtitle}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center pb-6">
                      <button onClick={channel.action} className="btn-outline px-5 py-2 text-xs">
                        {channel.button}
                      </button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#262626] py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="font-mono text-xs text-[#525252]">
            © {new Date().getFullYear()} luis.dev — built with React &amp; Vite
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="text-[#525252] transition-colors hover:text-[#22c55e]"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="text-[#525252] transition-colors hover:text-[#22c55e]"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
