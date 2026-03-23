import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { aboutPage, processSection } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sweepsless in Seattle \u2014 a locally owned cleaning company built around consistency, honest communication, and vetted in-house teams serving Seattle and the Eastside.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={aboutPage.heroTitle} subtitle={aboutPage.heroSubtitle} />

        <section className="bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--sl-border)] shadow-lg"
              data-aos="fade-right"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                alt="The Sweepsless in Seattle team's approach to home care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div data-aos="fade-left" data-aos-delay="120">
              {aboutPage.story.map((p, i) => (
                <p
                  key={i}
                  className="mt-5 text-base leading-[1.85] text-[var(--foreground)] first:mt-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--sl-wash)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <header className="mb-12 max-w-2xl" data-aos="fade-up">
              <p className="text-sm font-semibold tracking-widest text-[var(--sl-accent)] uppercase">
                What we believe
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
                Our values
              </h2>
            </header>
            <div className="grid gap-6 sm:grid-cols-2" data-stagger="true">
              {aboutPage.values.map((v, i) => (
                <article
                  key={v.title}
                  className="card-glow rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-7"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--sl-gold)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]">
                    {v.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--sl-border)] bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <header className="mb-12 max-w-2xl" data-aos="fade-up">
              <p className="text-sm font-semibold tracking-widest text-[var(--sl-gold)] uppercase">
                {processSection.eyebrow}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-ink)] md:text-4xl">
                {processSection.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--sl-muted)]">
                {processSection.intro}
              </p>
            </header>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSection.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="card-glow rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-7"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--sl-gold)]">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--sl-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--sl-muted)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
