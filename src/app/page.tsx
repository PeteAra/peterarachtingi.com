import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { AIConsultant } from "@/components/sections/AIConsultant";
import { Contact } from "@/components/sections/Contact";
import { CTABanner } from "@/components/ui/CTABanner";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <About />
      <Skills />
      <AIConsultant />
      <CTABanner
        title="Ready to grow your business online?"
        description="I'm currently accepting new freelance clients. Tell me what you need — a website, a modernization, or a custom web product."
        ctaLabel="Start a Project"
      />
      <Contact />
      <Footer />
    </main>
  );
}
