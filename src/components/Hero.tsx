import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const handleDownloadCV = () => {
    const cvUrl = "/assets/CV-Yousra-Ben-Aissa.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Yousra-Ben-Aissa.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-8 md:space-y-0 animate-fade-in">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center md:items-start space-y-8 max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 animate-float"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Yousra Ben Aissa
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Computer Science Engineering Student
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl">
              Passionate about building innovative solutions, cybersecurity, and the integration of artificial intelligence into advanced technological solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
                href="https://github.com/yousrabenaissa43"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yousra-benaissa-984749293/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
           <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary shadow-xl p-2">
              <img
                src="/assets/images/yousra.jpg" 
                alt="Yousra profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
