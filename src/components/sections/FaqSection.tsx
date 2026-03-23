"use client";

import { useState } from "react";
import clsx from "clsx";
import { faqItems } from "@/content/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-[var(--sl-border)] bg-[var(--sl-wash)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4">
        <header data-aos="fade-up" data-aos-duration="700">
          <p className="text-sm font-semibold tracking-widest text-[var(--sl-accent)] uppercase">
            Common questions
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold italic text-[var(--sl-gold)] md:text-4xl">
            Frequently asked questions
          </h2>
        </header>

        <dl className="mt-10 divide-y divide-[var(--sl-border)]" data-aos="fade-up" data-aos-delay="100">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-base font-semibold text-[var(--sl-ink)]">
                      {item.question}
                    </span>
                    <span
                      className={clsx(
                        "mt-0.5 shrink-0 text-[var(--sl-gold)] transition-transform duration-200",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={clsx(
                    "overflow-hidden transition-[max-height,opacity] duration-300",
                    isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-[15px] leading-relaxed text-[var(--sl-muted)]">
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
