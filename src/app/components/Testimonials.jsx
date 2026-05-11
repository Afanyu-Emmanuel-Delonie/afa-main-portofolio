import { Star } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const testimonials = [
  {
    name: 'Client Name',
    role: 'CEO, Company',
    quote: 'Working with him was an absolute pleasure. He delivered a polished, high-performance web app on time and exceeded every expectation. The attention to detail and communication throughout the project was outstanding.',
    initials: 'CN',
    stars: 5,
    featured: true,
  },
  {
    name: 'Client Name',
    role: 'Product Manager, Startup',
    quote: 'The mobile app he built for us was exactly what we envisioned — clean UI, fast performance, and rock-solid on both iOS and Android. Will definitely work together again.',
    initials: 'CN',
    stars: 5,
    featured: false,
  },
  {
    name: 'Client Name',
    role: 'Founder, Agency',
    quote: 'Professional, communicative, and technically sharp. He understood our requirements from day one and delivered a dashboard that our team loves using every day.',
    initials: 'CN',
    stars: 5,
    featured: false,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div className="w-11 h-11 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 flexCenter shrink-0">
      <span className="text-sm font-bold text-brand" style={{ fontFamily: 'var(--font-heading)' }}>{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLang();
  const tx = t[lang].testimonials;

  return (
    <section id="testimonials" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">

        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, initials, stars }, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-darker h-full p-8 flex flex-col justify-between gap-8 relative overflow-hidden">
                <span className="absolute -top-2 -right-1 text-[6rem] font-bold text-zinc-800 leading-none select-none pointer-events-none overflow-hidden"
                  style={{ fontFamily: 'var(--font-heading)' }}>&quot;</span>
                <div className="space-y-4 relative">
                  <Stars count={stars} />
                  <p className="body-sm text-zinc-400">&quot;{quote}&quot;</p>
                </div>
                <div className="flex items-center gap-3 relative">
                  <Avatar initials={initials} />
                  <div>
                    <p className="body-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-zinc-500">{role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
