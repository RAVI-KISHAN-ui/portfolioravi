import { Github, Linkedin, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-primary font-heading text-sm tracking-widest uppercase">
            Hi, I am
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Ravi<br />
            <span className="text-gradient">Kishan</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Full-Stack Developer focused on web development and Java programming.
            Skilled in React, Next.js, Node.js, Express.js, Java, REST APIs.
            Experience with responsive applications, authentication, DSA, and AWS fundamentals.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium text-sm hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/RAVI-KISHAN-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-kishan-a880a5328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground text-xs pt-6 hover:text-primary transition-colors">
            Scroll Down <ArrowDown size={14} />
          </a>
        </div>
        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-border glow-accent">
              <img
                src={profileImg}
                alt="Ravi Kishan - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-72 h-72 md:w-96 md:h-96 rounded-2xl border border-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
