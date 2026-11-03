import { ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { Stagger, StaggerItem } from "@/components/Motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-4 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl opacity-50 animate-float animation-delay-2000"></div>
      </div>

      <Stagger onLoad stagger={0.12} className="relative z-10 text-center">
        <StaggerItem>
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-4">
            404
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Page not found
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </StaggerItem>
        <StaggerItem>
          <AnimatedButton
            href="/"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
          >
            Back to Home
          </AnimatedButton>
        </StaggerItem>
      </Stagger>
    </div>
  );
}
