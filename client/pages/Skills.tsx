import { Zap, ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import SkillBadge from "@/components/SkillBadge";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { cn } from "@/lib/utils";

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
    {
      category: "AI & Automation",
      skills: [
        "AI-Powered Web Apps",
        "Gemini API",
        "Claude API",
        "AI Chat Assistants",
        "Google Apps Script",
      ],
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
        <Stagger
          onLoad
          stagger={0.12}
          className="max-w-7xl mx-auto text-center"
        >
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 mb-8">
              <Zap size={16} className="text-neon-magenta" />
              <span className="text-neon-magenta font-semibold">Skills</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technical Expertise
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
              to build modern, scalable web applications.
            </p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Skills Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Stagger
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {skillCategories.map((category, index) => (
              <StaggerItem
                key={category.category}
                className={cn(
                  "group",
                  // Center a lone last card in the two-column grid
                  index === skillCategories.length - 1 &&
                    skillCategories.length % 2 === 1 &&
                    "md:col-span-2 md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] md:mx-auto",
                )}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 to-neon-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-neon-magenta/20 p-8 hover:border-neon-magenta/40 transition duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-neon-lime transition duration-300">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ y: -4, scale: 1.05 }}
                        >
                          <SkillBadge name={skill} color="lime" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
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
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
