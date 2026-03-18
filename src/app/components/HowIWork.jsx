import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#F59E0B]" />,
    step: '01',
    title: 'Discovery',
    desc: 'We start with a deep conversation about your goals, target audience, and vision. I ask the right questions to fully understand what you need before writing a single line of code.',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-[#F59E0B]" />,
    step: '02',
    title: 'Planning & Design',
    desc: 'I map out the architecture, user flows, and wireframes. You get a clear picture of what will be built, how it will look, and how long it will take — no surprises.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#F59E0B]" />,
    step: '03',
    title: 'Development & Testing',
    desc: 'Clean, scalable code written with best practices, followed by rigorous testing across devices and edge cases. Regular check-ins keep you in the loop throughout.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#F59E0B]" />,
    step: '04',
    title: 'Delivery & Support',
    desc: "Smooth handoff with full documentation. I don't disappear after launch — I'm available for support, updates, and future improvements.",
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How I <span className="text-[#F59E0B]">Work</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            A clear, collaborative process from idea to launch
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon, step, title, desc }, i) => (
            <Reveal key={step} delay={i * 100}>
              <div className="group flex flex-col bg-[#18181B] border border-zinc-800 hover:border-[#F59E0B]/50 rounded-2xl p-6 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[3.5rem] font-bold text-white/[0.06] leading-none select-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {step}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-all duration-300">
                    {icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
