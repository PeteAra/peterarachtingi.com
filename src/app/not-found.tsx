import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <Container>
        <div className={styles.content}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.description}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </main>
  );
}
