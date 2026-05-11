import { useState } from 'react';
import { Mail, MapPin, CalendarDays, Github, Linkedin, MessageCircle, ArrowRight, Copy, Check } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="ml-auto p-1.5 rounded-md text-zinc-500 hover:text-brand hover:bg-zinc-800 transition-all duration-200" title="Copy">
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang].contact;

  const secondaryChannels = [
    { icon: Mail,     label: 'Email',     value: 'afanyuemma2002@gmail.com', href: 'mailto:afanyuemma2002@gmail.com', copyable: true },
    { icon: MessageCircle, label: 'WhatsApp', value: '+250 798 971 739', href: 'https://wa.me/250798971739', copyable: true },
    { icon: Linkedin, label: 'LinkedIn',  value: 'Afanyu Emmanuel', href: 'https://www.linkedin.com/in/afanyu-emmanuel/', copyable: false },
    { icon: Github,   label: 'GitHub',    value: 'Afanyu-Emmanuel-Delonie', href: 'https://github.com/Afanyu-Emmanuel-Delonie', copyable: false },
    { icon: MapPin,   label: tx.location, value: 'Kigali, Rwanda', href: null, copyable: false },
  ];

  return (
    <section id="contact" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">

        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left — headline + primary CTAs */}
          <Reveal className="card-darker p-8 lg:p-10 flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                {tx.badge}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {tx.leftHeading} <span className="text-brand">{tx.leftHeadingSpan}</span>
              </h3>
              <p className="body-md text-zinc-400 max-w-md">{tx.leftSub}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:afanyuemma2002@gmail.com"
                className="btn-primary justify-center">
                <Mail className="w-4 h-4" /> {tx.emailCta}
              </a>
              <a href="https://wa.me/250798971739" target="_blank" rel="noopener noreferrer"
                className="btn-outline justify-center">
                <MessageCircle className="w-4 h-4" /> {tx.whatsappCta}
              </a>
            </div>
          </Reveal>

          {/* Right — Calendly highlight + secondary channels */}
          <div className="flex flex-col gap-6">

            {/* Calendly card */}
            <Reveal delay={100}>
              <a href="https://calendly.com/afanyuemma2002/discovery-with-afanyu" target="_blank" rel="noopener noreferrer"
                className="card-darker group p-8 flex items-center justify-between gap-6 hover:border-brand transition-all duration-300 block">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flexCenter shrink-0">
                    <CalendarDays className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="body-sm font-semibold text-white">{tx.calendlyCta}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{tx.calendlyValue}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-brand shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Reveal>

            {/* Email + WhatsApp — copyable rows */}
            <div className="grid grid-cols-1 gap-3">
              {secondaryChannels.filter(c => c.copyable).map(({ icon: Icon, label, value, href, copyable }, i) => (
                <Reveal key={label} delay={150 + i * 70}>
                  <div className="card-darker px-5 py-3.5 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flexCenter shrink-0">
                      <Icon className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500">{label}</p>
                      <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="body-sm text-zinc-300 hover:text-brand transition-colors truncate block">{value}</a>
                    </div>
                    <CopyButton text={value} />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* LinkedIn, GitHub, Location — single row */}
            <Reveal delay={300}>
              <div className="card-darker px-5 py-4 flex items-center justify-between gap-2">
                {secondaryChannels.filter(c => !c.copyable).map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flexCenter shrink-0">
                      <Icon className="w-3.5 h-3.5 text-zinc-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500">{label}</p>
                      {href
                        ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-300 hover:text-brand transition-colors truncate block">{value}</a>
                        : <span className="text-xs text-zinc-300 truncate block">{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
