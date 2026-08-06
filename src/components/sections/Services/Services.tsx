import {
  Building2,
  Layout,
  RefreshCw,
  Code2,
  Zap,
  Gauge,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { services } from "@/content/services";
import styles from "./Services.module.css";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Layout,
  RefreshCw,
  Code2,
  Zap,
  Gauge,
  Search,
};

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <SectionHeader
          eyebrow="What I Offer"
          title="Services"
          description="Websites and software that help your business get found, look credible, and convert."
          id="services-heading"
        />
        <p className={styles.audience}>
          I work with small businesses, local service companies, and founders
          who need a clear online presence or a focused web product — without
          the agency overhead.
        </p>
        <StaggerChildren className={styles.grid}>
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <StaggerItem key={service.title}>
                <Card hover className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
