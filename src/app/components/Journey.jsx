import { Briefcase, ExternalLink } from 'lucide-react';
import Reveal from './Reveal.jsx';

const journey = [
  {
    year: '2023',
    role: 'Software Developer',
    company: 'ZiloTech',
    url: 'https://www.zilotech.org/',
    type: 'Full-time',
    desc: 'Kicked off my professional journey at ZiloTech, where I built my foundation in software development — working on real-world projects and sharpening my problem-solving skills.',
  },
  {
    year: 'May 2024',
    role: 'Software Engineer Intern',
    company: 'FreshSense',
    url: 'https://freshsens.ai/',
    type: 'Internship',
    desc: 'Specialized in mobile architecture and UI/UX principles during an intensive internship, bridging the gap between design theory and Flutter implementation.',
  },
  {
    year: '2025',
    role: 'Software Developer',
    company: 'WAO Sport',
    url: 'https://gh.linkedin.com/in/wao-sport-417710267',
    type: 'Frontend Dev',
    desc: 'Collaborated on building a nationwide streaming ecosystem and digital tools to launch and support a new sports category in the Ghanaian market.',
  },
  {
    year: '2026',
    role: 'Trainee Developer',
    company: 'AUCA Innovation Center',
    url: 'https://web.auca.ac.rw/news/innovation',
    type: 'Trainee',
    desc: 'Advancing as a multi-disciplinary developer, specializing in the intersection of UI/UX design, scalable Backend architecture, and DevOps to deliver end-to-end digital excellence.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            My <span className="text-[#F59E0B]">Journey</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            The path that shaped who I am as a developer
          </p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 md:left-1/2" />
          <div className="space-y-12">
            {journey.map(({ year, role, company, url, type, desc }, i) => (
              <Reveal key={company} delay={i * 100}>
                <div className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-6 w-3 h-3 bg-[#F59E0B] rounded-full border-2 border-[#18181B] -translate-x-1/2 mt-1.5 md:left-1/2 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="group bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl p-6 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full" style={{ fontFamily: 'Geist, sans-serif' }}>{year}</span>
                        <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-1 rounded-full" style={{ fontFamily: 'Geist, sans-serif' }}>{type}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-[#F59E0B]" />
                        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{role}</h3>
                      </div>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#F59E0B] text-sm font-semibold mb-3 hover:underline" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {company} <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
