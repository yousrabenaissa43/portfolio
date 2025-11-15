import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science Engineering",
      institution: "Your University Name",
      location: "City, Country",
      period: "2021 - 2025",
      description:
        "Focused on software engineering, algorithms, data structures, and full-stack development.",
      achievements: [
        "Dean's List - Multiple Semesters",
        "GPA: 3.8/4.0",
        "President of Computer Science Club",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic background</p>
        </div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-xl text-primary mb-3">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
