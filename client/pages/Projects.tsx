import { useState } from "react";
import { Code2, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import AnimatedButton from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", match: () => true },
  {
    label: "Client Work",
    match: (p: (typeof projects)[number]) => !!p.clientWork,
  },
  { label: "Personal", match: (p: (typeof projects)[number]) => !p.clientWork },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(filters[0].label);
  const visibleProjects = projects.filter(
    filters.find((f) => f.label === activeFilter)!.match,
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float animation-delay-2000"></div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-8">
              <Code2 size={16} className="text-neon-cyan" />
              <span className="text-neon-cyan font-semibold">All Projects</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Portfolio of Work
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in web
              development, design, and problem-solving. Each project represents
              dedication to quality and innovation.
            </p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                className={cn(
                  "relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300",
                  activeFilter === filter.label
                    ? "text-background"
                    : "text-muted-foreground hover:text-neon-cyan",
                )}
              >
                {activeFilter === filter.label && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{filter.label}</span>
              </button>
            ))}
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: Math.min(index, 6) * 0.06,
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-cyan/30 p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Want to see more?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always working on new and exciting projects. Check back soon
                for updates, or get in touch to discuss your project.
              </p>
              <AnimatedButton
                href="/"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Back to Home
              </AnimatedButton>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
