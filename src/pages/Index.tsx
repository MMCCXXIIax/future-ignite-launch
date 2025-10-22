import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PresentationSlide } from "@/components/PresentationSlide";
import heroImage from "@/assets/hero-future.jpg";
import problemImage from "@/assets/problem-ai-misuse.jpg";
import agitateImage from "@/assets/contrast-innovation.jpg";
import solutionImage from "@/assets/collaboration-building.jpg";
import ctaImage from "@/assets/cta-celebration.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "Are You Ready to Own the Future?",
      subtitle: "IT&Innov. Club",
      variant: "hero" as const,
      imageUrl: heroImage,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Everyone talks about AI—but <strong>most don't know how to truly use it.</strong>
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Some of you may have tried AI tools, but not in the right way. Imagine unlocking AI's real power and creating opportunities you never thought possible.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <div className="px-8 py-4 bg-primary/20 backdrop-blur rounded-xl border border-primary/50 animate-scale-in">
              <span className="text-primary font-bold text-lg">🤖 Real AI Power</span>
            </div>
            <div className="px-8 py-4 bg-secondary/20 backdrop-blur rounded-xl border border-secondary/50 animate-scale-in delay-100">
              <span className="text-secondary font-bold text-lg">💻 True Innovation</span>
            </div>
            <div className="px-8 py-4 bg-accent/20 backdrop-blur rounded-xl border border-accent/50 animate-scale-in delay-200">
              <span className="text-accent font-bold text-lg">🚀 Limitless Potential</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Tech Skills Are the New Power",
      subtitle: "The Problem",
      variant: "problem" as const,
      imageUrl: problemImage,
      content: (
        <div className="space-y-8 text-left max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-destructive leading-relaxed">
            Students struggle with research, assignments, and innovation because they don't know how to leverage AI and tech effectively.
          </p>
          <div className="space-y-6 text-lg md:text-xl">
            <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up">
              <p className="flex items-start gap-3">
                <span className="text-3xl">❌</span>
                <span><strong>AI is being used incorrectly</strong>—copy-paste answers, shallow shortcuts, wasted potential.</span>
              </p>
            </div>
            <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up delay-100">
              <p className="flex items-start gap-3">
                <span className="text-3xl">❌</span>
                <span><strong>This limits growth, creativity, and future opportunities.</strong></span>
              </p>
            </div>
            <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up delay-200">
              <p className="flex items-start gap-3">
                <span className="text-3xl">❌</span>
                <span><strong>Without proper tech skills</strong>, you're falling behind in a world that's moving faster than ever.</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Don't Let Misuse or Fear Hold You Back",
      subtitle: "The Reality",
      variant: "problem" as const,
      imageUrl: agitateImage,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-2xl md:text-3xl font-bold text-destructive">
              Imagine this...
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up">
                <p className="text-muted-foreground">
                  💔 Watching others harness AI and tech to <strong>create apps, projects, and businesses</strong>
                </p>
              </div>
              <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up delay-100">
                <p className="text-muted-foreground">
                  💔 While you're stuck <strong>using it the wrong way</strong>
                </p>
              </div>
              <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up delay-200">
                <p className="text-muted-foreground">
                  💔 Opportunities slip away, <strong>ideas die before they're born</strong>
                </p>
              </div>
              <div className="p-6 bg-destructive/10 backdrop-blur rounded-xl border border-destructive/30 animate-fade-in-up delay-300">
                <p className="text-muted-foreground">
                  💔 <strong>Potential is wasted</strong>, dreams stay dreams
                </p>
              </div>
            </div>
            <p className="text-2xl md:text-3xl pt-4 font-bold text-accent text-center">
              You are capable of SO MUCH MORE than you realize.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "IT&Innov. Club: Unlock Your True Potential",
      subtitle: "The Solution",
      variant: "solution" as const,
      imageUrl: solutionImage,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            Learn to leverage AI <span className="text-accent">the right way</span>—for research, innovation, and building real solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-primary/20 backdrop-blur rounded-2xl border border-primary/50 animate-fade-in-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Master AI the Right Way</h3>
              <p className="text-muted-foreground">
                Learn to use AI for research, innovation, and creating—not just copy-pasting.
              </p>
            </div>
            <div className="p-6 bg-secondary/20 backdrop-blur rounded-2xl border border-secondary/50 animate-fade-in-up delay-100">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Solve Real Problems</h3>
              <p className="text-muted-foreground">
                Build solutions for your school and beyond using technology that matters.
              </p>
            </div>
            <div className="p-6 bg-accent/20 backdrop-blur rounded-2xl border border-accent/50 animate-fade-in-up delay-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-accent">Collaborate & Build</h3>
              <p className="text-muted-foreground">
                Work with like-minded students, sharpen skills, and create impressive projects.
              </p>
            </div>
            <div className="p-6 bg-primary/20 backdrop-blur rounded-2xl border border-primary/50 animate-fade-in-up delay-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Create the Next Facebook</h3>
              <p className="text-muted-foreground">
                Trust me when I say you could end up creating something HUGE—the only thing preventing you are your self-belief limitations. <strong>YOU CAN.</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Join IT&Innov. Club Today—Shape the Future Together!",
      subtitle: "Your Move",
      variant: "cta" as const,
      imageUrl: ctaImage,
      titleClassName: "text-transparent bg-clip-text bg-gradient-accent",
      content: (
        <div className="space-y-10 max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            Be an <span className="text-primary">early mover</span>, a <span className="text-secondary">creator</span>, an <span className="text-accent">innovator</span>.
          </p>
          <div className="space-y-6 text-left">
            <div className="p-6 bg-primary/20 backdrop-blur rounded-xl border border-primary/50 animate-fade-in-up">
              <p className="text-xl md:text-2xl">
                ✨ <strong>Learn AI, coding, and tech skills the right way</strong>
              </p>
            </div>
            <div className="p-6 bg-secondary/20 backdrop-blur rounded-xl border border-secondary/50 animate-fade-in-up delay-100">
              <p className="text-xl md:text-2xl">
                💡 <strong>Build projects no one thought possible</strong>
              </p>
            </div>
            <div className="p-6 bg-accent/20 backdrop-blur rounded-xl border border-accent/50 animate-fade-in-up delay-200">
              <p className="text-xl md:text-2xl">
                🚀 <strong>Your ideas, your future, your breakthroughs start here</strong>
              </p>
            </div>
          </div>
          <div className="pt-8 text-center">
            <Button
              size="lg"
              className="text-2xl px-16 py-8 bg-gradient-accent hover:scale-110 transition-all duration-300 animate-glow shadow-2xl shadow-accent/50 font-black"
            >
              JOIN NOW—DON'T WAIT!
            </Button>
          </div>
          <p className="text-xl text-muted-foreground text-center animate-pulse">
            🎉 Visit us at the club fair this Friday or scan the QR code to sign up! 🎉
          </p>
        </div>
      ),
    },
  ];

  const scrollToSlide = (index: number) => {
    const slideElement = document.getElementById(`slide-${index}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    scrollToSlide(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideIndex = parseInt(entry.target.getAttribute("data-slide-index") || "0");
          setCurrentSlide(slideIndex);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    slides.forEach((_, index) => {
      const slideElement = document.getElementById(`slide-${index}`);
      if (slideElement) {
        observer.observe(slideElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide-${index}`}
          data-slide-index={index}
          className="snap-start"
        >
          <PresentationSlide
            title={slide.title}
            subtitle={slide.subtitle}
            content={slide.content}
            imageUrl={slide.imageUrl}
            variant={slide.variant}
            titleClassName={slide.titleClassName}
          />
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="outline"
          className="rounded-full w-14 h-14 bg-card/80 backdrop-blur border-primary/30 hover:border-primary hover:scale-110 transition-all"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 bg-primary"
                  : "w-3 bg-muted hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          size="icon"
          variant="outline"
          className="rounded-full w-14 h-14 bg-card/80 backdrop-blur border-primary/30 hover:border-primary hover:scale-110 transition-all"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 text-lg font-semibold bg-card/80 backdrop-blur px-4 py-2 rounded-full border border-primary/30">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Index;
