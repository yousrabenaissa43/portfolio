import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "Spring Boot",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Linux",
        "VS Code",
        "Postman",
      ],
    },
    {
      category: "Concepts",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "REST APIs",
        "Agile",
        "CI/CD",
        "Testing",
        "Design Patterns",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-hero">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-accent transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
