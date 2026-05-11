import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const icons = [
  <MessageSquare className="w-6 h-6 text-brand" />,
  <Lightbulb className="w-6 h-6 text-brand" />,
  <Code2 className="w-6 h-6 text-brand" />,
  <Rocket className="w-6 h-6 text-brand" />,
];

export default function HowIWork() {
  const { lang } = useLang();
  const tx = t[lang].howIWork;

  return (
    <section id="process" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tx.steps.map(({ step, title, desc }, i) => (
            <Reveal key={step} delay={i * 100}>
              <div className="card-darker group flex flex-col p-6 h-full">
                <div className="flexBetween mb-6">
                  <span className="text-[3.5rem] font-bold text-white/[0.06] leading-none select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step}
                  </span>
                  <div className="icon-box group-hover:bg-[#F59E0B]/20 transition-all duration-300">
                    {icons[i]}
                  </div>
                </div>
                <h3 className="heading-sm text-white mb-2">{title}</h3>
                <p className="body-sm text-zinc-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
