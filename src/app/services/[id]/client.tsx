"use client";

import { useQuoteModal } from "@/contexts/quote-modal-context";

export function ServicePageClient() {
  const { open } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={() => open()}
      className="mt-8 rounded-full bg-[var(--sl-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
    >
      Get a quote for this service
    </button>
  );
}
