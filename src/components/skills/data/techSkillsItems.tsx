import type { TabSwitcherItem } from "@/types/TabSwitcherItem";
import TechGrid, {
  type TechGridItem,
} from "@/components/skills/components/TechGrid";
import { PythonIcon } from "@/components/skills/icons/PythonIcon";
import { DartIcon } from "@/components/skills/icons/DartIcon";
import { HtmlIcon } from "@/components/skills/icons/HtmlIcon";
import { CssIcon } from "@/components/skills/icons/CssIcon";
import { ReactIcon } from "@/components/skills/icons/ReactIcon";
import { DockerIcon } from "@/components/skills/icons/DockerIcon";
import { NextIcon } from "@/components/skills/icons/NextIcon";
import { AstroIcon } from "@/components/skills/icons/AstroIcon";
import { TailwindIcon } from "@/components/skills/icons/TailwindIcon";
import { NodeIcon } from "@/components/skills/icons/NodeIcon";
import { ExpressIcon } from "@/components/skills/icons/ExpressIcon";
import { NestIcon } from "@/components/skills/icons/NestIcon";
import { AwsIcon } from "@/components/skills/icons/AwsIcon";
import { JavaIcon } from "@/components/skills/icons/JavaIcon";
import { KotlinIcon } from "@/components/skills/icons/KotlinIcon";
import { GoogleCloudPlatformIcon } from "@/components/skills/icons/GoogleCloudPlatformIcon";
import { FirebaseIcon } from "@/components/skills/icons/FirebaseIcon";
import { GitHubIcon } from "@/components/skills/icons/GitHubIcon";
import { GitIcon } from "@/components/skills/icons/GitIcon";
import { CloudflareIcon } from "@/components/skills/icons/CloudflareIcon";
import { VisualStudioIcon } from "@/components/skills/icons/VisualStudioIcon";
import { AndroidStudioIcon } from "@/components/skills/icons/AndroidStudioIcon";
import { IntellijIdeaIcon } from "@/components/skills/icons/IntellijIdeaIcon";
import { FlutterIcon } from "@/components/skills/icons/FlutterIcon";
import { TypeScriptIcon } from "@/components/skills/icons/TypeScriptIcon";
import { SpringBootIcon } from "@/components/skills/icons/SpringBootIcon";
import { LaravelIcon } from "@/components/skills/icons/LaravelIcon";
import { FastApiIcon } from "@/components/skills/icons/FastApiIcon";
import { DotNetIcon } from "@/components/skills/icons/DotNetIcon";
import { DjangoIcon } from "@/components/skills/icons/DjangoIcon";
import { BootstrapIcon } from "@/components/skills/icons/BootstrapIcon";
import { JavaScriptIcon } from "@/components/skills/icons/JavascriptIcon";
import { CSharpIcon } from "@/components/skills/icons/CSharpIcon";
import { ViteIcon } from "@/components/skills/icons/ViteIcon";
import { SupabaseIcon } from "@/components/skills/icons/SupabaseIcon";
import { LinuxIcon } from "@/components/skills/icons/LinuxIcon";
import { TerraformIcon } from "@/components/skills/icons/TerraformIcon";
import { GitHubActionsIcon } from "@/components/skills/icons/GitHubActionsIcon";
import { DigitalOceanIcon } from "@/components/skills/icons/DigitalOceanIcon";
import { PhpStormIcon } from "@/components/skills/icons/PhpStormIcon";
import { MySQLIcon } from "@/components/skills/icons/MySQLIcon";
import { SqlServerIcon } from "@/components/skills/icons/SqlServerIcon";
import { SQLiteIcon } from "@/components/skills/icons/SQLiteIcon";
import { PostgresSQLIcon } from "@/components/skills/icons/PostgresSQLIcon";
import { MongoIcon } from "@/components/skills/icons/MongoIcon";

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
