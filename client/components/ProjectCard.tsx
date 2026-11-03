import { useState, type MouseEvent } from "react";
import { ExternalLink, Github, Briefcase, Code2 } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  clientWork?: boolean;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  clientWork = false,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  // Pointer position over the card, -0.5 to 0.5 on each axis
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), spring);
  const glowX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);
  const glow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x} ${y}, rgba(6, 182, 212, 0.15), transparent 60%)`,
  );

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full rounded-xl"
    >
      {/* Gradient Border Background */}
      <div className="absolute -inset-px bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-[2px]"></div>

      {/* Card Content */}
      <div className="relative h-full bg-background rounded-xl border border-neon-cyan/20 overflow-hidden p-6 flex flex-col">
        {/* Cursor-following glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glow }}
        />

        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-lg h-48 bg-neon-cyan/5">
          {imageFailed ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neon-cyan/20 via-neon-violet/10 to-neon-magenta/20">
              <Code2 className="w-10 h-10 text-neon-cyan" />
              <span className="font-semibold text-foreground/80">{title}</span>
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          {clientWork && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur text-neon-lime border border-neon-lime/40">
              <Briefcase size={12} />
              Client Work
            </span>
          )}
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-cyan transition duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(liveUrl || githubUrl) && (
            <div className="flex gap-3 pt-4 border-t border-neon-cyan/20">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition duration-300 font-semibold text-sm",
                  )}
                >
                  <ExternalLink size={16} />
                  Visit
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-magenta/10 text-neon-magenta hover:bg-neon-magenta/20 transition duration-300 font-semibold text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
