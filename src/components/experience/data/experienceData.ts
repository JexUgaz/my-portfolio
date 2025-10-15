import type { Experience } from "@/types/Experience";
import companiesLogo from "@/components/experience/data/companiesLogo";
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
import LinuxIcon from "@/components/icons/colored/LinuxIcon.astro";
import HadoopIcon from "@/components/icons/colored/HadoopIcon.astro";
import SparkIcon from "@/components/icons/colored/SparkIcon.astro";
import SqoopIcon from "@/components/icons/colored/SqoopIcon.astro";
import RedisIcon from "@/components/icons/colored/RedisIcon.astro";
import MySQLIcon from "@/components/icons/colored/MySQLIcon.astro";
import BashIcon from "@/components/icons/colored/BashIcon.astro";

export const experienceData: Experience[] = [
  {
    title: "experience.huawei.title",
    company: "HUAWEI Perú",
    description: "experience.huawei.description",
    logo: companiesLogo.huaweiLogo,
    date: "experience.huawei.date",
    stack: [
      { title: "Hadoop", Icon: HadoopIcon },
      { title: "Apache Spark", Icon: SparkIcon },
      { title: "Apache Sqoop", Icon: SqoopIcon },
      { title: "Python", Icon: PythonIcon },
      { title: "MySQL", Icon: MySQLIcon },
      { title: "Redis", Icon: RedisIcon },
      { title: "Linux", Icon: LinuxIcon },
      { title: "Shell Scripting", Icon: BashIcon },
    ],
  },
  {
    title: "experience.lexia.title",
    company: "Lexia LegalTech S.A.C.",
    description: "experience.lexia.description",
    logo: companiesLogo.lexiaLogo,
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
    logo: companiesLogo.zafiroLogo,
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
    logo: companiesLogo.barbacciLogo,
    date: "experience.barbacci.date",
    stack: [
      { title: "Java", Icon: JavaIcon },
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "PostgreSQL", Icon: PostgreSQLIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
    ],
  },
];
