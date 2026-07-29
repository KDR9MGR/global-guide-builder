import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import img from "@/assets/athletic.jpg";
import golfImg from "@/assets/athletic-golf.jpg";
import collageAsset from "@/assets/athletic-collage.png.asset.json";
const collageImg = collageAsset.url;

export const Route = createFileRoute("/services/athletic-recruitment")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Athletic Recruitment for International Student-Athletes — Helm Global" },
      { name: "description", content: "College recruiting mentorship: personalised strategy, coach outreach, performance development and academic support for balanced excellence." },
      { property: "og:title", content: "Athletic Recruitment — Helm Global" },
      { property: "og:url", content: "/services/athletic-recruitment" },
    ],
    links: [{ rel: "canonical", href: "/services/athletic-recruitment" }],
  }),
});

const why = [
  { t: "Extensive Recruitment Experience", b: "Deep expertise in sports recruitment, specialising in connecting international athletes with leading educational institutions in the United States." },
  { t: "Expert Guidance", b: "Our college sports specialists — many current or former athletes themselves — bring firsthand knowledge and a proven placement track record." },
  { t: "Broad International Network", b: "Access to a global network spanning aspiring athletes and coaches across five continents." },
  { t: "Showcases & Recruitment Events", b: "Dedicated showcase events and organised scouting opportunities to connect international athletes with programmes." },
];

const whyHelm = [
  { t: "Personalised Coaching", b: "Every athlete receives a bespoke recruitment plan tailored to their sport, performance level, academic profile, and target schools — not a generic template." },
  { t: "Coach Network Access", b: "Our team has established relationships and deep knowledge of coaching staff expectations across Division I, II, and NAIA programmes in multiple sports." },
  { t: "Academic + Athletic Integration", b: "We manage both the academic application and the recruitment process simultaneously — so nothing falls through the cracks." },
  { t: "Scholarship Maximisation", b: "We identify every available scholarship and financial aid avenue — athletic, academic, and merit-based — to maximise the financial outcome for each family." },
  { t: "International Expertise", b: "We specialise in guiding international student-athletes through the unique regulatory and logistical challenges of the US college sports system." },
];

const pillars = [
  { n: "01", t: "Personalised Recruitment Strategy", b: "A tailored recruiting plan that aligns academic interests, athletic strengths and long-term goals — focused on the right camps, coaches and timelines for maximum impact." },
  { n: "02", t: "Coach Outreach & Visibility", b: "Connect with coaches strategically, present with confidence, and stand out through curated highlight reels, strong communication and standout performances." },
  { n: "03", t: "Athletic Performance Development", b: "Former collegiate athletes provide skill refinement, video analysis, sport IQ development and strong performance habits." },
  { n: "04", t: "Academic Support", b: "Course planning, test preparation, time management and Academic Index strategy — because top universities expect excellence on the field and in the classroom." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Service 03"
        title={<>Athletic <em className="italic text-teal-soft">Recruitment</em> for future collegiate athletes.</>}
        intro="High-quality college recruiting services for student-athletes and their families — trusted guidance through the entire recruitment journey."
        image={collageImg}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Athletic Recruitment" }]}
      />

      {/* Why families choose us */}
      <section className="container-editorial py-28 lg:py-36">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow">Why families choose Helm Global</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">
            The right coach. The right programme. The right fit.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {why.map((w, i) => (
            <div key={w.t} className="bg-card p-10">
              <div className="flex items-center justify-between">
                <span className="font-display text-teal">0{i + 1}</span>
                <span className="h-px w-16 bg-teal/40" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-navy-deep leading-snug">{w.t}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{w.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-secondary/60 py-28">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">Our Approach</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">Every athlete is paired with a dedicated advisor.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Athletes complete a structured interview process to ensure the right fit for Helm Global's recruiting programme. Families receive a personalised calendar aligned with their child's timeline for optimal college outreach.</p>
            <p>Every student-athlete is paired with a dedicated advisor for one-on-one mentoring, backed by extensive experience in college athletic recruitment.</p>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="container-editorial pt-4 pb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden aspect-[4/5] bg-secondary">
            <img src={img} alt="Tennis training" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-[4/5] bg-secondary md:mt-16">
            <img src={golfImg} alt="Golf training" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-editorial py-28">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow">Four pillars</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light">Balanced excellence — on the field and in the classroom.</h2>
        </div>
        <div className="space-y-16">
          {pillars.map((p) => (
            <div key={p.n} className="grid lg:grid-cols-12 gap-8 border-t border-navy-deep pt-10">
              <div className="lg:col-span-2">
                <div className="font-display text-6xl text-teal">{p.n}</div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-3xl text-navy-deep leading-tight">{p.t}</h3>
              </div>
              <div className="lg:col-span-6 text-lg text-foreground/75 leading-relaxed">{p.b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep text-primary-foreground py-24">
        <div className="container-editorial mb-20">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow text-teal-soft">Why Helm Global for Athletic Recruitment?</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-light leading-tight">Five reasons families trust us with their athlete's future.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
            {whyHelm.map((w, i) => (
              <div key={w.t} className="bg-navy-deep p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-teal-soft text-lg">0{i + 1}</span>
                  <span className="h-px w-16 bg-teal-soft/40" />
                </div>
                <h3 className="mt-6 font-display text-2xl leading-snug">{w.t}</h3>
                <p className="mt-3 text-primary-foreground/75 leading-relaxed">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="eyebrow text-teal-soft">Ready to be recruited?</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-light max-w-2xl leading-tight">Tell us about your sport, your timeline, and your ambitions.</h3>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-teal px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-teal-soft hover:text-navy-deep transition-colors">
            Begin recruitment
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}