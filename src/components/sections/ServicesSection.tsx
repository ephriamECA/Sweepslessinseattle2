"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { services, servicesIntro } from "@/content/site";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="services"
      className="bg-[var(--background)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <article data-aos="fade-right" data-aos-duration="800">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
              {servicesIntro.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--sl-muted)]">
              {servicesIntro.description}
            </p>
            <ul className="mt-8 space-y-1.5" role="tablist" aria-label="Services">
              {services.map((s, i) => (
                <li key={s.id} role="none">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-controls={`service-panel-${s.id}`}
                    id={`service-tab-${s.id}`}
                    className={clsx(
                      "group flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200",
                      i === active
                        ? "bg-[var(--sl-wash)] text-[var(--sl-gold)] shadow-sm"
                        : "text-[var(--sl-muted)] hover:bg-[var(--sl-wash)]/60 hover:text-[var(--sl-ink)]",
                    )}
                    onClick={() => setActive(i)}
                  >
                    <span>{s.name}</span>
                    <ArrowIcon />
                  </button>
                </li>
              ))}
            </ul>
            <Link
              href={current.slug}
              className="mt-8 inline-flex rounded-full bg-[var(--sl-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Learn more about {current.name.toLowerCase()}
            </Link>
          </article>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--sl-border)] shadow-lg">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  id={`service-panel-${s.id}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${s.id}`}
                  hidden={i !== active}
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-500",
                    i === active ? "z-10 opacity-100" : "z-0 opacity-0",
                  )}
                >
                  <Image
                    src={s.image}
                    alt={`${s.name} — Sweepsless in Seattle`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <p className="text-[15px] leading-relaxed text-white/90">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-[var(--sl-muted)]">
              Showing: <strong className="text-[var(--sl-gold)]">{current.name}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <span className="text-[var(--sl-gold)] transition-transform duration-200 group-hover:translate-x-1">
      <svg width="18" height="17" viewBox="0 0 17.507 16.547" aria-hidden>
        <g transform="translate(-7654.975 -8593.568)">
          <line
            x2="16.8"
            transform="translate(7654.975 8601.842)"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={1}
          />
          <path
            d="M7663.855,8593.922l7.92,7.92-7.92,7.92"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={1}
          />
        </g>
      </svg>
    </span>
  );
}
