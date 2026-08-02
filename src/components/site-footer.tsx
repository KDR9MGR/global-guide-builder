import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoAsset from "@/assets/helm-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-navy-deep text-primary-foreground">
      <div className="container-editorial py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Helm Global" className="h-20 w-auto object-contain" />
            </div>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-primary-foreground/90">
              A long-term partner in each student's intellectual and professional development.
            </p>
            <div className="mt-8 h-px w-16 bg-teal" />
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-teal">
              Higher Education · Leadership · Mentorship
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow text-teal-soft">Navigate</div>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-teal-soft">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-soft">About</Link></li>
              <li><Link to="/services/undergraduate" className="hover:text-teal-soft">Undergraduate</Link></li>
              <li><Link to="/services/boarding-schools" className="hover:text-teal-soft">Boarding Schools</Link></li>
              <li><Link to="/services/athletic-recruitment" className="hover:text-teal-soft">Athletic Recruitment</Link></li>
              <li><Link to="/contact" className="hover:text-teal-soft">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow text-teal-soft">Contact</div>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-teal-soft" />
                <a href="mailto:helmglobaleducation@gmail.com" className="hover:text-teal-soft">helmglobaleducation@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-teal-soft" />
                <a href="https://wa.me/919878196063" target="_blank" rel="noopener noreferrer" className="hover:text-teal-soft">+91-9878196063</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-teal-soft" />
                <span>India · Serving families across US, UK, Canada, Singapore, Hong Kong & Germany</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-4 w-4 mt-0.5 text-teal-soft" />
                <a href="https://www.instagram.com/helm.global?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-teal-soft">@helm.global</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Helm Global Education Consultancy. All rights reserved.</div>
          <div>helmglobal.in</div>
        </div>
      </div>
    </footer>
  );
}