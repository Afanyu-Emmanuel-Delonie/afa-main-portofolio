import { Link } from 'react-router';
import { ExternalLink, Github, ArrowRight, Figma } from 'lucide-react';
import { featuredProjects } from '../../data/projects.js';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang].projects;

  return (
    <section id="projects" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => {
            const { id, title, desc, stack, live, github, color, category, banner } = project;
            return (
              <Reveal key={id} delay={i * 100}>
                <div className="card-darker group overflow-hidden flex flex-col h-full">
                  <div className={`aspect-video border-b border-zinc-800 relative overflow-hidden ${!banner ? `bg-gradient-to-br ${color} flexCenter` : ''}`}>
                    {banner ? (
                      <img src={banner} alt={`${title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                        {title}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 label-xs text-brand border border-[#F59E0B]/30 px-2 py-1 rounded-full bg-[#18181B]/60">
                      {category}
                    </span>
                  </div>
                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    <h3 className="heading-sm text-white group-hover:text-brand transition-colors duration-300">{title}</h3>
                    <p className="body-sm text-zinc-400 flex-1">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.slice(0, 4).map((s) => (
                        <span key={s} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md">{s}</span>
                      ))}
                    </div>
                    <div className="flexBetween pt-2">
                      <div className="flex gap-3">
                        {live === null && github === null ? (
                          <span className="flexStart gap-1.5 body-sm text-brand">
                            <Figma className="w-4 h-4" /> Open Design
                          </span>
                        ) : (
                          <>
                            {live && (
                              <a href={live} target="_blank" rel="noopener noreferrer" className="flexStart gap-1.5 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
                                <ExternalLink className="w-4 h-4" /> Live
                              </a>
                            )}
                            {github && (
                              <a href={github} target="_blank" rel="noopener noreferrer" className="flexStart gap-1.5 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
                                <Github className="w-4 h-4" /> GitHub
                              </a>
                            )}
                          </>
                        )}
                      </div>
                      <Link to={`/projects/${id}`} className="flexStart gap-1 body-sm text-brand hover:underline">
                        Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-12">
          <p className="section-subtitle mb-6">{tx.likeWhat}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact" className="btn-primary justify-center">
              {tx.startProject} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
