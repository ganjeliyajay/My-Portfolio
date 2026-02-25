import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-card border-t border-border mt-16 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Left */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">
              Jay Ganjeliya
            </span>. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/ganjeliyajay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/ganjeliya-jay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/ganjeliya_jay_0745/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </a>

          </div>

          {/* Scroll to top */}
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
};