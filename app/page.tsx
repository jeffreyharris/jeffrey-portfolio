import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
   
      <Hero />
      <AboutSection />

      <ProjectsSection />

      <ExperienceSection />
      <ContactSection />


    </main>
  );
}