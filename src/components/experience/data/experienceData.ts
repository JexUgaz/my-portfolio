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

export const experienceData: Experience[] = [
  {
    title: "Software Engineer",
    company: "Lexia LegalTech S.A.C.",
    description: `
      Built a data extraction system via <span class="text-accent">Web Scraping</span> and 
      <span class="text-accent">Cloudflare Workers</span> using a microservices architecture. Integrated 
      <span class="text-accent">Supabase</span>, <span class="text-accent">vector databases</span>, and 
      <span class="text-accent">AWS (RDS, S3)</span> for <span class="text-accent">AI-powered semantic search</span>. 
      Implemented <span class="text-accent">WebSockets</span> for real-time AI streaming with a frontend built in 
      <span class="text-accent">Next.js</span>.
    `,
    logo: lexiaLogo,
    date: "Jan 2025 - Apr 2025",
    stack: [
      { title: "Next.js", Icon: NextIcon },
      { title: "Cloudflare Workers", Icon: CloudflareIcon },
      { title: "Supabase", Icon: SupabaseIcon },
      { title: "AWS", Icon: AwsIcon },
      { title: "WebSockets", Icon: WebSocketIcon },
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
    ],
  },
  {
    title: "Software Analyst & Developer",
    company: "Zafiro Equipos y Servicios S.A.C.",
    description: `
      Developed cloud-based web and mobile apps using <span class="text-accent">Firebase</span>, 
      <span class="text-accent">AWS</span>, and <span class="text-accent">aiPaaS</span>. Created 
      <span class="text-accent">serverless functions</span> with <span class="text-accent">Python</span> and 
      <span class="text-accent">Node.js</span>. Built a telemetry data platform using the 
      <span class="text-accent">Volvo Connect API</span> and developed an app for fleet optimization. 
      Led a <span class="text-accent">cybersecurity project</span> with 
      <span class="text-accent">Tenable Nessus®</span>, generating automated reports integrated into 
      <span class="text-accent">SQL Server</span>.
    `,
    logo: zafiroLogo,
    date: "Oct 2023 - Dec 2024",
    stack: [
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
    title: "Developer & Systems Support",
    company: "Barbacci Motors S.A.",
    description: `
      Maintained a <span class="text-accent">Java/JavaScript</span> based ERP system. Developed internal 
      software tools to streamline processes. Provided technical support and managed 
      <span class="text-accent">SQL Server</span> and <span class="text-accent">PostgreSQL</span> databases 
      to enhance operational efficiency.
    `,
    logo: barbacciLogo,
    date: "Jan 2023 - Mar 2023",
    stack: [
      { title: "Java", Icon: JavaIcon },
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
    ],
  },
];
