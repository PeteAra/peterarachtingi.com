import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import styles from "./CTABanner.module.css";

interface CTABannerProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTABanner({
  title,
  description,
  ctaLabel = "Get in Touch",
  ctaHref = "#contact",
}: CTABannerProps) {
  return (
    <FadeIn>
      <div className={styles.banner}>
        <Container>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </Container>
      </div>
    </FadeIn>
  );
}
