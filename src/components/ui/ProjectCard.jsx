import { ExternalLink, Github } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { cn } from "../../lib/util"

export default function ProjectCard({ project, className }) {
  return (
    <Card
      className={cn(
        "group overflow-hidden border-indigo-100/80 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1",
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
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <Badge className="mb-3 border-none bg-indigo-50 text-indigo-700">{project.type}</Badge>
        <CardTitle className="font-display text-lg leading-snug text-slate-800">{project.title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3 text-slate-500">{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-indigo-100 text-indigo-600">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-5 pt-0 md:flex-row">
        {project.code && (
          <a href={project.code} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 border-indigo-200 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
            >
              <Github className="size-3.5" />
              Código
            </Button>
          </a>
        )}
        {project.figma && (
          <a href={project.figma} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 border-violet-200 text-violet-700 hover:border-violet-300 hover:bg-violet-50"
            >
              <ExternalLink className="size-3.5" />
              Figma
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
