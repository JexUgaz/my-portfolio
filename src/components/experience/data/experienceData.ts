import type { Experience } from "@/types/Experience";
import lexiaLogo from "@/assets/experience/lexia_lat_logo.webp";
import zafiroLogo from "@/assets/experience/zafiroequiposyservicios_logo.webp";
import barbacciLogo from "@/assets/experience/barbacci_motors_sa_logo.webp";
import NextIcon from "@/components/icons/NextIcon.astro";
import CloudflareIcon from "@/components/icons/colored/CloudflareIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import SupabaseIcon from "@/components/icons/colored/SupabaseIcon.astro";
import AwsIcon from "@/components/icons/colored/AwsIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import SqlServerIcon from "@/components/icons/colored/SqlServerIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
import PostgreSQLIcon from "@/components/icons/colored/PostgreSQLIcon.astro";
import NessusServerIcon from "@/components/icons/colored/NessusServerIcon.astro";
import WebSocketIcon from "@/components/icons/colored/WebSocketIcon.astro";
import FirestoreIcon from "@/components/icons/colored/FirestoreIcon.astro";
import DockerIcon from "@/components/icons/colored/DockerIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import TypeScriptIcon from "@/components/icons/colored/TypeScriptIcon.astro";

export const experienceData: Experience[] = [
  {
    title: "experience.lexia.title",
    company: "Lexia LegalTech S.A.C.",
    description: "experience.lexia.description",
    logo: lexiaLogo,
    date: "experience.lexia.date",
    stack: [
      { title: "TypeScript", Icon: TypeScriptIcon },
      { title: "Node.js", Icon: NodeIcon },
      { title: "Python", Icon: PythonIcon },
      { title: "Next.js", Icon: NextIcon },
      { title: "Cloudflare Workers", Icon: CloudflareIcon },
      { title: "Supabase", Icon: SupabaseIcon },
      { title: "AWS", Icon: AwsIcon },
      { title: "WebSockets", Icon: WebSocketIcon },
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
    ],
  },
  {
    title: "experience.zafiro.title",
    company: "Zafiro Equipos y Servicios S.A.C.",
    description: "experience.zafiro.description",
    logo: zafiroLogo,
    date: "experience.zafiro.date",
    stack: [
      { title: "JavaScript", Icon: JavaScriptIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Firestore", Icon: FirestoreIcon },
      { title: "AWS", Icon: AwsIcon },
      { title: "Python", Icon: PythonIcon },
      { title: "Node.js", Icon: NodeIcon },
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "Nessus Server", Icon: NessusServerIcon },
      { title: "Docker", Icon: DockerIcon },
    ],
  },
  {
    title: "experience.barbacci.title",
    company: "Barbacci Motors S.A.",
    description: "experience.barbacci.description",
    logo: barbacciLogo,
    date: "experience.barbacci.date",
    stack: [
      { title: "Java", Icon: JavaIcon },
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
    ],
  },
];
