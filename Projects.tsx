import Layout from "@/components/Layout";
import { FolderOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Project Name",
      description: "A brief description of what this project is about and the technologies used.",
      tags: ["Technology 1", "Technology 2"],
      link: "#",
    },
    {
      title: "Project Name",
      description: "A brief description of what this project is about and the technologies used.",
      tags: ["Technology 1", "Technology 2"],
      link: "#",
    },
    {
      title: "Project Name",
      description: "A brief description of what this project is about and the technologies used.",
      tags: ["Technology 1", "Technology 2"],
      link: "#",
    },
  ];

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              My Work
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up stagger-1 font-heading text-4xl md:text-6xl font-semibold text-foreground mb-8">
            Projects
          </h1>
          
          <p className="opacity-0 animate-fade-in-up stagger-2 font-body text-lg text-muted-foreground mb-12 leading-relaxed">
            A collection of projects that showcase my skills and creativity.
          </p>
          
          <div className="opacity-0 animate-fade-in-up stagger-3 grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <FolderOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>
                </div>
                
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
