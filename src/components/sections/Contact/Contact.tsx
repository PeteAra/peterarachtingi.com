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
          title="Let's build something for your business"
          description="Tell me about your business and what you need built. I'll follow up with next steps."
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
                Need a website that gets found, looks credible, and converts —
                or a custom web product for your workflows? I&apos;d love to
                hear about it. Open to engineering roles as well.
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
