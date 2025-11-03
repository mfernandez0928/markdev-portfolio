import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { Link } from "react-router-dom";

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
      href: "#",
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
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/10 mb-8">
            <Mail size={16} className="text-neon-violet" />
            <span className="text-neon-violet font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, a question, or just want to say
            hello, I'd love to hear from you. Reach out using any of the methods
            below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                className={`group rounded-xl border p-8 transition-all duration-300 cursor-pointer text-center ${
                  colorClasses[method.color as keyof typeof colorClasses]
                }`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-foreground font-semibold">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Find Me On
          </h2>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/mfernandez0928"
              className="p-4 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-ronaldo-fernandez-a3aab3115/"
              className="p-4 rounded-lg bg-neon-magenta/10 text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-neon-magenta transition-all duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-neon-violet/10 text-neon-violet hover:bg-neon-violet/20 hover:shadow-neon-violet transition-all duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1.67 9-5s-3.5-4-7-4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neon-cyan/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background px-2 py-1 rounded-lg">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                MarkDev Portfolio
              </span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              © {new Date().getFullYear()} All rights reserved. Crafted with
              creativity and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
