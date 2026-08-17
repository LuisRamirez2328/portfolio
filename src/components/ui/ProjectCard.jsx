import { BarChart3, ExternalLink, Github, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./card"
import { Badge } from "./badge"
import { cn } from "../../lib/util"

export default function ProjectCard({ project, className }) {
  return (
    <Card
      className={cn(
        "dev-card group overflow-hidden border-[#262626] bg-[#111] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={800}
              height={450}
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center border-b border-[#262626] bg-[#0a0a0a]">
              <div className="flex flex-col items-center gap-3 text-[#22c55e]/60">
                <BarChart3 className="size-10" />
                <span className="font-mono text-xs">dashboard.mockup_coming</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 left-3 font-mono text-xs text-[#22c55e] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.type.toLowerCase().replace(" ", "_")}.project
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <Badge className="mb-3 border border-[#22c55e]/20 bg-[#22c55e]/10 font-mono text-xs text-[#22c55e]">
          {project.type}
        </Badge>
        <CardTitle className="text-lg leading-snug text-[#fafafa]">{project.title}</CardTitle>
        {project.role && (
          <p className="mt-1.5 font-mono text-xs text-[#22c55e]">
            <span className="text-[#525252]">{"// "}role:</span> {project.role}
          </p>
        )}
        <CardDescription className="mt-2 line-clamp-3 text-[#737373]">{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-[#262626] bg-[#1a1a1a] font-mono text-xs text-[#a3a3a3]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-5 pt-0 md:flex-row">
        {project.code && (
          <a href={project.code} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <button className="btn-outline w-full gap-2 px-4 py-2 text-xs">
              <Github className="size-3.5" />
              View Code
            </button>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <button className="btn-outline w-full gap-2 px-4 py-2 text-xs">
              <ExternalLink className="size-3.5" />
              Live Demo
            </button>
          </a>
        )}
        {project.figma && (
          <a href={project.figma} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <button className="btn-outline w-full gap-2 px-4 py-2 text-xs">
              <ExternalLink className="size-3.5" />
              Figma
            </button>
          </a>
        )}
        {project.caseStudy && (
          <Link to={project.caseStudy} className="w-full md:w-auto">
            <button className="btn-outline w-full gap-2 px-4 py-2 text-xs border-[#f5c518]/30 text-[#f5c518] hover:bg-[#f5c518]/10">
              <BookOpen className="size-3.5" />
              UX Case Study
            </button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
