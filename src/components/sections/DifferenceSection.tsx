"use client";

import { useState } from "react";
import clsx from "clsx";
import { differenceCards, servicesIntro } from "@/content/site";

export function DifferenceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="difference"
      className="border-b border-[var(--sl-border)] bg-[var(--sl-wash)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header data-aos="fade-up" data-aos-duration="700">
          <p className="text-sm font-semibold tracking-widest text-[var(--sl-accent)] uppercase">
            Why choose us
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic tracking-tight text-[var(--sl-gold)] md:text-4xl">
            The Sweepsless difference
          </h2>
        </header>

        <div className="mt-12">
          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {differenceCards.map((card, i) => {
              const expanded = openId === card.id;
              return (
                <div
                  key={card.id}
                  className="min-w-[85vw] snap-center sm:min-w-[60vw] md:min-w-0"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  data-aos-duration="600"
                >
                  <div
                    className={clsx(
                      "card-glow flex h-full flex-col rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-6 shadow-sm",
                      expanded && "ring-2 ring-[var(--sl-gold)]/30",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--sl-gold)]/20 bg-[var(--sl-gold)]/8">
                        {iconFor(card.id)}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--sl-gold)]">
                        {card.title}
                      </h3>
                    </div>
                    <div
                      className={clsx(
                        "mt-3 overflow-hidden text-[15px] leading-relaxed text-[var(--sl-muted)] transition-[max-height] duration-300",
                        expanded ? "max-h-96" : "max-h-0 md:max-h-96",
                      )}
                    >
                      <p>{card.body}</p>
                    </div>
                    <div className="mt-auto flex justify-end pt-4 md:hidden">
                      <button
                        type="button"
                        className="rounded-full border border-[var(--sl-border)] p-2 text-[var(--sl-ink)] hover:bg-[var(--sl-wash)]"
                        aria-expanded={expanded}
                        aria-label={
                          expanded ? "Collapse card" : "Expand card content"
                        }
                        onClick={() =>
                          setOpenId((c) => (c === card.id ? null : card.id))
                        }
                      >
                        <Chevron expanded={expanded} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 pt-14" data-aos="fade-up" data-aos-duration="700">
          <div className="gold-rule mb-14" />
          <p className="text-sm font-semibold tracking-widest text-[var(--sl-accent)] uppercase">
            {servicesIntro.eyebrow}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
            {servicesIntro.title}
          </h2>
        </div>
      </div>
    </section>
  );
}

function iconFor(id: (typeof differenceCards)[number]["id"]) {
  const map: Record<string, string> = {
    contracts: "NC",
    schedule: "FS",
    custom: "CC",
    team: "TE",
    happy: "SG",
  };
  const label = map[id] ?? "\u2022";
  return (
    <span className="text-xs font-bold tracking-tight text-[var(--sl-gold)]">
      {label}
    </span>
  );
}

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17.507 16.547"
      className={clsx(
        "transition-transform duration-300",
        expanded && "rotate-90",
      )}
      aria-hidden
    >
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
  );
}
