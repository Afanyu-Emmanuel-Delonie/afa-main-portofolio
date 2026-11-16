import { Link } from 'react-router';
import { ArrowRight, Download, MapPin, Lightbulb, Users, Code2, Microscope } from 'lucide-react';
import aboutMe from '../../assets/afa-2.png';
import networkingImg from '../../assets/afa-3.png';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import useSEO from '../../hooks/useSEO.js';

const values = [
  {
    icon: <Users className="w-5 h-5 text-brand" />,
    title: 'People before pixels',
    body: 'Every decision starts with the person using the product. I think about flows, friction, and feelings before I think about components.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-brand" />,
    title: 'Engineering with intent',
    body: 'Clean code is not a style preference — it is a form of respect for the next person who reads it, including future me.',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-brand" />,
    title: 'Curiosity as a skill',
    body: 'I ask why before I ask how. Understanding the real problem is more valuable than being fast at solving the wrong one.',
  },
  {
    icon: <Microscope className="w-5 h-5 text-brand" />,
    title: 'Research-backed thinking',
    body: 'My work in Financial Inclusion AI taught me to combine data, behaviour, and design — not just build features, but understand impact.',
  },
];

const timeline = [
  {
    year: '2021',
    heading: 'The beginning',
    body: 'I wrote my first lines of code out of frustration — I had an idea and no way to build it. That gap between imagination and execution became the thing I decided to close.',
  },
  {
    year: '2023',
    heading: 'First professional role',
    body: 'Joined ZiloTech as a software developer. Real deadlines, real users, real consequences. It sharpened everything — problem-solving, communication, and the discipline to ship.',
  },
  {
    year: '2024',
    heading: 'Going deeper on mobile',
    body: 'Interned at FreshSense where I specialised in Flutter and mobile architecture. I learned that great mobile UX is not a smaller version of web — it is a completely different conversation.',
  },
  {
    year: '2025',
    heading: 'Building at scale',
    body: 'Contracted with WAO Sport to help build a national streaming ecosystem in Ghana. First time working on infrastructure that needed to handle thousands of concurrent users.',
  },
  {
    year: '2026',
    heading: 'Research meets product',
    body: 'At AUCA Innovation Center, I am working at the intersection of UI/UX, backend architecture, and DevOps — while also contributing to research on Financial Behavior Intelligence Models for Financial Inclusion.',
  },
];

export default function AboutPage() {
  useSEO({
    title: 'About Afanyu Emmanuel | Software Developer, Kigali Rwanda',
    description: 'The story behind Afanyu Emmanuel — a product-minded software developer in Kigali, Rwanda, building web and mobile products that balance engineering quality with real user needs.',
    url: '/about',
    type: 'profile',
  });

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <Nav />

      {/* ── Hero ── */}
      <div className="max-container padding-container pt-32 pb-16">
        <Reveal className="max-w-3xl">
          <span className="section-badge mb-6 inline-flex">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            About Me
          </span>
          <h1 className="section-title mb-6" style={{ lineHeight: 1.1 }}>
            I build things that <span className="text-brand">actually work</span> for the people using them.
          </h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Not just technically — but intuitively. I care about the gap between what a product does and what a user expects it to do. Closing that gap is the work.
          </p>
        </Reveal>
      </div>

      {/* ── Image + Quick facts ── */}
      <div className="max-container padding-container pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <Reveal className="relative group">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500 aspect-[4/5]">
              <img
                src={aboutMe}
                alt="Afanyu Emmanuel, software developer in Kigali Rwanda"
                width={600} height={750}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-x-[-1]"
              />
            </div>
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand" />
              <span className="body-sm font-semibold text-brand">Kigali, Rwanda</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-8 pt-2">
            {/* Origin */}
            <div>
              <p className="label-xs text-brand mb-3">Where it started</p>
              <p className="body-md text-zinc-300 leading-relaxed">
                I grew up watching problems go unsolved because the right tool didn't exist — or existed but was too complicated for the people who needed it most. That observation became a direction.
              </p>
            </div>

            <div>
              <p className="label-xs text-brand mb-3">What I actually do</p>
              <p className="body-md text-zinc-300 leading-relaxed">
                I design and build web and mobile products — from the first Figma frame to the deployed backend. I work full-stack: React and Flutter on the front, Spring Boot and PostgreSQL on the back, Docker for deployment. But the technical stack is secondary. The primary question is always: <em className="text-zinc-200 not-italic font-medium">does this solve the right problem, for the right person, in the right way?</em>
              </p>
            </div>

            <div>
              <p className="label-xs text-brand mb-3">What makes me different</p>
              <p className="body-md text-zinc-300 leading-relaxed">
                I have worked in banking operations alongside my engineering studies. That means I understand how businesses actually run — the constraints, the compliance, the people who will use the software on a Monday morning when they're already stressed. I bring that context into every product decision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="/cv.pdf" download className="btn-sm-primary justify-center">
                <Download className="w-4 h-4" /> Download CV
              </a>
              <Link to="/#contact" className="btn-sm-outline justify-center">
                Let's work together <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Values ── */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-container padding-container py-20 lg:py-28">
          <Reveal className="mb-12">
            <p className="label-xs text-brand mb-3">How I think</p>
            <h2 className="heading-md text-white max-w-xl">
              The principles that shape every project I take on.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="card-dark p-6 flex gap-4 h-full">
                  <div className="icon-box shrink-0">{icon}</div>
                  <div>
                    <p className="body-md font-semibold text-white mb-2">{title}</p>
                    <p className="body-sm text-zinc-400">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="border-t border-zinc-800">
        <div className="max-container padding-container py-20 lg:py-28">
          <Reveal className="mb-12">
            <p className="label-xs text-brand mb-3">The journey</p>
            <h2 className="heading-md text-white max-w-xl">
              Five years of building, learning, and shipping.
            </h2>
          </Reveal>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-800 hidden sm:block" />
            <div className="space-y-10">
              {timeline.map(({ year, heading, body }, i) => (
                <Reveal key={year} delay={i * 80}>
                  <div className="sm:pl-10 relative flex gap-6 sm:gap-0">
                    {/* dot */}
                    <div className="hidden sm:flex absolute left-0 top-1 w-6 h-6 rounded-full bg-[#18181B] border-2 border-[#F59E0B]/60 items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                    </div>
                    <div>
                      <span className="label-xs text-brand mb-1 block">{year}</span>
                      <p className="body-md font-semibold text-white mb-1">{heading}</p>
                      <p className="body-sm text-zinc-400">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Research ── */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-container padding-container py-20 lg:py-28">
          <Reveal>
            <div className="card-dark p-8 lg:p-12 max-w-3xl">
              <p className="label-xs text-brand mb-4">Research work</p>
              <h2 className="heading-md text-white mb-6">
                Financial Behavior Intelligence Models for Financial Inclusion
              </h2>
              <p className="body-md text-zinc-400 leading-relaxed mb-4">
                As part of the GICA Research Program, I worked on applying AI and data analytics to a question that matters in East Africa: how can transaction behaviour predict creditworthiness for people who have never had a bank account?
              </p>
              <p className="body-md text-zinc-400 leading-relaxed mb-8">
                The work involved building models that analyse mobile money patterns, spending behaviour, and social signals to generate financial profiles — giving underserved populations a path into formal financial systems without requiring traditional credit history.
              </p>
              <p className="body-sm text-zinc-500 italic">
                This research shaped how I think about data, ethics, and the responsibility that comes with building systems that affect real people's lives.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="relative border-t border-zinc-800 overflow-hidden bg-[#18181B]">
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-2/3">
          <img src={networkingImg} alt="" width={900} height={600} loading="lazy" decoding="async" aria-hidden="true"
            className="w-full h-full object-cover object-right opacity-30 scale-x-[-1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
        </div>
        <div className="relative max-container padding-container py-10 lg:py-14">
          <Reveal className="max-w-2xl space-y-6">
            <span className="label-xs text-brand border border-[#F59E0B]/30 px-3 py-1 rounded-full">
              What's next
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Open to the <span className="text-brand">right opportunity.</span>
            </h2>
            <p className="body-lg text-zinc-400">
              Whether it's a freelance project, a long-term contract, or a full-time role — if the work is meaningful and the team is serious, I want to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/#contact" className="btn-primary justify-center">
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/#projects" className="btn-outline justify-center">
                See my work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
