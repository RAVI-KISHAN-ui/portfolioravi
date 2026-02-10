import { Monitor, Server, Code2, Figma, Database, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { title: "Frontend", icon: Monitor, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Next.js"] },
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "C"] },
  { title: "Design Tools", icon: Figma, skills: ["Figma"] },
  { title: "Libraries & Data", icon: Database, skills: ["Pandas", "NumPy", "Matplotlib"] },
  { title: "Cloud (AWS)", icon: Cloud, skills: ["EC2", "S3", "IAM", "Security", "Cost Mgmt"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-3">What I work with</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="text-primary" size={18} />
                </div>
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
