import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work" variant="elevated" aria-labelledby="work-heading">
      <Container>
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Client websites and product work — click any card to visit the live site."
          id="work-heading"
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
