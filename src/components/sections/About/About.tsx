import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" variant="elevated" aria-labelledby="about-heading">
      <Container>
        <div className={styles.grid}>
          <SectionHeader
            eyebrow="About Me"
            title="Building software that solves real problems"
            id="about-heading"
          />
          <FadeIn>
            <div className={styles.content}>
              <p className={styles.bio}>{site.aboutBio}</p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>5+ Years</span>
                  <span className={styles.highlightLabel}>
                    Production web applications and commercial SaaS
                  </span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>AI-Assisted</span>
                  <span className={styles.highlightLabel}>
                    2+ years building with Cursor and Claude Code
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
