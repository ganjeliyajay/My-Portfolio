import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/GJ-Logo.png";
import { useDispatch } from "react-redux";
import { getCertificate } from "../Redux/Thunk/CertificateThunk";
import { toast, Bounce } from "react-toastify";

export const Navbar = ({ setShowCertificate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //certificate button click handler
  const handleCertificateClick = () => {
    try {
      dispatch(getCertificate());
      setShowCertificate(true);
    } catch (error) {
      toast.error(error?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

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

          <a
            href="#hero"
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            Skills
          </a>

          <button
            onClick={handleCertificateClick}
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            Certificates
          </button>

          <a
            href="#projects"
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors font-medium duration-300"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[110] relative rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-[80vh] flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden z-[90]",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        )}
      >
        <div className="flex flex-col items-center space-y-10 text-2xl font-semibold">

          <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>

          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>

          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>

          <a
            href="#certificates"
            onClick={() => {
              setIsMenuOpen(false);
              handleCertificateClick();
            }}
          >
            Certificates
          </a>

          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>

        </div>
      </div>
    </nav>
  );
};