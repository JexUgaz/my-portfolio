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
    url: "contact.github.url",
  },
  {
    description: "contact.linkedin.description",
    title: "contact.linkedin.title",
    url: "contact.linkedin.url",
    Icon: LinkedinIcon,
  },
  {
    description: "contact.whatsapp.description",
    title: "contact.whatsapp.title",
    url: "contact.whatsapp.url",
    Icon: WhatsappIcon,
  },
  {
    description: "contact.email.description",
    title: "contact.email.title",
    url: "contact.email.url",
    Icon: EmailIcon,
  },
];
