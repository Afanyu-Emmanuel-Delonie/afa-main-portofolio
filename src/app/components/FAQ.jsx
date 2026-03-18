import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: "I work on web apps, mobile apps, dashboards, and landing pages. Whether it's a startup MVP, a client portal, or a full product — if it involves clean code and good design, I'm in.",
  },
  {
    q: 'How does the process work?',
    a: "We start with a discovery call to understand your goals, then I move into planning and design, development, testing, and finally delivery with ongoing support. You're kept in the loop at every stage.",
  },
  {
    q: 'How long does a typical project take?',
    a: 'A landing page or simple app can take 1–2 weeks. A full-featured web or mobile app typically takes 4–8 weeks depending on scope and complexity.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. I work remotely with clients across Africa, Europe, and beyond. Time zones are never a blocker — I adapt to your schedule.',
  },
  {
    q: 'What happens after the project is delivered?',
    a: 'I provide documentation and a handoff session. I also offer post-launch support for bug fixes, updates, and new features — just ask.',
  },
  {
    q: 'Are you available for full-time or long-term contracts?',
    a: "Yes. I'm open to freelance projects, long-term retainers, and full-time opportunities. Reach out and let's discuss what works best.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Frequently Asked <span className="text-[#F59E0B]">Questions</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            Everything you might want to know before reaching out
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="border border-zinc-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-zinc-900 hover:bg-zinc-800/60 transition-colors duration-200"
                >
                  <span className="text-white font-medium pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#F59E0B] shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div className="px-6 py-5 bg-zinc-900/50 border-t border-zinc-800">
                    <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>{a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
