import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Process } from "@/components/sections/home/Process";
import { Reviews } from "@/components/sections/home/Reviews";
import { ServicesCards } from "@/components/sections/home/ServicesCards";
import { TechEcosystem } from "@/components/sections/home/TechEcosystem";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" });

/**
 * Home page order: what we do (services) and how (process), proof (selected
 * work, technology), then why us, what clients say and the invitation to start.
 */
export default function HomePage() {
  return (
    <PageTransition>
      <div>
        <Hero />
        <ServicesCards />
        <Process />
        <FeaturedProjects />
        <TechEcosystem />
        <WhyChooseUs />
        <Reviews />
        <FinalCta />
      </div>
    </PageTransition>
  );
}
