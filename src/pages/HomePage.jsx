import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-teal-600">
              Portfolio
            </a>
         
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-teal-600">About</a>
              <a href="#projects" className="transition-colors hover:text-teal-600">Projects</a>
              <a href="#skills" className="transition-colors hover:text-teal-600">Skills</a>
              <a href="#contact" className="transition-colors hover:text-teal-600">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LuisRamirez2328"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="h-7 w-7 text-teal-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="h-7 w-7 text-teal-600" />
            </a>
          </div>
         
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="sr-only">Toggle menu</span>
              <img
                src="/option.png"
                width={25}
                height={25}
                alt="Menu"
              />
            </Button>
          </div>

          
          {menuOpen && (
            <nav className="absolute top-full left-0 w-full bg-background shadow-md md:hidden">
              <ul className="flex flex-col space-y-2 p-4 text-center">
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)} className="block transition-colors hover:text-teal-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setMenuOpen(false)} className="block transition-colors hover:text-teal-600">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setMenuOpen(false)} className="block transition-colors hover:text-teal-600">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="block transition-colors hover:text-teal-600">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>


      <main className="flex-1">
  
        <section id="about" className="w-full py-24 sm:py-32 bg-gradient-to-b from-white to-teal-50">
          <div className="max-w-screen-xl mx-auto grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 px-4">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                Front-end Developer & UX/UI Designer
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Creating solutions <span className="text-teal-600">Innovative</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I create innovative digital solutions that solve real-world problems. With experience in web and mobile development, I design functional and user-centered applications.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#projects">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    My projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-75 blur-xl"></div>
                <img
                  src="/foto2.jpg"
                  alt="Profile"
                  className="relative aspect-square rounded-full object-cover border-4 border-white"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-4 text-center px-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-4">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the key projects I've worked on that showcase my skills and expertise.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12 px-4">
            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/redsocial.jpg"
                    alt="Social Network for Scientists"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={100}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Web App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">Social Network for Scientists</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  A specialized platform that connects researchers and scientists, facilitating collaboration and knowledge sharing across different scientific disciplines.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Kotlin</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">MongoDB</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Python</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">MySQL</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-row gap-80">
                <a href="https://github.com/Noctis-Dev/sci-all.git" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Code
                  </Button>
                </a>
                <a href="https://www.figma.com/design/CQR6rzqPXvIe1IL3PNvIan/Sci---all?node-id=0-1&t=dEeqHHjjbnEFvPp5-1" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Figma
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/bus.jpg"
                    alt="Bus Route Mobile App"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={300}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Web App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">Bus Routes Mobile App</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                A mobile application that displays bus routes and points of interest, helping users navigate public
                transportation efficiently and discover new places.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Flutter</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">MySQL</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">MongoDB</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Geolocation</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-row gap-80">
                <a href="https://github.com/LuisRamirez2328/MovilRouteExplorer.git" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Code
                  </Button>
                </a>
                <a href="https://www.figma.com/design/NhyG5INHZOS054lCF0UMRo/Route-Explorer?node-id=0-1&p=f&t=FkjG03lWNlra9psU-0" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Figma
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/ecomerce.jpg"
                    alt="Ecommerce Web App"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={300}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Web App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">React Fashion Store: E-commerce Web Application</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                I created an e-commerce platform for a clothing store using React, enabling users to browse products, make purchases, and manage their shopping carts efficiently.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-200 text-teal-700">React</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Vite</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                <a href="https://github.com/LuisRamirez2328/Ecomerce.git" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Code
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/dashborad.jpg"
                    alt="Dashborad Web App"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={300}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Web App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">ZenPulse</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                I developed a dashboard using React and Tailwind CSS that allows users to monitor their stress levels through a wearable device, while also tracking activity, heart rate, oxygenation, and body temperature.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-200 text-teal-700">React</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Vite</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">Tailwdind</Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">MongoDB</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                <a href="https://github.com/LuisRamirez2328/ZPulseFront.git" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Code
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/flores.jpg"
                    alt="Flower SHop Mobile App"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={300}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Mobile App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">Flower Shop</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                An e-commerce mobile application for purchasing flowers, featuring a user-friendly interface, secure
                  payment processing, and delivery tracking.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-teal-200 text-teal-700">Figma</Badge>
                <Badge variant="outline" className="border-teal-200 text-teal-700">UI/UX Design</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                <a href="https://www.figma.com/design/AuAYkTCmplYzOaWMw2M2CD/Floreria?node-id=21-10&t=33WHfKBi9sVzgEue-1" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Figma
                  </Button>
                </a>
              </CardFooter>
            </Card>

            
            <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/tienda.jpg"
                    alt="Agronomit Web App"
                    className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={300}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-none">Web App</Badge>
                </div>
                <CardTitle className="text-xl text-teal-800">Agronomist Web Store</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                An online marketplace for agronomists to purchase tools, seeds, and other agricultural supplies, with
                features like inventory management and order tracking.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-teal-200 text-teal-700">Figma</Badge>
                <Badge variant="outline" className="border-teal-200 text-teal-700">UI/UX Design</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                <a href="https://www.figma.com/design/q4Ynlz1wWGYJyDtewDPrUt/Agron-Shop%2B221260-221249-213537?node-id=184-15&t=33WHfKBi9sVzgEue-1" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Project Figma
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

    
        <section id="skills" className="w-full py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-4">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are the technologies and skills I've mastered throughout my career.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4 px-4">
              {[
                { src: "/react-96.png", name: "React" },
                { src: "/vite-200.png", name: "Vite" },
                { src: "/flutter-500.png", name: "Flutter" },
                { src: "/kotlin-500.png", name: "Kotlin" },
                { src: "/tailwind-css-384.png", name: "Tailwind CSS" },
                { src: "/javascript-50.png", name: "Javascript" },
                { src: "/python-500.png", name: "Python" },
                { src: "/vue.js-96.png", name: "Vue" },
                { src: "/angular-500.png", name: "Angular" },
                { src: "/git-500.png", name: "Git" },
                { src: "/html-100.png", name: "HTML" },
                { src: "/css-100.png", name: "Css" },
                { src: "/adobe.png", name: "Adobe XD" },
                { src: "/figma-500.png", name: "Figma" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm border border-teal-100 hover:border-teal-200 hover:shadow-md transition-all">
                  <div className="rounded-full bg-teal-100 p-4">
                    <img src={skill.src} alt={skill.name} width={50} height={50} />
                  </div>
                  <h3 className="text-lg font-bold text-teal-800">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-4 text-center px-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-4">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in working together? Feel free to reach out to me through any of the following channels.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-3 px-4">
            <Card className="border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-center pb-2">
                <div className="rounded-full bg-teal-100 p-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-teal-800">Email</h3>
                <p className="text-sm text-gray-500">luisantonionucamendi@gmail.com</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=luisantonionucamendi@gmail.com&su=Asunto&body=Escribe%20tu%20mensaje%20aqui",
                      "_blank"
                    );
                  }}
                >
                  Send email
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-center pb-2">
                <div className="rounded-full bg-teal-100 p-4">
                  <Github className="h-6 w-6 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-teal-800">GitHub</h3>
                <p className="text-sm text-gray-500">LuisRamirez2328</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://github.com/LuisRamirez2328" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    View Profile
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-center pb-2">
                <div className="rounded-full bg-teal-100 p-4">
                  <Linkedin className="h-6 w-6 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-teal-800">LinkedIn</h3>
                <p className="text-sm text-gray-500">Luis Antonio Ramirez Nucamendi</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Connect
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>


      <footer className="w-full border-t border-teal-100 py-6 bg-teal-50">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/LuisRamirez2328" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-teal-600 hover:text-teal-700 hover:bg-teal-100">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/luis-antonio-ramirez-nucamendi-2162591a8/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-teal-600 hover:text-teal-700 hover:bg-teal-100">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
