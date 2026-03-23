import Link from "next/link";
import { services, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer-contact"
      className="border-t border-[var(--sl-border)] bg-[var(--sl-ink)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold italic text-white">
            {site.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Services
          </p>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.slug}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Company
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-white/70 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm text-white/70 hover:text-white">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white/70 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Reach us
          </p>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-white/50">{site.hours}</p>
            {site.addresses.map((a) => (
              <p key={a.line1} className="text-white/50">
                {a.line1}, {a.line2}
              </p>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href={site.social.instagram}
              className="text-sm text-white/60 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              className="text-sm text-white/60 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="mx-4 h-px bg-white/10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <a href="#main" className="hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
