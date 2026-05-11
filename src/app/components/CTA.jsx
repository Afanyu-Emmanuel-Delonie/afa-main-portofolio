import { ArrowRight } from 'lucide-react';
import networkingImg from '../../assets/afa-3.png';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function CTA() {
  const { lang } = useLang();
  const tx = t[lang].cta;

  return (
    <section className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-2/3">
        <img src={networkingImg} alt="" width={900} height={600} loading="lazy" decoding="async" aria-hidden="true"
          className="w-full h-full object-cover object-right opacity-30 scale-x-[-1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
      </div>

      <div className="relative max-container padding-container py-10 lg:py-14">
        <Reveal className="max-w-2xl space-y-6">
          <span className="label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full">
            {tx.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {tx.title} <span className="text-brand">{tx.titleSpan}</span>
          </h2>
          <p className="body-lg text-zinc-400">{tx.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#contact" className="btn-primary justify-center">
              {tx.start} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="btn-outline justify-center">
              {tx.view}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
