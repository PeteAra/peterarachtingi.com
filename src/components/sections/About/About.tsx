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
            title="Software that helps businesses grow"
            id="about-heading"
          />
          <FadeIn>
            <div className={styles.content}>
              <p className={styles.bio}>{site.aboutBio}</p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>Client-focused</span>
                  <span className={styles.highlightLabel}>
                    Websites and products built to convert, not just look good
                  </span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>End-to-end</span>
                  <span className={styles.highlightLabel}>
                    From discovery and design through launch, SEO, and support
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
