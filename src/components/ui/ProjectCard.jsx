import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";


export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden group border-teal-100 hover:border-teal-200 transition-all hover:shadow-md">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            width={800}
            height={300}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-teal-100 text-teal-800 border-none">{project.type}</Badge>
        </div>
        <CardTitle className="text-xl text-teal-800">{project.title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3">{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="border-teal-200 text-teal-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col md:flex-row gap-2">
        {project.code && (
          <a href={project.code} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
              View Project Code
            </Button>
          </a>
        )}
        {project.figma && (
          <a href={project.figma} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
              View Project Figma
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
