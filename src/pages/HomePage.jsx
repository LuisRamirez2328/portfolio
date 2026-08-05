import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { FaTools, FaUsers, FaLaptopCode } from "react-icons/fa"
import { PiDatabase } from "react-icons/pi"
import { MdDesignServices } from "react-icons/md"
import { IoCodeSlash } from "react-icons/io5"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

const NAV_LINKS = [
  { id: "about", label: "Inicio" },
  { id: "about-me-details", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contacto" },
]

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: IoCodeSlash,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "Kotlin", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: FaLaptopCode,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    skills: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Flutter", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Laravel", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Firebase", level: 80 },
      { name: "Docker (Básico)", level: 60 },
    ],
  },
  {
    title: "Databases & APIs",
    icon: PiDatabase,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "SQL", level: 75 },
      { name: "NoSQL", level: 65 },
      { name: "GraphQL (Básico)", level: 50 },
    ],
  },
  {
    title: "UX/UI Design",
    icon: MdDesignServices,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    skills: [
      { name: "User Research", level: 80 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "Usability Testing", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Adaptability", level: 90 },
    ],
  },
]

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "luisantonionucamendi@gmail.com",
    action: () => window.open("mailto:luisantonionucamendi@gmail.com", "_blank"),
    button: "Enviar email",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "LuisRamirez2328",
    action: () => window.open("https://github.com/LuisRamirez2328", "_blank"),
    button: "Ver perfil",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Luis Antonio Ramirez Nucamendi",
    action: () => window.open("https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/", "_blank"),
    button: "Conectar",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-14 text-center">
      <span className="section-label mb-4">{label}</span>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">{description}</p>}
    </div>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex justify-between text-sm font-medium text-slate-700">
        <span>{name}</span>
        <span className="text-indigo-600">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-indigo-50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-700">
      <header className="glass sticky top-0 z-50 w-full border-b border-indigo-100/60 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#about" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">Luis Ramírez</span>
          </a>

          <nav className="relative hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-indigo-600 transition-all hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-indigo-600 transition-all hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav className="animate-fade-in absolute top-full left-0 w-full border-b border-indigo-100 bg-white/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-center font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <section id="about" className="relative w-full overflow-hidden py-24 md:py-32 bg-mesh bg-grid">
          <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1fr_420px]">
            <motion.div
              className="space-y-7"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm"
              >
                Front-end Developer & UX/UI Designer
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
              >
                Creo{" "}
                <span className="text-gradient animate-gradient-text bg-[length:200%_auto]">
                  experiencias digitales
                </span>{" "}
                que conectan
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-lg leading-relaxed text-slate-500">
                Diseño y desarrollo aplicaciones centradas en el usuario, con foco en web y mobile.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href="#projects">
                  <Button className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-2.5 shadow-lg shadow-indigo-200/50 transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl">
                    Ver proyectos <ArrowRight className="size-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-200 bg-white/80 px-6 py-2.5 text-indigo-700 backdrop-blur-sm hover:border-indigo-300 hover:bg-indigo-50"
                  >
                    Contactar
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute -inset-4 animate-float rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-400/30 to-indigo-600/30 blur-2xl" />
              <img
                src="/foto2.jpg"
                alt="Luis Ramírez"
                className="relative size-72 rounded-3xl border-4 border-white object-cover shadow-2xl shadow-indigo-200/40 md:size-80 lg:size-96"
              />
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about-me-details"
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              label="Sobre mí"
              title="Pasión por construir productos digitales"
              description="Mi recorrido, lo que me motiva y cómo trabajo."
            />

            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100" />
                  <img
                    src="/foto2.jpg"
                    alt="Sobre mí"
                    className="relative size-64 rounded-2xl object-cover shadow-xl md:size-72"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-5 text-center md:text-left"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-lg leading-relaxed text-slate-600">
                  Soy desarrollador front-end y diseñador UX/UI con pasión por crear aplicaciones web y móviles
                  intuitivas y visualmente atractivas. Mi camino en tech empezó con curiosidad por cómo funcionan las
                  cosas y evolucionó hacia construir experiencias digitales fluidas.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  Con base sólida en tecnologías web modernas y ojo para el diseño, disfruto llevar ideas desde el
                  concepto hasta el producto final. Creo en el aprendizaje continuo y en entregar soluciones de calidad
                  con impacto real.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 text-center">
                    <p className="font-display text-3xl font-bold text-indigo-700">20+</p>
                    <p className="mt-1 text-sm text-slate-500">Proyectos completados</p>
                  </div>
                  <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5 text-center">
                    <p className="font-display text-3xl font-bold text-violet-700">2+</p>
                    <p className="mt-1 text-sm text-slate-500">Años de experiencia</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-24 bg-slate-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              label="Proyectos"
              title="Trabajo seleccionado"
              description="Proyectos que muestran mis habilidades en desarrollo web y mobile."
            />

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projects.map((project) => (
                <motion.div key={project.title} variants={fadeUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              label="Skills"
              title="Tecnologías y herramientas"
              description="Mi stack técnico organizado por categorías."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="rounded-2xl border border-indigo-100/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className={`rounded-xl p-3 ${category.iconBg}`}>
                      <category.icon className={`size-5 ${category.iconColor}`} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-800">{category.title}</h3>
                  </div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-24 bg-mesh"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              label="Contacto"
              title="Hablemos"
              description="Escríbeme por cualquiera de estos canales."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {CONTACT_CHANNELS.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-indigo-100/80 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40">
                    <CardHeader className="flex justify-center p-6 pb-2">
                      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-4">
                        <channel.icon className="size-6 text-indigo-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <h3 className="font-display text-lg font-bold text-slate-800">{channel.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{channel.subtitle}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center pb-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={channel.action}
                        className="border-indigo-200 text-indigo-700 hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white"
                      >
                        {channel.button}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative overflow-hidden border-t border-indigo-100 bg-white py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-transparent to-violet-50/50" />
        <div className="container relative mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Luis Ramírez. Todos los derechos reservados.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-indigo-600 transition-all hover:bg-indigo-50"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-indigo-600 transition-all hover:bg-indigo-50"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
