import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const row2 = [
  'Django', 'Django REST', 'Firebase', 'Spring Boot', 'Git', 'UI/UX', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Flutter', 'React JS',
];

function SkillBadge({ name }) {
  return (
    <div className="card-dark group flexCenter gap-3 px-6 py-4 min-w-fit whitespace-nowrap">
      <div className="w-2 h-2 rounded-full bg-brand group-hover:scale-125 transition-transform duration-300" />
      <span className="body-sm text-zinc-300 group-hover:text-white transition-colors duration-300">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((name, i) => (
          <SkillBadge key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const tx = t[lang].skills;

  return (
    <section id="skills" className="bg-zinc-950 border-t border-zinc-800 py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
        <p className="section-subtitle">{tx.sub}</p>
      </div>
      <div className="space-y-4">
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
