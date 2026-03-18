import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../../data/projects.js';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#18181B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#F59E0B] transition-colors mb-12" style={{ fontFamily: 'Geist, sans-serif' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            All <span className="text-[#F59E0B]">Projects</span>
          </h1>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            Every project I've built — from concept to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, title, desc, stack, live, github, color }) => (
            <div key={id} className="group bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
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
                    <span key={s} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {s}
                    </span>
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
                  <Link
                    to={`/projects/${id}`}
                    className="flex items-center gap-1 text-sm text-[#F59E0B] hover:underline"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
