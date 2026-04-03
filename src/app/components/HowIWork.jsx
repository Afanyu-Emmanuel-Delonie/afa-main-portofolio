import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-brand" />,
    step: '01',
    title: 'Discovery',
    desc: 'We start with a deep conversation about your goals, target audience, and vision. I ask the right questions to fully understand what you need before writing a single line of code.',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand" />,
    step: '02',
    title: 'Planning & Design',
    desc: 'I map out the architecture, user flows, and wireframes. You get a clear picture of what will be built, how it will look, and how long it will take — no surprises.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-brand" />,
    step: '03',
    title: 'Development & Testing',
    desc: 'Clean, scalable code written with best practices, followed by rigorous testing across devices and edge cases. Regular check-ins keep you in the loop throughout.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-brand" />,
    step: '04',
    title: 'Delivery & Support',
    desc: "Smooth handoff with full documentation. I don't disappear after launch — I'm available for support, updates, and future improvements.",
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">How I <span className="text-brand">Work</span></h2>
          <p className="section-subtitle">A clear, collaborative process from idea to launch</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon, step, title, desc }, i) => (
            <Reveal key={step} delay={i * 100}>
              <div className="card-darker group flex flex-col p-6 h-full">
                <div className="flexBetween mb-6">
                  <span className="text-[3.5rem] font-bold text-white/[0.06] leading-none select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step}
                  </span>
                  <div className="icon-box group-hover:bg-[#F59E0B]/20 transition-all duration-300">
                    {icon}
                  </div>
                </div>
                <h3 className="heading-sm text-white mb-2">{title}</h3>
                <p className="body-sm text-zinc-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
