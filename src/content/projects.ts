import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "spotra",
    title: "Spotra",
    client: "Spotra",
    summary:
      "A simple scheduling app for tutoring, office hours, labs, and appointments — open spots, share a link, let people claim time.",
    outcome:
      "A scheduling product that lets people claim time without the setup maze.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "TanStack Query",
      "Lucide React",
      "Vercel",
    ],
    challenges: [
      "Making calendar scheduling feel simple instead of like a setup maze",
      "Letting hosts open spots and share them without account friction for claimers",
      "Building a product-ready auth and workspace flow on a modern stack",
    ],
    solutions: [
      "Workspace calendars with open spots and shareable claim links",
      "Google sign-in for claiming seats without a complicated booking funnel",
      "Next.js app with Supabase auth/data and a clean product marketing site",
    ],
    results: [
      "Live product at spotra.dev",
      "Clear path from landing page to opening a workspace",
      "Lightweight scheduling for tutoring, office hours, labs, and appointments",
    ],
    image: {
      src: "/projects/spotra/hero.png",
      alt: "Spotra homepage — Open spots. Share the link. Let people claim time.",
      width: 937,
      height: 537,
    },
    links: {
      website: "https://spotra.dev",
      github: "https://github.com/PeteAra/Spotra",
    },
    featured: true,
    caseStudy: {
      overview:
        "Spotra is a lightweight scheduling product I built for tutoring, office hours, labs, practice rooms, and appointments — without the usual booking-tool complexity.",
      challenge:
        "Most scheduling tools are heavy to set up. Hosts need a fast way to open available time, share one link, and let people claim a spot.",
      solution:
        "I built Spotra with Next.js, TypeScript, Tailwind, and Supabase: create a workspace calendar, open spots, share the link, and let people claim seats with Google sign-in.",
      results:
        "The product is live at spotra.dev with a focused landing experience and a working path to open a new workspace.",
    },
  },
  {
    slug: "michaela-vivant-photography",
    title: "Michaela Vivant Photography",
    client: "Michaela Vivant Photography",
    summary:
      "A responsive photography portfolio showcasing portraits, weddings, and boudoir work with pricing and inquiry flow.",
    outcome:
      "A photography studio site that turns visitors into booking inquiries.",
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
    outcome:
      "A service-business site built to convert visitors into estimate requests.",
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
      "Live client site at minnehaha-inc.com",
      "Clear conversion path from homepage to contact",
      "Modern stack ready for ongoing content updates",
    ],
    image: {
      src: "/projects/minnehaha/hero.png",
      alt: "Minnehaha Building Maintenance website homepage",
      width: 1024,
      height: 502,
    },
    links: {
      website: "https://minnehaha-inc.com",
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
        "The new site is live at minnehaha-inc.com. It establishes a credible digital presence with a clear path from discovery to free estimate requests.",
    },
  },
  {
    slug: "opera-portfolio",
    title: "Clara Montrose — Opera Portfolio",
    client: "Clara Montrose",
    summary:
      "An elegant portfolio for a mezzo-soprano, showcasing repertoire, press, and booking information.",
    outcome:
      "An artist portfolio that helps booking agents and venues learn more fast.",
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
  {
    slug: "vivant-woodcraft",
    title: "Vivant Custom Woodcraft",
    client: "Vivant Custom Woodcraft",
    summary:
      "Luxury marketing site for heirloom cabinetry and architectural millwork, with a design journey configurator and AI design consultant.",
    outcome:
      "A luxury brand site that guides homeowners toward design consultations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AI SDK",
      "Vercel",
    ],
    challenges: [
      "Conveying quiet luxury and heirloom quality without feeling templated",
      "Guiding homeowners from inspiration to consultation with clarity",
      "Pairing a premium brand site with interactive design tools",
    ],
    solutions: [
      "Editorial homepage and portfolio storytelling for Twin Cities residential work",
      "Design Journey configurator and AI design consultant for material and style exploration",
      "Next.js marketing site with Framer Motion and a refined craft-focused visual system",
    ],
    results: [
      "Live site at vivant-woodcraft.vercel.app",
      "Clear path from craftsmanship story to design consultation",
      "Interactive tools that support discovery before booking",
    ],
    image: {
      src: "/projects/vivant-woodcraft/hero.png",
      alt: "Vivant Custom Woodcraft homepage — Premium Custom Woodcraft for Distinctive Homes",
      width: 1024,
      height: 567,
    },
    links: {
      website: "https://vivant-woodcraft.vercel.app",
      github: "https://github.com/PeteAra/vivant-woodcraft",
    },
    featured: true,
    caseStudy: {
      overview:
        "Vivant Custom Woodcraft needed a luxury digital presence for bespoke cabinetry and architectural millwork — aimed at homeowners who expect permanence, precision, and quiet luxury.",
      challenge:
        "Custom woodcraft brands often look generic online. This site needed to feel like a private atelier while still converting visitors into design consultations.",
      solution:
        "I built a Next.js site with TypeScript, Tailwind, and Framer Motion — portfolio storytelling, materials, process, a Design Journey configurator, and an AI design consultant.",
      results:
        "The site is live on Vercel with a polished brand experience and interactive tools that guide homeowners toward a private consultation.",
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
