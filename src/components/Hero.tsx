import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const handleDownloadCV = () => {
    // Replace with actual CV file URL
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 animate-float"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Computer Science Engineering Student
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Passionate about building innovative solutions and learning new
            technologies. I specialize in full-stack development and love
            turning ideas into reality through code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
