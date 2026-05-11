import { Quote } from 'lucide-react';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const testimonials = [
  {
    name: 'Client Name',
    role: 'CEO, Company',
    quote: 'Working with him was an absolute pleasure. He delivered a polished, high-performance web app on time and exceeded every expectation. Highly recommend.',
    initials: 'CN',
  },
  {
    name: 'Client Name',
    role: 'Product Manager, Startup',
    quote: 'The mobile app he built for us was exactly what we envisioned — clean UI, fast performance, and rock-solid on both iOS and Android. Will definitely work together again.',
    initials: 'CN',
  },
  {
    name: 'Client Name',
    role: 'Founder, Agency',
    quote: 'Professional, communicative, and technically sharp. He understood our requirements from day one and delivered a dashboard that our team loves using every day.',
    initials: 'CN',
  },
];

export default function Testimonials() {
  const { lang } = useLang();
  const tx = t[lang].testimonials;

  return (
    <section id="testimonials" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, initials }, i) => (
            <div key={i} className="card-dark group relative p-8">
              <Quote className="w-8 h-8 text-[#F59E0B]/30 mb-4" />
              <p className="body-sm text-zinc-400 mb-6">"{quote}"</p>
              <div className="flexStart gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 flexCenter">
                  <span className="text-xs font-bold text-brand" style={{ fontFamily: 'var(--font-heading)' }}>{initials}</span>
                </div>
                <div>
                  <p className="body-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-zinc-500">{role}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F59E0B]/0 group-hover:border-[#F59E0B]/30 rounded-tr-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
