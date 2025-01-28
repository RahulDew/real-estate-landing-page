"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import CalanderIcon from "@/public/assets/icons/calander.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const calLink = "ankit-verma-bq98tz/15min";

const CalScheduler = ({
  isLabelNeeded = true,
  label,
  className,
}: {
  isLabelNeeded?: boolean;
  label: string;
  className?: string;
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#00817f" },
          dark: { "cal-brand": "#00817f" },
        },
      });
    })();
  }, []);
  return (
    <button
      data-cal-link={calLink}
      className={cn(
        "max-md:mr-12 bg-primary py-2.5 px-4 rounded-full text-white font-semibold flex justify-center items-center gap-2",
        className
      )}
    >
      <Image src={CalanderIcon} alt={"Calander"} priority width={18} />
      {isLabelNeeded && <p className="max-md:hidden pt-0.5">{label}</p>}
    </button>
  );
};

export default CalScheduler;
