import { useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { FaTools, FaUsers, FaLaptopCode } from "react-icons/fa"
import { PiDatabase } from "react-icons/pi"
import { MdDesignServices } from "react-icons/md"
import { IoCodeSlash } from "react-icons/io5"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

const HEADER_NAV = [
  { id: "about-me-details", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: IoCodeSlash,
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

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex justify-between font-mono text-sm">
        <span className="text-[#a3a3a3]">{name}</span>
        <span className="text-[#22c55e]">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[#1a1a1a]">
        <motion.div
          className="h-full rounded-full bg-[#22c55e]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
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

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="text-[#737373] transition-colors hover:text-[#22c55e]"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="text-[#737373] transition-colors hover:text-[#22c55e]"
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

              <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href="#projects">
                  <button className="btn-neon glow-green-hover">
                    View my work <ArrowUpRight className="size-4" />
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

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { value: "20+", label: "Projects completed" },
                    { value: "2+", label: "Years experience" },
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
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
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
