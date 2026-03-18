import { Briefcase, Clock, Star, Zap } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  {  value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '< 24h', label: 'Response Time' },
];

export default function Stats() {
  return (
    <section className="mb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl transition-all duration-300"
            >
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
