import { Link } from 'react-router';
import { ArrowRight, ImageOff } from 'lucide-react';
import { featuredDesignCaseStudies } from '../../data/design.js';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function DesignPreview() {
  const { lang } = useLang();
  const tx = t[lang].design;

  return (
    <section id="design" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <p className="label-xs text-brand mb-2">{tx.badge}</p>
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredDesignCaseStudies.slice(0, 3).map(({ id, title, tagline, category, color, cover }, i) => (
            <Reveal key={id} delay={i * 100}>
              <Link to={`/design/${id}`} className="card-darker group overflow-hidden flex flex-col h-full">
                <div className={`aspect-video border-b border-zinc-800 relative overflow-hidden flexCenter ${!cover ? `bg-gradient-to-br ${color}` : ''}`}>
                  {cover ? (
                    <img src={cover} alt={`${title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <ImageOff className="w-8 h-8 text-white/20" />
                  )}
                  <span className="absolute top-3 right-3 label-xs text-brand border border-[#F59E0B]/30 px-2 py-1 rounded-full bg-[#18181B]/60">
                    {category}
                  </span>
                </div>
                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <h3 className="heading-sm text-white group-hover:text-brand transition-colors duration-300">{title}</h3>
                  <p className="body-sm text-zinc-400 flex-1">{tagline}</p>
                  <span className="inline-flex items-center gap-1 body-sm text-brand">
                    Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link to="/design" className="btn-outline justify-center">
            {tx.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
