"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { reveal } from "@/lib/utils";
import Link from "next/link";
import { NavbarData } from "@/data/navbarData";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`fixed h-screen inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white text-black"
        variants={sidebar}
      />
      {isOpen && (
        <motion.ul
          variants={reveal}
          initial={"hiddenVarient"}
          animate={"revealedVarient"}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute w-full h-full grid place-items-center gap-10 px-10 py-16 overflow-y-auto"
        >
          <Link
            href={"/"}
            className="flex justify-center items-center gap-2 p-3 rounded-md"
          >
            <Image
              src={NavbarData.navbarLogo}
              alt="PropDeal Logo"
              priority
              width={30}
              height={30}
              className=""
            />
            <p className="text-[27px] font-extrabold gradient_blue_text">
              {NavbarData.logoName}
            </p>
          </Link>
          <div className="space-y-12">
            {NavbarData.navLinks.map((navlink, index) => (
              <motion.li
                key={index}
                variants={reveal}
                initial={"hiddenVarient"}
                animate={"revealedVarient"}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={handleMenuOpen}
                className="font-semibold text-2xl text-center hover:text-primary duration-300"
              >
                <Link href={`${navlink.link}`}>{navlink.name}</Link>
              </motion.li>
            ))}
          </div>
        </motion.ul>
      )}
      {/* Mobile Menu toggle */}
      <MenuToggle handleClick={handleMenuOpen} />
    </motion.nav>
  );
};

export default MobileNav;

const MenuToggle = ({ handleClick }: { handleClick: () => void }) => (
  <button
    onClick={handleClick}
    className="pointer-events-auto absolute right-4 top-[18px] z-30"
  >
    <Image
      src={NavbarData.sidebarIcon}
      alt={"Toggle"}
      priority
      className="w-7"
    />
  </button>
);
