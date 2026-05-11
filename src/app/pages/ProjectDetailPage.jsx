import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github, ArrowRight, ImageOff, Layers, Smartphone, LayoutDashboard } from 'lucide-react';
import { projects } from '../../data/projects.js';
import networkingImg from '../../assets/afa-3.png';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';

const galleryLabel = (category) => {
  if (category === 'Mobile App') return 'App Screens';
  if (category === 'Redesign') return 'Before & After';
  if (category === 'Dashboard') return 'Dashboard Views';
  if (category === 'Business Site') return 'Site Pages';
  return 'Project Screenshots';
};

const galleryIcon = (category) => {
  if (category === 'Mobile App') return <Smartphone className="w-4 h-4" />;
  if (category === 'Dashboard') return <LayoutDashboard className="w-4 h-4" />;
  return <Layers className="w-4 h-4" />;
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#18181B] flexCenter flex-col gap-4">
        <p className="heading-sm text-white">Project not found.</p>
        <Link to="/" className="body-md text-brand hover:underline">← Back home</Link>
      </div>
    );
  }

  const { title, desc, stack, live, github, color, category, banner, caseStudy } = project;
  const { overview, problem, solution, images = [], tools = [] } = caseStudy;

  // Similar projects: top ones first, then shuffled, exclude current, max 3
  const others = projects.filter((p) => p.id !== id);
  const top = others.filter((p) => p.top);
  const rest = others.filter((p) => !p.top).sort(() => Math.random() - 0.5);
  const similar = [...top, ...rest].slice(0, 3);

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      <div className="max-w-4xl mx-auto padding-container pt-32 pb-16">

        {/* Back */}
        <button onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 body-sm text-zinc-400 hover:text-brand transition-colors duration-300 mb-10">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Banner */}
        <div className={`w-full aspect-video rounded-2xl border border-zinc-800 overflow-hidden relative mb-10 ${!banner ? `bg-gradient-to-br ${color} flexCenter` : ''}`}>
          {banner ? (
            <img src={banner} alt={`${title} screenshot`} className="w-full h-full object-cover" />
          ) : (
            <span className="text-5xl font-bold text-white/10 px-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>{title}</span>
          )}
          <span className="absolute top-4 right-4 label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full bg-[#18181B]/60">{category}</span>
        </div>

        {/* Title + links */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="section-title mb-2">{title}</h1>
            <p className="body-lg text-zinc-400">{desc}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="btn-sm-primary">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="btn-sm-outline">
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {stack.map((s) => (
            <span key={s} className="px-3 py-1 body-sm bg-zinc-800 text-zinc-300 rounded-md">{s}</span>
          ))}
        </div>

        {/* ── The Problem ── */}
        <div className="mb-16">
          <p className="label-xs text-brand mb-3">The Problem</p>
          <div className="card-dark p-8 border-l-4 border-[#F59E0B]/60">
            <p className="body-lg text-zinc-300 leading-relaxed">{problem}</p>
          </div>
        </div>

        {/* ── Gallery ── */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 label-xs text-brand mb-4">
            {galleryIcon(category)}
            {galleryLabel(category)}
          </div>
          {images.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {images.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
                  <img src={src} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 aspect-video flexCenter flex-col gap-3 text-zinc-700">
                  <ImageOff className="w-8 h-8" />
                  <span className="body-sm">Image {i}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Tools Used ── */}
        {tools.length > 0 && (
          <div className="mb-16">
            <p className="label-xs text-brand mb-4">Built With</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-[#F59E0B]/50 rounded-xl body-sm text-zinc-300 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Overview & Solution ── */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'Overview', body: overview },
            { label: 'The Solution', body: solution },
          ].map(({ label, body }) => (
            <div key={label} className="card-dark p-6">
              <h3 className="label-xs text-brand mb-3">{label}</h3>
              <p className="body-sm text-zinc-300">{body}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Similar Projects */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-container padding-container py-16">
          <p className="label-xs text-brand mb-2">More Work</p>
          <h2 className="heading-md text-white mb-10">Other <span className="text-brand">Projects</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {similar.map((p) => (
              <Link key={p.id} to={`/projects/${p.id}`}
                className="card-darker group overflow-hidden flex flex-col hover:border-[#F59E0B]/50 transition-all duration-300">
                <div className={`aspect-video border-b border-zinc-800 relative overflow-hidden ${!p.banner ? `bg-gradient-to-br ${p.color} flexCenter` : ''}`}>
                  {p.banner ? (
                    <img src={p.banner} alt={`${p.title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                      {p.title}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 label-xs text-brand border border-[#F59E0B]/30 px-2 py-1 rounded-full bg-[#18181B]/60">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="heading-sm text-white group-hover:text-brand transition-colors duration-300">{p.title}</h3>
                  <p className="body-sm text-zinc-400 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md">{s}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 body-sm text-brand">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="relative border-t border-zinc-800 overflow-hidden bg-[#18181B]">
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-2/3">
          <img src={networkingImg} alt="" width={900} height={600} loading="lazy" decoding="async" aria-hidden="true"
            className="w-full h-full object-cover object-right opacity-30 scale-x-[-1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
        </div>
        <div className="relative max-container padding-container py-10 lg:py-14">
          <div className="max-w-2xl space-y-6">
            <span className="label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full">Open to opportunities</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Let's build something <span className="text-brand">great together.</span>
            </h2>
            <p className="body-lg text-zinc-400">
              I'm open for collaborations, freelance projects, and full-time roles. Whether you have a product idea, need a technical partner, or just want to connect, my inbox is always open.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/#contact" className="btn-primary">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/" className="btn-outline">View My Work</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
