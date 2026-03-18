import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router';
import { projects } from '../../data/projects.js';

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const { title, desc, stack, live, github, color, caseStudy } = project;

  return (
    <div className="min-h-screen bg-[#18181B]">
      {/* Hero banner */}
      <div className={`w-full h-64 lg:h-80 bg-gradient-to-br ${color} border-b border-zinc-800 flex items-end`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-10 w-full">
          <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#F59E0B] transition-colors mb-6 text-sm" style={{ fontFamily: 'Geist, sans-serif' }}>
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 space-y-14">
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
        <div>
          <p className="text-zinc-300 text-lg leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
            {caseStudy.overview}
          </p>
        </div>

        {/* Problem / Solution / Outcome */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Problem', text: caseStudy.problem },
            { label: 'Solution', text: caseStudy.solution },
            { label: 'Outcome', text: caseStudy.outcome },
          ].map(({ label, text }) => (
            <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-2">
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
        <div className="space-y-10">
          {caseStudy.sections.map(({ heading, body }) => (
            <div key={heading} className="border-l-2 border-[#F59E0B] pl-6 space-y-2">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {heading}
              </h2>
              <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="pt-6 border-t border-zinc-800">
          <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Geist, sans-serif' }}>
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
