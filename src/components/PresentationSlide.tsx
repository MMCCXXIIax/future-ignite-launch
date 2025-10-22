import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PresentationSlideProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
  imageUrl?: string;
  className?: string;
  titleClassName?: string;
  variant?: "hero" | "problem" | "solution" | "cta";
}

export const PresentationSlide = ({
  title,
  subtitle,
  content,
  imageUrl,
  className,
  titleClassName,
  variant = "hero",
}: PresentationSlideProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-primary";
      case "problem":
        return "bg-gradient-to-br from-destructive/20 to-background";
      case "solution":
        return "bg-gradient-accent";
      case "cta":
        return "bg-gradient-primary animate-glow";
      default:
        return "bg-background";
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden",
        getVariantStyles(),
        className
      )}
    >
      {/* Background image with overlay */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8 text-center">
        {subtitle && (
          <p className="text-secondary text-sm md:text-base lg:text-lg font-semibold tracking-wider uppercase animate-fade-in-up">
            {subtitle}
          </p>
        )}
        
        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-8xl font-black tracking-tight animate-scale-in",
            titleClassName
          )}
        >
          {title}
        </h1>

        <div className="animate-fade-in-up delay-300">{content}</div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000" />
    </div>
  );
};
