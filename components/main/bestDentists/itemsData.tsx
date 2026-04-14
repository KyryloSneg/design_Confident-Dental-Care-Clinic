import { type BestDentistsSectionCarouselContentItemProps } from "./BestDentistsSectionCarouselContentItem";
import { OptionalField } from "@/utils/ts-util-types";

// all items have to be the same width
const itemsData: OptionalField<
  BestDentistsSectionCarouselContentItemProps,
  "index"
>[] = [
  {
    name: "Dr. Marteen Bryant",
    title: "General dentist",
    image: { src: "/doctor_marteen-bryant.png", width: 289, height: 274 },
    mediaInfo: { instagram: "#", facebook: "#", linkedIn: "#", x: "#" },
  },
  {
    name: "Dr. Julia Barbara",
    title: "General dentist",
    image: { src: "/doctor_julia-barbara.png", width: 289, height: 274 },
    mediaInfo: { instagram: "#", facebook: "#", linkedIn: "#", x: "#" },
  },
  {
    name: "Dr. Natasha Smith",
    title: "General dentist",
    image: { src: "/doctor_natasha-smith.png", width: 289, height: 274 },
    mediaInfo: { instagram: "#", facebook: "#", linkedIn: "#", x: "#" },
  },
  {
    name: "Dr. Julia Barbara II",
    title: "General dentist",
    image: { src: "/doctor_julia-barbara.png", width: 289, height: 274 },
    mediaInfo: { instagram: "#", facebook: "#", linkedIn: "#", x: "#" },
  },
];

export default itemsData;
