import { ArrowRight, Lightbulb, Palette, Focus, Rocket } from 'lucide-react';
import aboutme from '../../assets/afa-2.png';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const traitIcons = [
  <Lightbulb className="w-4 h-4 text-brand" />,
  <Palette className="w-4 h-4 text-brand" />,
  <Focus className="w-4 h-4 text-brand" />,
  <Rocket className="w-4 h-4 text-brand" />,
];

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;

  return (
    <section id="about" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <Reveal className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500 aspect-[4/5]">
              <img src={aboutme} alt="Afanyu Emmanuel" width={600} height={750} loading="lazy" decoding="async"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-x-[-1]" />
            </div>
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl">
              <span className="body-sm font-semibold text-brand">{tx.basedIn}</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="section-badge">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                {tx.badge}
              </span>
              <h2 className="section-title" style={{ lineHeight: 1.1 }}>
                {tx.title} <span className="text-brand">{tx.titleSpan}</span>
              </h2>
            </div>
            <p className="body-md text-zinc-400">{tx.p1}</p>
            <p className="body-md text-zinc-400">{tx.p2}</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {tx.traits.map((label, i) => (
                <div key={label} className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                  {traitIcons[i]}
                  <span className="body-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="btn-sm-primary justify-center">
                {tx.workWithMe} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#projects" className="btn-sm-outline justify-center">
                {tx.viewProjects}
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
