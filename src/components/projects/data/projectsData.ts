import mikaBeautySalonImage from "@/assets/projects/mika-beauty-salon.webp";
import portfolioImage from "@/assets/projects/portfolio.webp";
import groceryStoreImage from "@/assets/projects/grocery-store.webp";
import AstroIcon from "@/components/icons/colored/Astroicon.astro";
import GitHubActionsIcon from "@/components/icons/colored/GitHubActionsIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import VercelIcon from "@/components/icons/colored/VercelIcon.astro";
import ViteIcon from "@/components/icons/colored/ViteIcon.astro";
import NextIcon from "@/components/icons/NextIcon.astro";
import type { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    title: "projects.grocery.title",
    description: "projects.grocery.description",
    image: groceryStoreImage,
    demoUrl: "https://grocery-store.jexugaz.work/home",
    codeUrl: "https://github.com/JexUgaz/grocery-store-frontend",
    stack: [
      { title: "Next.js", Icon: NextIcon },
      { title: "React", Icon: ReactIcon },
      { title: "TypeScript", Icon: TypeScriptIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Vercel", Icon: VercelIcon },
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
];
