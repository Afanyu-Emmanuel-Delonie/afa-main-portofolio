import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { title, stack, live, github, color, caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner */}
        <div className={`h-36 bg-gradient-to-br ${color} flex items-end border-b border-zinc-800 shrink-0`}>
          <div className="px-8 pb-5 w-full flex items-end justify-between">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {title}
            </h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-8 space-y-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-4 ml-auto">
              <a href={live} className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Geist, sans-serif' }}>
                <ExternalLink className="w-4 h-4" /> Live
              </a>
              <a href={github} className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Geist, sans-serif' }}>
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Overview */}
          <p className="text-zinc-300 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
            {caseStudy.overview}
          </p>

          {/* Problem / Solution / Outcome */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Problem', text: caseStudy.problem },
              { label: 'Solution', text: caseStudy.solution },
              { label: 'Outcome', text: caseStudy.outcome },
            ].map(({ label, text }) => (
              <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
                <span className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {label}
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {caseStudy.sections.map(({ heading, body }) => (
              <div key={heading} className="border-l-2 border-[#F59E0B] pl-5 space-y-1">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {heading}
                </h3>
                <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
