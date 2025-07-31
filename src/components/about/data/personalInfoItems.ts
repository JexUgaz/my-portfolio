import GraduationIcon from "@/components/icons/GraduationIcon.astro";
import IdCardIcon from "@/components/icons/IdCardIcon.astro";
import LocationIcon from "@/components/icons/LocationIcon.astro";
import type { PersonalInfoItem } from "@/types/PersonalInfoItem";

export const personalInfoItems: PersonalInfoItem[] = [
  {
    label: "about.personal.name",
    content: "Loammi Ugaz",
    icon: {
      Icon: IdCardIcon,
    },
  },
  {
    label: "about.personal.place",
    content: "Lima, Peru",
    icon: {
      Icon: LocationIcon,
    },
  },
  {
    label: "about.personal.education",
    content: "Pontificia Universidad Católica del Perú",
    icon: {
      Icon: GraduationIcon,
    },
  },
];
