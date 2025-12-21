import { ExternalLink, Github, Play } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
   const projects = [
     {
    title: "Shopping Assistant (Private)",
    description:
      "An intelligent shopping assistant powered by LLMs, enabling natural-language product search and personalized recommendations.",
    technologies: ["Quarkus", "LangChain4J", "Java", "E-Bay API","keycloak","LLM","ClaudAnthropic Claude","Docker","PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://drive.google.com/file/d/1W7foJ6-4_YSIza-KTQ2L640jPkJb5Zsj/view?usp=sharing",
  },

  {
  title: "After-Sales Service Management System",
  description:
    "A full-stack after-sales service platform for managing equipment, tickets, interventions, technicians, and client requests. Includes authentication and role-based access control using Keycloak.",
  technologies: ["Quarkus", "Java", "React", "Keycloak", "Docker", "PostgreSQL"],
  githubUrl: "https://github.com/yousrabenaissa43/SAV-project", 
},

  {
    title: "Cinema Reservation System",
    description:
      "A full-stack cinema management system featuring movie scheduling, reservations, and admin capabilities.",
    technologies: ["React", "JEE", "WildFly", "PostgreSQL"],
    githubUrl: "https://github.com/yousrabenaissa43/CinemaReservations",
    liveUrl: "",
  },
  {
    
    title: "Search Engine",
    description:
      "A Java-based search engine designed to retrieve relevant information efficiently based on user queries.",
    technologies: ["Java"],
    githubUrl: "https://github.com/yousrabenaissa43/miniprojetjava",
    liveUrl: "",
  },
  {
    title: "Library Management System",
    description:
      "A desktop-based library management application supporting book tracking, user management, and inventory handling.",
    technologies: ["C#", "MySQL"],
    githubUrl: "https://github.com/yousrabenaissa43/BooksForm",
    liveUrl: "",
  },
 
  {
  title: "Chat Server",
  description:
    "A C# client–server chat application using TCP sockets. Includes message encryption, a TCP server handling multiple clients, and a TCP client interface for real-time communication.",
  technologies: ["C#", ".NET", "TCP Sockets" ],
  githubUrl: "https://github.com/yousrabenaissa43/chatServer",
  liveUrl: "https://drive.google.com/file/d/1ngV9CA3QJFtBmhl4gAnV7Wfl95SgCNlC/view?usp=sharing",
},
  {
    title: "Task Manager",
    description:
      "A Flutter mobile app for task management using Firebase as the backend database.",
    technologies: ["Flutter", "Firebase", "Dart"],
    githubUrl: "https://github.com/yousrabenaissa43/TaskManager-FlutterApp.git",
    liveUrl: "https://drive.google.com/file/d/1Ufjqep-jAP57D6TXrS-2lf-RTW6qVqOd/view?usp=sharing",
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
                {project.githubUrl ? (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="flex-1 opacity-50 cursor-not-allowed">
                    <div className="flex items-center justify-center">
                      <Github className="mr-2 h-4 w-4" />
                      <span>No repo</span>
                    </div>
                  </Button>
                )}

                {project.liveUrl ? (
                  project.liveUrl.includes("drive.google.com") ? (
                    <Button variant="default" size="sm" asChild className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 hover:opacity-95 text-white">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        View Video
                      </a>
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" asChild className="flex-1 bg-gradient-primary hover:opacity-90">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )
                ) : (
                  <Button variant="ghost" size="sm" className="flex-1 opacity-50 cursor-not-allowed">
                    <div className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>No demo</span>
                    </div>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
