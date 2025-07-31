import type { ContactMeItem } from "@/types/ContactMeItem";

import GithubIcon from "@/components/icons/GithubIcon.astro";
import LinkedinIcon from "@/components/icons/LinkedinIcon.astro";
import WhatsappIcon from "@/components/icons/WhatsappIcon.astro";
import EmailIcon from "@/components/icons/EmailIcon.astro";

export const contactMeData: ContactMeItem[] = [
  {
    Icon: GithubIcon,
    description: "contact.github.description",
    title: "contact.github.title",
    url: "https://github.com/JexUgaz",
  },
  {
    description: "contact.linkedin.description",
    title: "contact.linkedin.title",
    url: "https://www.linkedin.com/in/lugazmlink/",
    Icon: LinkedinIcon,
  },
  {
    description: "contact.whatsapp.description",
    title: "contact.whatsapp.title",
    url: "https://wa.me/51970149453?text=Hola%20Jex%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",
    Icon: WhatsappIcon,
  },
  {
    description: "contact.email.description",
    title: "contact.email.title",
    url: "mailto:loammi.jezreel@gmail.com?subject=Hola Jex - Portafolio&body=Hola Jex, vi tu portafolio y me gustaría hablar contigo.",
    Icon: EmailIcon,
  },
];
