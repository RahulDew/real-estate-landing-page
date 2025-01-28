import { cn } from "@/lib/utils";
import React from "react";

interface IHeading {
  title: string;
  description: string;
  alignment: "left" | "center" | "right";
}

export default function Heading({ title, description, alignment }: IHeading) {
  return (
    <div
      className={cn("w-full h-full py-10 space-y-2 text-center")}
      style={{ textAlign: alignment }}
    >
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {title}
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-xl font-sans font-semibold opacity-60">
        {description}
      </p>
    </div>
  );
}
