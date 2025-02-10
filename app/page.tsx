import HeaderSection from "@/components/HeaderSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import LeadSection from "@/components/sections/LeadSection";
import OurQualitiesSection from "@/components/sections/OurQualitiesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { TestimonialSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <OurQualitiesSection />
      <ProjectsSection />
      <LeadSection />
      <TestimonialSection />
    </main>
  );
}
