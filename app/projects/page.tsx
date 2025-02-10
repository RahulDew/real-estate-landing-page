import React from "react";
import { IProjectInfo, allProjectsInfo } from "@/data/projectsData";
import ProjectCard from "@/components/ui/project-card";
import client from "@/lib/sanity";

export default async function ProjectsPage() {
  const PROJECTS: IProjectInfo[] = await client.fetch(`*[_type == "project"]`);
  console.log(PROJECTS);
  return (
    <section
      id="services"
      className="w-full space-y-5 py-16 px-5 md:px-16 bg-bgSecondary mt-14"
    >
      {/* Large Header */}
      <div className="text-left mx-auto mb-14 text-foreground">
        <h2 className="text-4xl font-extrabold ">Our Projects</h2>
        <p className="mt-4 text-lg font-semibold text-foregroundSecondary">
          just take a look at our projects and you will see the quality
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {allProjectsInfo.map((project: IProjectInfo, index) => (
          <div key={project.id} className="flex flex-col items-start gap-5">
            <ProjectCard project={project} />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">
                Area: <span className=""> {project.area}</span>
              </p>
              <p className="font-semibold text-lg">
                Price: <span className="text-yellow-500"> {project.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
