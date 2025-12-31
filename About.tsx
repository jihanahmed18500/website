import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Get to know me
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up stagger-1 font-heading text-4xl md:text-6xl font-semibold text-foreground mb-8">
            About Me
          </h1>
          
          <div className="opacity-0 animate-fade-in-up stagger-2 space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Jihan Ahmed, a passionate individual dedicated to making a difference through creativity, hard work, and continuous learning.
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                My Story
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Add your personal story, background, education, and what drives you here. Share what makes you unique and what you're passionate about.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Skills
                </h3>
                <p className="font-body text-muted-foreground">
                  List your key skills and areas of expertise here.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Interests
                </h3>
                <p className="font-body text-muted-foreground">
                  Share your hobbies and interests that shape who you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
