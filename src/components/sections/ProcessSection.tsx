"use client";

import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { processSection } from "@/content/site";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--sl-wash)] py-16 md:py-24"
    >
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--sl-accent)_0%,transparent_45%),radial-gradient(circle_at_80%_60%,var(--sl-gold)_0%,transparent_40%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <header className="max-w-2xl" data-aos="fade-up" data-aos-duration="700">
          <p className="text-sm font-semibold tracking-widest text-[var(--sl-gold)] uppercase">
            {processSection.eyebrow}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-ink)] md:text-4xl">
            {processSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--sl-muted)]">
            {processSection.intro}
          </p>
          <Link
            href={processSection.learnMoreHref}
            className="mt-6 inline-flex rounded-full border border-[var(--sl-gold)]/30 px-5 py-2.5 text-sm font-medium text-[var(--sl-gold)] transition hover:bg-[var(--sl-gold)]/8"
          >
            Contact & booking
          </Link>
        </header>

        <div
          className="mt-12"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="process-swiper !pb-14"
          >
            {processSection.steps.map((step, i) => (
              <SwiperSlide key={step.title}>
                <div className="card-glow h-full rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-7">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--sl-gold)]">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--sl-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--sl-muted)]">
                    {step.body}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
