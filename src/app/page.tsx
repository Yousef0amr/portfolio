import Navbar from "@/modules/shared/components/Navbar/Navbar";
import Footer from "@/modules/shared/components/Footer/Footer";
import HeroSection from "@/modules/hero/components/HeroSection";
import AboutSection from "@/modules/about/components/AboutSection";
import SkillsSection from "@/modules/skills/components/SkillsSection";
import ProjectsSection from "@/modules/projects/components/ProjectsSection";
import ExperienceSection from "@/modules/experience/components/ExperienceSection";
import ContactSection from "@/modules/contact/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
