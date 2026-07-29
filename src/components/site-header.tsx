import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/helm-logo.png.asset.json";

const services = [
  { to: "/services/undergraduate", label: "Undergraduate Admissions", desc: "Profile development & applications, Grades 8–12." },
  { to: "/services/boarding-schools", label: "Boarding School Admissions", desc: "US, UK & Singapore placement." },
  { to: "/services/athletic-recruitment", label: "Athletic Recruitment", desc: "College sports mentorship & showcases." },
];

const about = [
  { to: "/about", label: "Our Approach" },
  { to: "/about#mission", label: "Mission" },
  { to: "/about#vision", label: "Vision" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Helm Global Education" className="h-11 w-11 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg text-navy-deep">Helm Global</div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">Education Consultancy</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-sm">
          <Link to="/" className="text-foreground/80 hover:text-teal transition-colors" activeProps={{ className: "text-teal" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <NavDropdown label="About" items={about} />
          <NavDropdown label="Services" items={services} wide />
          <Link to="/contact" className="text-foreground/80 hover:text-teal transition-colors" activeProps={{ className: "text-teal" }}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-none bg-navy-deep px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-teal transition-colors"
          >
            Begin your journey
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-navy-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-editorial py-6 flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 border-b border-border/40">Home</Link>
            <div className="py-2 border-b border-border/40">
              <div className="eyebrow mb-3">About</div>
              <div className="flex flex-col gap-2 pl-2">
                {about.map((i) => (
                  <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="text-foreground/80">{i.label}</Link>
                ))}
              </div>
            </div>
            <div className="py-2 border-b border-border/40">
              <div className="eyebrow mb-3">Services</div>
              <div className="flex flex-col gap-2 pl-2">
                {services.map((i) => (
                  <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="text-foreground/80">{i.label}</Link>
                ))}
              </div>
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-navy-deep px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground"
            >
              Begin your journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({
  label,
  items,
  wide = false,
}: {
  label: string;
  items: { to: string; label: string; desc?: string }[];
  wide?: boolean;
}) {
  return (
    <div className="relative group">
      <button className="inline-flex items-center gap-1 text-foreground/80 hover:text-teal transition-colors">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity ${wide ? "w-[420px]" : "w-64"}`}
      >
        <div className="bg-card border border-border/70 shadow-2xl shadow-navy-deep/10 p-2">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block px-4 py-3 hover:bg-secondary transition-colors"
            >
              <div className="text-sm text-navy-deep">{i.label}</div>
              {i.desc && <div className="mt-0.5 text-xs text-muted-foreground">{i.desc}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}