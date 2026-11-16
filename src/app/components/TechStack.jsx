import Reveal from './Reveal.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const cdn = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const categoryItems = [
  [
    { name: 'React',        logo: cdn('react/react-original.svg') },
    { name: 'Next.js',      logo: cdn('nextjs/nextjs-original.svg'), invert: true },
    { name: 'TypeScript',   logo: cdn('typescript/typescript-original.svg') },
    { name: 'Tailwind CSS', logo: cdn('tailwindcss/tailwindcss-original.svg') },
    { name: 'Flutter',      logo: cdn('flutter/flutter-original.svg') },
    { name: 'Dart',         logo: cdn('dart/dart-original.svg') },
  ],
  [
    { name: 'Flask',       logo: cdn('flask/flask-original.svg'), invert: true },
    { name: 'Django',      logo: cdn('django/django-plain.svg'), invert: true },
    { name: 'Spring Boot', logo: cdn('spring/spring-original.svg') },
  ],
  [
    { name: 'PostgreSQL',    logo: cdn('postgresql/postgresql-original.svg') },
    { name: 'Oracle PL/SQL', logo: cdn('oracle/oracle-original.svg') },
    { name: 'SQL Server',    logo: cdn('microsoftsqlserver/microsoftsqlserver-plain.svg') },
    { name: 'Firebase',      logo: cdn('firebase/firebase-plain.svg') },
  ],
  [
    { name: 'Figma',     logo: cdn('figma/figma-original.svg') },
    { name: 'Photoshop', logo: cdn('photoshop/photoshop-plain.svg') },
    { name: 'Canva',     logo: cdn('canva/canva-original.svg') },
  ],
  [
    { name: 'Git',     logo: cdn('git/git-original.svg') },
    { name: 'GitHub',  logo: cdn('github/github-original.svg'), invert: true },
    { name: 'Vercel',  logo: cdn('vercel/vercel-original.svg'), invert: true },
    { name: 'Netlify', logo: cdn('netlify/netlify-original.svg') },
    { name: 'Linux',   logo: cdn('linux/linux-original.svg'), invert: true },
  ],
];

export default function TechStack() {
  const { lang } = useLang();
  const tx = t[lang].techstack;

  return (
    <section id="skills" className="bg-[#18181B] border-t border-zinc-800 section-padding">
      <div className="max-container padding-container">
        <Reveal className="text-center mb-16">
          <p className="label-xs text-brand mb-2">{tx.badge}</p>
          <h2 className="section-title mb-3">{tx.title} <span className="text-brand">{tx.titleSpan}</span></h2>
          <p className="section-subtitle">{tx.sub}</p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {categoryItems.map((items, ci) => (
            <Reveal key={ci} delay={ci * 100}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">
                <p className="label-xs text-brand mb-6">{tx.categories[ci]}</p>
                <div className="grid grid-cols-3 gap-3">
                  {items.map(({ name, logo, invert }) => (
                    <div key={name} className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-[#F59E0B]/40 rounded-xl group flexCenter flex-col gap-2 px-2 py-4 transition-all duration-300">
                      <img src={logo} alt={name} className={`w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 ${invert ? 'invert' : ''}`} />
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 text-center leading-tight">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
