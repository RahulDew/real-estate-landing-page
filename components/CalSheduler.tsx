"use client";
import CalanderIcon from "@/public/assets/icons/calander.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGlobalContext } from "@/context/GlobalContext";

const CalScheduler = ({
  isLabelNeeded = true,
  isMobileMenu = false,
  label,
  className,
}: {
  isLabelNeeded?: boolean;
  isMobileMenu?: boolean;
  label: string;
  className?: string;
}) => {
  const { openPopup } = useGlobalContext();
  return (
    <button
      className={cn(
        "bg-primary py-2.5 px-4 rounded-full text-white font-semibold flex justify-center items-center gap-2",
        className
      )}
      onClick={openPopup}
    >
      <Image src={CalanderIcon} alt={"Calander"} priority width={18} />
      {isLabelNeeded && <p className="max-md:hidden pt-0.5">{label}</p>}
      {isMobileMenu && <p className="block">{label}</p>}
    </button>
  );
};

export default CalScheduler;
