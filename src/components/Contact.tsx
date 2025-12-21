import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Card } from "./ui/card";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yousrabenaissa43",
      color: "hover:text-[#333] dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yousra-benaissa-984749293/",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:yousra.benaissa@etudiant-enit.utm.tn",
      color: "hover:text-red-500",
    },
    /*{
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-[#E4405F]",
    }*/,
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <Card className="p-8 animate-fade-in border-border">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through any of the platforms below!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center text-muted-foreground">
          <p>© 2025 Yousra Ben Aissa. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
