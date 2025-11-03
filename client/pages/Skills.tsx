import { Zap, ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import SkillBadge from "@/components/SkillBadge";
import { Link } from "react-router-dom";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MySQL", "Frappe Framework"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "GitHub Actions", "Vite", "Vercel"],
    },
    {
      category: "Design",
      skills: ["UI Design", "UX Design", "Figma", "Responsive Design"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl opacity-50 animate-float"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 mb-8">
            <Zap size={16} className="text-neon-magenta" />
            <span className="text-neon-magenta font-semibold">Skills</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Technical Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
            to build modern, scalable web applications.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="group"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 to-neon-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-magenta/20 p-8 hover:border-neon-magenta/40 transition duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-neon-lime transition duration-300">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <SkillBadge key={skill} name={skill} color="lime" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-lime/20 to-neon-violet/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-lime/30 p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to collaborate?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you need any of these skills for your project, let's connect
                and discuss how I can help bring your vision to life.
              </p>
              <AnimatedButton
                href="/"
                variant="secondary"
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
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-cyan rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background px-2 py-1 rounded-lg">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-cyan bg-clip-text text-transparent">
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
