import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import heroImage from '../../assets/afa-1.png';

const services = [
  { icon: <Code2 className="w-5 h-5 text-[#F59E0B]" />, label: 'Web Development' },
  { icon: <Smartphone className="w-5 h-5 text-[#F59E0B]" />, label: 'Mobile Apps' },
];

const stats = [
  ['50+', 'Projects'],
  ['5+', 'Years'],
  ['100%', 'Satisfaction'],
];

export default function Hero() {
  return (
    <section className="h-screen bg-[#18181B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#F59E0B]/20 rounded-full">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
                <span className="text-sm tracking-wide" style={{ fontFamily: 'Geist, sans-serif' }}>Available for Freelance</span>
              </div>

              <h1 className="text-5xl lg:text-7xl tracking-tight font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.1 }}>
                Building Digital<br />
                <span className="text-[#F59E0B]">Experiences</span>
              </h1>

              <p className="text-lg lg:text-xl text-zinc-400 max-w-xl" style={{ fontFamily: 'Geist, sans-serif', lineHeight: 1.6 }}>
                Experienced software engineer specializing in web and mobile applications. Transforming ideas into elegant, scalable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {services.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {icon} {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#18181B] font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Geist, sans-serif' }}>
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 hover:border-[#F59E0B] font-semibold rounded-lg transition-all duration-300" style={{ fontFamily: 'Geist, sans-serif' }}>
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800">
              {stats.map(([val, label]) => (
                <div key={label}>
                  <div className="text-3xl text-[#F59E0B] mb-1 font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{val}</div>
                  <div className="text-sm text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500">
              <img src={heroImage} alt="Software Engineer" className="w-full h-auto object-cover object-center scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
            </div>
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-[#F59E0B] rounded-xl shadow-2xl border-4 border-[#18181B]">
              <div className="text-2xl text-[#18181B] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Let's Build</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
