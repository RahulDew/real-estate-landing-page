import React from "react";

import { IProject } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";
import { replaceSpacesWithHyphens } from "@/lib/utils";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Link
      href={`/projects/${replaceSpacesWithHyphens(project.title)}`}
      className="group relative overflow-hidden h-[350px] w-[400px] rounded-xl duration-300"
    >
      <Image
        src={project.imgUrl}
        alt={project.title}
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-md flex justify-center items-center scale-105 group-hover:scale-100 duration-300"
      />
      <div className="w-full bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-0 gap-2 flex flex-col justify-start items-start absolute group-hover:text-primary bottom-0 p-3 pt-20 group-hover:pb-6 duration-300">
        <div className="flex justify-start items-start flex-col gap-1 text-white">
          <h5 className="text-lg font-extrabold">{project.title}</h5>
          <p className="text-sm opacity-60 font-medium">
            {project.description}
          </p>
          <span className="text-sm  font-semibold flex items-center gap-1">
            <IconMapPin size={24} className="text-white" />
            {project.location}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full absolute bottom-0 opacity-0 group-hover:opacity-100 p-3 group-hover:pb-6 duration-300">
        <button className="h-12 text-md font-semibold text-white bg-white/10 border-2 border-white p-3 rounded-xl">
          More Details
        </button>
      </div>
    </Link>
  );
}
