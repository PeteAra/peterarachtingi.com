import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { processSteps } from "@/content/process";
import styles from "./Process.module.css";

export function Process() {
  return (
    <Section id="process" aria-labelledby="process-heading">
      <Container>
        <SectionHeader
          eyebrow="How I Work"
          title="My Process"
          description="A structured approach that keeps projects on track — from initial discovery through launch and beyond."
          id="process-heading"
        />
        <ol className={styles.timeline} role="list">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <li className={styles.step}>
                <div className={styles.marker}>
                  <span className={styles.number}>{index + 1}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
