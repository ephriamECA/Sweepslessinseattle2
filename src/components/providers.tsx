"use client";

/**
 * Motion (parity with reference site patterns):
 * - AOS scroll reveals: fade-right / fade-left / fade-up on sections; duration 1000ms-class mapping via offset 64px; once.
 * - AOS disabled entirely when prefers-reduced-motion: reduce (see also globals.css [data-aos] reset).
 * - Swiper: hero + reviews autoplay pause when useReducedMotion(); process carousel is manual advance (navigation only).
 * - Quote UI: Radix Dialog (focus trap, ESC); overlay opacity transition ~200ms.
 */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { QuoteModalProvider } from "@/contexts/quote-modal-context";
import { QuoteModal } from "@/components/quote/QuoteModal";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 64,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <QuoteModalProvider>
      {children}
      <QuoteModal />
    </QuoteModalProvider>
  );
}
