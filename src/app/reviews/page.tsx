import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { curatedReviews, reviewsHeading } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { reviewsJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what Seattle neighbors say about Sweepsless in Seattle. Real, unedited feedback from clients across Capitol Hill, Ballard, Fremont, Green Lake, and more.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          title={reviewsHeading.title}
          subtitle="Real feedback from real Seattle neighbors. No edits, no cherry-picking."
        />

        <section className="bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {curatedReviews.map((r, i) => (
                <article
                  key={r.name}
                  className="card-glow mb-6 break-inside-avoid rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-7"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <StarRow />
                  <p className="mt-4 text-base leading-[1.8] text-[var(--foreground)]">
                    &ldquo;{r.excerpt}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-sm font-semibold text-[var(--sl-gold)]"
                      aria-hidden
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--sl-ink)]">
                        {r.name}
                      </p>
                      <p className="text-xs text-[var(--sl-muted)]">
                        {r.neighborhood}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function StarRow() {
  return (
    <ul className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <svg width="18" height="17" viewBox="0 0 24.814 23.599" aria-hidden>
            <path
              d="M147.17,629.89,150.1,638.9h9.478l-7.668,5.571,2.929,9.014-7.668-5.571-7.668,5.571,2.929-9.014-7.668-5.571h9.478Z"
              transform="translate(-134.763 -629.89)"
              fill="var(--sl-gold)"
            />
          </svg>
        </li>
      ))}
    </ul>
  );
}
