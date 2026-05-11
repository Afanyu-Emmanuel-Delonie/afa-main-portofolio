import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { lang } = useLang();
  const tx = t[lang].faq;

  return (
    <section id="faq" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-3xl mx-auto padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="space-y-3">
          {tx.items.map(({ q, a }, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="border border-zinc-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flexBetween px-6 py-5 text-left bg-zinc-900 hover:bg-zinc-800/60 transition-colors duration-200"
                >
                  <span className="body-md text-white font-medium pr-4">{q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div className="px-6 py-5 bg-zinc-900/50 border-t border-zinc-800">
                    <p className="body-md text-zinc-400">{a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
