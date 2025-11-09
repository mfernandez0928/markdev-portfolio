import { Code2, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import AnimatedButton from "@/components/AnimatedButton";
import { Link } from "react-router-dom";

export default function Projects() {
  const allProjects = [
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio to showcase my skills and web projects.",
      image: "/images/projects/portfolio.png",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://markdev-portfolio.vercel.app/",
      githubUrl: "https://github.com/mfernandez0928/markdev-portfolio",
    },
    {
      title: "Jem Time Attendance App",
      description:
        "Full-stack app for employee attendance with authentication and admin dashboard.",
      image: "/images/projects/jem-attendance.png",
      tags: ["React", "Node.js", "Express", "MySQL"],
      githubUrl: "https://github.com/mfernandez0928/jem-time-attendance-app",
    },
    {
      title: "Clinic Care System",
      description:
        "Responsive front-end for managing clinic appointments and services.",
      image: "/images/projects/clinic-care.png",
      tags: ["React", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/mfernandez0928/cliniccaresystem",
    },
    {
      title: "Funny Calculator",
      description:
        "A calculator that sometimes gives intentionally funny answers for entertainment.",
      image: "/images/projects/funny-calculator.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/mfernandez0928/funny-calculator",
    },
    {
      title: "My E-Calculator",
      description:
        "Functional calculator with clean UI built with vanilla web technologies.",
      image: "/images/projects/myecalculator.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://mfernandez0928.github.io/myecalculator/",
      githubUrl: "https://github.com/mfernandez0928/myecalculator",
    },
    {
      title: "To-do List App",
      description:
        "A to-do list app that uses google sign-in for authentication.",
      image: "/images/projects/to-do-list.png",
      tags: ["React", "Vite", "Firebase", "Google Sign-in"],
      liveUrl: "https://todolist-green-eight.vercel.app/",
      githubUrl: "https://github.com/mfernandez0928/todolist",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-8">
            <Code2 size={16} className="text-neon-cyan" />
            <span className="text-neon-cyan font-semibold">All Projects</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Portfolio of Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in web development,
            design, and problem-solving. Each project represents dedication to
            quality and innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
                  <Code2 className="w-5 h-5 text-neon-cyan" />
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
