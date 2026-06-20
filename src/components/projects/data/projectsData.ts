import mikaBeautySalonImage from "@/assets/projects/mika-beauty-salon.webp";
import portfolioImage from "@/assets/projects/portfolio.webp";
import groceryStoreImage from "@/assets/projects/grocery-store.webp";
import sDDImages from "@/assets/projects/supplier-inventory";
import AstroIcon from "@/components/icons/colored/Astroicon.astro";
import GitHubActionsIcon from "@/components/icons/colored/GitHubActionsIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";
import VercelIcon from "@/components/icons/colored/VercelIcon.astro";
import ViteIcon from "@/components/icons/colored/ViteIcon.astro";
import NextIcon from "@/components/icons/NextIcon.astro";
import type { Project } from "@/types/Project";
import DotNetIcon from "@/components/icons/DotNetIcon.astro";
import DockerIcon from "@/components/icons/DockerIcon.astro";
import SupabaseIcon from "@/components/icons/colored/SupabaseIcon.astro";
import WebScraping from "@/components/icons/colored/WebScraping.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";

export const projectsData: Project[] = [
  {
    title: "projects.supplierDueDiligence.title",
    description: "projects.supplierDueDiligence.description",
    image: sDDImages.login,
    demoUrl: "https://supplier-due-diligence.jexugaz.work/",
    codeUrl: "https://github.com/JexUgaz/SupplierDueDiligence-frontend",
    stack: [
      { title: "Web Scraping", Icon: WebScraping },
      { title: ".NET", Icon: DotNetIcon },
      { title: "React", Icon: ReactIcon },
      { title: "TypeScript", Icon: TypeScriptIcon },
      { title: "Docker", Icon: DockerIcon },
      { title: "Vercel", Icon: VercelIcon },
      { title: "Supabase", Icon: SupabaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Node.js", Icon: NodeIcon },
    ],
    status: "demo",
    details: {
      images: [
        {
          mobile: {
            optimize: sDDImages.loginMobile,
            raw: sDDImages.loginMobileRaw,
          },
          desktop: {
            optimize: sDDImages.login,
            raw: sDDImages.loginRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.indexMobile,
            raw: sDDImages.indexMobileRaw,
          },
          desktop: {
            optimize: sDDImages.index,
            raw: sDDImages.indexRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.indexFilterMobile,
            raw: sDDImages.indexFilterMobileRaw,
          },
          desktop: {
            optimize: sDDImages.indexFilter,
            raw: sDDImages.indexFilterRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.screeningInitMobile,
            raw: sDDImages.screeningInitMobileRaw,
          },
          desktop: {
            optimize: sDDImages.screeningInit,
            raw: sDDImages.screeningInitRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.editionMobile,
            raw: sDDImages.editionMobileRaw,
          },
          desktop: {
            optimize: sDDImages.edition,
            raw: sDDImages.editionRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.skeletonMobile,
            raw: sDDImages.skeletonMobileRaw,
          },
          desktop: {
            optimize: sDDImages.skeleton,
            raw: sDDImages.skeletonRaw,
          },
        },
        {
          mobile: {
            optimize: sDDImages.screeningResultsMobile,
            raw: sDDImages.screeningResultsMobileRaw,
          },
          desktop: {
            optimize: sDDImages.screeningResults,
            raw: sDDImages.screeningResultsRaw,
          },
        },
      ],
      sections: [
        {
          label: "projects.supplierDueDiligence.section.arquitecture.label",
          markdownPath: "projects.supplierDueDiligence.section.arquitecture.markdownPath",
        },
        {
          label: "projects.supplierDueDiligence.section.frontend.label",
          markdownPath: "projects.supplierDueDiligence.section.frontend.markdownPath",
        },
        {
          label: "projects.supplierDueDiligence.section.backend.label",
          markdownPath: "projects.supplierDueDiligence.section.backend.markdownPath",
        },
        {
          label: "projects.supplierDueDiligence.section.scraper.label",
          markdownPath: "projects.supplierDueDiligence.section.scraper.markdownPath",
        },
      ],
    },
  },
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
    status: "demo",
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
    status: "demo",
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
    status: "open-source",
  },
];
