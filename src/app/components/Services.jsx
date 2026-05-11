import { Globe, Smartphone, Layout } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const icons = [Globe, Smartphone, Layout];

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;

  return (
    <section id="services" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-4">{tx.badge}</h2>
          <p className="body-lg text-zinc-400 max-w-2xl mx-auto">{tx.title}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={service.title} delay={i * 120}>
                <div className="card-darker group relative p-8 h-full">
                  <div className="absolute inset-0 bg-[#F59E0B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="icon-box mb-6 group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B]/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand" />
                    </div>
                    <h3 className="heading-sm text-white mb-3 group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="body-md text-zinc-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 body-sm text-zinc-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
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
          <p className="body-md text-zinc-400 mb-6">{tx.dontSee}</p>
          <a href="#contact" className="btn-primary">{tx.discuss}</a>
        </Reveal>
      </div>
    </section>
  );
}
