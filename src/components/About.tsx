import { GraduationCap, Briefcase, Heart, Target, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, label: "Goal-Oriented", desc: "Building scalable solutions" },
  { icon: Heart, label: "Passionate", desc: "Love for clean code" },
  { icon: Lightbulb, label: "Problem Solver", desc: "DSA & system design" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-3">Get to know me</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start mb-14">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm passionate about building scalable, user-friendly web applications.
              I love working across the full stack — from crafting clean, intuitive UIs
              to designing robust backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Problem-solving and continuous learning drive everything I do. Currently pursuing
              B.Tech in Computer Science, I spend my time building real-world projects
              and exploring modern web technologies.
            </p>
          </div>
          <div className="space-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <h.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-7 card-hover group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Education</h3>
                <p className="text-xs text-muted-foreground">Academic Background</p>
              </div>
            </div>
            <p className="font-medium text-foreground">B.Tech in Computer Science</p>
            <p className="text-muted-foreground text-sm mt-1">KIET Group of Institutions, India</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-secondary rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs text-secondary-foreground">Sept 2024 – June 2028</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-7 card-hover group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Experience</h3>
                <p className="text-xs text-muted-foreground">Hands-on Projects</p>
              </div>
            </div>
            <p className="font-medium text-foreground">Full-Stack Developer</p>
            <p className="text-muted-foreground text-sm mt-1">Self-Directed Projects</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-secondary rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-secondary-foreground">2024 – Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
