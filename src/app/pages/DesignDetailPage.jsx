import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, ImageOff, Figma, Palette, Lightbulb, Layers, TrendingUp } from 'lucide-react';
import { designCaseStudies } from '../../data/design.js';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import useSEO from '../../hooks/useSEO.js';

function ImagePlaceholder({ label }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 aspect-video flexCenter flex-col gap-3 text-zinc-700">
      <ImageOff className="w-8 h-8" />
      <span className="body-sm">{label}</span>
    </div>
  );
}

export default function DesignDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = designCaseStudies.findIndex((d) => d.id === id);
  const study = designCaseStudies[index];

  useSEO({
    title: study ? `${study.title} | Afanyu Emmanuel` : 'Case Study | Afanyu Emmanuel',
    description: study
      ? `${study.tagline}. Role: ${study.role}.`
      : 'UI/UX design case study by Afanyu Emmanuel, software engineer and UI/UX designer in Kigali, Rwanda.',
    url: `/design/${id}`,
    image: study?.cover || undefined,
    type: 'article',
    design: study || null,
  });

  if (!study) {
    return (
      <div className="min-h-screen bg-[#18181B] flexCenter flex-col gap-4">
        <p className="heading-sm text-white">Case study not found.</p>
        <Link to="/design" className="body-md text-brand hover:underline">← Back to Design</Link>
      </div>
    );
  }

  const { title, tagline, role, timeline, tools, category, color, cover, problem, research, process, designSystem, finalDesign, outcome } = study;
  const prev = designCaseStudies[(index - 1 + designCaseStudies.length) % designCaseStudies.length];
  const next = designCaseStudies[(index + 1) % designCaseStudies.length];

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      <div className="max-w-4xl mx-auto padding-container pt-32 pb-16">

        <button onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 body-sm text-zinc-400 hover:text-brand transition-colors duration-300 mb-10">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* ── Hero ── */}
        <div className={`w-full aspect-video rounded-2xl border border-zinc-800 overflow-hidden relative mb-10 flexCenter ${!cover ? `bg-gradient-to-br ${color}` : ''}`}>
          {cover ? (
            <img src={cover} alt={`${title} cover`} className="w-full h-full object-cover" />
          ) : (
            <ImageOff className="w-10 h-10 text-white/20" />
          )}
          <span className="absolute top-4 right-4 label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full bg-[#18181B]/60">{category}</span>
        </div>

        <h1 className="section-title mb-2">{title}</h1>
        <p className="body-lg text-zinc-400 mb-6">{tagline}</p>

        <div className="flex flex-wrap gap-6 mb-16 text-sm">
          <div><span className="label-xs text-brand block mb-1">Role</span><span className="body-sm text-zinc-300">{role}</span></div>
          <div><span className="label-xs text-brand block mb-1">Timeline</span><span className="body-sm text-zinc-300">{timeline}</span></div>
          <div>
            <span className="label-xs text-brand block mb-1">Tools</span>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── The Problem ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-3 inline-flex items-center gap-2"><Lightbulb className="w-4 h-4" /> The Problem</p>
          <div className="card-dark p-8 border-l-4 border-[#F59E0B]/60">
            <p className="body-lg text-zinc-300 leading-relaxed">{problem}</p>
          </div>
        </div>

        {/* ── Research & Insights ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-4">Research & Insights</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-dark p-5">
              <h3 className="body-sm font-semibold text-white mb-2">Competitor Analysis</h3>
              <p className="body-sm text-zinc-400">{research.competitors}</p>
            </div>
            <div className="card-dark p-5">
              <h3 className="body-sm font-semibold text-white mb-2">Key Findings</h3>
              <p className="body-sm text-zinc-400">{research.findings}</p>
            </div>
          </div>
          <div className="card-dark p-5">
            <h3 className="body-sm font-semibold text-white mb-3">User Pain Points</h3>
            <ul className="space-y-2">
              {research.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-2 body-sm text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Process ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-4 inline-flex items-center gap-2"><Layers className="w-4 h-4" /> Process</p>
          <p className="body-md text-zinc-300 mb-6">{process.flows}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {process.wireframes.length > 0
              ? process.wireframes.map((src, i) => (
                  <img key={i} src={src} alt={`${title} wireframe ${i + 1}`} loading="lazy" className="rounded-2xl border border-zinc-800 aspect-video object-cover" />
                ))
              : <ImagePlaceholder label="Wireframes" />}
            {process.hiFi.length > 0
              ? process.hiFi.map((src, i) => (
                  <img key={i} src={src} alt={`${title} hi-fi screen ${i + 1}`} loading="lazy" className="rounded-2xl border border-zinc-800 aspect-video object-cover" />
                ))
              : <ImagePlaceholder label="Hi-Fi Screens" />}
          </div>
          {process.figmaEmbed && (
            <a href={process.figmaEmbed} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 body-sm text-brand hover:underline mt-4">
              <Figma className="w-4 h-4" /> View Figma file
            </a>
          )}
        </div>

        {/* ── Design System ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-4 inline-flex items-center gap-2"><Palette className="w-4 h-4" /> Design System</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-dark p-5">
              <h3 className="body-sm font-semibold text-white mb-3">Color Palette</h3>
              <div className="flex flex-wrap gap-3">
                {designSystem.palette.map((c) => (
                  <div key={c.hex} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border border-white/10" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                    <span className="body-sm text-zinc-400">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-dark p-5">
              <h3 className="body-sm font-semibold text-white mb-2">Typography</h3>
              <p className="body-sm text-zinc-400">{designSystem.typography}</p>
            </div>
          </div>
          <div className="card-dark p-5 mt-4">
            <h3 className="body-sm font-semibold text-white mb-3">Components</h3>
            <div className="flex flex-wrap gap-2">
              {designSystem.components.map((comp) => (
                <span key={comp} className="px-3 py-1.5 text-xs bg-zinc-800 text-zinc-300 rounded-md">{comp}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Final Design ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-4">Final Design</p>
          <p className="body-md text-zinc-300 mb-6">{finalDesign.summary}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {finalDesign.images.length > 0
              ? finalDesign.images.map((src, i) => (
                  <img key={i} src={src} alt={`${title} final design ${i + 1}`} loading="lazy" className="rounded-2xl border border-zinc-800 aspect-video object-cover" />
                ))
              : [1, 2].map((i) => <ImagePlaceholder key={i} label={`Final Mockup ${i}`} />)}
          </div>
        </div>

        {/* ── Outcome & Learnings ── */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-dark p-6">
            <h3 className="label-xs text-brand mb-3 inline-flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Outcome</h3>
            <p className="body-sm text-zinc-300">{outcome.impact}</p>
          </div>
          <div className="card-dark p-6">
            <h3 className="label-xs text-brand mb-3">What I'd Do Differently</h3>
            <p className="body-sm text-zinc-300">{outcome.learnings}</p>
          </div>
        </div>
      </div>

      {/* ── Prev / Next ── */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-container padding-container py-10 flex items-center justify-between gap-4">
          <Link to={`/design/${prev.id}`} className="flex items-center gap-2 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" /> {prev.title}
          </Link>
          <Link to={`/design/${next.id}`} className="flex items-center gap-2 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
            {next.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="border-t border-zinc-800 bg-[#18181B]">
        <div className="max-container padding-container py-10 lg:py-14">
          <div className="max-w-2xl space-y-6">
            <span className="label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full">Open to opportunities</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Like how I think about design? <span className="text-brand">Let's talk about yours.</span>
            </h2>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/#contact" className="btn-primary">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/design" className="btn-outline">All Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
