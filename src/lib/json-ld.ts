import { site } from "@/content/site";

const knowsAbout = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "Full Stack Development",
  "SaaS",
  "Vercel",
  "Cursor",
  "Claude Code",
];

export function createSiteJsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: site.title,
        description: site.description,
        url: site.url,
        email: site.email,
        image: `${site.url}/images/headshot.png`,
        sameAs: [site.linkedin, site.github],
        knowsAbout,
      },
    ],
  };
}
