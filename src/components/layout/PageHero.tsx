"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--sl-wash)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,var(--sl-gold)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,var(--sl-accent)_0%,transparent_40%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center page-enter">
        <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold italic tracking-tight text-[var(--sl-gold)] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]">
            {subtitle}
          </p>
        )}
        <div className="gold-rule mx-auto mt-8 max-w-xs" />
        {children}
      </div>
    </section>
  );
}
