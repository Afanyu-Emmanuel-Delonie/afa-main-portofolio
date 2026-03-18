import { ArrowRight } from 'lucide-react';
import networkingImg from '../../assets/afa-3.png';

export default function CTA() {
  return (
    <section className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      {/* Image — right side, fading to the left */}
      <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-1/2">
        <img
          src={networkingImg}
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Fade gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="max-w-xl space-y-6">
          <span className="inline-block text-xs font-semibold text-[#F59E0B] uppercase tracking-widest border border-[#F59E0B]/30 px-3 py-1 rounded-full" style={{ fontFamily: 'Geist, sans-serif' }}>
            Open to opportunities
          </span>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's build something <span className="text-[#F59E0B]">great together.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
            I'm open for collaborations, freelance projects, and full-time roles. Whether you have a product idea, need a technical partner, or just want to connect — my inbox is always open.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 hover:border-[#F59E0B]/50 hover:text-white rounded-xl transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
