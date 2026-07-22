import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "michaela-vivant-photography",
    title: "Michaela Vivant Photography",
    client: "Michaela Vivant Photography",
    summary:
      "A responsive photography portfolio showcasing portraits, weddings, and boudoir work with pricing and inquiry flow.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "EmailJS",
      "Vercel",
    ],
    challenges: [
      "Showcasing visual work without slowing the site down",
      "Making pricing and booking inquiries easy for potential clients",
      "Reflecting the photographer's brand personality online",
    ],
    solutions: [
      "Clean portfolio gallery with responsive image presentation",
      "Clear pricing and contact sections for booking inquiries",
      "Full delivery from requirements through production deployment",
    ],
    results: [
      "Live client site used for discovery and inquiries",
      "Professional presence aligned with the photographer's brand",
      "Strong mobile experience for social traffic",
    ],
    image: {
      src: "/projects/vivant/hero.png",
      alt: "Michaela Vivant Photography website homepage",
      width: 1024,
      height: 641,
    },
    links: {
      website: "https://michaelavivant.com",
      github: "https://github.com/PeteAra/Vivant-Photo",
    },
    featured: true,
    caseStudy: {
      overview:
        "Michaela Vivant Photography needed a freelance portfolio site to showcase portraits, weddings, and boudoir work while making it easy for clients to explore pricing and inquire.",
      challenge:
        "Photography sites need to look premium and load quickly. The client also needed clear packages and a simple path to book.",
      solution:
        "I handled full delivery — requirements, design, React development with Tailwind, and Vercel deployment — with gallery, pricing, about, and contact sections.",
      results:
        "The site is live at michaelavivant.com and supports discovery, pricing review, and direct inquiry from potential clients.",
    },
  },
  {
    slug: "minnehaha-building-maintenance",
    title: "Minnehaha Building Maintenance",
    client: "Minnehaha Building Maintenance Inc.",
    summary:
      "Modern marketing site for a Twin Cities window cleaning and building maintenance company trusted since 1978.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Vercel",
    ],
    challenges: [
      "Replacing an outdated Wix site with a modern, conversion-focused experience",
      "Communicating trust and reliability to commercial property managers",
      "Mobile-first audience researching vendors on the go",
    ],
    solutions: [
      "Service-focused layout with clear CTAs for free estimates",
      "SSG performance for fast mobile load times",
      "SEO-structured content for local Twin Cities search",
    ],
    results: [
      "Professional online presence ready for domain cutover",
      "Clear conversion path from homepage to contact",
      "Modern stack ready for ongoing content updates",
    ],
    image: {
      src: "/projects/minnehaha/hero.png",
      alt: "Minnehaha Building Maintenance website homepage",
      width: 1024,
      height: 596,
    },
    links: {
      website: "https://minnehaha-building-maintenance.vercel.app",
      github: "https://github.com/PeteAra/minnehaha-building-maintenance",
    },
    featured: true,
    caseStudy: {
      overview:
        "Minnehaha Building Maintenance Inc. needed a modern marketing website to replace their aging Wix presence and compete in the Twin Cities commercial maintenance market.",
      challenge:
        "The existing site was outdated and hard to maintain. Property managers researching vendors needed a clear, professional experience that communicated nearly five decades of trust and made requesting estimates effortless.",
      solution:
        "I designed and built a Next.js marketing site with TypeScript, Tailwind, and Framer Motion. The information architecture prioritizes services, industries, and contact conversion with a mobile-first responsive design.",
      results:
        "The new site is live on Vercel and ready for domain cutover to mbminc-services.com. It establishes a credible digital presence with a clear path from discovery to free estimate requests.",
    },
  },
  {
    slug: "opera-portfolio",
    title: "Clara Montrose — Opera Portfolio",
    client: "Clara Montrose",
    summary:
      "An elegant portfolio for a mezzo-soprano, showcasing repertoire, press, and booking information.",
    technologies: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "Lucide React",
      "Vercel",
    ],
    challenges: [
      "Conveying artistic sophistication without overwhelming the design",
      "Organizing performance history, press, and booking for different audiences",
      "Creating a presence that feels bespoke rather than template-driven",
    ],
    solutions: [
      "Refined typography and generous whitespace reflecting performing arts aesthetics",
      "Clear sections for biography, repertoire, press, and representation",
      "Fast static delivery with polished motion and accessibility",
    ],
    results: [
      "Elegant digital presence matching the artist's professional caliber",
      "Easy path for booking agents and opera houses to learn more",
      "Deployed and shareable production URL",
    ],
    image: {
      src: "/projects/opera/hero.png",
      alt: "Clara Montrose opera portfolio website homepage",
      width: 1280,
      height: 800,
    },
    links: {
      website: "https://emma-arachtingi.vercel.app",
      github: "https://github.com/PeteAra/emma-arachtingi",
    },
    featured: true,
    caseStudy: {
      overview:
        "Clara Montrose needed a digital portfolio that reflects the elegance and sophistication of her craft as a mezzo-soprano — for opera houses, agents, and private event bookers.",
      challenge:
        "Performing arts sites often feel generic or overly ornate. This portfolio needed to feel bespoke and artistic while remaining fast, accessible, and easy to navigate.",
      solution:
        "I built a content-first Next.js site with careful typography, structured performance history, and clear representation and contact paths.",
      results:
        "The portfolio presents a polished professional image with a live production deployment ready to share with booking contacts.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
