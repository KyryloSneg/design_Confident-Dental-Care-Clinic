import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

function checkIsFontSize(value: string): boolean {
  return /[a-zA-Z][0-9]-/.test(value);
}

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [checkIsFontSize] }],
      "text-color": [{ text: [(value: string) => !checkIsFontSize(value)] }],
      "bg-color": [{ bg: [(value: string) => true] }],
      "border-color": [{ border: [(value: string) => true] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
