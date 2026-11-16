import { Link } from 'react-router';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import aboutMe from '../../assets/afa-2.png';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';
import { projects } from '../../data/projects.js';
import useSEO from '../../hooks/useSEO.js';

export default function AboutPage() {
  const { lang } = useLang();
  const tx = t[lang].aboutPage;

  useSEO({
    title: 'About Afanyu Emmanuel | Software Engineer & UI/UX Designer, Kigali',
    description: 'Afanyu Emmanuel is a product-minded software engineer and UI/UX designer in Kigali, Rwanda — the story behind the business thinking, design process, and engineering that shapes his work.',
    url: '/about',
    type: 'profile',
  });

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      <div className="max-w-3xl mx-auto padding-container pt-32 pb-24">
        <Reveal className="space-y-3 mb-10">
          <span className="section-badge">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            {tx.badge}
          </span>
          <h1 className="section-title" style={{ lineHeight: 1.1 }}>
            {tx.title} <span className="text-brand">{tx.titleSpan}</span>
          </h1>
        </Reveal>

        <Reveal delay={100} className="relative group mb-10 max-w-xs">
          <div className="absolute -inset-3 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500 aspect-[4/5]">
            <img
              src={aboutMe}
              alt="Afanyu Emmanuel, software engineer and UI/UX designer in Kigali"
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-x-[-1]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="body-lg text-zinc-200 leading-relaxed mb-16">{tx.intro}</p>
        </Reveal>

        <Reveal delay={200} className="mb-16">
          <p className="label-xs text-brand mb-4">{tx.differentiatorHeading}</p>
          <p className="body-md text-zinc-400 leading-relaxed">{tx.differentiator}</p>
        </Reveal>

        <Reveal delay={250} className="mb-16">
          <p className="label-xs text-brand mb-4">{tx.examplesHeading}</p>
          <ul className="space-y-3">
            {tx.examples.map((ex) => {
              const project = projects.find((p) => p.id === ex.project);
              return (
                <li key={ex.project} className="card-dark p-5 flex items-start justify-between gap-4">
                  <p className="body-sm text-zinc-300 leading-relaxed">{ex.text}</p>
                  {project && (
                    <Link to={`/projects/${project.id}`} className="shrink-0 inline-flex items-center gap-1 body-sm text-brand hover:underline whitespace-nowrap">
                      {project.title.split(' — ')[0]} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={300} className="mb-16">
          <p className="label-xs text-brand mb-4 inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> {tx.beyondCodeHeading}
          </p>
          <p className="body-md text-zinc-400 leading-relaxed">{tx.beyondCode}</p>
        </Reveal>

        <Reveal delay={350} className="flex flex-col sm:flex-row gap-4">
          <a href="/cv.pdf" download className="btn-primary justify-center">
            <Download className="w-4 h-4" /> {tx.downloadCv}
          </a>
          <Link to="/#contact" className="btn-outline justify-center">
            {tx.letsBuild}
          </Link>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
