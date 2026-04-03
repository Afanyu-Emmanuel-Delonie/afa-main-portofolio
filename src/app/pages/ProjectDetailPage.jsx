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
      <div className="min-h-screen bg-[#18181B] flexCenter flex-col gap-4">
        <p className="heading-sm text-white">Project not found.</p>
        <Link to="/" className="body-md text-brand hover:underline">← Back home</Link>
      </div>
    );
  }

  const { title, desc, stack, live, github, color, caseStudy } = project;
  const { overview, problem, solution, outcome, sections } = caseStudy;

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      <div className="max-w-4xl mx-auto padding-container pt-32 pb-4">
        <button onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 body-sm text-zinc-400 hover:text-brand transition-colors duration-300 mb-10">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className={`w-full h-52 rounded-2xl bg-gradient-to-br ${color} border border-zinc-800 flexCenter mb-10`}>
          <span className="text-6xl font-bold text-white/10" style={{ fontFamily: 'var(--font-heading)' }}>{title}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h1 className="section-title">{title}</h1>
          <div className="flex gap-4">
            <a href={live} target="_blank" rel="noreferrer" className="btn-sm-primary">
              <ExternalLink className="w-4 h-4" /> Live
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="btn-sm-outline">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        <p className="body-lg text-zinc-400 mb-6">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-14">
          {stack.map((s) => (
            <span key={s} className="px-3 py-1 body-sm bg-zinc-800 text-zinc-300 rounded-md">{s}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {[
            { label: 'Overview', body: overview },
            { label: 'Problem', body: problem },
            { label: 'Solution', body: solution },
            { label: 'Outcome', body: outcome },
          ].map(({ label, body }) => (
            <div key={label} className="card-dark p-6">
              <h3 className="label-xs text-brand mb-3">{label}</h3>
              <p className="body-md text-zinc-300">{body}</p>
            </div>
          ))}
        </div>

        {sections?.length > 0 && (
          <div className="space-y-8 mb-20">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="border-l-2 border-[#F59E0B]/40 pl-6">
                <h3 className="heading-sm text-white mb-2">{heading}</h3>
                <p className="body-md text-zinc-400">{body}</p>
              </div>
            ))}
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
