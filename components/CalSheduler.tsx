'use client';
import CalanderIcon from "@/public/assets/icons/calander.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePopup } from "@/context/PopUpContext";
  
const CalScheduler = ({
  isLabelNeeded = true,
  label,
  className,
}: {
  isLabelNeeded?: boolean;
  label: string;
  className?: string;
}) => {
  const { openPopup } = usePopup();
  return (
    <button
      className={cn(
        "max-md:mr-12 bg-primary py-2.5 px-4 rounded-full text-white font-semibold flex justify-center items-center gap-2",
        className
      )}
      onClick={openPopup}
    >
      <Image src={CalanderIcon} alt={"Calander"} priority width={18} />
      {isLabelNeeded && <p className="max-md:hidden pt-0.5">{label}</p>}
    </button>
  );
};

export default CalScheduler;
