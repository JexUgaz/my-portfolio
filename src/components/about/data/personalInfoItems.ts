import GraduationIcon from "@/components/icons/GraduationIcon.astro";
import IdCardIcon from "@/components/icons/IdCardIcon.astro";
import LocationIcon from "@/components/icons/LocationIcon.astro";
import type { PersonalInfoItem } from "@/types/PersonalInfoItem";

export const personalInfoItems: PersonalInfoItem[] = [
  {
    label: "Name",
    content: "Loammi Ugaz",
    icon: {
      Icon: IdCardIcon,
    },
  },
  {
    label: "Place of Birth",
    content: "Lima, Peru",
    icon: {
      Icon: LocationIcon,
    },
  },
  {
    label: "Education",
    content: "The Pontifical Catholic University of Peru",
    icon: {
      Icon: GraduationIcon,
    },
  },
];
