import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.links.website;

  if (!href) {
    return null;
  }

  return (
    <FadeIn>
      <a
        href={href}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} website`}
      >
        <div className={styles.imageWrap}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.client}>{project.client}</p>
            <ExternalLink
              size={16}
              className={styles.externalIcon}
              aria-hidden="true"
            />
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.tech}>
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
