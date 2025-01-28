"use client";
import React, { useState } from "react";
import Link from "next/link";

interface links {
  name: string;
  link: string;
}

export function NavLinks({ links }: { links: links[] }) {
  const [activeLink, setActiveLink] = useState("/");
  const handleOnClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="hidden md:flex justify-center items-center gap-2 lg:gap-5text-sm lg:text-base p-1.5 px-2 rounded-full">
      {links.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.link}
          onClick={() => handleOnClick(navLink.link)}
          className={`${
            activeLink === navLink.link && "bg-primary text-white hover:text-white"
          } w-[80px] lg:w-[100px] text-center  p-1.5 px-2 rounded-full hover:text-primary duration-300`}
        >
          {navLink.name}
        </Link>
      ))}
    </div>
  );
}
