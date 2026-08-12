import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import img from "@/assets/boarding-school.jpg";
import advantageAsset from "@/assets/boarding-advantage.png.asset.json";
import faqAsset from "@/assets/boarding-faq.png.asset.json";
import step1Asset from "@/assets/boarding-step-31.png.asset.json";
import step2Asset from "@/assets/boarding-step-32.png.asset.json";
import step3Asset from "@/assets/boarding-step-33.png.asset.json";
import step4Asset from "@/assets/boarding-step-34.png.asset.json";
import step5Asset from "@/assets/boarding-step-35.png.asset.json";
import step6Asset from "@/assets/boarding-step-36.png.asset.json";
import step7Asset from "@/assets/boarding-step-37.png.asset.json";
import step8Asset from "@/assets/boarding-step-38.png.asset.json";
const advantageImg = advantageAsset.url;
const faqImg = faqAsset.url;
const stepImages = [
  step1Asset.url,
  step2Asset.url,
  step3Asset.url,
  step4Asset.url,
  step5Asset.url,
  step6Asset.url,
  step7Asset.url,
  step8Asset.url,
];

export const Route = createFileRoute("/services/boarding-schools")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Boarding School Admissions (US, UK, Singapore) — Helm Global" },
      { name: "description", content: "Personalised placement for US, UK and Singapore boarding schools: research, entrance exams (SSAT/ISEE/Common Entrance), interviews, essays and first-year transition." },
      { property: "og:title", content: "Boarding School Admissions — Helm Global" },
      { property: "og:url", content: "/services/boarding-schools" },
    ],
    links: [{ rel: "canonical", href: "/services/boarding-schools" }],
  }),
});

const process = [
  {
    t: "Initial Consultation & Family Discovery",
    bullets: [
      "Thorough consultation with student and parents to understand academic background, personal interests, extracurricular strengths, financial parameters, and aspirations",
      "Identification of entry point and target countries based on the student's age, profile, and family objectives",
      "Honest assessment of the student's current competitiveness across a range of school tiers",
    ],
  },
  {
    t: "School Research & Shortlisting",
    bullets: [
      "Comprehensive research across US, UK, and Singapore schools — covering academic culture, curriculum, extracurricular offerings, pastoral care, diversity, alumni outcomes, and university placement records",
      "Development of a personalised shortlist spanning aspirational, target, and realistic categories",
      "Detailed school profiles shared with the family, covering what each institution values and what distinguishes its admissions process",
    ],
  },
  {
    t: "Academic & Test Preparation",
    bullets: [
      "Structured SSAT or ISEE preparation for US boarding school applicants",
      "Common Entrance, Pre-Test, and school-specific entrance examination preparation for UK applicants",
      "English language proficiency preparation (IELTS or school-specific tests) for international students",
      "Subject-specific academic strengthening to ensure the student's grades reflect their genuine potential",
    ],
  },
  {
    t: "Application Development",
    bullets: [
      "Student essay or personal statement development — from initial brainstorming through to final draft, guided by specialist writing mentors",
      "Teacher recommendation strategy: identifying the strongest recommenders, briefing them on what to emphasise, and reviewing drafts where possible",
      "Activity list and portfolio development — ensuring extracurricular achievements are presented clearly, compellingly, and in the language the school's admissions team expects",
      "Completion and review of all application components before submission",
    ],
  },
  {
    t: "Interview Preparation",
    bullets: [
      "Targeted mock interview preparation tailored to each school's known interview style — conversational, structured, or panel",
      "Coaching on how to articulate interests, values, and aspirations with confidence and authenticity",
      "Guidance on campus visit etiquette and how to make the most of every interaction with admissions staff and current students",
    ],
  },
  {
    t: "Scholarship Applications",
    bullets: [
      "Identification of all scholarship opportunities available at target schools — academic, music, art, drama, and sport",
      "Scholarship essay and portfolio development with specialist support",
      "Audition or portfolio preparation where applicable",
      "Financial aid application guidance and documentation support",
    ],
  },
  {
    t: "Offer Management & Final Decision",
    bullets: [
      "Support in evaluating and comparing offers across schools — weighing academic fit, financial award, pastoral environment, and university placement outcomes",
      "Guidance on waitlist management and deferral responses where applicable",
      "Support for families appealing financial aid awards",
      "Coordination of enrolment documentation, deposit payment, and pre-arrival logistics",
    ],
  },
  {
    t: "Transition & First-Year Preparation",
    bullets: [
      "Preparatory reading lists and academic preparation for the curriculum of the chosen school",
      "Guidance on boarding life: managing independence, building relationships, and thriving in a residential academic environment",
      "Ongoing mentorship during the student's first term to ensure a smooth, confident transition",
    ],
  },
];

const advantages = [
  { label: "Deep Institutional Knowledge", body: "We have researched every major boarding school across the US, UK, and Singapore in detail — their culture, priorities, and what distinguishes a successful applicant from an unsuccessful one at each institution." },
  { label: "Personalised Strategy", body: "Every family receives a bespoke admissions plan. We do not use templates or apply cookie-cutter approaches — because the right school for one student is the wrong school for another." },
  { label: "Writing Excellence", body: "Our specialist writing mentors produce personal statements and essays that are genuinely distinctive — essays that capture the student's authentic voice and speak directly to what each school is seeking." },
  { label: "Interview Coaching", body: "Our mock interview programme is tailored to each school's known format and culture, giving students the confidence and preparation to perform at their absolute best." },
  { label: "Scholarship Maximisation", body: "We identify every available funding opportunity and support every scholarship application — ensuring families access the best possible financial outcome." },
  { label: "Holistic Support", body: "We support not just the application — but the student: their academic preparation, their personal development, and their readiness to thrive in the environment they are entering." },
];

const faqs = [
  { q: "When should we start the boarding school admissions process?", a: "For US and UK boarding schools, serious preparation should begin at least 18 to 24 months before the intended entry date. For Year 9 (13+) entry, this means starting in Year 6 or Year 7 at the latest. For Sixth Form (16+) entry, preparation should begin in Year 9 or early Year 10. Helm Global recommends an initial consultation at least two years before your target entry point." },
  { q: "How selective are these schools, really?", a: "The most prestigious US boarding schools, such as Phillips Exeter and Andover, admit between 12% and 18% of applicants in a typical year — comparable to highly selective universities. Top UK schools such as Eton and Wycombe Abbey are similarly competitive. Singapore's leading schools have limited international intake each year. In every case, a well-prepared, strategically positioned application makes a significant difference." },
  { q: "Is financial aid available?", a: "Yes — and in many cases it is substantial. Several of the most prestigious US boarding schools operate needs-blind admissions for international students and can meet 100% of demonstrated financial need. UK schools offer scholarship competitions with fee reductions of up to 50% or more. Helm Global identifies every available funding avenue for each family and supports all scholarship applications." },
  { q: "How is a boarding school application different from a university application?", a: "The core components are similar — academic records, test scores, teacher references, personal essays, and interviews — but the context and content differ significantly. Boarding school applications assess readiness for a residential, highly demanding academic environment. They are looking for intellectual curiosity, emotional maturity, resilience, and evidence of distinctive talent or interest. Helm Global knows exactly what each school is looking for — and we build each application accordingly." },
];


function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Service 02"
        title={<>US, UK & Singapore <em className="italic text-teal-soft">Boarding School</em> Admissions.</>}
        intro="We guide families through the boarding school process with a focus on academic, social, and emotional fit — informed by real experience visiting the schools we recommend."
        image={img}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Boarding Schools" }]}
      />

      <section className="container-editorial py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="overflow-hidden aspect-[4/5] rounded-[2rem]">
              <img src={img} alt="Historic boarding school" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-lg text-foreground/80 leading-relaxed space-y-6">
            <div className="eyebrow">A guided placement</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">
              Extensive placement support for leading boarding schools.
            </h2>
            <p>Placing your child in an international boarding school can be an important decision, one which most often leads to an enriching experience. We help facilitate the process of selecting the school in which your child can be happy and successful.</p>
            <p>Our mentorship spans family discovery, school shortlisting, entrance exam preparation (SSAT / ISEE / Common Entrance), essay and application development, interview coaching, scholarship applications, offer management, and first-year transition support.</p>
            <p>Because we visit the schools we recommend, our guidance is informed by real experience — not rankings alone.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/60 py-28">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">The Journey</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light">Eight stages of dedicated mentorship.</h2>
          </div>
          <div className="space-y-5">
            {process.map((s, i) => (
              <article key={s.t} className="bg-card overflow-hidden border border-border">
                <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-navy-deep px-6 py-4 sm:px-8">
                  <h3 className="min-w-0 font-display text-lg md:text-xl text-primary-foreground leading-snug">
                    <span className="text-teal-soft font-medium tracking-wide">Step {i + 1}</span>
                    <span className="mx-3 text-primary-foreground/40">|</span>
                    {s.t}
                  </h3>
                </header>
                <div className="grid md:grid-cols-[minmax(0,1fr)_18rem]">
                  <ul className="divide-y divide-border order-2 md:order-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-4 items-start px-6 py-4 sm:px-8">
                        <span className="text-teal shrink-0 mt-1 font-display">✦</span>
                        <span className="text-foreground/80 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="order-1 md:order-2 md:border-l border-border bg-secondary/40">
                    <img
                      src={stepImages[i]}
                      alt={`${s.t} illustration`}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-editorial py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow">Why families choose Helm</div>
            <h2 className="mt-4 font-display text-4xl text-navy-deep font-light leading-tight">Individually advocated. Continuously informed.</h2>
          </div>
          <ul className="space-y-5">
            {[
              "Personal visits to recommended schools inform every recommendation",
              "Close network of contacts within admissions offices and school leadership",
              "Individual advocacy for each student throughout application season",
              "Timely insights that enable strategic adjustments in real time",
            ].map((line) => (
              <li key={line} className="flex gap-4 items-start border-b border-border pb-5">
                <Check className="h-5 w-5 text-teal shrink-0 mt-1" />
                <span className="text-lg text-foreground/80 leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advantage */}
      <section className="bg-secondary/60 py-28 lg:py-36">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow">The Helm Global Advantage</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">In Boarding School Admissions</h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] bg-card p-8">
                <img src={advantageImg} alt="Trust, growth and partnership" loading="lazy" className="w-full h-auto" />
              </div>
            </div>
            <div className="lg:col-span-8 divide-y divide-border border-t border-border bg-card">
              {advantages.map((a) => (
                <div key={a.label} className="grid md:grid-cols-12 gap-6 p-8 lg:p-10">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl text-navy-deep leading-snug">{a.label}</h3>
                  </div>
                  <p className="md:col-span-8 text-foreground/80 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-deep text-primary-foreground py-28">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow text-teal-soft">Questions</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-light leading-tight">Common Questions Parents Ask — and Our Answers</h2>
            <div className="mt-10 overflow-hidden rounded-[2rem] bg-primary-foreground/5 p-6">
              <img src={faqImg} alt="Families with questions about boarding school" loading="lazy" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 divide-y divide-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-8">
                <h3 className="font-display text-xl text-teal-soft">{f.q}</h3>
                <p className="mt-4 text-primary-foreground/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
            <div className="pt-8">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-teal px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-teal-soft hover:text-navy-deep transition-colors">
                Enquire about a school
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}