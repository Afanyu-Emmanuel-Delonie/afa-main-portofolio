import { Link } from 'react-router';
import { ArrowRight, Download, MapPin, Lightbulb, Users, Code2, Microscope } from 'lucide-react';
import aboutMe from '../../assets/afa-2.png';
import networkingImg from '../../assets/afa-3.png';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Journey from '../components/Journey.jsx';
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
    body: 'Clean code is not a style preference. It is a form of respect for the next person who reads it, including future me.',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-brand" />,
    title: 'Curiosity as a skill',
    body: 'I ask why before I ask how. Understanding the real problem is more valuable than being fast at solving the wrong one.',
  },
  {
    icon: <Microscope className="w-5 h-5 text-brand" />,
    title: 'Research-backed thinking',
    body: 'My work in Financial Inclusion AI taught me to combine data, behaviour, and design. Not just build features, but understand impact.',
  },
];

export default function AboutPage() {
  useSEO({
    title: 'About Afanyu Emmanuel | Software Engineer & UI/UX Designer, Kigali',
    description: 'The story behind Afanyu Emmanuel, a product-minded software engineer and UI/UX designer in Kigali, Rwanda, building web and mobile products that balance engineering quality with real user needs.',
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
          <h1 className="section-title mb-4" style={{ lineHeight: 1.1 }}>
            I build things that <span className="text-brand">work.</span>
          </h1>
          <p className="body-md text-zinc-400 max-w-xl">
            Product-minded developer. Kigali, Rwanda.
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
                alt="Afanyu Emmanuel, software engineer and UI/UX designer in Kigali"
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
            <div>
              <p className="label-xs text-brand mb-3">What I believe</p>
              <p className="body-md text-zinc-300 leading-relaxed">
                Good products don't just solve problems. They make people feel heard. There's a difference between a product that works and one that people actually want to use. The best ones do both: they fix the real problem <em className="text-zinc-200 not-italic font-medium">and</em> they feel comfortable, intuitive, almost obvious. People don't want to just see a solution on a screen. They want to feel like the product understands them.
              </p>
            </div>

            <div>
              <p className="label-xs text-brand mb-3">How that shapes my work</p>
              <p className="body-md text-zinc-300 leading-relaxed">
                That balance between solving the right problem and building something people genuinely enjoy using is what I chase on every project. I work full-stack: React and Flutter on the front, Spring Boot and PostgreSQL on the back. But the stack is always secondary to the question: does this feel right for the person using it?
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

      {/* ── Journey ── */}
      <Journey />

      {/* ── Research ── */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-container padding-container py-20 lg:py-28">
          <Reveal className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <p className="label-xs text-brand mb-4">Research work</p>
            <h2 className="heading-md text-white mb-6">
              Financial Behavior Intelligence Models for Financial Inclusion
            </h2>
            <p className="body-md text-zinc-400 leading-relaxed mb-4">
              Applying AI and data analytics to a question that matters in East Africa: how can transaction behaviour predict creditworthiness for people who have never had a bank account?
            </p>
            <p className="body-md text-zinc-400 leading-relaxed mb-6">
              The research explores mobile money patterns, spending behaviour, and social signals to generate financial profiles, giving underserved populations a path into formal financial systems without requiring traditional credit history.
            </p>
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
              Whether it's a freelance project, a long-term contract, or a full-time role, if the work is meaningful and the team is serious, I want to hear about it.
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
