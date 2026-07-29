import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import img from "@/assets/undergraduate.jpg";

export const Route = createFileRoute("/services/undergraduate")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Undergraduate Admissions & Profile Development — Helm Global" },
      { name: "description", content: "Multi-year mentorship for Grades 9–12: career discovery, testing strategy, essays, interviews, and 20+ Skill Development Academies." },
      { property: "og:title", content: "Undergraduate Admissions — Helm Global" },
      { property: "og:url", content: "/services/undergraduate" },
    ],
    links: [{ rel: "canonical", href: "/services/undergraduate" }],
  }),
});

const grades = [
  { grade: "Grade 9", label: "Assessment", body: "We evaluate the resources available within a student's school community, helping them recognise the opportunities achievable in their immediate environment. Emerging interests are affirmed through relevant competitions and structured programmes." },
  { grade: "Grade 10", label: "Support", body: "Students solidify their preferred academic direction. Our team introduces a structured standardised test preparation plan and engages with students to develop projects and research papers — a meaningful edge for competitive summer programmes." },
  { grade: "Grade 11", label: "Guidance", body: "Students assume leadership positions within their community and expand their projects for greater impact. The formal college application process begins in April, followed by internships, field research, and substantive community initiatives." },
  { grade: "Grade 12", label: "Execution", body: "Application development, essay refinement, interview mastery, offer management, and scholarship strategy — supported by a dedicated core team and specialist network." },
];

const process = [
  { n: "01", t: "Career path selection & planning", b: "Based upon interests and skills, we guide and mentor the student through detailed analysis for career selection." },
  { n: "02", t: "Skill building & project planning", b: "Each student is mentored to build their own skill set and project plan centred around it — with resources, guidelines and feedback." },
  { n: "03", t: "College & university selection", b: "Finding the right fit is the most important step. We guide the student through data analysis and current admissions trends." },
  { n: "04", t: "Application development", b: "From essay coaching to review of the entire application, we guide students to ensure submission of a high-quality, impactful application." },
  { n: "05", t: "Interview mentoring", b: "Tailored for each student, mock interview sessions are designed to help them ace the interviews with personalised plans, resources, strategies and feedback." },
  { n: "06", t: "Scholarship & financial aid", b: "Strategic guidance on merit and need-based applications to maximise every available opportunity." },
];

const mentorship = [
  "Weekly One-to-One Sessions — dedicated weekly sessions with a chief counsellor covering extracurricular planning, project ideation, school opportunities, and long-term profile strategy, with each session concluding in clearly defined next steps and checkpoints.",
  "Career Compass — in-depth discovery sessions and formal psychometric assessments led by a senior mentor to understand each student's strengths, motivations, and ambitions, synthesised into a personalised roadmap of 3–4 promising domains with specific milestones.",
  "Ongoing Progress Monitoring — regular tracking of student progress, with feedback and strategy adjustments made as needed.",
  "Emotional Support & Motivation — continuous encouragement to help students navigate academic challenges and stay focused on their goals.",
  "Academic Advising — expert guidance on course selection and long-term academic planning.",
];

const exposure = [
  "Curated summer programmes matched to each student's interests and financial considerations.",
  "Early professional exposure through age-appropriate shadowing, micro-projects, or family-business assignments.",
  "Meaningful volunteering opportunities designed for genuine impact, not symbolic participation.",
  "Guided portfolio development — organising research papers, mini-academy outputs, project artefacts, volunteering reflections, and competition entries into a coherent early portfolio and foundational website.",
];

const academies = ["Artificial Intelligence", "Robotics & Engineering", "Entrepreneurship", "Social Impact & Policy", "Research & Inquiry", "Creative Arts & Writing"];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Service 01"
        title={<>Undergraduate Admissions & <em className="italic text-teal-soft">Profile Development</em>.</>}
        intro="An end-to-end, multi-year mentorship process covering career discovery, college research and shortlisting, standardised testing strategy, application narrative and essays, letters of recommendation, interview preparation, and scholarship and financial aid applications — delivered through the Skill Development Program."
        image={img}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Undergraduate" }]}
      />

      {/* Overview */}
      <section className="container-editorial py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">Overview</div>
            <h2 className="mt-6 font-display text-4xl text-navy-deep font-light leading-tight">Grades 9 through 12, with a strategy that compounds.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 text-lg leading-relaxed text-foreground/80 space-y-6">
            <p>We work closely with students from Grades 9 through 12 on their college applications, equipping them to present themselves as strong candidates and future leaders poised to make an impact.</p>
            <p>Our approach combines a proven, hands-on methodology with a personalised strategy tailored to each student's unique strengths and passions. Through careful identification and development of each individual's potential, we deliver targeted support that enhances growth opportunities and enables students to distinguish themselves throughout the college admissions process and beyond.</p>
          </div>
        </div>
      </section>

      {/* Planning phase */}
      <section className="bg-secondary/60 py-28">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">Planning Phase</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light">A long-term roadmap for every stage.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {grades.map((g) => (
              <div key={g.grade} className="bg-card p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl text-teal">{g.grade}</span>
                  <span className="eyebrow">{g.label}</span>
                </div>
                <div className="mt-6 h-px w-12 bg-teal" />
                <p className="mt-6 text-foreground/75 leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="container-editorial py-28 lg:py-36">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow">Application Process</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">Built on a system-by-system understanding of global admissions.</h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Success in the application process begins with expertise — and our model is built on a deep, system-by-system understanding of how admissions works across the globe's leading institutions. Every applicant is backed by a dedicated core team working in close coordination throughout the process. This core team is further reinforced by a broader network of specialists, including former admissions officers and youth mentors drawn from current students and alumni of top-tier U.S. universities. Parents and students are mentored personally through one-on-one sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((p) => (
            <div key={p.n} className="border-t border-navy-deep pt-6">
              <div className="font-display text-4xl text-teal">{p.n}</div>
              <h3 className="mt-4 font-display text-xl text-navy-deep leading-snug">{p.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentorship */}
      <section className="bg-navy-deep text-primary-foreground py-28">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow text-teal-soft">Mentorship</div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl font-light leading-tight">Personalised mentorship & guidance for academic success.</h2>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed">A structured support system that goes beyond academics to nurture confidence, clarity, and long-term achievement.</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-6">
                {mentorship.map((item) => (
                  <li key={item} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 text-teal-soft flex-shrink-0 mt-1" />
                    <span className="leading-relaxed text-primary-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summer / exposure */}
      <section className="container-editorial py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">Experience</div>
            <h2 className="mt-6 font-display text-4xl text-navy-deep font-light leading-tight">Summer programmes, professional exposure & volunteering.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-6">
              {exposure.map((item) => (
                <li key={item} className="flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-1" />
                  <span className="leading-relaxed text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academies */}
      <section className="bg-secondary/60 py-28">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow">Skill Development Program</div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light leading-tight">20+ academies. Each ending in a verifiable capstone.</h2>
              <p className="mt-6 text-foreground/80 leading-relaxed">Expert-led academies designed to build the credentials universities actually reward.</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-navy-deep/10">
                {academies.map((a, i) => (
                  <li key={a} className="flex items-center justify-between py-5">
                    <span className="text-lg text-foreground/90">{a}</span>
                    <span className="font-display text-teal text-sm">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="container-editorial py-24">
      <div className="border border-navy-deep p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="eyebrow">Ready to begin?</div>
          <h3 className="mt-4 font-display text-3xl md:text-4xl text-navy-deep font-light max-w-2xl leading-tight">Schedule a private consultation with our team.</h3>
        </div>
        <Link to="/contact" className="group inline-flex items-center gap-3 bg-navy-deep text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.24em] hover:bg-teal transition-colors">
          Contact us
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
