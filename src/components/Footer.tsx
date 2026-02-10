import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          Made with <Heart size={14} className="text-primary" /> by
          <span className="font-heading font-semibold text-foreground ml-1">Ravi Kishan</span>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/RAVI-KISHAN-ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/ravi-kishan-a880a5328/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
