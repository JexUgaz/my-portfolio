import image from "@/assets/projects/mika-beauty-salon.webp";
import AstroIcon from "@/components/icons/colored/Astroicon.astro";
import GitHubActionsIcon from "@/components/icons/colored/GitHubActionsIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import type { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    title: "Mika - Beauty Salon",
    description:
      "Official website for the women's empowerment campaign organized by Mika Beauty Salon. The project aims to inspire women through Heels Dance (also known as Strip Dance), promoting self-esteem, sensuality, and personal power.",
    image: image,
    demoUrl: "https://mika-beauty-salon.jexugaz.work",
    codeUrl: "https://github.com/JexUgaz/mika-beauty-salon",
    stack: [
      {
        title: "Astro",
        Icon: AstroIcon,
      },
      {
        title: "React",
        Icon: ReactIcon,
      },
      {
        title: "TypeScript",
        Icon: TypeScriptIcon,
      },
      {
        title: "Tailwind CSS",
        Icon: TailwindCSSIcon,
      },
      {
        title: "Github Actions",
        Icon: GitHubActionsIcon,
      },
    ],
  },
];
