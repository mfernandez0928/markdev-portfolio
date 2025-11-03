import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}

export default function AnimatedButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  external = false,
}: AnimatedButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-neon-cyan to-neon-magenta text-background hover:shadow-neon-cyan",
    secondary:
      "bg-gradient-to-r from-neon-magenta to-neon-violet text-background hover:shadow-neon-magenta",
    outline:
      "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      {children}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 -skew-x-12"></div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
