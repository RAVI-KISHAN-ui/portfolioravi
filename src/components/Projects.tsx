import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Spotify Clone",
    description: "Spotify-inspired music streaming UI with playlists and playback controls.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Password Manager",
    description: "Secure password management app with responsive UI and form handling.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "X.com (Twitter) Clone",
    description: "Responsive social media UI with tweet feed and sidebar navigation.",
    tech: ["Tailwind CSS"],
  },
  {
    title: "Linktree Application",
    description: "Mobile-first app to showcase multiple social/professional links.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "GetMeAChai – Patreon Clone",
    description: "Creator-support platform with authentication, profiles, and payments.",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 card-hover flex flex-col"
            >
              <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Github size={14} /> GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
