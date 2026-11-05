import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 8h11m-4-4.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function External({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path d="M4.5 2H10v5.5M10 2 2.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Internal links use next/link; external ones open in a new tab with rel=noopener. */
export function SmartLink({ href, className, children, ...rest }: { href: string; className?: string; children: ReactNode; "aria-label"?: string }) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  if (external) {
    const isWeb = href.startsWith("http");
    return (
      <a href={href} className={className} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
        {isWeb && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <SmartLink href={href} className="link-arrow">
      {children}
      {external ? <External /> : <Arrow />}
    </SmartLink>
  );
}

export function SectionHeader({ eyebrow, title, intro, align = "left", tone = "light" }: { eyebrow?: string; title: string; intro?: string; align?: "left" | "center"; tone?: "light" | "dark" }) {
  return (
    <header className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${tone === "dark" ? "!text-glacier" : ""}`}>{eyebrow}</p>}
      <h2 className={`font-display text-display-lg font-normal ${tone === "dark" ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-prose text-[17.5px] ${tone === "dark" ? "text-silver" : "text-ink-soft"}`}>{intro}</p>}
    </header>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs }: { eyebrow?: string; title: string; intro?: string; crumbs?: { label: string; href: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="ph-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0v56" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-grid)" />
      </svg>
      <div className="absolute -right-40 top-0 h-full w-[60%] bg-gradient-to-l from-blue/40 to-transparent" aria-hidden="true" />
      <div className="container relative py-16 md:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-silver">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-4 !text-glacier">{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-display-xl font-normal">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-silver">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "", id, tone = "white" }: { children: ReactNode; className?: string; id?: string; tone?: "white" | "mist" | "navy" }) {
  const bg = tone === "mist" ? "bg-mist" : tone === "navy" ? "bg-navy text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SourceNote({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-[12.5px] text-ink-faint">{children}</p>;
}
