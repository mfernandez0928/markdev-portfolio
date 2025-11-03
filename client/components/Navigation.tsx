import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neon-cyan/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-background px-2 py-1 rounded-lg">
                <Code2 className="w-5 h-5 text-neon-cyan" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
              MarkDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-foreground hover:text-neon-cyan transition duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="mailto:contact@example.com"
              className="relative px-6 py-2 font-semibold text-background overflow-hidden rounded-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-violet opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative inline-flex items-center gap-2">
                Get In Touch
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon-cyan hover:text-neon-magenta transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-neon-cyan/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:contact@example.com"
              className="block px-4 py-2 text-background bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg hover:shadow-neon-cyan transition duration-300 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
