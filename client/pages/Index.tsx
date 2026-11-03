import { useEffect, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code2,
  Zap,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import AnimatedButton from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { featuredProjects, projects } from "@/data/projects";

const roles = ["Web Developer", "Full-Stack Developer", "UI Builder"];

export default function Index() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  // Background orbs drift slightly with the pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const orbX = useSpring(useTransform(mx, [-0.5, 0.5], [-40, 40]), {
    stiffness: 50,
    damping: 20,
  });
  const orbY = useSpring(useTransform(my, [-0.5, 0.5], [-40, 40]), {
    stiffness: 50,
    damping: 20,
  });
  const orbXInverse = useTransform(orbX, (v) => -v);
  const orbYInverse = useTransform(orbY, (v) => -v);

  const handleHeroMove = (e: MouseEvent<HTMLElement>) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  const skills = [
    { name: "React", color: "cyan" },
    { name: "TypeScript", color: "violet" },
    { name: "Node.js", color: "magenta" },
    { name: "Tailwind CSS", color: "cyan" },
    { name: "Express", color: "magenta" },
    { name: "MySQL", color: "violet" },
    { name: "Frappe Framework", color: "lime" },
    { name: "Git", color: "magenta" },
    { name: "Vite", color: "cyan" },
    { name: "Vercel", color: "violet" },
    { name: "AI Integration", color: "lime" },
  ];

  const stats = [
    { label: "Projects Completed", value: String(projects.length) },
    { label: "Years Experience", value: "2" },
    { label: "Open Source Contrib.", value: "3+" },
  ];

  const socials = [
    {
      href: "https://github.com/mfernandez0928",
      label: "GitHub",
      icon: <Github size={24} />,
      className:
        "bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan",
    },
    {
      href: "https://www.linkedin.com/in/mark-ronaldo-fernandez-a3aab3115/",
      label: "LinkedIn",
      icon: <Linkedin size={24} />,
      className:
        "bg-neon-magenta/10 text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-neon-magenta",
    },
    {
      href: "mailto:mrfernandezdev@gmail.com",
      label: "Email",
      icon: <Mail size={24} />,
      className:
        "bg-neon-violet/10 text-neon-violet hover:bg-neon-violet/20 hover:shadow-neon-violet",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        onMouseMove={handleHeroMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-28"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orb 1 */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="absolute top-20 right-20 w-96 h-96"
          >
            <div className="w-full h-full bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>
          </motion.div>

          {/* Gradient Orb 2 */}
          <motion.div
            style={{ x: orbXInverse, y: orbYInverse }}
            className="absolute bottom-20 left-20 w-96 h-96"
          >
            <div className="w-full h-full bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float animation-delay-2000"></div>
          </motion.div>

          {/* Gradient Orb 3 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Content */}
        <Stagger
          onLoad
          stagger={0.15}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          {/* Badge */}
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-8">
              <Sparkles size={16} className="text-neon-cyan" />
              <span className="text-neon-cyan font-semibold">
                Welcome to My Digital World
              </span>
            </div>
          </StaggerItem>

          {/* Main Heading */}
          <StaggerItem>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Crafting</span>
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Digital Experiences
              </span>
            </h1>
          </StaggerItem>

          {/* Rotating Role */}
          <StaggerItem>
            <div className="h-9 mb-8 overflow-hidden text-xl md:text-2xl font-semibold text-neon-cyan">
              <motion.div
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {roles[roleIndex]}
              </motion.div>
            </div>
          </StaggerItem>

          {/* Subtitle */}
          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm an aspiring web developer passionate about building modern,
              responsive, and user-friendly applications. With a foundation in
              full-stack development using
              <span className="text-cyan-400">
                {" "}
                React, Node.js, Express, and MySQL
              </span>
              , I enjoy turning ideas into real, working solutions. I’m
              currently focused on growing my skills, collaborating on
              meaningful projects, and becoming a professional developer who
              creates seamless digital experiences.
            </p>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                View My Work
              </AnimatedButton>
              <AnimatedButton
                href="mailto:mrfernandezdev@gmail.com"
                variant="outline"
                size="lg"
                icon={<Mail size={20} />}
              >
                Get In Touch
              </AnimatedButton>
            </div>
          </StaggerItem>

          {/* Social Links */}
          <StaggerItem>
            <div className="flex gap-6 justify-center mt-12">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg transition-colors duration-300 ${social.className}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </StaggerItem>
        </Stagger>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-neon-cyan">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-neon-cyan/20">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp value={stat.value} />
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-6">
              <Code2 size={16} className="text-neon-cyan" />
              <span className="text-neon-cyan font-semibold">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my best work in web development and design. Each
              project represents my commitment to quality and innovation.
            </p>
          </Reveal>

          {/* Projects Grid */}
          <Stagger
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </Stagger>

          {/* View More Button */}
          <Reveal className="text-center mt-16">
            <AnimatedButton
              href="/projects"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              View All Projects
            </AnimatedButton>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 border-t border-neon-cyan/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 mb-6">
              <Zap size={16} className="text-neon-magenta" />
              <span className="text-neon-magenta font-semibold">
                Tech Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
          </Reveal>

          {/* Skills Grid */}
          <Stagger
            stagger={0.05}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div whileHover={{ y: -4, scale: 1.05 }}>
                  <SkillBadge name={skill.name} color={skill.color as any} />
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rounded-2xl blur-xl animate-pulse"></div>

            {/* Content */}
            <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-cyan/30 p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to work together?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a specific project in mind or
                just want to chat, feel free to get in touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href="mailto:mrfernandezdev@gmail.com"
                  variant="primary"
                  size="lg"
                  icon={<Mail size={20} />}
                >
                  Send Me an Email
                </AnimatedButton>
                <AnimatedButton
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  icon={<ExternalLink size={20} />}
                >
                  Schedule a Call
                </AnimatedButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
