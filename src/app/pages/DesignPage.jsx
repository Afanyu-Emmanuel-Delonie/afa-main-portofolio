import { Link } from 'react-router';
import { ArrowRight, ImageOff } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { designCaseStudies } from '../../data/design.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';
import useSEO from '../../hooks/useSEO.js';

export default function DesignPage() {
  const { lang } = useLang();
  const tx = t[lang].design;

  useSEO({
    title: 'UI/UX Design Case Studies | Afanyu Emmanuel',
    description: 'UI/UX design case studies by Afanyu Emmanuel — research, process, and design systems behind recent projects in data visualization, fintech dashboards, brand design, and travel UX.',
    url: '/design',
  });

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      <div className="max-container padding-container pt-32 pb-24">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <p className="label-xs text-brand mb-2">{tx.badge}</p>
          <h1 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h1>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {designCaseStudies.map(({ id, title, tagline, category, color, cover }, i) => (
            <Reveal key={id} delay={i * 80}>
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
                  <h2 className="heading-sm text-white group-hover:text-brand transition-colors duration-300">{title}</h2>
                  <p className="body-sm text-zinc-400 flex-1">{tagline}</p>
                  <span className="inline-flex items-center gap-1 body-sm text-brand">
                    Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
