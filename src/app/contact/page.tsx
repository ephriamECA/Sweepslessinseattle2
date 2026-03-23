import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { contactPage, site } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { contactPageJsonLd } from "@/lib/json-ld";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free house cleaning quote from Sweepsless in Seattle. Call, email, or fill out our form \u2014 we respond within a few hours. Serving Seattle, Bellevue, Kirkland, and Redmond.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={contactPage.heroTitle} subtitle={contactPage.heroSubtitle} />

        <section className="bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div data-aos="fade-right">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold italic text-[var(--sl-gold)] md:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--sl-muted)]">
                  {contactPage.intro}
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>

              <div data-aos="fade-left" data-aos-delay="120" className="space-y-6">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="card-glow flex items-center gap-4 rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-6 transition hover:border-[var(--sl-gold)]/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-lg text-[var(--sl-gold)]">
                    &#9742;
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--sl-ink)]">
                      Call us
                    </span>
                    <span className="text-base text-[var(--sl-gold)]">
                      {site.phoneDisplay}
                    </span>
                  </div>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="card-glow flex items-center gap-4 rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-6 transition hover:border-[var(--sl-gold)]/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-lg text-[var(--sl-gold)]">
                    &#9993;
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--sl-ink)]">
                      Email us
                    </span>
                    <span className="text-base text-[var(--sl-gold)]">
                      {site.email}
                    </span>
                  </div>
                </a>

                <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-6">
                  <p className="text-sm font-semibold text-[var(--sl-ink)]">Hours</p>
                  <p className="mt-1 text-sm text-[var(--sl-muted)]">{site.hours}</p>
                </div>

                <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-6">
                  <p className="text-sm font-semibold text-[var(--sl-ink)]">Service area</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sl-muted)]">
                    Seattle, Capitol Hill, Ballard, Fremont, Green Lake, Queen Anne, Wallingford, Beacon Hill, and the greater Eastside.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Capitol Hill", "Ballard", "Fremont", "Green Lake", "Queen Anne", "Wallingford", "Bellevue", "Kirkland"].map(
                      (area) => (
                        <span
                          key={area}
                          className="rounded-full border border-[var(--sl-border)] bg-[var(--sl-wash)] px-3 py-1 text-xs text-[var(--sl-ink)]"
                        >
                          {area}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
