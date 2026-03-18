import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import CaseStudyModal from './CaseStudyModal.jsx';
import Reveal from './Reveal.jsx';

const HIGHLIGHT_COUNT = 3;
const highlighted = projects.slice(0, HIGHLIGHT_COUNT);
const hasMore = projects.length > HIGHLIGHT_COUNT;

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Featured <span className="text-[#F59E0B]">Projects</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            A selection of work I'm proud of
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlighted.map((project, i) => {
            const { id, title, desc, stack, live, github, color } = project;
            return (
              <Reveal key={id} delay={i * 100}>
                <div className="group bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full">
                  <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center border-b border-zinc-800`}>
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {title.split(' ')[1]}
                    </span>
                  </div>
                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((s) => (
                        <span key={s} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md" style={{ fontFamily: 'Geist, sans-serif' }}>{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-3">
                        <a href={live} className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Geist, sans-serif' }}>
                          <ExternalLink className="w-4 h-4" /> Live
                        </a>
                        <a href={github} className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Geist, sans-serif' }}>
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                      </div>
                      <button onClick={() => setSelected(project)} className="flex items-center gap-1 text-sm text-[#F59E0B] hover:underline cursor-pointer" style={{ fontFamily: 'Geist, sans-serif' }}>
                        Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {hasMore && (
          <Reveal className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        )}
      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
