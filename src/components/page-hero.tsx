import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative bg-navy-deep text-primary-foreground overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/85 to-navy-deep/95" />
      <div className="relative container-editorial pt-28 pb-24 lg:pt-40 lg:pb-36">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/60 mb-8">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? <Link to={b.to} className="hover:text-teal-soft">{b.label}</Link> : <span className="text-teal-soft">{b.label}</span>}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
        )}
        <div className="eyebrow text-teal-soft">{eyebrow}</div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02]">{title}</h1>
        {intro && <p className="mt-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed font-light">{intro}</p>}
      </div>
    </section>
  );
}