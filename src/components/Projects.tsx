import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import ShopifyCodeImage from "@/assets/Shopify Data Automation.png";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      category: "For Myself",
      title: "Notion Zen Dashboard",
      description:
        "A mobile-friendly web app built using React, TypeScript, and Tailwind CSS. It was scaffolded using the Lovable AI assistant to streamline frontend setup and styling. The goal is to build an embeddable dashboard for Notion that tracks personal productivity metrics (e.g., focus time, time spent per task) in a visually appealing and responsive layout.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lovable AI"],
      github: "https://github.com/elixtcode/notion-zen-dashboard",
      demo: "https://notion-zen-dashboard.lovable.app/",
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      category: "For My Community",
      title: "Village East App",
      description:
        "A security-focused village management app inspired by recent incidents in our area. The app uses QR codes to log and track entries, replacing the current manual ID-check system. It's designed to securely process sensitive visitor data and improve real-time accountability, with features for tracking association dues and resident activity logs.",
      tech: ["React", "TypeScript", "QR Code Integration", "Security Focus"],
      github: "https://github.com/elixtcode/senior-village-connect",
      demo: "https://senior-village-connect.lovable.app/",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      category: "For My Workplace",
      title: "Shopify Product Data Automation",
      description:
        "Automates the manual task of filling in Shopify import templates using raw vendor price lists. Built with Python to read and clean Excel files from vendors, extract relevant product attributes like SKU, dimensions, pricing, and output complete Shopify-ready CSV files.",
      tech: ["Python", "Excel Processing", "Data Automation", "Shopify API"],
      outcome:
        "A task that previously took weeks of manual work is now completed in minutes with 2,377 rows processed automatically.",
      hasPreviewImage: true,
      gradient: "from-orange-500/10 to-red-500/10",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            I believe that meaningful technology starts with solving real problems. These projects reflect three key dimensions of my transition into tech:
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-muted-foreground mb-12">
            <div className="bg-muted/30 rounded-lg p-4 w-full md:w-1/3 text-center shadow-sm">
              <p className="font-medium text-foreground mb-1">For Myself</p>
              <p>Personal productivity, learning, and experimentation with frontend tools and AI assistants.</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 w-full md:w-1/3 text-center shadow-sm">
              <p className="font-medium text-foreground mb-1">For My Community</p>
              <p>Solutions for local issues like safety, accountability, and tech awareness in our neighborhood.</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 w-full md:w-1/3 text-center shadow-sm">
              <p className="font-medium text-foreground mb-1">For My Workplace</p>
              <p>Process automation, data cleanup, and efficiency tools that support e-commerce operations.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elevated p-8 hover-lift animate-slide-up bg-gradient-to-br ${project.gradient}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.outcome && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                        <p className="text-green-700 dark:text-green-300 font-medium">
                          <strong>Outcome:</strong> {project.outcome}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="button-glow bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.hasPreviewImage && (
                      <div className="flex flex-col gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setIsModalOpen(true)}
                          className="hover-lift"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Code Preview
                        </Button>
                        <p className="text-xs text-muted-foreground italic">
                          &lt;&gt; Built for internal use — source code is proprietary
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for code preview */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-background rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={ShopifyCodeImage}
                alt="Python script preview for Shopify automation"
                className="rounded-lg w-full"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Preview of the internal Python script that automated Shopify data formatting
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
