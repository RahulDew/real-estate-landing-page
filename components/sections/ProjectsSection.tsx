import React from "react";
import { ParallaxScroll } from "../ui/parallax-scroll";
import { projects, projectsHeading } from "@/data/projectsData";
import ProjectCard from "../ui/project-card";
import Heading from "../ui/heading";
import Link from "next/link";
import { IconApps } from "@tabler/icons-react";

export default function ProjectsSection() {
  return (
    <section
      id="services"
      className="w-full space-y-5 py-16 px-5 md:px-16 bg-bgSecondary"
    >
      <Heading
        alignment="left"
        title={projectsHeading.title}
        description={projectsHeading.description}
      />
      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col items-start gap-5">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <Link
        href={"/projects"}
        className="font-semibold text-md p-3 bg-primary rounded-lg flex gap-2 items-center justify-center w-[185px] m-auto"
      >
        <IconApps size={24} className="text-white" /> <p> More Projects</p>
      </Link>
    </section>
  );
}
