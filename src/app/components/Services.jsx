import { Globe, Smartphone, BarChart2 } from 'lucide-react';
import Reveal from './Reveal.jsx';

const services = [
  {
    title: 'Responsive Web Design',
    description: 'Modern, performant web apps built with React and Tailwind CSS.',
    icon: Globe,
    features: ['Next.js & React', 'Tailwind CSS', 'SEO Optimized', 'Mobile First'],
  },
  {
    title: 'Cross-Platform Mobile',
    description: 'Native-quality iOS and Android apps delivered via a single Flutter codebase.',
    icon: Smartphone,
    features: ['Flutter & Dart', 'iOS & Android', 'Offline Support', 'Push Notifications'],
  },
  {
    title: 'Analytics Dashboards',
    description: 'Specialized layouts for complex data and enterprise monitoring.',
    icon: BarChart2,
    features: ['Real-time Data', 'Custom Charts', 'Enterprise Ready', 'Export Reports'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            Services
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto" style={{ fontFamily: 'Geist, sans-serif' }}>
            Full-stack development solutions tailored to your business needs
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 120}>
                <div className="group relative bg-[#18181B] border border-zinc-800 rounded-2xl p-8 hover:border-[#F59E0B]/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-[#F59E0B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center mb-6 group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B]/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-xl text-white mb-3 group-hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500" style={{ fontFamily: 'Geist, sans-serif' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F59E0B]/0 group-hover:border-[#F59E0B]/30 rounded-tr-2xl transition-all duration-300" />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="text-center mt-16">
          <p className="text-zinc-400 mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Don't see what you're looking for?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#18181B] rounded-lg transition-all duration-300 transform hover:scale-105" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}>
            Let's Discuss Your Project
          </a>
        </Reveal>
      </div>
    </section>
  );
}
