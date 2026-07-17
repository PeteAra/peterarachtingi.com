import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import styles from "./CaseStudyLayout.module.css";

interface CaseStudyLayoutProps {
  project: Project;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <article className={styles.article}>
      <Container>
        <Link href="/#work" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Work
        </Link>

        <header className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.client}>{project.client}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.tech}>
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className={styles.actions}>
              {project.links.website && (
                <Button
                  href={project.links.website}
                  variant="primary"
                  external
                >
                  Visit Website
                  <ExternalLink size={16} aria-hidden="true" />
                </Button>
              )}
              {project.links.github && (
                <Button href={project.links.github} variant="secondary" external>
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </Button>
              )}
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority
              className={styles.image}
            />
          </div>
        </header>

        <div className={styles.sections}>
          <section className={styles.section} aria-labelledby="overview">
            <h2 id="overview" className={styles.sectionTitle}>
              Overview
            </h2>
            <p className={styles.prose}>{project.caseStudy.overview}</p>
          </section>

          <section className={styles.section} aria-labelledby="challenge">
            <h2 id="challenge" className={styles.sectionTitle}>
              Challenge
            </h2>
            <p className={styles.prose}>{project.caseStudy.challenge}</p>
          </section>

          <section className={styles.section} aria-labelledby="solution">
            <h2 id="solution" className={styles.sectionTitle}>
              Solution
            </h2>
            <p className={styles.prose}>{project.caseStudy.solution}</p>
            <ul className={styles.list}>
              {project.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="results">
            <h2 id="results" className={styles.sectionTitle}>
              Results
            </h2>
            <p className={styles.prose}>{project.caseStudy.results}</p>
            <ul className={styles.list}>
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </article>
  );
}
