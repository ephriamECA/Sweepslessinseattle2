"use client";

import { useActionState } from "react";
import { useRef } from "react";
import { sendQuoteRequest, type QuoteFormState } from "@/app/actions/send-quote";
import { services } from "@/content/site";

const inputClass =
  "w-full rounded-xl border border-[var(--sl-border)] bg-[var(--sl-wash)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--sl-muted)] outline-none transition focus:border-[var(--sl-gold)] focus:ring-1 focus:ring-[var(--sl-gold)]/30";

export function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, isPending] = useActionState<QuoteFormState, FormData>(
    async (prev, formData) => {
      const result = await sendQuoteRequest(prev, formData);
      if (result?.success) {
        formRef.current?.reset();
        onSuccess?.();
      }
      return result;
    },
    null,
  );

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <div>
        <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Name <span className="text-[var(--sl-accent)]">*</span>
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
            Email <span className="text-[var(--sl-accent)]">*</span>
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
            Phone
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(206) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Service interested in
        </label>
        <select
          id="quote-service"
          name="service"
          className={inputClass + " appearance-none"}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a service (optional)
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="quote-message" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Message <span className="text-[var(--sl-accent)]">*</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={4}
          className={inputClass + " resize-y"}
          placeholder="Tell us about your home, timing, and any priorities..."
        />
      </div>

      {state && (
        <div
          role="alert"
          className={`rounded-xl px-4 py-3 text-sm ${
            state.success
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-[var(--sl-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Sending\u2026" : "Send quote request"}
      </button>
    </form>
  );
}
