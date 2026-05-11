import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/afa-1.png';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  return (
    <section className="bg-[#18181B] text-white relative overflow-hidden">
      <div className="max-container padding-container py-24 lg:py-28 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <div className="section-badge">
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                {tx.badge}
              </div>
              <h1 className="heading-xl text-white">
                {tx.heading1} <span className="text-brand">Afanyu</span><br />{tx.heading2}
              </h1>
              <p className="body-lg text-zinc-400 max-w-xl">{tx.sub}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="group btn-primary justify-center">
                {tx.hire}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/cv.pdf" download className="btn-outline justify-center">
                {tx.cv}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative group">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500">
              <img src={heroImage} alt="Afanyu Emmanuel - Software Engineer" width={600} height={700} fetchpriority="high" className="w-full h-auto object-cover object-center scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
            </div>
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-brand rounded-xl shadow-2xl border-4 border-[#18181B]">
              <div className="heading-sm text-[#18181B]">Let's Build</div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
