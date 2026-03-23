import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { FamilyBandSection } from "@/components/sections/FamilyBandSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/json-ld";
import { faqItems } from "@/content/site";

export const metadata: Metadata = {
  description:
    "Sweepsless in Seattle offers professional house cleaning across Seattle and the Eastside. No contracts, vetted teams, and flexible scheduling for regular, deep, move-in/out, and post-construction cleans.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd([...faqItems])} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <HeroSection />
        <DifferenceSection />
        <ServicesSection />
        <ReviewsSection />
        <ProcessSection />
        <FamilyBandSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
