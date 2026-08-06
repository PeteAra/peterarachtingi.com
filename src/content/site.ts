import type { SiteConfig, NavLink } from "@/types";

export const site: SiteConfig = {
  name: "Peter Arachtingi",
  title: "Full-Stack Software Developer",
  description:
    "Full-stack software developer building modern web applications, SaaS products, and AI-powered business solutions that help businesses grow.",
  heroTagline:
    "Building modern web applications, SaaS products, and AI-powered business solutions.",
  heroHighlights: [
    "Custom Software",
    "Modern Web Applications",
    "AI Integrations",
  ],
  shortBio: "Building software that helps businesses grow.",
  aboutBio:
    "I help small businesses and founders get online with websites and software that look credible, get found, and convert. With five-plus years shipping production web apps and SaaS — and modern AI-assisted workflows — I move fast without sacrificing quality. Clean architecture, thoughtful UX, and measurable results.",
  email: "peterara89@gmail.com",
  linkedin: "https://www.linkedin.com/in/peter-arachtingi-17bbbb353/",
  github: "https://github.com/PeteAra",
  url: "https://peterarachtingi.com",
  ogImage: "/opengraph-image",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];
