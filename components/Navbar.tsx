import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavbarData } from "@/data/navbarData";
import CalScheduler from "./CalSheduler";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
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
          <p className="text-2xl lg:text-[30px] font-extrabold gradient_blue_text">
            {NavbarData.logoName}
          </p>
        </Link>
        <NavLinks links={NavbarData.navLinks} />

        {/* CalCom sheduler */}
        <CalScheduler label="Let's Connect" />
      </div>
      <MobileNav />
    </nav>
  );
}
