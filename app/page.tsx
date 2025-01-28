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
      <OurWorkSection />
      <TestimonialSection />
      {/* <div className="bg-white">
        <div className="">
          <div className="">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              A better way to send money
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
