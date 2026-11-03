import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      value: "mrfernandezdev@gmail.com",
      href: "mailto:mrfernandezdev@gmail.com",
      color: "cyan",
    },
    {
      icon: <Phone size={32} />,
      title: "Phone",
      value: "+358 (041) 325 0621",
      href: "tel:+358413250621",
      color: "magenta",
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      value: "Kotka, Finland",
      href: "https://www.google.com/maps/search/Kotka,+Finland",
      color: "violet",
    },
  ];

  const colorClasses = {
    cyan: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/20",
    magenta:
      "bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30 hover:bg-neon-magenta/20",
    violet:
      "bg-neon-violet/10 text-neon-violet border-neon-violet/30 hover:bg-neon-violet/20",
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
      <section className="relative z-10 py-20 px-4">
        <Stagger
          onLoad
          stagger={0.12}
          className="max-w-7xl mx-auto text-center"
        >
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/10 mb-8">
              <Mail size={16} className="text-neon-violet" />
              <span className="text-neon-violet font-semibold">
                Get In Touch
              </span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Connect
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind, a question, or just want to
              say hello, I'd love to hear from you. Reach out using any of the
              methods below.
            </p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Stagger
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <motion.a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className={`group block h-full rounded-xl border p-8 transition-colors duration-300 cursor-pointer text-center ${
                    colorClasses[method.color as keyof typeof colorClasses]
                  }`}
                >
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-foreground font-semibold">
                    {method.value}
                  </p>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="relative z-10 py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Find Me On
          </h2>
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com/mfernandez0928"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-colors duration-300"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mark-ronaldo-fernandez-a3aab3115/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-lg bg-neon-magenta/10 text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-neon-magenta transition-colors duration-300"
            >
              <Linkedin size={32} />
            </motion.a>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet/20 to-neon-cyan/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-violet/30 p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Prefer to check out my work?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take a look at my portfolio to see what I've been working on
                lately.
              </p>
              <AnimatedButton
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                View Projects
              </AnimatedButton>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
