import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import networkingImg from '../../assets/afa-3.png';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#18181B] flex flex-col items-center justify-center gap-4">
        <p className="text-white text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Project not found.</p>
        <Link to="/" className="text-[#F59E0B] hover:underline" style={{ fontFamily: 'Geist, sans-serif' }}>← Back home</Link>
      </div>
    );
  }

  const { title, desc, stack, live, github, color, caseStudy } = project;
  const { overview, problem, solution, outcome, sections } = caseStudy;

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#F59E0B] transition-colors duration-300 mb-10"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Banner */}
        <div className={`w-full h-52 rounded-2xl bg-gradient-to-br ${color} border border-zinc-800 flex items-center justify-center mb-10`}>
          <span className="text-6xl font-bold text-white/10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </span>
        </div>

        {/* Title + links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h1 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h1>
          <div className="flex gap-4">
            <a href={live} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] text-[#18181B] font-semibold rounded-lg hover:bg-[#F59E0B]/90 transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Geist, sans-serif' }}>
              <ExternalLink className="w-4 h-4" /> Live
            </a>
            <a href={github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-[#F59E0B] rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Geist, sans-serif' }}>
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        <p className="text-zinc-400 text-lg mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>{desc}</p>

        <div className="flex flex-wrap gap-2 mb-14">
          {stack.map((s) => (
            <span key={s} className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-md" style={{ fontFamily: 'Geist, sans-serif' }}>{s}</span>
          ))}
        </div>

        {/* Case study grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {[
            { label: 'Overview', body: overview },
            { label: 'Problem', body: problem },
            { label: 'Solution', body: solution },
            { label: 'Outcome', body: outcome },
          ].map(({ label, body }) => (
            <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: 'Geist, sans-serif' }}>{label}</h3>
              <p className="text-zinc-300 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        {sections?.length > 0 && (
          <div className="space-y-8 mb-20">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="border-l-2 border-[#F59E0B]/40 pl-6">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{heading}</h3>
                <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>{body}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="relative border-t border-zinc-800 overflow-hidden bg-[#18181B]">
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-2/3">
          <img src={networkingImg} alt="" className="w-full h-full object-cover object-right opacity-30 scale-x-[-1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block text-xs font-semibold text-[#F59E0B] uppercase tracking-widest border border-[#F59E0B]/30 px-3 py-1 rounded-full" style={{ fontFamily: 'Geist, sans-serif' }}>
              Open to opportunities
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Let's build something <span className="text-[#F59E0B]">great together.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
              I'm open for collaborations, freelance projects, and full-time roles. Whether you have a product idea, need a technical partner, or just want to connect, my inbox is always open.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 hover:border-[#F59E0B]/50 hover:text-white rounded-xl transition-all duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
