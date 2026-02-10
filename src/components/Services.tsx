import { Code, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, modern, and performance-optimized websites.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive, clean user interfaces with a focus on usability and aesthetics.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl p-8 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
