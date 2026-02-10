import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
          I'm passionate about building scalable, user-friendly web applications.
          I love working across the full stack — from crafting clean, intuitive UIs
          to designing robust backend systems. Problem-solving and continuous learning
          drive everything I do.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg">Education</h3>
            </div>
            <p className="font-medium text-foreground">B.Tech in Computer Science</p>
            <p className="text-muted-foreground text-sm mt-1">KIET Group of Institutions, India</p>
            <p className="text-muted-foreground text-xs mt-1">September 2024 – June 2028 (Expected)</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg">Experience</h3>
            </div>
            <p className="font-medium text-foreground">Full-Stack Developer (Projects)</p>
            <p className="text-muted-foreground text-sm mt-1">Self-Directed Projects</p>
            <p className="text-muted-foreground text-xs mt-1">2024 – Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
