import SpainIcon from "@/components/icons/colored/SpainIcon.astro";
import USIcon from "@/components/icons/colored/USIcon.astro";
import type { Language } from "@/types/Language";

export const defaultLang = "en";

export const defaultLanguage: Language = {
  code: defaultLang,
  Icon: USIcon,
  title: "English",
};

export const languages: Language[] = [
  defaultLanguage,
  {
    code: "es",
    Icon: SpainIcon,
    title: "Español",
  },
];

export const ui = {
  en: {
    "site.title": "My Portfolio",
    "meta.title": "Loammi Ugaz - Software Developer",
    "meta.description":
      "I'm Loammi Ugaz, a Telecommunications Engineer specialized in Full-Stack Software Development and Cloud Architecture. Explore my portfolio, skills, and projects.",
    "meta.og.title": "Loammi Ugaz - Software Developer",
    "meta.og.description":
      "Telecommunications Engineer focused on building scalable software and cloud solutions. View my work, background, and projects.",
    "meta.og.site_name": "Loammi Ugaz Portfolio",
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "home.intro": "Hello, I'm Loammi",
    "home.roles": ["Software Developer", "Cloud Engineer", "Mobile Developer"],
    "home.description": `
      <span class="text-accent font-semibold">Telecommunications Engineer</span>
      focused on software development, from backend and mobile apps to cloud infrastructure
      and databases. <br />I design <span class="text-accent font-semibold">
      scalable systems</span> that solve real-world problems with clean, thoughtful architecture.
    `,
    "home.contact-me": "Contact me:",
    "home.download-cv": "Download My CV",
    "skills.title": "Tech Stack",
    "skills.description": `
      A collection of <span class="text-accent">software technologies</span> I've mastered,
      explored, or integrated into real-world solutions.
    `,
    "skills.categories.server": "Server-side",
    "skills.categories.client": "Client-side",
    "skills.categories.languages": "Languages",
    "skills.categories.databases": "Databases",
    "skills.categories.cloud": "Cloud & DevOps",
    "skills.categories.tools": "Tools & IDEs",
    "experience.title": "My Experience",
    "experience.lexia.title": "Software Engineer",
    "experience.lexia.description": `
      Built a data extraction system via <span class="text-accent">Web Scraping</span> and 
      <span class="text-accent">Cloudflare Workers</span> using a microservices architecture. Integrated 
      <span class="text-accent">Supabase</span>, <span class="text-accent">vector databases</span>, and 
      <span class="text-accent">AWS (RDS, S3)</span> for <span class="text-accent">AI-powered semantic search</span>. 
      Implemented <span class="text-accent">WebSockets</span> for real-time AI streaming with a frontend built in 
      <span class="text-accent">Next.js</span>.
    `,
    "experience.lexia.date": "Jan 2025 - Apr 2025",

    "experience.zafiro.title": "Software Analyst & Developer",
    "experience.zafiro.description": `
      Developed cloud-based web and mobile apps using <span class="text-accent">Firebase</span>, 
      <span class="text-accent">AWS</span>, and <span class="text-accent">aiPaaS</span>. Created 
      <span class="text-accent">serverless functions</span> with <span class="text-accent">Python</span> and 
      <span class="text-accent">Node.js</span>. Built a telemetry data platform using the 
      <span class="text-accent">Volvo Connect API</span> and developed an app for fleet optimization. 
      Led a <span class="text-accent">cybersecurity project</span> with 
      <span class="text-accent">Tenable Nessus®</span>, generating automated reports integrated into 
      <span class="text-accent">SQL Server</span>.
    `,
    "experience.zafiro.date": "Oct 2023 - Dec 2024",

    "experience.barbacci.title": "Developer & Systems Support",
    "experience.barbacci.description": `
      Maintained a <span class="text-accent">Java/JavaScript</span> based ERP system. Developed internal 
      software tools to streamline processes. Provided technical support and managed 
      <span class="text-accent">SQL Server</span> and <span class="text-accent">PostgreSQL</span> databases 
      to enhance operational efficiency.
    `,
    "experience.barbacci.date": "Jan 2023 - Mar 2023",
    "projects.title": "Projects",
    "projects.description": `
      A selection of <span class="text-accent">my public projects</span> built with modern 
      <span class="text-accent">technologies</span>, featuring open-source code and cloud integrations.
    `,
    "projects.mika.title": "Mika - Beauty Salon",
    "projects.mika.description":
      "Official website for the women's empowerment campaign organized by Mika Beauty Salon. The project aims to inspire women through Heels Dance (also known as Strip Dance), promoting self-esteem, sensuality, and personal power.",
    "projects.placeholder.title": "More Projects Coming Soon",
    "projects.placeholder.description":
      "Stay tuned, we're still building amazing stuff!",
    "projects.button.demo": "Demo",
    "projects.button.code": "Code",
    "about.title": `
      I build <span class="text-accent">solutions</span> that
      <span class="text-accent">scale</span>,
      <span class="text-accent">connect</span>, and
      <span class="text-accent">make an impact</span>.
    `,
    "about.who.title-1": "¿Who I Am?",
    "about.who.description-1": `
      Engineer from <span class="text-accent">PUCP</span> with a background in networks and systems.
      Enthusiastic about <span class="text-accent">AI</span> and currently focused on
      <span class="text-accent">cloud</span> and <span class="text-accent">software solutions</span>.
    `,
    "about.who.title-2": "My Approach",
    "about.who.description-2": `
      I build software with a focus on <span class="text-accent">clean architecture</span>,
      <span class="text-accent">performance</span>, and <span class="text-accent">rapid delivery</span> —
      turning ideas into solid products across both server-side and client-side.
    `,
    "about.personal.name": "Name",
    "about.personal.place": "Place of Birth",
    "about.personal.education": "Education",
    "about.timeline.foundation.title": "Foundation: Engineering Mindset",
    "about.timeline.foundation.desc": `Graduated as a Telecommunications Engineer from <span class="font-medium text-accent">PUCP</span>. I built a strong foundation in <span class="text-accent">networks, systems, and analytical thinking</span> — essential to my approach to complex challenges.`,

    "about.timeline.transition.title": "Transition: Software as My Medium",
    "about.timeline.transition.desc": `I shifted focus to <span class="text-accent">software development</span> as a way to build things people use. From backend services to full-stack prototypes, I began crafting solutions that brought ideas to life.`,

    "about.timeline.growth.title": "Growth: Real Projects, Real People",
    "about.timeline.growth.desc": `Working on freelance and academic projects helped me learn how to build <span class="text-accent">user-focused systems</span> — from APIs and cloud infra to mobile experiences, always aligned with real needs.`,

    "about.timeline.focus.title": "Focus Today: Systems that Deliver Value",
    "about.timeline.focus.desc": `Today, I design <span class="text-accent">scalable, cloud-ready systems</span> that balance performance, maintainability, and business impact. I'm driven by technical depth and <span class="text-accent">real-world impact</span>.`,

    "about.closing": `
      More than just writing code, I approach problems as an 
      <span class="font-semibold text-accent">engineer</span> — designing 
      <span class="font-semibold text-accent">reliable</span> and 
      <span class="font-semibold text-accent">purpose-driven solutions</span> that 
      truly fit each context and need.
    `,

    "contact.title": "Contact Me!",
    "contact.subtitle": `<span class="text-accent">Open to Work</span> — Let's Build Together`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explore my code & projects",
    "contact.github.url": "https://github.com/JexUgaz",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Connect with me professionally",
    "contact.linkedin.url": "https://www.linkedin.com/in/lugazmlink/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "Message me directly via WhatsApp",
    "contact.whatsapp.url":
      "https://wa.me/51970149453?text=Hi%20Jex%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.email.title": "Email",
    "contact.email.description": "Send me an email to start a conversation",
    "contact.email.url":
      "mailto:loammi.jezreel@gmail.com?subject=Hi%20Jex%20-%20Portfolio&body=Hi%20Jex%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.form.title": "Send Me a Message",
    "contact.form.name.label": "Name",
    "contact.form.name.placeholder": "Your Name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "Your Email",
    "contact.form.message.label": "Message",
    "contact.form.message.placeholder": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Something went wrong. Please try again.",

    "footer.description":
      "Telecommunications Engineer specialized in Software Development and Cloud Architecture",
    "footer.copyright": "Loammi Ugaz. All rights reserved.",
  },
  es: {
    "meta.title": "Loammi Ugaz - Desarrollador de Software",
    "meta.description":
      "Soy Loammi Ugaz, Ingeniero en Telecomunicaciones especializado en Desarrollo de Software Full-Stack y Arquitectura Cloud. Explora mi portafolio, habilidades y proyectos.",
    "meta.og.title": "Loammi Ugaz - Desarrollador de Software",
    "meta.og.description":
      "Ingeniero en Telecomunicaciones enfocado en crear soluciones escalables de software y nube. Descubre mi experiencia y proyectos.",
    "meta.og.site_name": "Portafolio de Loammi Ugaz",
    "site.title": "Mi Portafolio",
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "home.intro": "Hola, soy Loammi",
    "home.roles": [
      "Desarrollador de Software",
      "Ingeniero Cloud",
      "Desarrollador Mobile",
    ],
    "home.description": `
      <span class="text-accent font-semibold">Ingeniero en Telecomunicaciones</span>
      enfocado en el desarrollo de software, desde aplicaciones móviles y backend hasta
      infraestructura en la nube y bases de datos. <br />Diseño <span class="text-accent font-semibold">
      sistemas escalables</span> que resuelven problemas reales con una arquitectura limpia y bien pensada.
    `,
    "home.contact-me": "Contáctame:",
    "home.download-cv": "Descarga mi CV",
    "skills.title": "Stack Tecnológico",
    "skills.description": `
      Una colección de <span class="text-accent">tecnologías de software</span> que he
      dominado, explorado o integrado en soluciones del mundo real.
    `,
    "skills.categories.server": "Server-side",
    "skills.categories.client": "Client-side",
    "skills.categories.languages": "Lenguajes",
    "skills.categories.databases": "Bases de datos",
    "skills.categories.cloud": "Cloud & DevOps",
    "skills.categories.tools": "Herramientas e IDEs",
    "experience.title": "Mi Experiencia",
    "experience.lexia.title": "Ingeniero de Software",
    "experience.lexia.description": `
      Construí un sistema de extracción de datos mediante <span class="text-accent">Web Scraping</span> y 
      <span class="text-accent">Cloudflare Workers</span> usando arquitectura de microservicios. Integré 
      <span class="text-accent">Supabase</span>, <span class="text-accent">bases de datos vectoriales</span> y 
      <span class="text-accent">AWS (RDS, S3)</span> para una <span class="text-accent">búsqueda semántica con IA</span>. 
      Implementé <span class="text-accent">WebSockets</span> para streaming de IA en tiempo real con un frontend en 
      <span class="text-accent">Next.js</span>.
    `,
    "experience.lexia.date": "Ene 2025 - Abr 2025",

    "experience.zafiro.title": "Analista y Desarrollador de Software",
    "experience.zafiro.description": `
      Desarrollé aplicaciones web y móviles en la nube usando <span class="text-accent">Firebase</span>, 
      <span class="text-accent">AWS</span> y <span class="text-accent">aiPaaS</span>. Creé 
      <span class="text-accent">funciones serverless</span> con <span class="text-accent">Python</span> y 
      <span class="text-accent">Node.js</span>. Construí una plataforma de telemetría usando la 
      <span class="text-accent">API de Volvo Connect</span> y desarrollé una app para optimización de flotas. 
      Lideré un <span class="text-accent">proyecto de ciberseguridad</span> con 
      <span class="text-accent">Tenable Nessus®</span>, generando reportes automáticos integrados en 
      <span class="text-accent">SQL Server</span>.
    `,
    "experience.zafiro.date": "Oct 2023 - Dic 2024",

    "experience.barbacci.title": "Desarrollador y Soporte de Sistemas",
    "experience.barbacci.description": `
      Mantuve un sistema ERP basado en <span class="text-accent">Java/JavaScript</span>. Desarrollé herramientas 
      internas para optimizar procesos. Brindé soporte técnico y gestioné bases de datos 
      <span class="text-accent">SQL Server</span> y <span class="text-accent">PostgreSQL</span> para mejorar la eficiencia operativa.
    `,
    "experience.barbacci.date": "Ene 2023 - Mar 2023",
    "projects.title": "Proyectos",
    "projects.description": `
      Una selección de <span class="text-accent">mis proyectos públicos</span> desarrollados con 
      <span class="text-accent">tecnologías modernas</span>, con código open-source e integraciones en la nube.
    `,
    "projects.mika.title": "Mika - Beauty Salon",
    "projects.mika.description":
      "Sitio web oficial para la campaña de empoderamiento femenino organizada por Mika Beauty Salon. El proyecto busca inspirar a las mujeres mediante el Heels Dance (también conocido como Strip Dance), promoviendo la autoestima, la sensualidad y el poder personal.",
    "projects.placeholder.title": "Más proyectos próximamente",
    "projects.placeholder.description":
      "Estate atento, seguimos construyendo cosas increíbles.",
    "projects.button.demo": "Demo",
    "projects.button.code": "Código",
    "about.title": `
      Construyo <span class="text-accent">soluciones</span> que
      <span class="text-accent">escalan</span>,
      <span class="text-accent">conectan</span> y
      <span class="text-accent">generan impacto</span>.
    `,
    "about.who.title-1": "¿Quién soy?",
    "about.who.description-1": `
      Ingeniero de la <span class="text-accent">PUCP</span> con formación en redes y sistemas.
      Apasionado por la <span class="text-accent">IA</span> y actualmente enfocado en
      <span class="text-accent">nube</span> y <span class="text-accent">soluciones de software</span>.
    `,
    "about.who.title-2": "Mi Enfoque",
    "about.who.description-2": `
      Desarrollo software con enfoque en <span class="text-accent">arquitectura limpia</span>,
      <span class="text-accent">rendimiento</span> y <span class="text-accent">entrega rápida</span> —
      convirtiendo ideas en productos sólidos tanto del lado del servidor como del cliente.
    `,
    "about.personal.name": "Nombre",
    "about.personal.place": "Lugar de nacimiento",
    "about.personal.education": "Educación",

    "about.timeline.foundation.title": "Base: Mentalidad Ingenieril",
    "about.timeline.foundation.desc": `Graduado como Ingeniero de Telecomunicaciones en la <span class="font-medium text-accent">PUCP</span>. Desarrollé una sólida base en <span class="text-accent">redes, sistemas y pensamiento analítico</span>, fundamentales para abordar retos complejos.`,

    "about.timeline.transition.title": "Transición: El Software como Medio",
    "about.timeline.transition.desc": `Cambié el enfoque hacia el <span class="text-accent">desarrollo de software</span> como una forma de construir cosas útiles. Desde servicios backend hasta prototipos full-stack, comencé a dar vida a las ideas.`,

    "about.timeline.growth.title":
      "Crecimiento: Proyectos Reales, Personas Reales",
    "about.timeline.growth.desc": `Trabajar en proyectos freelance y académicos me enseñó a construir <span class="text-accent">sistemas centrados en el usuario</span>, desde APIs e infraestructura cloud hasta experiencias móviles, siempre alineado con necesidades reales.`,

    "about.timeline.focus.title": "Enfoque Actual: Sistemas que Generan Valor",
    "about.timeline.focus.desc": `Hoy diseño <span class="text-accent">sistemas escalables y listos para la nube</span> que equilibran rendimiento, mantenibilidad e impacto en el negocio. Me motiva la profundidad técnica y el <span class="text-accent">impacto en el mundo real</span>.`,

    "about.closing": `
      Más que solo escribir código, abordo los problemas como un 
      <span class="font-semibold text-accent">ingeniero</span>: diseño 
      <span class="font-semibold text-accent">soluciones confiables</span> y 
      <span class="font-semibold text-accent">con propósito</span> que se adaptan 
      verdaderamente a cada contexto y necesidad.
    `,

    "contact.title": "¡Contáctame!",
    "contact.subtitle": `<span class="text-accent">Disponible para trabajar</span> — Construyamos juntos`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explora mi código y proyectos",
    "contact.github.url": "https://github.com/JexUgaz",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Conéctate conmigo profesionalmente",
    "contact.linkedin.url": "https://www.linkedin.com/in/lugazmlink/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "Envíame un mensaje directo por WhatsApp",
    "contact.whatsapp.url":
      "https://wa.me/51970149453?text=Hola%20Jex%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",

    "contact.email.title": "Correo",
    "contact.email.description":
      "Envíame un correo para iniciar una conversación",
    "contact.email.url":
      "mailto:loammi.jezreel@gmail.com?subject=Hola%20Jex%20-%20Portafolio&body=Hola%20Jex%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo.",

    "contact.form.title": "Envíame un mensaje",
    "contact.form.name.label": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email.label": "Correo",
    "contact.form.email.placeholder": "Tu correo electrónico",
    "contact.form.message.label": "Mensaje",
    "contact.form.message.placeholder": "Tu mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Mensaje enviado con éxito!",
    "contact.form.error": "Algo salió mal. Por favor, inténtalo de nuevo.",

    "footer.description":
      "Ingeniero en Telecomunicaciones especializado en Desarrollo de Software y Arquitectura Cloud",
    "footer.copyright": "Loammi Ugaz. Todos los derechos reservados.",
  },
} as const;
