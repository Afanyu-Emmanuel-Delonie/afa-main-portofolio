import { useState } from 'react';
import { Link } from 'react-router';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects, categories } from '../../data/projects.js';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import networkingImg from '../../assets/afa-3.png';

export default function ProjectsLibraryPage() {
  const [active, setActive] = useState('All');

  const pool = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const filtered = [...pool].sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0));

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      {/* Header */}
      <div className="max-container padding-container pt-32 pb-12 text-center">
        <p className="label-xs text-brand mb-3">Project Library</p>
        <h1 className="section-title mb-4">All <span className="text-brand">Projects</span></h1>
        <p className="section-subtitle max-w-xl mx-auto">
          Web apps, mobile apps, dashboards, business sites and redesigns — everything I've built.
        </p>
      </div>

      {/* Category tabs */}
      <div className="max-container padding-container mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full body-sm font-semibold border transition-all duration-300 ${
                active === cat
                  ? 'bg-brand text-[#18181B] border-brand'
                  : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-[#F59E0B]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-container padding-container pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const { id, title, desc, stack, live, github, color, category } = project;
            return (
              <div key={id} className="card-darker group overflow-hidden flex flex-col h-full">
                <div className={`h-40 bg-gradient-to-br ${color} flexCenter border-b border-zinc-800 relative`}>
                  <span className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-300 px-4 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </span>
                  <span className="absolute top-3 right-3 label-xs text-brand border border-[#F59E0B]/30 px-2 py-1 rounded-full bg-[#18181B]/60">
                    {category}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="heading-sm text-white group-hover:text-brand transition-colors duration-300">{title}</h3>
                  <p className="body-sm text-zinc-400 flex-1">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <span key={s} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md">{s}</span>
                    ))}
                  </div>
                  <div className="flexBetween pt-2">
                    <div className="flex gap-3">
                      <a href={live} className="flexStart gap-1.5 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                      <a href={github} className="flexStart gap-1.5 body-sm text-zinc-400 hover:text-brand transition-colors duration-300">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    </div>
                    <Link to={`/projects/${id}`} className="flexStart gap-1 body-sm text-brand hover:underline">
                      Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="body-lg text-zinc-500">No projects in this category yet.</p>
          </div>
        )}
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
            <span className="label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full">
              Open to opportunities
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Let's build something <span className="text-brand">great together.</span>
            </h2>
            <p className="body-lg text-zinc-400">
              I'm open for collaborations, freelance projects, and full-time roles. Whether you have a product idea, need a technical partner, or just want to connect, my inbox is always open.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/#contact" className="btn-primary">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
