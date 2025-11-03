import { useEffect, useState } from "react";
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

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "AI Task Manager",
      description:
        "Intelligent task management app with AI-powered task suggestions and priority optimization.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Chat App",
      description:
        "WebSocket-powered chat application with end-to-end encryption and group messaging.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Socket.io", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const skills = [
    { name: "React", color: "cyan" },
    { name: "TypeScript", color: "violet" },
    { name: "Node.js", color: "magenta" },
    { name: "Tailwind CSS", color: "cyan" },
    { name: "MongoDB", color: "lime" },
    { name: "PostgreSQL", color: "violet" },
    { name: "GraphQL", color: "magenta" },
    { name: "Docker", color: "cyan" },
    { name: "AWS", color: "violet" },
    { name: "Git", color: "magenta" },
  ];

  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Open Source Contrib.", value: "100+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orb 1 */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>

          {/* Gradient Orb 2 */}
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float animation-delay-2000"></div>

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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Sparkles size={16} className="text-neon-cyan" />
            <span className="text-neon-cyan font-semibold">
              Welcome to My Portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-foreground mb-2">I Build</span>
            <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent animate-neon-flicker">
              Digital Experiences
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Full-stack developer creating stunning, performant web applications.
            Specialized in React, TypeScript, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <AnimatedButton
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              View My Work
            </AnimatedButton>
            <AnimatedButton
              href="mailto:contact@example.com"
              variant="outline"
              size="lg"
              icon={<Mail size={20} />}
            >
              Get In Touch
            </AnimatedButton>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-6 justify-center mt-12 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#"
              className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-neon-magenta/10 text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-neon-magenta transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-lg bg-neon-violet/10 text-neon-violet hover:bg-neon-violet/20 hover:shadow-neon-violet transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-6">
              <Code2 size={16} className="text-neon-cyan" />
              <span className="text-neon-cyan font-semibold">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my best work in web development and design. Each project
              represents my commitment to quality and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 100}ms both`,
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <AnimatedButton
              href="/projects"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 border-t border-neon-cyan/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 mb-6">
              <Zap size={16} className="text-neon-magenta" />
              <span className="text-neon-magenta font-semibold">
                Tech Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 50}ms both`,
                }}
              >
                <SkillBadge name={skill.name} color={skill.color as any} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rounded-2xl blur-xl"></div>

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
                  href="mailto:contact@example.com"
                  variant="primary"
                  size="lg"
                  icon={<Mail size={20} />}
                >
                  Send Me an Email
                </AnimatedButton>
                <AnimatedButton
                  href="#"
                  variant="secondary"
                  size="lg"
                  icon={<ExternalLink size={20} />}
                >
                  Schedule a Call
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background px-2 py-1 rounded-lg">
                  <Code2 className="w-5 h-5 text-neon-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              © {new Date().getFullYear()} All rights reserved. Crafted with{" "}
              <span className="text-neon-cyan">creativity</span> and{" "}
              <span className="text-neon-magenta">passion</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
