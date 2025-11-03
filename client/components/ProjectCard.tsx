import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500",
        featured ? "col-span-1 md:col-span-2 lg:col-span-2" : ""
      )}
    >
      {/* Gradient Border Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 p-0.5">
        <div className="absolute inset-0 bg-background rounded-xl"></div>
      </div>

      {/* Card Content */}
      <div className="relative h-full bg-gradient-to-br from-background to-background/50 rounded-xl border border-neon-cyan/20 overflow-hidden p-6 flex flex-col">
        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-lg h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition duration-300 font-semibold text-sm"
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
    </div>
  );
}
