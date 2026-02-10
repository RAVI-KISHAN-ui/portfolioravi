import { ExternalLink, Github, Music, Lock, Twitter, Link2, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  color: string;
}

const projects: Project[] = [
  {
    title: "Spotify Clone",
    description: "Spotify-inspired music streaming UI with playlists and playback controls.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Music,
    color: "from-green-500/10 to-green-600/5",
  },
  {
    title: "Password Manager",
    description: "Secure password management app with responsive UI and form handling.",
    tech: ["React", "Tailwind CSS"],
    icon: Lock,
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "X.com (Twitter) Clone",
    description: "Responsive social media UI with tweet feed and sidebar navigation.",
    tech: ["Tailwind CSS"],
    icon: Twitter,
    color: "from-sky-500/10 to-sky-600/5",
  },
  {
    title: "Linktree Application",
    description: "Mobile-first app to showcase multiple social/professional links.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Link2,
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    title: "GetMeAChai – Patreon Clone",
    description: "Creator-support platform with authentication, profiles, and payments.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: Coffee,
    color: "from-amber-500/10 to-amber-600/5",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-3">What I've built</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
            >
              {/* Color header strip */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-border`}>
                <project.icon size={36} className="text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-border">
                  <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors pt-3">
                    <ExternalLink size={13} /> Live Demo
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors pt-3">
                    <Github size={13} /> GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
