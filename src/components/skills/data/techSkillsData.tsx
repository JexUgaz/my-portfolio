import { type TechGridItem } from "@/components/skills/components/TechGrid";
import {
  DjangoIcon,
  DotNetIcon,
  ExpressIcon,
  FastApiIcon,
  FlaskIcon,
  LaravelIcon,
  NestIcon,
  NodeIcon,
  PrismaIcon,
  SocketDotIcon,
  SpringBootIcon,
  SwaggerIcon,
} from "@/components/skills/icons/server-side";
import {
  AndroidIcon,
  AstroIcon,
  BootstrapIcon,
  FlutterIcon,
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  ViteIcon,
} from "@/components/skills/icons/client-side";
import {
  CSharpIcon,
  CssIcon,
  DartIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  KotlinIcon,
  PHPIcon,
  PythonIcon,
  SQLLanguageIcon,
  TypeScriptIcon,
} from "@/components/skills/icons/languages";

import {
  DynamoIcon,
  FirestoreIcon,
  MongoIcon,
  MySQLIcon,
  PostgreSQLIcon,
  RedisIcon,
  SQLiteIcon,
  SqlServerIcon,
} from "@/components/skills/icons/databases";
import {
  AwsIcon,
  CloudflareIcon,
  DigitalOceanIcon,
  DockerIcon,
  FirebaseIcon,
  GitHubActionsIcon,
  GoogleCloudPlatformIcon,
  LinuxIcon,
  NginxIcon,
  SupabaseIcon,
  TerraformIcon,
  VercelIcon,
} from "@/components/skills/icons/cloud-devops";

import {
  AndroidStudioIcon,
  GitHubIcon,
  GitIcon,
  GitLabIcon,
  IntellijIdeaIcon,
  PhpStormIcon,
  PostmanIcon,
  TerminalIcon,
  VirtualBoxIcon,
  VisualStudioIcon,
} from "@/components/skills/icons/tools-ides";
import type { TranslationKey } from "@/i18n/types";

export const techSkillsData: Partial<Record<TranslationKey, TechGridItem[]>> = {
  "skills.categories.server": [
    {
      Icon: SpringBootIcon,
      name: "Spring Boot",
      tooltip: { color: "#6db33f" },
    },
    {
      Icon: LaravelIcon,
      name: "Laravel",
      tooltip: { color: "#FF2D20" },
    },
    {
      Icon: FastApiIcon,
      name: "Fast Api",
      tooltip: { color: "#049688" },
    },
    {
      Icon: DotNetIcon,
      name: ".NET",
      tooltip: { color: "#512BD4" },
    },
    {
      Icon: FlaskIcon,
      name: "Flask",
      tooltip: { color: "#000000" },
    },
    {
      Icon: DjangoIcon,
      name: "Django",
      tooltip: { color: "#44b78b" },
    },
    { Icon: NodeIcon, name: "Node.js", tooltip: { color: "#339933" } },
    { Icon: ExpressIcon, name: "Express", tooltip: { color: "#000000" } },
    { Icon: NestIcon, name: "NestJS", tooltip: { color: "#E0234E" } },
    { Icon: SocketDotIcon, name: "Socket.IO", tooltip: { color: "#000000" } },
    { Icon: PrismaIcon, name: "Prisma ORM", tooltip: { color: "#000000" } },
    { Icon: SwaggerIcon, name: "Swagger", tooltip: { color: "#6d9a00" } },
  ],
  "skills.categories.client": [
    { Icon: FlutterIcon, name: "Flutter", tooltip: { color: "#0d63ab" } },
    { Icon: AndroidIcon, name: "Android", tooltip: { color: "#a4c639" } },
    { Icon: ReactIcon, name: "React", tooltip: { color: "#61DAFB" } },
    { Icon: NextIcon, name: "Next.js", tooltip: { color: "#000000" } },
    { Icon: ShadcnIcon, name: "Shadcn UI", tooltip: { color: "#000000" } },
    { Icon: AstroIcon, name: "Astro", tooltip: { color: "#FF5D01" } },
    { Icon: ViteIcon, name: "Vite", tooltip: { color: "#bd34fe" } },
    { Icon: TailwindIcon, name: "Tailwind", tooltip: { color: "#06B6D4" } },
    { Icon: BootstrapIcon, name: "Bootstrap", tooltip: { color: "#563D7C" } },
  ],
  "skills.categories.languages": [
    { Icon: TypeScriptIcon, name: "TypeScript", tooltip: { color: "#3178c6" } },
    { Icon: JavaScriptIcon, name: "JavaScript", tooltip: { color: "#f7df1e" } },
    { Icon: CSharpIcon, name: "C#", tooltip: { color: "#68217A" } },
    { Icon: PythonIcon, name: "Python", tooltip: { color: "#3776AB" } },
    { Icon: DartIcon, name: "Dart", tooltip: { color: "#00B4AB" } },
    { Icon: HtmlIcon, name: "HTML", tooltip: { color: "#E34F26" } },
    { Icon: CssIcon, name: "CSS", tooltip: { color: "#1572B6" } },
    { Icon: JavaIcon, name: "Java", tooltip: { color: "#007396" } },
    { Icon: PHPIcon, name: "PHP", tooltip: { color: "#4c6b96" } },
    { Icon: KotlinIcon, name: "Kotlin", tooltip: { color: "#7F52FF" } },
    { Icon: SQLLanguageIcon, name: "SQL", tooltip: { color: "#00bcf2" } },
  ],
  "skills.categories.databases": [
    {
      Icon: MongoIcon,
      name: "MongoDB",
      tooltip: { color: "#499D4A" },
    },
    {
      Icon: PostgreSQLIcon,
      name: "PostgreSQL",
      tooltip: { color: "#336791" },
    },
    { Icon: RedisIcon, name: "Redis", tooltip: { color: "#D82C20" } },
    { Icon: MySQLIcon, name: "MySQL", tooltip: { color: "#00618A" } },
    {
      Icon: SqlServerIcon,
      name: "Microsoft Sql Server",
      tooltip: { color: "#000000" },
    },
    {
      Icon: DynamoIcon,
      name: "DynamoDB",
      tooltip: { color: "#2E27AD" },
    },
    {
      Icon: SQLiteIcon,
      name: "SQLite",
      tooltip: { color: "#0f7fcc" },
    },
    {
      Icon: FirestoreIcon,
      name: "Firestore",
      tooltip: { color: "#EEAB37" },
    },
  ],
  "skills.categories.cloud": [
    { Icon: AwsIcon, name: "AWS", tooltip: { color: "#FF9900" } },
    {
      Icon: GoogleCloudPlatformIcon,
      name: "Google Cloud Platform",
      tooltip: { color: "#4285F4" },
    },
    {
      Icon: DigitalOceanIcon,
      name: "Digital Ocean",
      tooltip: { color: "#0080FF" },
    },

    {
      Icon: GitHubActionsIcon,
      name: "GitHub Actions",
      tooltip: { color: "#2088ff" },
    },
    { Icon: TerraformIcon, name: "Terraform", tooltip: { color: "#5C4EE5" } },
    { Icon: DockerIcon, name: "Docker", tooltip: { color: "#2496ED" } },
    { Icon: NginxIcon, name: "NGINX", tooltip: { color: "#009639" } },

    { Icon: FirebaseIcon, name: "Firebase", tooltip: { color: "#ffc24a" } },
    { Icon: SupabaseIcon, name: "Supabase", tooltip: { color: "#3ECF8E" } },

    { Icon: CloudflareIcon, name: "Cloudflare", tooltip: { color: "#F4811F" } },
    { Icon: VercelIcon, name: "Vercel", tooltip: { color: "#000000" } },

    { Icon: LinuxIcon, name: "Linux Server", tooltip: { color: "#000000" } },
  ],
  "skills.categories.tools": [
    { Icon: TerminalIcon, name: "Terminal", tooltip: { color: "#323232" } },
    { Icon: PostmanIcon, name: "Postman", tooltip: { color: "#FF6C37" } },
    { Icon: GitIcon, name: "Git", tooltip: { color: "#F05032" } },
    { Icon: GitHubIcon, name: "GitHub", tooltip: { color: "#181717" } },
    {
      Icon: GitLabIcon,
      name: "GitLab",
      tooltip: { color: "#e24329" },
    },
    { Icon: VisualStudioIcon, name: "VS Code", tooltip: { color: "#007ACC" } },
    {
      Icon: AndroidStudioIcon,
      name: "Android Studio",
      tooltip: { color: "#3DDC84" },
    },
    { Icon: PhpStormIcon, name: "Php Storm", tooltip: { color: "#8a44d8" } },
    {
      Icon: IntellijIdeaIcon,
      name: "IntelliJ IDEA",
      tooltip: { color: "#3068B1" },
    },
    {
      Icon: VirtualBoxIcon,
      name: "Virtual Box",
      tooltip: { color: "#183A61" },
    },
  ],
};
