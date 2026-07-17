import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "CSS Modules",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "REST APIs",
      "Server Actions",
      "Express",
      "Authentication",
      "API Design",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Prisma", "SQL"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Vercel", "AWS", "Docker", "CI/CD", "GitHub Actions", "DNS & Domains"],
  },
  {
    title: "AI Tools",
    skills: [
      "Cursor",
      "Claude",
      "GitHub Copilot",
      "AI-Assisted Architecture",
      "Prompt Engineering",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "VS Code", "ESLint", "Chrome DevTools", "Lighthouse", "Figma"],
  },
];
