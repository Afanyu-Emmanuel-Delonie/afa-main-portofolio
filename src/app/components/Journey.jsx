import { Briefcase, ExternalLink } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function Journey() {
  const { lang } = useLang();
  const tx = t[lang].journey;

  return (
    <section id="journey" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 md:left-1/2" />
          <div className="space-y-12">
            {tx.items.map(({ year, role, company, url, type, desc }, i) => (
              <Reveal key={company} delay={i * 100}>
                <div className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 w-3 h-3 bg-brand rounded-full border-2 border-[#18181B] -translate-x-1/2 mt-1.5 md:left-1/2 z-10" />
                  <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="card-dark group p-6">
                      <div className="flexBetween mb-3">
                        <span className="label-xs px-3 py-1 bg-[#F59E0B]/10 text-brand rounded-full">{year}</span>
                        <span className="label-xs text-zinc-500 border border-zinc-700 px-2 py-1 rounded-full">{type}</span>
                      </div>
                      <div className="flexStart gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-brand" />
                        <h3 className="heading-sm text-white">{role}</h3>
                      </div>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand body-sm font-semibold mb-3 hover:underline">
                        {company} <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="body-sm text-zinc-400">{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
