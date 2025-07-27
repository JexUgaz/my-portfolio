import type { FloatingOrbConfig } from "@/types/FloatingOrbConfig";
import FlutterIcon from "@/components/icons/FlutterIcon.astro";
import PythonIcon from "@/components/icons/PythonIcon.astro";
import SpringBootIcon from "@/components/icons/SpringBootIcon.astro";
import LaravelIcon from "@/components/icons/LaravelIcon.astro";
import KotlinIcon from "@/components/icons/KotlinIcon.astro";
import NextIcon from "@/components/icons/NextIcon.astro";
import AtroIcon from "@/components/icons/AtroIcon.astro";
import DotNetIcon from "@/components/icons/DotNetIcon.astro";
import AndroidIcon from "@/components/icons/AndroidIcon.astro";
import SqlIcon from "@/components/icons/SqlIcon.astro";
import FirebaseIcon from "@/components/icons/FirebaseIcon.astro";
import CloudflareIcon from "@/components/icons/CloudflareIcon.astro";
import AwsIcon from "@/components/icons/AwsIcon.astro";
import DockerIcon from "@/components/icons/DockerIcon.astro";

export const floatingOrbsData: FloatingOrbConfig[] = [
  {
    Icon: LaravelIcon,
    position: "top-0 left-0",
    size: "size-6 2xl:size-7",
    tooltip: "Laravel",
    url: "https://laravel.com/",
  },
  {
    Icon: FlutterIcon,
    position: "bottom-0 left-0",
    size: "size-5 2xl:size-6",
    tooltip: "Flutter",
    url: "https://flutter.dev/",
  },
  {
    Icon: SpringBootIcon,
    position: "top-0 right-0",
    size: "size-7 2xl:size-8",
    tooltip: "Spring Boot",
    url: "https://spring.io/projects/spring-boot/",
  },
  {
    Icon: PythonIcon,
    position: "bottom-0 right-0",
    size: "size-5 2xl:size-6",
    tooltip: "Python",
    url: "https://www.python.org/",
  },
  {
    Icon: KotlinIcon,
    position: "top-30 left-10",
    size: "size-5 2xl:size-6",
    tooltip: "Kotlin",
    url: "https://kotlinlang.org/",
  },
  {
    Icon: NextIcon,
    position: "left-2 bottom-45 2xl:bottom-50",
    size: "size-6 2xl:size-7",
    tooltip: "Next",
    url: "https://nextjs.org/",
  },
  {
    Icon: AtroIcon,
    position: "bottom-20 right-8",
    size: "size-7 2xl:size-8",
    url: "https://astro.build/",
    tooltip: "Astro",
  },
  {
    Icon: DotNetIcon,
    position: "top-50 right-20 2xl:right-15",
    size: "size-6 2xl:size-7",
    tooltip: ".NET",
    url: "https://learn.microsoft.com/es-es/dotnet/",
  },
  {
    Icon: AndroidIcon,
    position: "top-15 right-30",
    size: "size-7 2xl:size-8",
    tooltip: "Android",
    url: "https://developer.android.com/develop",
  },
  {
    Icon: SqlIcon,
    position: "top-15 left-30",
    size: "size-7 2xl:size-8",
    tooltip: "SQL Database",
    url: "https://dev.mysql.com/doc/",
  },
  {
    Icon: FirebaseIcon,
    position: "bottom-20 left-10",
    size: "size-7 2xl:size-8",
    tooltip: "Firebase",
    url: "https://firebase.google.com/docs",
  },
  {
    Icon: CloudflareIcon,
    position: "left-15 top-50 2xl:top-60",
    size: "size-5 2xl:size-6",
    tooltip: "Cloudflare",
    url: "https://developers.cloudflare.com/",
  },
  {
    Icon: AwsIcon,
    position: "right-5 bottom-40 2xl:bottom-50",
    size: "size-7 2xl:size-8",
    tooltip: "AWS Cloud",
    url: "https://docs.aws.amazon.com/",
  },
  {
    Icon: DockerIcon,
    position: "top-30 right-8",
    size: "size-5 2xl:size-6",
    tooltip: "Docker",
    url: "https://docs.docker.com/",
  },
];
