"use client";

import Image from "next/image";
import Link from "next/link";
import { familyBand } from "@/content/site";
import { useQuoteModal } from "@/contexts/quote-modal-context";

export function FamilyBandSection() {
  const { open: openQuote } = useQuoteModal();

  return (
    <section className="bg-[var(--background)] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div data-aos="fade-right" data-aos-duration="800">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
            {familyBand.title}
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-[var(--foreground)]">
            {familyBand.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuote()}
              className="rounded-full bg-[var(--sl-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {familyBand.cta}
            </button>
            <Link
              href="/about"
              className="rounded-full border border-[var(--sl-gold)]/30 px-7 py-3 text-sm font-medium text-[var(--sl-gold)] transition hover:bg-[var(--sl-gold)]/8"
            >
              Our story
            </Link>
          </div>
        </div>
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--sl-border)] shadow-lg"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <Image
            src={familyBand.image}
            alt="A welcoming Seattle home serviced by Sweepsless"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <button
              type="button"
              onClick={() => openQuote()}
              className="w-full rounded-xl bg-white/90 px-4 py-3.5 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--sl-gold)] shadow-lg backdrop-blur transition hover:bg-white"
            >
              {familyBand.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
