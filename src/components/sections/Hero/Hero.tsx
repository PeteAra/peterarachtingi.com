"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <Section className={styles.hero}>
      {prefersReducedMotion ? (
        <div className={styles.background} aria-hidden="true" />
      ) : (
        <motion.div
          className={styles.background}
          style={{ y: backgroundY }}
          aria-hidden="true"
        />
      )}
      <Container>
        {prefersReducedMotion ? (
          <div className={styles.content}>
            <HeroGrid />
          </div>
        ) : (
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <HeroGrid animated />
          </motion.div>
        )}
      </Container>
    </Section>
  );
}

function HeroGrid({ animated = false }: { animated?: boolean }) {
  const fadeUp = animated
    ? {
        variants: {
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
          },
        },
      }
    : {};

  const Item = animated ? motion.div : "div";

  return (
    <div className={styles.grid}>
      <div className={styles.text}>
        <Item className={styles.eyebrow} {...fadeUp}>
          <p>{site.title}</p>
        </Item>

        <Item className={styles.headline} {...fadeUp}>
          <h1>{site.name}</h1>
        </Item>

        <Item className={styles.tagline} {...fadeUp}>
          <p>
            Full stack developer building{" "}
            <span className={styles.accent}>production</span> software
          </p>
        </Item>

        <Item className={styles.description} {...fadeUp}>
          <p>{site.shortBio}</p>
        </Item>

        <Item className={styles.ctas} {...fadeUp}>
          <Button href="#work" variant="primary">
            View My Work
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </Item>
      </div>

      <Item className={styles.imageWrapper} {...fadeUp}>
        <div className={styles.imageFrame}>
          <Image
            src="/images/headshot.png"
            alt={`${site.name} professional headshot`}
            width={400}
            height={400}
            priority
            className={styles.image}
          />
        </div>
      </Item>
    </div>
  );
}
