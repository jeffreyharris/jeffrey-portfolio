import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
   
      <Hero />
      <AboutSection />
      <PromoSection />

      <ProjectsSection />

      <ExperienceSection />
      <ContactSection />


    </main>
  );
}