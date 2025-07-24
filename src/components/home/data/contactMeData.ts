import type { ContactMeItem } from "@/types/ContactMeItem";

import GithubIcon from "@/components/icons/GithubIcon.astro";
import LinkedinIcon from "@/components/icons/LinkedinIcon.astro";
import WhatsappIcon from "@/components/icons/WhatsappIcon.astro";

export const contactMeData: ContactMeItem[] = [
  {
    tooltip: "GitHub",
    url: "https://github.com/JexUgaz",
    Icon: GithubIcon,
  },
  {
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/lugazmlink/",
    Icon: LinkedinIcon,
  },
  {
    tooltip: "WhatsApp",
    url: "https://wa.me/51970149453?text=Hola%20Jex%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",
    Icon: WhatsappIcon,
  },
];
