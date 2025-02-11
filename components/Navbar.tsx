"use client";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavbarData } from "@/data/navbarData";
import CalScheduler from "./CalSheduler";
import { NavLinks } from "./NavLinks";
import { useGlobalContext } from "@/context/GlobalContext";
import { IconMenu3 } from "@tabler/icons-react";

export default function Navbar() {
  const { handleToggleMobileMenu } = useGlobalContext();

  return (
    <nav className="w-full fixed top-10 z-30 flex justify-center items-center ">
      <div className="mx-10 px-3 lg:px-10 rounded-2xl w-full h-[70px] flex justify-between items-center font-semibold text-base backdrop-blur-md bg-white bg-opacity-30 dark:bg-opacity-10 border-2 border-white border-opacity-60 dark:border-opacity-40">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-2 p-1 rounded-md"
        >
          <Image
            src={NavbarData.navbarLogo}
            alt="PropDeal Logo"
            priority
            width={30}
            height={30}
          />
          <p className="text-2xl text-white lg:text-[30px] font-extrabold gradient_blue_text">
            {NavbarData.logoName}
          </p>
        </Link>
        <NavLinks links={NavbarData.navLinks} />

        <div className="flex items-center justify-center gap-3">
          {/* CalCom sheduler */}
          <CalScheduler label="Let's Connect" />
          <button
            onClick={handleToggleMobileMenu}
            className="md:hidden cursor-pointer"
          >
            <IconMenu3 size={35} className="text-white" />
          </button>
        </div>
      </div>
      <MobileNav />
    </nav>
  );
}
