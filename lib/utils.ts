import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const replaceSpacesWithHyphens = (str: string): string => {
  return str.replace(/\s+/g, "-").toLowerCase(); // Replace one or more spaces with a hyphen
};

// framer-motion variables

export const reveal = {
  hiddenVarient: { y: 50, opacity: 0 },
  revealedVarient: {
    y: 0,
    opacity: 1,
  },
};
