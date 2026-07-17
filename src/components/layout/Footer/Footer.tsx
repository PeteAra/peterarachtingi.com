import Link from "next/link";
import { site, navLinks } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { IconLink } from "@/components/ui/IconLink";
import { Github, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              {site.name}
            </Link>
            <p className={styles.tagline}>{site.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className={styles.links} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.social}>
            <IconLink
              href={site.github}
              icon={Github}
              label="GitHub profile"
            />
            <IconLink
              href={site.linkedin}
              icon={Linkedin}
              label="LinkedIn profile"
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with Next.js, TypeScript &amp; CSS Modules
          </p>
        </div>
      </Container>
    </footer>
  );
}
