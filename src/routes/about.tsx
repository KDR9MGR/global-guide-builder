import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import mentorshipImg from "@/assets/student-mentorship.jpg";
import campusImg from "@/assets/hero-campus.jpg";
import roadmapImg from "@/assets/roadmap.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Helm Global Education" },
      { name: "description", content: "Our approach, mission and vision as a full-service mentorship institution for ambitious students from Grade 8 onwards." },
      { property: "og:title", content: "About Helm Global" },
      { property: "og:description", content: "Personalised mentorship, strategic execution, and genuine accountability." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Helm Global"
        title={<>More than an admissions agency — a <em className="italic text-teal-soft">mentorship institution</em>.</>}
        intro="Helm Global Education partners with ambitious students and their families from as early as Grade 8 — supported by a global faculty of practitioners, researchers, and scholars."
        image={campusImg}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Approach */}
      <section id="approach" className="container-editorial py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow">Our Approach</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">
              Personalised mentorship. Strategic execution.
            </h2>
            <div className="mt-10 overflow-hidden rounded-[2rem] aspect-[4/5] shadow-lg">
              <img src={mentorshipImg} alt="Student mentorship" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-lg leading-relaxed text-foreground/80">
            <p>
              Helm Global operates at the intersection of personalised mentorship, strategic execution, and genuine accountability — guiding students toward admission at leading universities across the United States, United Kingdom, Singapore, Hong Kong, Canada, Germany and beyond.
            </p>
            <p>
              We evaluate qualitative factors — including institutional culture, traditions, and campus environment — to identify the right fit for each student. Direct engagement with our network of contacts, complemented by personal visits where possible, offers firsthand insight that goes beyond published rankings.
            </p>
            <p>
              Our comprehensive approach spans every stage of the application process, positioning students strategically while ensuring thorough preparation for interviews, standardised tests, and campus visits.
            </p>

            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-border">
              <Stat label="Programmes" value="20+" note="Skill Development Academies" />
              <Stat label="Destinations" value="6+" note="Countries across 3 continents" />
              <Stat label="Engagement" value="Grade 8" note="Earliest start" />
              <Stat label="Team" value="1:1" note="Dedicated mentor pairing" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-secondary/60 py-28 lg:py-36">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">Mission</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">
              Cultivating the character that great institutions seek.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              To partner with every student at every stage of their journey — from initial self-discovery through to final enrolment — cultivating the intellectual capability, character, and personal narrative that the world's finest institutions seek.
            </p>
            <p>
              We guide students in developing a well-rounded, personalised portfolio that reflects character strength, presentation skills, and leadership readiness. We provide targeted recommendations to ensure students gain the breadth of experience necessary for a successful admissions process.
            </p>
            <p>
              We also place strong value on parental insight into each child's character and strengths, and view sustained parental engagement as a vital component of the preparation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="relative bg-navy-deep text-primary-foreground py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={campusImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />
        <div className="relative container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow text-teal-soft">Vision</div>
              <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] font-light">
                To be the world's <em className="italic text-teal-soft">foremost mentorship partner</em> for ambitious students — guiding them towards the overseas institutions best suited to their goals.
              </p>
              <p className="mt-10 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
                Our team of experienced, dedicated educators craft a personalised approach for every student — one that recognises individual talents and interests while fostering both academic growth and a genuinely engaging learning experience.
              </p>
              <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-teal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] hover:bg-teal-soft hover:text-navy-deep transition-colors">
                Start the conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img src={roadmapImg} alt="Your roadmap to global education" className="h-auto w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div>
      <div className="eyebrow text-teal">{label}</div>
      <div className="mt-2 font-display text-4xl text-navy-deep">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{note}</div>
    </div>
  );
}