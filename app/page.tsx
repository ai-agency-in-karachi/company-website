import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { About } from "@/components/sections/home/About";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Process } from "@/components/sections/home/Process";
import { Reviews } from "@/components/sections/home/Reviews";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { TechEcosystem } from "@/components/sections/home/TechEcosystem";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" });

/**
 * Home page order: lead with what we do and how, prove it with the work and
 * the tools, then close with who we are, why us, what clients say and the
 * invitation to start.
 */
export default function HomePage() {
  return (
    <PageTransition>
      <div>
        <Hero />
        <ServicesOverview />
        <Process />
        <FeaturedProjects />
        <TechEcosystem />
        <About />
        <WhyChooseUs />
        <Reviews />
        <FinalCta />
      </div>
    </PageTransition>
  );
}
