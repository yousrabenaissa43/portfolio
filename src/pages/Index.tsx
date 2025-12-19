import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Certificates } from "@/components/Certificates";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
