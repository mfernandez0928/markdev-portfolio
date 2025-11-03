import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  color?: "cyan" | "magenta" | "violet" | "lime";
  className?: string;
}

export default function SkillBadge({
  name,
  icon,
  color = "cyan",
  className,
}: SkillBadgeProps) {
  const colorClasses = {
    cyan: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/20 shadow-neon-cyan",
    magenta:
      "bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30 hover:bg-neon-magenta/20 shadow-neon-magenta",
    violet:
      "bg-neon-violet/10 text-neon-violet border-neon-violet/30 hover:bg-neon-violet/20 shadow-neon-violet",
    lime: "bg-neon-lime/10 text-neon-lime border-neon-lime/30 hover:bg-neon-lime/20",
  };

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300 cursor-pointer group inline-flex items-center gap-2 font-medium text-sm hover:shadow-lg",
        colorClasses[color],
        className
      )}
    >
      {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      {name}
    </div>
  );
}
