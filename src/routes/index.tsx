import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Trophy, School, Sparkles, Target, Users, Compass, BookOpen } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import undergraduateImg from "@/assets/undergraduate.jpg";
import boardingImg from "@/assets/boarding-school.jpg";
import athleticImg from "@/assets/athletic.jpg";
import mentorshipImg from "@/assets/student-mentorship.jpg";
import pillar1 from "@/assets/pillar-1.png.asset.json";
import pillar2 from "@/assets/pillar-2.png.asset.json";
import pillar3 from "@/assets/pillar-3.png.asset.json";
import pillar4 from "@/assets/pillar-4.png.asset.json";
import pillar5 from "@/assets/pillar-5.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const pillars = [
  { icon: Target, title: "Skill-Centred Counselling", body: "Building the capabilities universities genuinely reward — not just the credentials they require.", image: pillar1.url },
  { icon: Compass, title: "Global Profile Development", body: "Sustained, expert-led extracurricular profiles calibrated to target institutions.", image: pillar2.url },
  { icon: Sparkles, title: "Elite Applications Support", body: "Top 1% advisors guiding essays, activities, interviews and strategy.", image: pillar3.url },
  { icon: BookOpen, title: "Academic Excellence Coaching", body: "Specialist study mentors ensuring grades never become the weak link.", image: pillar4.url },
  { icon: Users, title: "Skill Development Academies", body: "20+ academies across AI, Robotics, Entrepreneurship, Social Impact and Policy — each ending in a verifiable capstone.", image: pillar5.url },
];

const destinations = ["United States", "United Kingdom", "Singapore", "Hong Kong", "Canada", "Germany"];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={heroCampus} alt="Historic university campus at sunset" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="relative container-editorial pt-32 pb-40 lg:pt-44 lg:pb-56">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-teal-soft text-xs tracking-[0.28em] uppercase">
              <span className="h-px w-10 bg-teal-soft" />
              Est. Mentorship · From Grade 8
            </div>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] font-light">
              Specialist in <em className="italic text-teal-soft font-light">long-term</em> career planning for your child.
            </h1>
            <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-foreground/85 font-light">
              A full-service mentorship powerhouse, partnering with ambitious students and families from as early as Grade 8 — guiding them, step by step, to the world's most prestigious institutions.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-teal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground hover:bg-teal-soft hover:text-navy-deep transition-colors"
              >
                Begin your journey with us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] hover:border-teal-soft hover:text-teal-soft transition-colors"
              >
                Our Approach
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="container-editorial py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/60">
            <span className="text-teal-soft">Placement across</span>
            {destinations.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="container-editorial py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow">The Helm Difference</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight text-navy-deep font-light">
              More than an admissions agency.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Helm Global operates at the intersection of personalised mentorship, strategic execution, and genuine accountability — supported by a global faculty of accomplished practitioners, researchers, and scholars.
            </p>
            <p>
              We evaluate the qualitative — institutional culture, traditions, campus environment — to identify the right fit for each student. Rankings are a reference point; firsthand insight is our compass.
            </p>
          </div>
        </div>
      </section>

      {/* FIVE PILLARS */}
      <section className="bg-secondary/60 py-28 lg:py-36">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Why choose us</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light max-w-2xl">Five pillars of mentorship, built for the long horizon.</h2>
            </div>
          </div>

          <div className="space-y-px">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {pillars.slice(0, 3).map((p, i) => (
                <PillarCard key={p.title} pillar={p} index={i} />
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              <PillarCard pillar={pillars[3]} index={3} />
              <div className="hidden lg:block bg-card" aria-hidden="true" />
              <PillarCard pillar={pillars[4]} index={4} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="container-editorial py-28 lg:py-40">
        <div className="max-w-3xl mb-20">
          <div className="eyebrow">Practice areas</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light leading-tight">
            Three programmes. One standard of <em className="italic text-teal">excellence</em>.
          </h2>
        </div>

        <div className="space-y-24">
          <ServiceRow index="01" title="Undergraduate Admissions & Profile Development" description="An end-to-end, multi-year mentorship spanning career discovery, standardised testing strategy, application narrative, essays, interviews, and scholarship applications — delivered through 20+ Skill Development Academies." image={undergraduateImg} to="/services/undergraduate" icon={GraduationCap} />
          <ServiceRow reverse index="02" title="US, UK & Singapore Boarding School Admissions" description="Personalised school research, outreach, application guidance, entrance exam preparation (SSAT/ISEE/Common Entrance), interview coaching, and first-year transition support." image={boardingImg} to="/services/boarding-schools" icon={School} />
          <ServiceRow index="03" title="Athletic Recruitment" description="High-quality college recruiting services for student-athletes — combining tailored recruiting strategy, coach outreach, performance development, and academic support for balanced excellence." image={athleticImg} to="/services/athletic-recruitment" icon={Trophy} />
        </div>
      </section>

      {/* PHILOSOPHY / QUOTE */}
      <section className="relative bg-navy-deep text-primary-foreground py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={mentorshipImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-transparent" />
        <div className="relative container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow text-teal-soft">A Philosophy</div>
            <blockquote className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] font-light">
              "We are a long-term partner in each student's <em className="italic text-teal-soft">intellectual and professional</em> development — from initial self-discovery through to final enrolment."
            </blockquote>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-teal-soft" />
              <span className="text-xs uppercase tracking-[0.24em] text-primary-foreground/70">The Helm Global Charter</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow">Take the first step</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light leading-tight">
              Every remarkable admission begins with a conversation.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-foreground/70 leading-relaxed">
              Tell us about your child. We'll respond within one business day with a private consultation calendar.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-navy-deep text-primary-foreground px-10 py-6 hover:bg-teal transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.24em]">Begin your journey today</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarCard({ pillar, index }: { pillar: typeof pillars[number]; index: number }) {
  return (
    <div className="group relative bg-card overflow-hidden min-h-[380px] flex flex-col hover:bg-navy-deep hover:text-primary-foreground transition-colors duration-500">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img src={pillar.image} alt={pillar.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-display text-xs text-muted-foreground group-hover:text-teal-soft transition-colors">0{index + 1}</span>
          <pillar.icon className="h-5 w-5 text-teal group-hover:text-teal-soft transition-colors" />
        </div>
        <h3 className="mt-6 font-display text-2xl leading-tight">{pillar.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70 group-hover:text-primary-foreground/75 transition-colors">{pillar.body}</p>
      </div>
    </div>
  );
}

function ServiceRow({
  index,
  title,
  description,
  image,
  to,
  reverse = false,
  icon: Icon,
}: {
  index: string;
  title: string;
  description: string;
  image: string;
  to: string;
  reverse?: boolean;
  icon: typeof GraduationCap;
}) {
  return (
    <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="lg:col-span-7">
        <div className="overflow-hidden aspect-[4/3] bg-secondary">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="flex items-center gap-4 text-teal">
          <span className="font-display text-lg">{index}</span>
          <div className="h-px flex-1 bg-teal/30" />
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-display text-3xl md:text-4xl text-navy-deep font-light leading-tight">{title}</h3>
        <p className="mt-6 text-base leading-relaxed text-foreground/75">{description}</p>
        <Link to={to} className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-navy-deep hover:text-teal transition-colors">
          Explore programme
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
