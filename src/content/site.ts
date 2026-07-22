import type { SiteConfig, NavLink } from "@/types";

export const site: SiteConfig = {
  name: "Peter Arachtingi",
  title: "Software Developer",
  description:
    "Full Stack Software Developer with 5+ years building production web applications and commercial SaaS. Available for engineering roles and freelance web projects.",
  shortBio:
    "Full Stack | 5+ years building production web applications and commercial SaaS | 2+ years using Cursor and Claude Code",
  aboutBio:
    "I'm a full stack software developer with over five years of experience shipping production web applications and commercial SaaS products. For the past two years I've worked extensively with Cursor and Claude Code to move faster without sacrificing quality. I build for both engineering teams and small businesses — clean architecture, thoughtful UX, and measurable results.",
  email: "peterara89@gmail.com",
  linkedin: "https://www.linkedin.com/in/peter-arachtingi-17bbbb353/",
  github: "https://github.com/PeteAra",
  url: "https://peterarachtingi.com",
  ogImage: "/opengraph-image",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];
