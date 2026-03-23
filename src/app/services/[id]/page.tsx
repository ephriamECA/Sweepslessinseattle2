import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/json-ld";
import { ServicePageClient } from "./client";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const svc = services.find((s) => s.id === id);
  if (!svc) return {};
  return {
    title: svc.name,
    description: svc.blurb,
    alternates: { canonical: svc.slug },
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const svc = services.find((s) => s.id === id);
  if (!svc) notFound();

  const otherServices = services.filter((s) => s.id !== id);

  return (
    <>
      <JsonLd data={serviceJsonLd(svc)} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={svc.name} subtitle={svc.blurb} />

        <section className="bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-2 lg:items-start">
            <div data-aos="fade-right">
              <p className="text-base leading-[1.85] text-[var(--foreground)]">
                {svc.longDescription}
              </p>
              <ServicePageClient />
            </div>
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--sl-border)] shadow-lg"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <Image
                src={svc.image}
                alt={`${svc.name} cleaning service in Seattle`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[var(--sl-wash)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2
              className="font-[family-name:var(--font-display)] text-2xl font-semibold italic text-[var(--sl-gold)] md:text-3xl"
              data-aos="fade-up"
            >
              What&rsquo;s included
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {svc.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-relaxed text-[var(--foreground)]"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-xs text-[var(--sl-gold)]">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--sl-border)] bg-[var(--background)] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2
              className="font-[family-name:var(--font-display)] text-2xl font-semibold italic text-[var(--sl-gold)] md:text-3xl"
              data-aos="fade-up"
            >
              Other services
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s, i) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)]"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={s.image}
                      alt={`${s.name} — Sweepsless in Seattle`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--sl-gold)] transition-colors group-hover:text-[var(--sl-accent)]">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--sl-muted)]">
                      {s.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
