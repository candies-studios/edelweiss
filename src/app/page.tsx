import Image from "next/image";
import Link from "next/link";
import { businesses, careers, company, investorDocs, irLinks, leadership, news } from "@/content/site";
import { ContourField } from "@/components/home/ContourField";
import { DocLibrary } from "@/components/investors/DocLibrary";
import { Reveal } from "@/components/Reveal";
import { Arrow, ArrowLink, Section, SectionHeader, SmartLink } from "@/components/ui";

const dateFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function Home() {
  const [credit, am, arc, ins] = businesses;

  return (
    <>
      {/* ───────── C. Hero ───────── */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 lg:left-[38%]">
          <ContourField />
        </div>
        <div className="container relative grid min-h-[min(78vh,680px)] items-center py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 !text-glacier">{company.tagline}</p>
            <h1 className="font-display text-display-xl font-light">
              Building financial futures.
              <br />
              Creating lasting value.
            </h1>
            <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-silver">
              Edelweiss brings together financial expertise, innovation and a diversified ecosystem of solutions to help individuals and businesses move forward with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/businesses" className="btn-light">
                Explore our businesses
              </Link>
              <Link href="/about" className="btn-outline-light">
                Discover Edelweiss
              </Link>
            </div>
          </div>
        </div>
        <div className="container relative grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
          {businesses.map((b) => (
            <Link key={b.slug} href={`/businesses/${b.slug}`} className="group border-white/10 py-6 pr-4 text-[14.5px] text-silver transition-colors hover:text-white sm:border-r sm:pl-0 sm:last:border-r-0 [&:not(:first-child)]:sm:pl-6">
              <span className="flex items-center justify-between gap-3">
                {b.name}
                <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── D. Company overview ───────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="font-display text-display-lg text-navy">One vision. Multiple financial possibilities.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="font-display text-[22px] leading-snug text-navy">
              Edelweiss is one of India’s leading diversified financial services groups, serving corporations, institutions and individuals.
            </p>
            <p className="mt-6 text-ink-soft">{company.description}</p>
            <p className="mt-4 text-ink-soft">
              Our guiding principles put reputation before financial gain, weigh the long-term consequences of every decision, and start with listening to customers before offering solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ArrowLink href="/about">About Edelweiss</ArrowLink>
              <ArrowLink href={investorDocs.find((d) => d.category === "Chairman's letter")!.href}>Read the Chairman’s letter FY26</ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-silver-300 bg-silver-300 md:grid-cols-4">
          {[
            { k: "7", v: "independent businesses, each with its own platform, management and board" },
            { k: "4", v: "areas of focus: credit, asset management, asset reconstruction, insurance" },
            { k: "NSE · BSE", v: `Listed as ${company.listings[0].code} and ${company.listings[1].code}` },
            { k: "13", v: "guiding principles that shape how we work" },
          ].map((s) => (
            <div key={s.k} className="bg-white p-6 md:p-8">
              <p className="font-display text-[34px] leading-none text-navy">{s.k}</p>
              <p className="mt-3 text-[14px] leading-snug text-ink-soft">{s.v}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* ───────── E. Our businesses ───────── */}
      <section id="businesses" className="bg-mist py-20 md:py-28">
        <div className="container">
          <SectionHeader eyebrow="Our businesses" title="A diversified ecosystem of financial solutions" intro="Four areas of expertise, each run as an independent business with its own management and governance." />

          {/* Credit — large image left, text right */}
          <Reveal className="mt-16 grid items-stretch gap-0 bg-white lg:grid-cols-2">
            <div className="relative min-h-[300px] bg-navy-700">
              <Image src={credit.image} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-8 md:p-14">
              <p className="eyebrow mb-3">01 · {credit.name}</p>
              <h3 className="font-display text-display-md text-navy">{credit.summary}</h3>
              <ul className="mt-8 space-y-4">
                {credit.offerings.map((o) => (
                  <li key={o.title} className="border-t border-silver-200 pt-4">
                    <p className="font-semibold text-navy">{o.title}</p>
                    <p className="mt-1 text-[15px] text-ink-soft">{o.text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8"><ArrowLink href={`/businesses/${credit.slug}`}>Learn more about Credit</ArrowLink></div>
            </div>
          </Reveal>

          {/* Asset management — dark band with facts */}
          <Reveal className="mt-6 grid gap-0 bg-navy text-white lg:grid-cols-12">
            <div className="p-8 md:p-14 lg:col-span-7">
              <p className="eyebrow mb-3 !text-glacier">02 · {am.name}</p>
              <h3 className="font-display text-display-md">{am.summary}</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {am.offerings.map((o) => (
                  <div key={o.title}>
                    <p className="font-semibold">{o.title}</p>
                    <p className="mt-1 text-[15px] text-silver">{o.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8"><Link href={`/businesses/${am.slug}`} className="link-arrow !text-glacier hover:!text-white">Learn more about Asset Management <Arrow /></Link></div>
            </div>
            <div className="grid content-center gap-8 border-t border-white/10 p-8 md:p-14 lg:col-span-5 lg:border-l lg:border-t-0">
              {am.facts?.map((f) => (
                <div key={f.label}>
                  <p className="font-display text-[48px] font-light leading-none">{f.value}</p>
                  <p className="mt-2 text-[14.5px] text-silver">{f.label}</p>
                </div>
              ))}
              <p className="text-[12px] text-silver/70">Source: Edelweiss Asset Management, edelweissfin.com</p>
            </div>
          </Reveal>

          {/* ARC + Insurance — two different treatments side by side */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <Reveal className="relative overflow-hidden bg-white lg:col-span-7">
              <div className="relative h-56 bg-navy-700">
                <Image src={arc.image} alt="" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <p className="eyebrow mb-3">03 · {arc.name}</p>
                <h3 className="font-display text-[26px] leading-tight text-navy">Resolve. Reconstruct. Revive.</h3>
                <p className="mt-4 text-ink-soft">{arc.body[1]}</p>
                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-silver-200 pt-6">
                  {arc.facts?.map((f) => (
                    <div key={f.label}>
                      <p className="font-display text-[30px] leading-none text-navy">{f.value}</p>
                      <p className="mt-1 text-[13.5px] text-ink-soft">{f.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8"><ArrowLink href={`/businesses/${arc.slug}`}>Learn more about Asset Reconstruction</ArrowLink></div>
              </div>
            </Reveal>
            <Reveal className="flex flex-col border-t-4 border-blue bg-white p-8 md:p-12 lg:col-span-5" delay={0.06}>
              <p className="eyebrow mb-3">04 · {ins.name}</p>
              <h3 className="font-display text-[26px] leading-tight text-navy">{ins.summary}</h3>
              <ul className="mt-8 flex-1 divide-y divide-silver-200 border-y border-silver-200">
                {ins.offerings.map((o) => (
                  <li key={o.title}>
                    <SmartLink href={o.href!} className="group flex items-center justify-between py-5">
                      <span>
                        <span className="block font-semibold text-navy group-hover:text-blue">{o.title}</span>
                        <span className="text-[14.5px] text-ink-soft">{o.text}</span>
                      </span>
                      <Arrow className="shrink-0 text-blue" />
                    </SmartLink>
                  </li>
                ))}
              </ul>
              <div className="mt-8"><ArrowLink href={`/businesses/${ins.slug}`}>Learn more about Insurance</ArrowLink></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── F. Why Edelweiss ───────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Why Edelweiss" title="Built for the long term" intro="What sets the way we work apart, in the company’s own commitments." />
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {[
              { t: "A diversified ecosystem", d: "Seven independent businesses across credit, asset management, asset reconstruction and insurance." },
              { t: "Independent governance", d: "Each business has its own operating platform, management team and board." },
              { t: "Risk awareness", d: "We continually balance risk against reward, and treat capital with prudence." },
              { t: "Reputation first", d: "We value our good name above financial gain and uphold high standards of integrity." },
              { t: "Customer understanding", d: "We listen first, then meet needs with the right products and solutions." },
              { t: "Responsible growth", d: "An ESG Council and published ESG reports guide how we create value for every stakeholder." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={(i % 2) * 0.05} className="border-t border-navy pt-5">
                <h3 className="text-[18px] font-semibold text-navy">{x.t}</h3>
                <p className="mt-2 text-[15.5px] text-ink-soft">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────── G. Investor relations ───────── */}
      <section id="investors" className="bg-mist py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="Investor relations" title="Information for shareholders and investors" />
            <Link href="/investors" className="btn-outline">Investor Relations centre</Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <aside className="space-y-6 lg:col-span-4">
              <div className="bg-navy p-8 text-white">
                <p className="text-[13px] font-semibold text-glacier">Listing</p>
                <dl className="mt-5 grid grid-cols-2 gap-y-5 text-[14px]">
                  <dt className="text-silver">NSE</dt><dd className="font-semibold">{company.listings[0].code}</dd>
                  <dt className="text-silver">BSE</dt><dd className="font-semibold">{company.listings[1].code}</dd>
                  <dt className="text-silver">Reuters</dt><dd className="font-semibold">{company.reuters}</dd>
                  <dt className="text-silver">Bloomberg</dt><dd className="font-semibold">{company.bloomberg}</dd>
                </dl>
              </div>
              <nav aria-label="Investor information" className="bg-white p-8">
                <ul className="space-y-3 text-[15px]">
                  {[
                    { l: "Quarterly results", h: "/investors/financial-results" },
                    { l: "Annual reports", h: "/investors/annual-reports" },
                    { l: "Corporate governance", h: "/investors/governance" },
                    { l: "Sustainability reports", h: "/sustainability" },
                    { l: "Financial analysis tool", h: irLinks.analysisTool },
                    { l: "Investor services", h: irLinks.investorServices },
                    { l: "Stock exchange disclosures", h: irLinks.overview },
                  ].map((x) => (
                    <li key={x.l}>
                      <SmartLink href={x.h} className="flex items-center justify-between font-medium text-navy hover:text-blue">
                        {x.l} <Arrow className="text-blue" />
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="bg-white p-6 md:p-10 lg:col-span-8">
              <h3 className="mb-6 font-display text-[24px] text-navy">Latest documents</h3>
              <DocLibrary docs={investorDocs} compact />
              <div className="mt-6"><ArrowLink href="/investors">View all investor documents</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── H. Insights and news ───────── */}
      <Section id="insights">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Insights and news" title="Perspectives and announcements" />
          <ArrowLink href="/media">All news and media</ArrowLink>
        </div>
        <div className="mt-12 grid gap-px border border-silver-300 bg-silver-300 md:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((n, i) => (
            <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer" className={`group flex flex-col bg-white p-7 transition-colors hover:bg-mist ${i === 0 ? "lg:col-span-1" : ""}`}>
              <p className="text-[12.5px] font-semibold text-blue">{n.kind === "In the news" ? n.outlet : "Press release"}</p>
              <p className="mt-3 flex-1 font-display text-[20px] leading-snug text-navy group-hover:text-blue">{n.title}</p>
              <time className="mt-6 text-[13px] text-ink-faint" dateTime={n.date}>{dateFmt.format(new Date(n.date))}</time>
            </a>
          ))}
        </div>
      </Section>

      {/* ───────── I. Leadership ───────── */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader tone="dark" eyebrow="Leadership" title="Board of Directors" intro="Experienced leaders from financial services, public policy and banking." />
            <Link href="/leadership" className="btn-outline-light">Meet the Board</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {leadership.slice(0, 4).map((p) => (
              <Reveal key={p.name}>
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-700">
                    <Image src={p.photo} alt={`Portrait of ${p.name}`} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover grayscale-[20%] transition duration-500 hover:grayscale-0" />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-[13.5px] leading-snug text-silver">{p.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── J. Sustainability ───────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Sustainability and responsibility" title="Governance, sustainability and responsible growth" intro="We treat governance and sustainability as the foundation of our business, acting with transparency, fairness and accountability." />
          </div>
          <div className="grid gap-px border border-silver-300 bg-silver-300 sm:grid-cols-3 lg:col-span-7">
            {[
              { t: "ESG Report FY26", d: "Our latest report on environmental, social and governance performance.", h: investorDocs.find((d) => d.title === "ESG Report FY26")!.href },
              { t: "Corporate governance", d: "Board committees and the policies that govern how we operate.", h: "/investors/governance" },
              { t: "EdelGive Foundation", d: "The group’s philanthropic foundation, chaired by Vidya Shah.", h: "https://www.edelgive.org/" },
            ].map((x) => (
              <SmartLink key={x.t} href={x.h} className="group flex flex-col bg-white p-7 hover:bg-mist">
                <p className="font-display text-[22px] text-navy group-hover:text-blue">{x.t}</p>
                <p className="mt-3 flex-1 text-[14.5px] text-ink-soft">{x.d}</p>
                <Arrow className="mt-6 text-blue" />
              </SmartLink>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────── K. Careers ───────── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Careers" title="Build your future with Edelweiss" intro="Room to grow across varied businesses and roles, and the freedom to lead." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/careers" className="btn-primary">Explore careers</Link>
              <a href={`mailto:${company.careersEmail}`} className="btn-outline">Apply now</a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {careers.culture.map((c) => (
              <div key={c.title} className="border-l-2 border-blue pl-5">
                <h3 className="font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
