import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";
import { Footer } from "@/components/layout/Footer";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found" });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main id="main-content">
        <CaseStudyLayout project={project} />
      </main>
      <Footer />
    </>
  );
}
