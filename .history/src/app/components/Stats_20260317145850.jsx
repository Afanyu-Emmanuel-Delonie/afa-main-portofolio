import { Briefcase, Clock, Star, Zap } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  {  value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '< 24h', label: 'Response Time' },
];

export default function Stats() {
  return (
    <section className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            By the <span className="text-[#F59E0B]">Numbers</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            A snapshot of my work and commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-8 bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-[#F59E0B]/10 rounded-xl group-hover:bg-[#F59E0B]/20 transition-all duration-300">
                {icon}
              </div>
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {value}
              </div>
              <div className="text-sm text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
