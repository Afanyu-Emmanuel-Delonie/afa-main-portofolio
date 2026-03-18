import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Client Name',
    role: 'CEO, Company',
    quote: 'Working with him was an absolute pleasure. He delivered a polished, high-performance web app on time and exceeded every expectation. Highly recommend.',
    initials: 'CN',
  },
  {
    name: 'Client Name',
    role: 'Product Manager, Startup',
    quote: 'The mobile app he built for us was exactly what we envisioned — clean UI, fast performance, and rock-solid on both iOS and Android. Will definitely work together again.',
    initials: 'CN',
  },
  {
    name: 'Client Name',
    role: 'Founder, Agency',
    quote: 'Professional, communicative, and technically sharp. He understood our requirements from day one and delivered a dashboard that our team loves using every day.',
    initials: 'CN',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What Clients <span className="text-[#F59E0B]">Say</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            Don't just take my word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, initials }, i) => (
            <div key={i} className="group relative bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl p-8 transition-all duration-300">
              <Quote className="w-8 h-8 text-[#F59E0B]/30 mb-4" />

              <p className="text-zinc-400 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Geist, sans-serif' }}>
                "{quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#F59E0B]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{name}</p>
                  <p className="text-xs text-zinc-500" style={{ fontFamily: 'Geist, sans-serif' }}>{role}</p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F59E0B]/0 group-hover:border-[#F59E0B]/30 rounded-tr-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
