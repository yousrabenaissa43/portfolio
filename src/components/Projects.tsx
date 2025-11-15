import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, team boards, and deadline tracking.",
      technologies: ["TypeScript", "React", "Firebase", "TailwindCSS"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://example.com",
    },
    {
      title: "AI Chatbot",
      description:
        "An intelligent chatbot using natural language processing to answer customer queries and provide support.",
      technologies: ["Python", "Flask", "OpenAI API", "React"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather, forecasts, and historical data with interactive charts.",
      technologies: ["JavaScript", "React", "Chart.js", "Weather API"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-fade-in border-border flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-primary/50 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
