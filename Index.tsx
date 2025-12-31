import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Portfolio
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up stagger-1 font-heading text-5xl md:text-7xl font-semibold text-foreground leading-tight mb-8">
            Welcome to{" "}
            <span className="text-gradient">Jihan Ahmed's</span>{" "}
            Portfolio!
          </h1>
          
          <p className="opacity-0 animate-fade-in-up stagger-2 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover my journey, experiences, and the projects that define my passion for creating meaningful impact.
          </p>
          
          <div className="opacity-0 animate-fade-in-up stagger-3 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/about">
                About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="hero-outline">
              <Link to="/work">
                View Work
              </Link>
            </Button>
            
            <Button asChild variant="hero-outline">
              <Link to="/volunteering">
                Volunteering
              </Link>
            </Button>
            
            <Button asChild variant="hero-outline">
              <Link to="/projects">
                Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Decorative elements */}
      <div className="fixed top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </Layout>
  );
};

export default Index;
