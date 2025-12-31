import Layout from "@/components/Layout";
import { Briefcase } from "lucide-react";

const Work = () => {
  const experiences = [
    {
      title: "Position Title",
      company: "Company Name",
      period: "Start Date - End Date",
      description: "Describe your role, responsibilities, and achievements in this position.",
    },
    {
      title: "Position Title",
      company: "Company Name",
      period: "Start Date - End Date",
      description: "Describe your role, responsibilities, and achievements in this position.",
    },
  ];

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Experience
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up stagger-1 font-heading text-4xl md:text-6xl font-semibold text-foreground mb-8">
            Work Experience
          </h1>
          
          <div className="opacity-0 animate-fade-in-up stagger-2 space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      {exp.title}
                    </h2>
                    <p className="font-body text-primary font-medium mt-1">
                      {exp.company}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {exp.period}
                    </p>
                    <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
