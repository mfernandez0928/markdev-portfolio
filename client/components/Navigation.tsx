import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "bg-background/90 border-neon-cyan/30 shadow-lg shadow-neon-cyan/5"
          : "bg-background/60 border-neon-cyan/10",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-background px-2 py-1 rounded-lg">
                <Code2 className="w-5 h-5 text-neon-cyan transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
              MarkDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative py-1 transition duration-300 group",
                    active
                      ? "text-neon-cyan"
                      : "text-foreground hover:text-neon-cyan",
                  )}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  ) : (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta group-hover:w-full transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="mailto:mrfernandezdev@gmail.com"
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-neon-cyan hover:text-neon-magenta transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden pb-4 space-y-2 border-t border-neon-cyan/20 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block px-4 py-2 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition duration-300",
                    pathname === link.href
                      ? "text-neon-cyan bg-neon-cyan/10"
                      : "text-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:mrfernandezdev@gmail.com"
                className="block px-4 py-2 text-background bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg hover:shadow-neon-cyan transition duration-300 text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
