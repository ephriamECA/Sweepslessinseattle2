"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hero, nav, site } from "@/content/site";
import { useQuoteModal } from "@/contexts/quote-modal-context";
import clsx from "clsx";

export function SiteHeader() {
  const { open: openQuote } = useQuoteModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--sl-border)] bg-[var(--sl-surface)]/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--sl-wash)] focus:px-3 focus:py-2 focus:text-[var(--sl-gold)] focus:shadow"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold italic tracking-tight text-[var(--sl-gold)]"
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 lg:flex" id="site-nav">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6">
              {nav.primary.map((item) => {
                const isActive =
                  pathname === item.href ||
                  ("children" in item &&
                    item.children &&
                    item.children.some((c) => pathname === c.href));

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      "children" in item && item.children
                        ? setOpenDropdown(item.label)
                        : null
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {"children" in item && item.children ? (
                      <>
                        <button
                          type="button"
                          className={clsx(
                            "flex items-center gap-1 text-sm font-medium transition",
                            isActive
                              ? "text-[var(--sl-gold)]"
                              : "text-[var(--sl-ink)] hover:text-[var(--sl-gold)]",
                          )}
                          aria-expanded={openDropdown === item.label}
                          aria-haspopup="true"
                        >
                          {item.label}
                          <span className="text-xs text-[var(--sl-muted)]" aria-hidden>
                            ▾
                          </span>
                        </button>
                        <div
                          className={clsx(
                            "absolute top-full left-0 z-50 min-w-[14rem] pt-2 transition-opacity duration-150",
                            openDropdown === item.label
                              ? "pointer-events-auto opacity-100"
                              : "pointer-events-none opacity-0",
                          )}
                        >
                          <ul className="rounded-xl border border-[var(--sl-border)] bg-[var(--sl-card)] py-2 shadow-xl">
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <Link
                                  href={c.href}
                                  className={clsx(
                                    "block px-4 py-2 text-sm transition",
                                    pathname === c.href
                                      ? "text-[var(--sl-gold)]"
                                      : "text-[var(--sl-ink)] hover:bg-[var(--sl-wash)] hover:text-[var(--sl-gold)]",
                                  )}
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={clsx(
                          "text-sm font-medium transition",
                          isActive
                            ? "text-[var(--sl-gold)]"
                            : "text-[var(--sl-ink)] hover:text-[var(--sl-gold)]",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-medium text-[var(--sl-muted)] hover:text-[var(--sl-gold)] sm:inline"
          >
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => openQuote()}
            className="hidden rounded-full bg-[var(--sl-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 md:inline-block"
          >
            {hero.cta}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--sl-border)] text-[var(--sl-ink)] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <span aria-hidden className="text-lg">
              {mobileOpen ? "\u00d7" : "\u2261"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "overflow-hidden border-t border-[var(--sl-border)] bg-[var(--sl-surface)] transition-[max-height] duration-300 lg:hidden",
          mobileOpen ? "max-h-[80vh]" : "max-h-0 border-t-0",
        )}
      >
        <nav className="mx-auto max-w-6xl space-y-4 px-4 py-4" aria-label="Mobile">
          {nav.primary.map((item) => (
            <div key={item.label}>
              {"children" in item && item.children ? (
                <>
                  <p className="text-xs font-semibold tracking-widest text-[var(--sl-gold)] uppercase">
                    {item.label}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          className={clsx(
                            "block rounded-lg px-2 py-2 text-sm",
                            pathname === c.href
                              ? "text-[var(--sl-gold)]"
                              : "text-[var(--sl-ink)] hover:bg-[var(--sl-wash)]",
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={clsx(
                    "block rounded-lg px-2 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "text-[var(--sl-gold)]"
                      : "text-[var(--sl-ink)] hover:bg-[var(--sl-wash)]",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="block text-sm font-medium text-[var(--sl-gold)]"
          >
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="w-full rounded-full bg-[var(--sl-accent)] py-3 text-sm font-semibold text-white"
            onClick={() => {
              setMobileOpen(false);
              openQuote();
            }}
          >
            {hero.cta}
          </button>
        </nav>
      </div>
    </header>
  );
}
