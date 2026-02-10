import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kishanravi@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailto);
  };

  const contactLinks = [
    { icon: Mail, label: "kishanravi@gmail.com", href: "mailto:kishanravi@gmail.com" },
    { icon: Github, label: "RAVI-KISHAN-ui", href: "https://github.com/RAVI-KISHAN-ui" },
    { icon: Linkedin, label: "ravi-kishan", href: "https://www.linkedin.com/in/ravi-kishan-a880a5328/" },
    { icon: MapPin, label: "India", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-3">Let's connect</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm always open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi — feel free to reach out!
            </p>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-secondary-foreground flex-1">{link.label}</span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-7">
            <h3 className="font-heading font-semibold mb-2">Send a message</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium text-sm hover:shadow-[0_0_25px_-5px_hsl(72_40%_55%_/_0.4)] transition-all duration-300"
            >
              Send Message <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
