import { ArrowRight } from 'lucide-react';
import networkingImg from '../../assets/afa-3.png';
import Reveal from './Reveal.jsx';

export default function CTA() {
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
            Open to opportunities
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's build something <span className="text-brand">great together.</span>
          </h2>
          <p className="body-lg text-zinc-400">
            I'm open for collaborations, freelance projects, and full-time roles. Whether you have a product idea, need a technical partner, or just want to connect, my inbox is always open.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="btn-primary">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
