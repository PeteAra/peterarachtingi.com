import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { IconLink } from "@/components/ui/IconLink";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? "";

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's work together"
          description="Open to software engineering roles and freelance web projects. Tell me about your project or opportunity."
          id="contact-heading"
        />
        <div className={styles.grid}>
          <FadeIn>
            <div className={styles.info}>
              <div className={styles.links}>
                <a href={`mailto:${site.email}`} className={styles.link}>
                  <Mail size={20} aria-hidden="true" />
                  <span>{site.email}</span>
                </a>
                <div className={styles.social}>
                  <IconLink
                    href={site.linkedin}
                    icon={Linkedin}
                    label="LinkedIn profile"
                  />
                  <IconLink
                    href={site.github}
                    icon={Github}
                    label="GitHub profile"
                  />
                </div>
              </div>
              <Button
                href="/resume.pdf"
                variant="secondary"
                external
                className={styles.resume}
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </Button>
              <p className={styles.cta}>
                Whether you&apos;re hiring for an engineering role or need a
                website built for your business — I&apos;d love to hear from you.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm accessKey={accessKey} />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
