import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTABanner } from "@/components/ui/CTABanner";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />
      <Services />
      <Skills />
      <Process />
      <About />
      <CTABanner
        title="Ready to start your project?"
        description="I'm currently accepting new freelance clients and open to software engineering opportunities."
      />
      <Contact />
      <Footer />
    </main>
  );
}
