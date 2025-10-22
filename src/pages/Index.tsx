import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PresentationSlide } from "@/components/PresentationSlide";
import heroImage from "@/assets/hero-students.jpg";
import problemImage from "@/assets/problem-student.jpg";
import techImage from "@/assets/tech-innovation.jpg";
import successImage from "@/assets/success-team.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const slides = [
    {
      id: 1,
      title: "Join the Future",
      subtitle: "IT&Innov. Club",
      variant: "hero" as const,
      imageUrl: heroImage,
      content: (
        <div className="space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets opportunity. Where you become unstoppable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="px-6 py-3 bg-card/50 backdrop-blur rounded-lg border border-primary/30">
              <span className="text-primary font-bold">AI & Coding</span>
            </div>
            <div className="px-6 py-3 bg-card/50 backdrop-blur rounded-lg border border-secondary/30">
              <span className="text-secondary font-bold">Innovation</span>
            </div>
            <div className="px-6 py-3 bg-card/50 backdrop-blur rounded-lg border border-accent/30">
              <span className="text-accent font-bold">Leadership</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Are You Being Left Behind?",
      subtitle: "The Problem",
      variant: "problem" as const,
      imageUrl: problemImage,
      content: (
        <div className="space-y-8 text-left max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Without tech skills, students today face real challenges:
          </p>
          <ul className="space-y-4 text-lg md:text-xl">
            <li className="flex items-start gap-4 animate-fade-in-up">
              <span className="text-destructive text-3xl">⚠️</span>
              <span>Struggling with research and assignments while others use AI</span>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-up delay-100">
              <span className="text-destructive text-3xl">⚠️</span>
              <span>Missing opportunities because you lack coding skills</span>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-up delay-200">
              <span className="text-destructive text-3xl">⚠️</span>
              <span>Watching others create while you're stuck consuming</span>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-up delay-300">
              <span className="text-destructive text-3xl">⚠️</span>
              <span>Being unprepared for a tech-driven future</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "The Cost of Staying Behind",
      subtitle: "Agitate",
      variant: "problem" as const,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-2xl md:text-3xl font-bold text-destructive">
              Think about this...
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                🤔 <strong>University applications:</strong> While you write basic essays, 
                others showcase AI projects and coding portfolios.
              </p>
              <p>
                🤔 <strong>Career opportunities:</strong> Tech jobs pay 2-3x more than average, 
                but you need skills to compete.
              </p>
              <p>
                🤔 <strong>Problem-solving:</strong> Everyday challenges that take you hours 
                could be automated in minutes—if you knew how.
              </p>
              <p className="text-xl md:text-2xl pt-4 text-foreground font-semibold">
                The world is moving fast. Are you keeping up?
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Welcome to IT&Innov. Club",
      subtitle: "Your Solution",
      variant: "solution" as const,
      imageUrl: techImage,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Your gateway to the future starts here. Learn. Create. Lead.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-primary/30 animate-fade-in-up">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Master AI & Tech</h3>
              <p className="text-muted-foreground">
                Learn cutting-edge tools like ChatGPT, coding, automation, and productivity hacks.
              </p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-secondary/30 animate-fade-in-up delay-100">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Build Real Projects</h3>
              <p className="text-muted-foreground">
                Create solutions that matter—apps, websites, innovations that solve real problems.
              </p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-accent/30 animate-fade-in-up delay-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-accent">Network & Collaborate</h3>
              <p className="text-muted-foreground">
                Connect with like-minded innovators, share ideas, and build together.
              </p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-primary/30 animate-fade-in-up delay-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Stand Out</h3>
              <p className="text-muted-foreground">
                Gain skills that set you apart for university, internships, and your future career.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "What You'll Gain",
      subtitle: "The Benefits",
      variant: "hero" as const,
      imageUrl: successImage,
      content: (
        <div className="space-y-8 max-w-3xl mx-auto text-left">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl animate-fade-in-up">
              <span className="text-4xl">✨</span>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Practical Tech Skills</h4>
                <p className="text-muted-foreground">
                  AI tools, coding languages, productivity software—all the skills employers want.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl animate-fade-in-up delay-100">
              <span className="text-4xl">🏆</span>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2">Portfolio Projects</h4>
                <p className="text-muted-foreground">
                  Build and showcase real innovations that impress universities and recruiters.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl animate-fade-in-up delay-200">
              <span className="text-4xl">🌟</span>
              <div>
                <h4 className="text-xl font-bold text-accent mb-2">Leadership & Confidence</h4>
                <p className="text-muted-foreground">
                  Be a first mover, an innovator, and a leader in your school community.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl animate-fade-in-up delay-300">
              <span className="text-4xl">🔥</span>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Future-Ready</h4>
                <p className="text-muted-foreground">
                  Get ahead of the curve and be prepared for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Be Part of Something Bigger",
      subtitle: "Social Proof",
      variant: "solution" as const,
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-primary/50 animate-scale-in">
              <div className="text-5xl font-black text-primary mb-2">Founded by</div>
              <p className="text-xl font-semibold">Passionate Students</p>
              <p className="text-muted-foreground mt-2">
                Already working on real projects and innovations
              </p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-secondary/50 animate-scale-in delay-100">
              <div className="text-5xl font-black text-secondary mb-2">Guided by</div>
              <p className="text-xl font-semibold">Expert Teachers</p>
              <p className="text-muted-foreground mt-2">
                Mentorship from experienced educators and tech professionals
              </p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur rounded-2xl border border-accent/50 animate-scale-in delay-200">
              <div className="text-5xl font-black text-accent mb-2">Showcased to</div>
              <p className="text-xl font-semibold">Entire School</p>
              <p className="text-muted-foreground mt-2">
                Present your innovations and inspire the community
              </p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-bold animate-fade-in-up">
            Join students who refuse to wait for the future—they're building it.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Your Move. Join Today.",
      subtitle: "The Time is NOW",
      variant: "cta" as const,
      titleClassName: "text-transparent bg-clip-text bg-gradient-accent",
      content: (
        <div className="space-y-10 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            Together, we can create something{" "}
            <span className="text-accent">no one else in this school</span> thought possible.
          </p>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground">
              🚀 First movers get first opportunities
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground">
              🚀 Limited spots for founding members
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground">
              🚀 Start building your future today
            </p>
          </div>
          <div className="pt-8">
            <Button
              size="lg"
              className="text-2xl px-12 py-8 bg-gradient-accent hover:scale-105 transition-transform duration-300 animate-glow shadow-lg shadow-accent/50"
            >
              JOIN IT&INNOV. CLUB NOW
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Visit us at the club fair this Friday or scan the QR code to sign up!
          </p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide */}
      <div
        key={currentSlide}
        className={`absolute inset-0 ${
          direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
        }`}
      >
        <PresentationSlide
          title={currentSlideData.title}
          subtitle={currentSlideData.subtitle}
          content={currentSlideData.content}
          imageUrl={currentSlideData.imageUrl}
          variant={currentSlideData.variant}
          titleClassName={currentSlideData.titleClassName}
        />
      </div>

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
              onClick={() => {
                setDirection(index > currentSlide ? "right" : "left");
                setCurrentSlide(index);
              }}
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
