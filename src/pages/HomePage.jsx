"use client"

import { useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"
import { FaTools, FaUsers, FaLaptopCode } from "react-icons/fa";
import { PiDatabase } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50 text-slate-700">

      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 border-b border-blue-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Portfolio
          </a>

          <nav className="hidden md:flex space-x-6 text-sm font-medium relative">
            {["about", "projects", "skills", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="relative group capitalize font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                {sec}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 rounded-full p-1"
            >
              <Github className="h-6 w-6 text-blue-600 hover:text-blue-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 rounded-full p-1"
            >
              <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-700" />
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="sr-only">Toggle menu</span>
              <img src="/option.png" width={25} height={25} alt="Menu" />
            </Button>
          </div>
        </div>


        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in border-b border-blue-100">
            <ul className="flex flex-col space-y-2 p-4 text-center">
              {["about", "projects", "skills", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setMenuOpen(false)}
                    className="block transition-colors hover:text-blue-600 capitalize font-medium"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1">

        <section id="about" className="w-full py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_400px] items-center px-4">
            
            <div className="space-y-6">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                Front-end Developer & UX/UI Designer
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Creating{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                  Innovative
                </span>{" "}
                Solutions
              </h1>

              <p className="text-slate-600 md:text-lg lg:text-xl max-w-lg leading-relaxed">
                I design and develop user-centered applications with a focus on web and mobile experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href="#projects">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 px-6 py-3">
                    My Projects <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 transition-all px-6 py-3 bg-transparent"
                  >
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 opacity-60 blur-3xl animate-pulse"></div>
              <img
                src="/foto2.jpg"
                alt="Profile"
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rounded-full border-4 border-white object-cover shadow-2xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </section>

        <section 
          id="about-me-details" 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A little more about my journey, passion, and what drives me.
            </p>
          </div>
          <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center px-4">
            <div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/foto2.jpg"
                alt="About Me"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-blue-100"
              />
            </div>
            <div 
              className="space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-slate-700 text-lg leading-relaxed">
                I'm a passionate Front-end Developer and UX/UI Designer with a knack for creating intuitive and visually appealing web and mobile applications. My journey in tech started with a curiosity for how things work, evolving into a drive to build seamless digital experiences.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                With a strong foundation in modern web technologies and a keen eye for design, I thrive on bringing ideas to life, from the initial concept to the final polished product. I believe in continuous learning and adapting to new challenges, always striving to deliver high-quality solutions that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-xl shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-blue-700">20+</h3>
                  <p className="text-slate-600 text-sm">Projects Completed</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-purple-700">2+</h3>
                  <p className="text-slate-600 text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section 
          id="projects" 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto text-center mb-12 px-4">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg">
              Selected works showcasing my skills in web and mobile development.
            </p>
          </div>

          <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {projects.map((p, i) => (
              <div key={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }}>
                <ProjectCard
                  project={p}
                  className="hover:scale-105 hover:rotate-1 transition-transform shadow-lg hover:shadow-2xl rounded-xl bg-gradient-to-br from-blue-50 via-white to-purple-50"
                />
              </div>
            ))}
          </div>
        </section>

        <section 
          id="skills" 
          className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto text-center mb-12 px-4">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Skills & Technologies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              My technical proficiency divided into categories, with mastery level.
            </p>
          </div>

          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 px-4">

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-100">
                  <IoCodeSlash className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Languages</h3>
              </div>
              {[
                { name: "JavaScript", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "Python", level: 75 },
                { name: "Java", level: 70 },
                { name: "Kotlin", level: 70 },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-purple-100">
                 <FaLaptopCode className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Frameworks & Libraries</h3>
              </div>
              {[
                { name: "React", level: 90 },
                { name: "Vue.js", level: 80 },
                { name: "Angular", level: 70 },
                { name: "Flutter", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Laravel", level: 65},
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-green-100">
                <FaTools className="w-6 h-6 text-green-600" />
                </div>
            <h3 className="text-xl font-semibold text-slate-800">Tools & Platforms</h3>
              </div>
              {[
                { name: "Git/GitHub", level: 90 },
                { name: "Figma", level: 85 },
                { name: "Adobe XD", level: 70 },
                { name: "VS Code", level: 95 },
                { name: "Firebase", level: 80 },
                { name: "Docker (Básico)", level: 60 },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-green-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-500 to-green-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-yellow-100">
                  <PiDatabase className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Databases & APIs</h3>
              </div>
              {[
                { name: "REST APIs", level: 90 },
                { name: "SQL", level: 75 },
                { name: "NoSQL", level: 65 },
                { name: "GraphQL (Básico)", level: 50 },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-yellow-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-red-100">
                 <MdDesignServices className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">UX/UI Design</h3>
              </div>
              {[
                { name: "User Research", level: 80 },
                { name: "Wireframing", level: 90 },
                { name: "Prototyping", level: 85 },
                { name: "Usability Testing", level: 75 },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-red-500 to-red-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-indigo-100">
                 <FaUsers className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Soft Skills</h3>
              </div>
              {[
                { name: "Problem Solving", level: 95 },
                { name: "Teamwork", level: 90 },
                { name: "Communication", level: 85 },
                { name: "Adaptability", level: 90 },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-indigo-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section 
          id="contact" 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        />
          <div className="container mx-auto text-center mb-12 px-4">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Reach out through any of these channels.</p>
          </div>

          <div className="container mx-auto grid gap-6 md:grid-cols-3 px-4">
            {[
              { icon: Mail, title: "Email", subtitle: "luisantonionucamendi@gmail.com", action: () => window.open("mailto:luisantonionucamendi@gmail.com", "_blank"), button: "Send Email" },
              { icon: Github, title: "GitHub", subtitle: "LuisRamirez2328", action: () => window.open("https://github.com/LuisRamirez2328", "_blank"), button: "View Profile" },
              { icon: Linkedin, title: "LinkedIn", subtitle: "Luis Antonio Ramirez Nucamendi", action: () => window.open("https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/", "_blank"), button: "Connect" },
            ].map((c, i) => (
              <div key={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }}>
                <Card
                  className="border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="flex justify-center p-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                      <c.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-slate-800 text-lg">{c.title}</h3>
                    <p className="text-slate-600 mt-1">{c.subtitle}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center pb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={c.action}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      {c.button}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
      </main>

      <footer className="w-full border-t border-blue-100 py-8 bg-gradient-to-r from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-200 opacity-20 animate-gradient-x"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 relative z-10">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 rounded-full p-1"
            >
              <Github className="w-5 h-5 text-blue-600 hover:text-blue-700 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 rounded-full p-1"
            >
              <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-700 transition-all" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}