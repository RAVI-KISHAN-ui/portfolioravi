import { Github, Linkedin, ArrowDown, Download, Sparkles } from "lucide-react";
import raviPhoto from "@/assets/ravi-photo.jpg";

const roles = ["Full-Stack Developer", "Web Development", "Java & Modern Web Technologies"];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-40 left-[15%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-[10%] w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-[10%] w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary text-xs font-medium tracking-wide">Available for opportunities</span>
          </div>

          <div>
            <p className="text-muted-foreground text-lg mb-2 font-light">Hi, I am</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Ravi<br />
              <span className="text-gradient">Kishan</span>
            </h1>
          </div>

          <p className="font-heading text-primary/80 text-sm tracking-wide">
            {roles.join(" • ")}
          </p>

          <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
            Full-Stack Developer focused on web development and Java programming.
            Skilled in React, Next.js, Node.js, Express.js, Java, and REST APIs.
            Experienced with responsive applications, authentication, DSA, and AWS fundamentals.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(72_40%_55%_/_0.4)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-muted-foreground px-4 py-3.5 text-sm hover:text-primary transition-colors"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-5 pt-3">
            <a
              href="https://github.com/RAVI-KISHAN-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-kishan-a880a5328/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <div className="h-6 w-px bg-border" />
            <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground text-xs hover:text-primary transition-colors group">
              Scroll Down
              <ArrowDown size={12} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-105" />
            {/* Main image */}
            <div className="relative w-72 h-80 md:w-[360px] md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5">
              <img
                src={raviPhoto}
                alt="Ravi Kishan - Full Stack Developer"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-72 h-80 md:w-[360px] md:h-[420px] rounded-3xl border border-primary/10 -z-10" />
            {/* Floating badge */}
            <div className="absolute -bottom-2 left-6 bg-card border border-border rounded-xl px-4 py-2.5 shadow-lg">
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="font-heading font-bold text-primary text-sm">1+ Years</p>
            </div>
            {/* Corner dot */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
