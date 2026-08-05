import { ExternalLink, Github } from "lucide-react"
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
          <img
            src={project.img}
            alt={project.title}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={800}
            height={450}
          />
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
        {project.figma && (
          <a href={project.figma} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <button className="btn-outline w-full gap-2 px-4 py-2 text-xs">
              <ExternalLink className="size-3.5" />
              Figma
            </button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
