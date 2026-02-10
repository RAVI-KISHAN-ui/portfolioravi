import { Code, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, modern, and performance-optimized websites using the latest frameworks and best practices.",
    features: ["React & Next.js", "REST APIs", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive, clean user interfaces with a focus on usability, aesthetics, and delightful user experiences.",
    features: ["Figma Prototyping", "Clean Interfaces", "User Research", "Design Systems"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-3">What I offer</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
          My <span className="text-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl p-8 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={22} />
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-xs text-secondary-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
