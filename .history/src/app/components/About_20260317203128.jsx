import { ArrowRight, Lightbulb, Palette, Focus, Rocket } from 'lucide-react';
import aboutme from '../../assets/afa-1.png';

const skills = [
  { icon: <Lightbulb className="w-4 h-4 text-[#F59E0B]" />, label: 'Innovative' },
  { icon: <Palette className="w-4 h-4 text-[#F59E0B]" />, label: 'Creative' },
  { icon: <Focus className="w-4 h-4 text-[#F59E0B]" />, label: 'Detail-Oriented' },
  { icon: <Rocket className="w-4 h-4 text-[#F59E0B]" />, label: 'Solution-Driven' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image / video placeholder */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500 aspect-[4/5]">
              {/* Swap this img for a <video> whenever you're ready */}
              <img
                src={aboutme}
                alt="About me"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-x-[-1]"
              />
              {/* Play hint overlay — remove when using real video */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-xl">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-t-transparent border-b-transparent border-l-[#18181B] ml-1" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl">
              <span className="text-sm font-semibold text-[#F59E0B]" style={{ fontFamily: 'Geist, sans-serif' }}>
               Based in Rwanda
              </span>
            </div>
          </div>

          {/* Right — bio */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#F59E0B]/20 rounded-full text-sm text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                About Me
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.1 }}>
                Crafting Digital <span className="text-[#F59E0B]">Solutions</span>
              </h2>
            </div>

            <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
              I'm a passionate software engineer with over 2 years of hands-on experience building web and mobile applications. I thrive at the intersection of clean code and great user experience — turning complex problems into elegant, scalable solutions.
            </p>

            <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
              From responsive web platforms to cross-platform mobile apps and data-rich dashboards, I bring a full-stack mindset to every project. I care deeply about performance, accessibility, and delivering work that actually moves the needle for clients.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {skills.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {icon}
                  <span className="text-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#18181B] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                Work With Me
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-[#F59E0B] text-white font-semibold rounded-lg transition-all duration-300"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
