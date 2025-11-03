import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/GJ-Logo.png";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 backdrop-blur-[3px]",
        isScrolled ? "py-4 bg-background/70 shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 relative">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <img
            className="w-10 h-10 object-contain transition-transform duration-500 hover:rotate-[360deg] hover:scale-110 mr-3"
            src={logo}
            alt="GJ-Logo"
          />
          <span className="relative z-10 tracking-wide text-foreground font-semibold">
            Ganjeliya <span className="text-primary">Jayyy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle — always on top */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[110] relative rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fullscreen Mobile Nav */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden z-[90]",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-10 text-2xl font-semibold">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
