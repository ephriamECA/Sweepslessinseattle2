"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { hero, trustBullets } from "@/content/site";
import { useQuoteModal } from "@/contexts/quote-modal-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function HeroSection() {
  const { open: openQuote } = useQuoteModal();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div
          className="order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.15] font-semibold italic tracking-tight text-[var(--sl-gold)] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5">
            <span className="font-[family-name:var(--font-script)] text-3xl text-[var(--sl-ink)]">
              {hero.subtitle}
            </span>{" "}
            <span className="text-sm font-semibold tracking-[0.25em] text-[var(--sl-gold)] uppercase">
              {hero.subtitleAccent}
            </span>
          </p>

          <div className="gold-rule my-8" />

          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={
                reducedMotion
                  ? false
                  : { delay: 6000, disableOnInteraction: true }
              }
              className="hero-testimonial-swiper pb-10"
            >
              {hero.testimonials.map((t) => (
                <SwiperSlide key={t.author}>
                  <div className="pr-2">
                    <StarRow />
                    <p className="mt-4 text-lg leading-[1.8] text-[var(--foreground)]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-medium text-[var(--sl-gold)]">
                      &mdash; {t.author}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            type="button"
            onClick={() => openQuote()}
            className="mt-4 rounded-full bg-[var(--sl-accent)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg"
          >
            {hero.cta}
          </button>
        </div>

        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-[var(--sl-gold)]/30 shadow-xl">
            <Image
              src={hero.videoPoster}
              alt="A clean, bright Seattle home interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div
        className="border-t border-[var(--sl-border)] bg-[var(--sl-wash)]"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200"
      >
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-4 py-10 sm:gap-12">
          {trustBullets.map((b, i) => (
            <li
              key={b.id}
              className="flex max-w-[10rem] flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={300 + i * 80}
              data-aos-duration="600"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sl-gold)]/20 bg-[var(--sl-gold)]/8 text-sm text-[var(--sl-gold)]">
                &#10003;
              </span>
              <span className="mt-3 text-sm font-semibold text-[var(--sl-ink)]">
                {b.label}
              </span>
              <span className="mt-0.5 text-xs text-[var(--sl-muted)]">
                {b.short}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <ul className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <svg width="20" height="19" viewBox="0 0 24.814 23.599" aria-hidden>
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
