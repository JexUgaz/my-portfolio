import mikaBeautySalonImage from "@/assets/projects/mika-beauty-salon.webp";
import portfolioImage from "@/assets/projects/portfolio.webp";
import AstroIcon from "@/components/icons/colored/Astroicon.astro";
import GitHubActionsIcon from "@/components/icons/colored/GitHubActionsIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import ViteIcon from "@/components/icons/colored/ViteIcon.astro";
import type { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    image: portfolioImage,
    demoUrl: "https://portfolio.jexugaz.work",
    codeUrl: "https://github.com/JexUgaz/my-portfolio",
    stack: [
      { title: "Astro", Icon: AstroIcon },
      { title: "React", Icon: ReactIcon },
      { title: "TypeScript", Icon: TypeScriptIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "GitHub Actions", Icon: GitHubActionsIcon },
      { title: "Vite", Icon: ViteIcon },
    ],
  },
  {
    title: "projects.mika.title",
    description: "projects.mika.description",
    image: mikaBeautySalonImage,
    demoUrl: "https://mika-beauty-salon.jexugaz.work",
    codeUrl: "https://github.com/JexUgaz/mika-beauty-salon",
    stack: [
      { title: "Vite", Icon: ViteIcon },
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
