import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon-cyan/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
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
            © 2025 All rights reserved. Crafted with{" "}
            <span className="text-neon-cyan">creativity</span> and{" "}
            <span className="text-neon-magenta">passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
