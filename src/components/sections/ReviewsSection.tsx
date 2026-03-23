"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { curatedReviews, reviewsHeading } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function ReviewsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="border-y border-[var(--sl-border)] bg-[var(--sl-wash)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 max-w-2xl" data-aos="fade-up" data-aos-duration="700">
          <p className="text-sm font-semibold tracking-widest text-[var(--sl-accent)] uppercase">
            {reviewsHeading.eyebrow}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
            {reviewsHeading.title}
          </h2>
        </header>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={
              reducedMotion
                ? false
                : { delay: 5000, disableOnInteraction: true }
            }
            loop
            className="reviews-swiper pb-12"
          >
            {curatedReviews.map((r) => (
              <SwiperSlide key={r.name}>
                <article className="card-glow h-full rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-sm font-semibold text-[var(--sl-gold)]"
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
                  <p className="mt-4 text-[15px] leading-[1.8] text-[var(--foreground)]">
                    &ldquo;{r.excerpt}&rdquo;
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/reviews"
            className="text-sm font-medium text-[var(--sl-gold)] underline decoration-[var(--sl-gold)]/30 underline-offset-4 transition hover:decoration-[var(--sl-gold)]"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
