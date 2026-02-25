import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {

  const scrollToNext = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">

        <div className="flex flex-col items-center gap-6">

          {/* Greeting */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground tracking-wide">
            👋 Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Ganjeliya Jay
            </span>
          </h1>

          {/* Typing animation */}
          <div className="min-h-[40px]">
            <TypeAnimation
              sequence={[
                "I build modern web applications",
                2000,
                "I design scalable MERN solutions",
                2000,
                "I create interactive UI experiences",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
            />
          </div>

          {/* Description */}
          <p className="max-w-xl text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Passionate MERN Stack Developer crafting modern, scalable and
            high-performance web applications with clean UI and seamless
            user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">

            <a
              href="#projects"
              className="cosmic-button px-8 py-3 text-sm sm:text-base"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer"
      >

        <span className="text-xs sm:text-sm text-muted-foreground">
          Scroll
        </span>

        <ArrowDown size={20} className="text-primary" />

      </div>
    </section>
  );
};