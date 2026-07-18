import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Helm Global Education" },
      { name: "description", content: "Begin a conversation with Helm Global — private consultations for undergraduate admissions, boarding schools and athletic recruitment." },
      { property: "og:title", content: "Contact Helm Global" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const services = ["Undergraduate Admissions", "Athletic Recruitment", "Boarding School Admissions"];
const destinations = ["United States", "United Kingdom", "Canada", "Singapore", "Hong Kong", "Germany", "Other"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="container-editorial pt-28 pb-16 lg:pt-40 lg:pb-24">
          <div className="eyebrow text-teal-soft">Begin the conversation</div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl font-light leading-[1.02]">
            Every remarkable admission begins <em className="italic text-teal-soft">here</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            Share a few details about your child and we'll respond within one business day with a private consultation calendar.
          </p>
        </div>
      </section>

      <section className="container-editorial py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-teal p-12 text-center">
                <Check className="h-10 w-10 text-teal mx-auto" />
                <h2 className="mt-6 font-display text-3xl text-navy-deep">Thank you.</h2>
                <p className="mt-4 text-foreground/70">Your enquiry has been received. Our team will be in touch shortly with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone / WhatsApp" name="phone" required />
                  <Field label="Country of residence" name="country" required />
                </div>

                <SelectField label="Service of interest" name="service" options={services} />
                <SelectField label="Preferred destination" name="destination" options={destinations} />

                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Current grade / school year" name="grade" />
                  <Field label="Target entry year" name="year" />
                </div>

                <div>
                  <label className="eyebrow block mb-3">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full border border-border bg-transparent px-4 py-3 text-foreground focus:border-teal focus:outline-none transition-colors"
                    placeholder="Tell us about your child's ambitions, current grade, or specific questions."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-navy-deep text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.24em] hover:bg-teal transition-colors"
                >
                  Submit enquiry
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div>
              <div className="eyebrow">Direct</div>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-teal mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                    <a href="mailto:info@helmglobal.in" className="font-display text-lg text-navy-deep hover:text-teal">info@helmglobal.in</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-teal mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</div>
                    <div className="font-display text-lg text-navy-deep">Available on enquiry</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-teal mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Based in</div>
                    <div className="font-display text-lg text-navy-deep">India</div>
                    <div className="text-sm text-muted-foreground">Serving families globally</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <div className="eyebrow">Response time</div>
              <p className="mt-4 text-foreground/75 leading-relaxed">Enquiries are reviewed personally by our admissions team. Expect a reply within one business day.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}{required && <span className="text-teal ml-1">*</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-teal focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <select name={name} className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-teal focus:outline-none transition-colors" defaultValue="">
        <option value="" disabled>Please select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}