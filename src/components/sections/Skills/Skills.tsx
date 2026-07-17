import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { skillCategories } from "@/content/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills" variant="elevated" aria-labelledby="skills-heading">
      <Container>
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills & Tools"
          description="A focused toolkit built through professional engineering work and client projects."
          id="skills-heading"
        />
        <StaggerChildren className={styles.grid}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <Card className={styles.card}>
                <h3 className={styles.title}>{category.title}</h3>
                <div className={styles.skills}>
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
