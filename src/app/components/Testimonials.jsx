import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';
import { testimonials } from '../../data/testimonials.js';

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div className="w-11 h-11 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 flexCenter shrink-0">
      <span className="text-sm font-bold text-brand" style={{ fontFamily: 'var(--font-heading)' }}>{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLang();
  const tx = t[lang].testimonials;
  const scrollRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const scroll = (dir) => {
    const track = scrollRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX - scrollRef.current.offsetLeft, scrollLeft: scrollRef.current.scrollLeft };
    scrollRef.current.style.cursor = 'grabbing';
  };
  const onMouseUp = () => { drag.current.active = false; scrollRef.current.style.cursor = 'grab'; };
  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.2;
  };

  return (
    <section id="testimonials" className="bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      <div className="max-container padding-container section-padding">

        {/* Header */}
        <Reveal className="text-center mb-10">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

      </div>

      {/* Scrollable track — aligned to the same centered max-width as the header */}
      <div
        ref={scrollRef}
        className="max-container flex gap-5 overflow-x-auto hide-scrollbar cursor-grab select-none padding-container pb-2"
        style={{ scrollPaddingLeft: '1rem' }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {testimonials.map(({ name, role, quote, initials, stars }, i) => (
          <div
            key={i}
            className="card-darker shrink-0 w-[320px] sm:w-[380px] p-8 flex flex-col justify-between gap-8 relative overflow-hidden"
          >
            <span
              className="absolute -top-2 -right-1 text-[6rem] font-bold text-zinc-800 leading-none select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >&quot;</span>
            <div className="space-y-4 relative">
              <Stars count={stars} />
              <p className="body-sm text-zinc-400">&quot;{quote}&quot;</p>
            </div>
            <div className="flex items-center gap-3 relative">
              <Avatar initials={initials} />
              <div>
                <p className="body-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-zinc-500">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile controllers */}
      <div className="flex sm:hidden items-center justify-center gap-3 mt-8 pb-2">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-zinc-700 hover:border-[#F59E0B] text-zinc-400 hover:text-brand flexCenter transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-zinc-700 hover:border-[#F59E0B] text-zinc-400 hover:text-brand flexCenter transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
