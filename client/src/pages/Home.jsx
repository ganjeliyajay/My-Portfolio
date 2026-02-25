import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import TechStack from "../components/TechStack";
import { Navbar } from "../components/Navbar";
import Certificate from "../components/Certificate";
import { useState } from "react";
import { Reveal } from "../components/Reveal";

export const Home = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar setShowCertificate={setShowCertificate} />

      {/* Certificate Modal */}
      {showCertificate && (
        <Certificate setShowCertificate={setShowCertificate} />
      )}

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};