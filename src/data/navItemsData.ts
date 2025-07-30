import type { NavItem } from "@/types/NavItem";
import CodeIcon from "@/components/icons/CodeIcon.astro";
import ContactIcon from "@/components/icons/ContactIcon.astro";
import HomeIcon from "@/components/icons/HomeIcon.astro";
import PersonIconOutline from "@/components/icons/PersonIconOutline.astro";
import SkillIcon from "@/components/icons/Skill_Icon.astro";
import StatisticsIcon from "@/components/icons/StatisticsIcon.astro";

export const navItemsData: NavItem[] = [
  {
    link: "#home",
    title: "Home",
    icon: { Icon: HomeIcon },
  },
  {
    link: "#skills",
    title: "Skills",
    icon: { Icon: SkillIcon },
  },
  {
    link: "#experience",
    title: "Experience",
    icon: { Icon: StatisticsIcon },
  },
  {
    link: "#projects",
    title: "Projects",
    icon: { Icon: CodeIcon },
  },
  {
    link: "#about",
    title: "About",
    icon: { Icon: PersonIconOutline },
  },
  {
    link: "#contact",
    title: "Contact",
    icon: { Icon: ContactIcon },
  },
];
