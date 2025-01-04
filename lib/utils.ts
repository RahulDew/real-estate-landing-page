import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// framer-motion variables

export const reveal = {
  hiddenVarient: { y: 50, opacity: 0 },
  revealedVarient: {
    y: 0,
    opacity: 1,
  },
};
