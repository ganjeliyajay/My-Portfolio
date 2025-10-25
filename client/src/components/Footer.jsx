import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-card border-t border-border mt-16 backdrop-blur-[3px] ">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Side */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-primary">Jay Ganjeliya</span>. All rights reserved.
        </p>

        {/* Center Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ganjeliyajay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ganjeliya-jay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/ganjeliya_jay_0745/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <a
          href="#hero"
          className="absolute right-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
