import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllProjectSlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getAllProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
