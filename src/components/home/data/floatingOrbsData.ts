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
    position: "top-0 left-0 xl:left-8 2xl:left-0",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: "Laravel",
    url: "https://laravel.com/",
  },
  {
    Icon: FlutterIcon,
    position: "bottom-0 left-0 xl:left-8 2xl:left-0",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Flutter",
    url: "https://flutter.dev/",
  },
  {
    Icon: SpringBootIcon,
    position: "top-0 right-0",
    size: "size-4 xs:size-6 md:size-7 2xl:size-8",
    tooltip: "Spring Boot",
    url: "https://spring.io/projects/spring-boot/",
  },
  {
    Icon: PythonIcon,
    position: "bottom-0 right-0",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Python",
    url: "https://www.python.org/",
  },
  {
    Icon: KotlinIcon,
    position: "top-15 md:top-30 left-0 xs:left-10 xl:left-18 2xl:left-10",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Kotlin",
    url: "https://kotlinlang.org/",
  },
  {
    Icon: NextIcon,
    position: "left-0 xs:left-2 xl:left-10 2xl:left-2 bottom-45 2xl:bottom-50",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: "Next",
    url: "https://nextjs.org/",
  },
  {
    Icon: AtroIcon,
    position:
      "bottom-10 md:bottom-20 right-3 xs:right-8 sm:right-15 md:right-8",
    size: "size-4 xs:size-6 md:size-7 2xl:size-8",
    url: "https://astro.build/",
    tooltip: "Astro",
  },
  {
    Icon: DotNetIcon,
    position:
      "top-60 xs:top-50 right-1 xs:right-5 sm:right-8 md:right-15 xl:right-20 2xl:right-15",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: ".NET",
    url: "https://learn.microsoft.com/es-es/dotnet/",
  },
  {
    Icon: AndroidIcon,
    position: "top-0 xs:top-8 md:top-15 right-18 xs:right-25 md:right-30",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "Android",
    url: "https://developer.android.com/develop",
  },
  {
    Icon: SqlIcon,
    position: "top-5 md:top-15 left-15 xs:left-25 md:left-30",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "SQL Database",
    url: "https://dev.mysql.com/doc/",
  },
  {
    Icon: FirebaseIcon,
    position: "bottom-20 left-0 xs:left-10 xl:left-18 2xl:left-10",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "Firebase",
    url: "https://firebase.google.com/docs",
  },
  {
    Icon: CloudflareIcon,
    position:
      "left-10 xs:left-15 sm:left-23 md:left-15 xl:left-23 2xl:left-15 top-25 xs:top-38 sm:top-35 md:top-50 2xl:top-60",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Cloudflare",
    url: "https://developers.cloudflare.com/",
  },
  {
    Icon: AwsIcon,
    position:
      "right-0 xs:right-13 sm:right-20 md:right-5 bottom-40 2xl:bottom-50",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "AWS Cloud",
    url: "https://docs.aws.amazon.com/",
  },
  {
    Icon: DockerIcon,
    position: "top-20 md:top-30 right-10 md:right-8",
    size: "size-6 xs:size-4 md:size-5 2xl:size-6",
    tooltip: "Docker",
    url: "https://docs.docker.com/",
  },
];
