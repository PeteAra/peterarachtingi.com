import { site } from "@/content/site";

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: site.url,
    email: site.email,
    sameAs: [site.linkedin, site.github],
  };
}
