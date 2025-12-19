import { useState } from "react";
import { FileText } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export function Certificates() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [loadedIndex, setLoadedIndex] = useState<number | null>(null);

  const certFiles = [
    "Building Transformer-Based Natural Language Processing NVIDIA.pdf",
    "Fundamentals of Deep Learning NVIDIA.pdf",
    "Introduction to Transformer-Based Natural Language Processing   NVIDIA.pdf",
    "Rapid Application Development with Large Language Models (LLMs) NVIDIA.pdf",
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg">Some of my completed courses and certifications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certFiles.map((file, i) => (
            <Card key={i} className="p-6 hover:shadow-glow transition-all duration-300 border-border">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-gradient-primary flex items-center justify-center text-white">
                    <FileText className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-medium">{file.replace(/\.pdf$/, "")}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Dialog
                    onOpenChange={(open) => {
                      if (open) {
                        setLoadedIndex(null);
                        setLoadingIndex(i);
                      } else {
                        setLoadingIndex(null);
                        setLoadedIndex(null);
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button variant="ghost">View</Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-hidden">
                      <DialogTitle>Certificate</DialogTitle>
                      <DialogDescription className="mb-2 text-sm text-muted-foreground">Preview your certificate</DialogDescription>

                      <div className="relative mt-4 h-[72vh] flex items-center justify-center">
                        {loadedIndex !== i && (
                          <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-t-primary border-border rounded-full animate-spin" />
                          </div>
                        )}

                        <iframe
                          src={`/assets/certif/${encodeURIComponent(file)}`}
                          title={`certificate-${i}`}
                          onLoad={() => {
                            setLoadedIndex(i);
                            setLoadingIndex(null);
                          }}
                          className={`w-full h-full border border-border rounded-md transition-opacity duration-300 ${loadedIndex === i ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
