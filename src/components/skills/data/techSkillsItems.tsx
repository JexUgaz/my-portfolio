import type { TabSwitcherItem } from "@/types/TabSwitcherItem";
import TechGrid, { type TechGridItem } from "../components/TechGrid";
import { PythonIcon } from "@/components/skills/icons/PythonIcon";
import { DartIcon } from "../icons/DartIcon";
import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { DockerIcon } from "../icons/DockerIcon";
import { NextIcon } from "../icons/NextIcon";
import { AstroIcon } from "../icons/AstroIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { NodeIcon } from "../icons/NodeIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { NestIcon } from "../icons/NestIcon";
import { AwsIcon } from "../icons/AwsIcon";
import { JavaIcon } from "../icons/JavaIcon";
import { KotlinIcon } from "../icons/KotlinIcon";
import { GoogleCloudPlatformIcon } from "../icons/GoogleCloudPlatformIcon";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { GitHubIcon } from "../icons/GitHubIcon";
import { GitIcon } from "../icons/GitIcon";
import { CloudflareIcon } from "../icons/CloudflareIcon";
import { VisualStudioIcon } from "../icons/VisualStudioIcon";
import { AndroidStudioIcon } from "../icons/AndroidStudioIcon";
import { IntellijIdeaIcon } from "../icons/IntellijIdeaIcon";
import { FlutterIcon } from "../icons/FlutterIcon";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { SpringBootIcon } from "../icons/SpringBootIcon";
import { LaravelIcon } from "../icons/LaravelIcon";
import { FastApiIcon } from "../icons/FastApiIcon";
import { DotNetIcon } from "../icons/DotNetIcon";
import { DjangoIcon } from "../icons/DjangoIcon";
import { BootstrapIcon } from "../icons/BootstrapIcon";
import { JavaScriptIcon } from "../icons/JavascriptIcon";
import { CSharpIcon } from "../icons/CSharpIcon";
import { ViteIcon } from "../icons/ViteIcon";
import { SupabaseIcon } from "../icons/SupabaseIcon";
import { LinuxIcon } from "../icons/LinuxIcon";
import { TerraformIcon } from "../icons/TerraformIcon";
import { GitHubActionsIcon } from "../icons/GitHubActionsIcon";
import { DigitalOceanIcon } from "../icons/DigitalOceanIcon";
import { PhpStormIcon } from "../icons/PhpStormIcon";
import { MySQLIcon } from "../icons/MySQLIcon";
import { SqlServerIcon } from "../icons/SqlServerIcon";
import { SQLiteIcon } from "../icons/SQLiteIcon";
import { PostgresSQLIcon } from "../icons/PostgresSQLIcon";
import { MongoIcon } from "../icons/MongoIcon";

const data: Record<string, TechGridItem[]> = {
  "Server-side": [
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
      Icon: DjangoIcon,
      name: "Django",
      tooltip: { color: "#44b78b" },
    },
    { Icon: NodeIcon, name: "Node.js", tooltip: { color: "#339933" } },
    { Icon: ExpressIcon, name: "Express", tooltip: { color: "#000000" } },
    { Icon: NestIcon, name: "NestJS", tooltip: { color: "#E0234E" } },
  ],
  "Client-side": [
    { Icon: FlutterIcon, name: "Flutter", tooltip: { color: "#0d63ab" } },
    { Icon: ReactIcon, name: "React", tooltip: { color: "#61DAFB" } },
    { Icon: NextIcon, name: "Next.js", tooltip: { color: "#000000" } },
    { Icon: AstroIcon, name: "Astro", tooltip: { color: "#FF5D01" } },
    { Icon: ViteIcon, name: "Vite", tooltip: { color: "#bd34fe" } },
    { Icon: TailwindIcon, name: "Tailwind", tooltip: { color: "#06B6D4" } },
    { Icon: BootstrapIcon, name: "Bootstrap", tooltip: { color: "#563D7C" } },
  ],
  Languages: [
    { Icon: TypeScriptIcon, name: "TypeScript", tooltip: { color: "#3178c6" } },
    { Icon: JavaScriptIcon, name: "JavaScript", tooltip: { color: "#f7df1e" } },
    { Icon: CSharpIcon, name: "C#", tooltip: { color: "#68217A" } },
    { Icon: PythonIcon, name: "Python", tooltip: { color: "#3776AB" } },
    { Icon: DartIcon, name: "Dart", tooltip: { color: "#00B4AB" } },
    { Icon: HtmlIcon, name: "HTML", tooltip: { color: "#E34F26" } },
    { Icon: CssIcon, name: "CSS", tooltip: { color: "#1572B6" } },
    { Icon: JavaIcon, name: "Java", tooltip: { color: "#007396" } },
    { Icon: KotlinIcon, name: "Kotlin", tooltip: { color: "#7F52FF" } },
  ],
  Databases: [
    {
      Icon: MongoIcon,
      name: "MongoDB",
      tooltip: { color: "#499D4A" },
    },
    {
      Icon: PostgresSQLIcon,
      name: "PostgresSQL",
      tooltip: { color: "#336791" },
    },
    { Icon: MySQLIcon, name: "MySQL", tooltip: { color: "#00618A" } },
    {
      Icon: SqlServerIcon,
      name: "Microsoft Sql Server",
      tooltip: { color: "#000000" },
    },
    {
      Icon: SQLiteIcon,
      name: "SQLite",
      tooltip: { color: "#0f7fcc" },
    },
  ],
  DevOps: [
    {
      Icon: GitHubActionsIcon,
      name: "GitHub Actions",
      tooltip: { color: "#2088ff" },
    },
    { Icon: TerraformIcon, name: "Terraform", tooltip: { color: "#5C4EE5" } },
    { Icon: AwsIcon, name: "AWS", tooltip: { color: "#FF9900" } },
    { Icon: CloudflareIcon, name: "Cloudflare", tooltip: { color: "#F4811F" } },
    {
      Icon: DigitalOceanIcon,
      name: "Digital Ocean",
      tooltip: { color: "#0080FF" },
    },
    {
      Icon: GoogleCloudPlatformIcon,
      name: "Google Cloud Platform",
      tooltip: { color: "#4285F4" },
    },
    { Icon: FirebaseIcon, name: "Firebase", tooltip: { color: "#ffc24a" } },
    { Icon: SupabaseIcon, name: "Supabase", tooltip: { color: "#3ECF8E" } },
    { Icon: DockerIcon, name: "Docker", tooltip: { color: "#2496ED" } },
    { Icon: LinuxIcon, name: "Linux", tooltip: { color: "#000000" } },
  ],
  "Productivity Tools": [
    { Icon: GitHubIcon, name: "GitHub", tooltip: { color: "#181717" } },
    { Icon: GitIcon, name: "Git", tooltip: { color: "#F05032" } },
    { Icon: VisualStudioIcon, name: "VS Code", tooltip: { color: "#007ACC" } },
    {
      Icon: AndroidStudioIcon,
      name: "Android Studio",
      tooltip: { color: "#3DDC84" },
    },
    {
      Icon: PhpStormIcon,
      name: "Php Storm",
      tooltip: { color: "#8a44d8" },
    },
    {
      Icon: IntellijIdeaIcon,
      name: "IntelliJ IDEA",
      tooltip: { color: "#000000" },
    },
  ],
};

export const techSkillsItems: TabSwitcherItem[] = Object.keys(data).map(
  (key): TabSwitcherItem => ({
    label: key,
    content: <TechGrid techs={data[key]} />,
  })
);
