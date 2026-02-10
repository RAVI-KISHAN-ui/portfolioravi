const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Next.js"],
  },
  {
    title: "Languages",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Design Tools",
    skills: ["Figma"],
  },
  {
    title: "Libraries & Data",
    skills: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Cloud (AWS)",
    skills: ["EC2", "S3", "IAM", "Security", "Cost Mgmt"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
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
