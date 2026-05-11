import Reveal from './Reveal.jsx';

const cdn = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const categories = [
  {
    label: 'Frontend & Mobile',
    items: [
      { name: 'React',        logo: cdn('react/react-original.svg') },
      { name: 'Next.js',      logo: cdn('nextjs/nextjs-original.svg'),        invert: true },
      { name: 'Flutter',      logo: cdn('flutter/flutter-original.svg') },
      { name: 'TypeScript',   logo: cdn('typescript/typescript-original.svg') },
      { name: 'JavaScript',   logo: cdn('javascript/javascript-original.svg') },
      { name: 'Tailwind CSS', logo: cdn('tailwindcss/tailwindcss-original.svg') },
      { name: 'HTML & CSS',   logo: cdn('html5/html5-original.svg') },
      { name: 'Figma',        logo: cdn('figma/figma-original.svg') },
    ],
  },
  {
    label: 'Backend & Database',
    items: [
      { name: 'Django',       logo: cdn('django/django-plain.svg'),            invert: true },
      { name: 'Django REST',  logo: cdn('django/django-plain.svg'),            invert: true },
      { name: 'Spring Boot',  logo: cdn('spring/spring-original.svg') },
      { name: 'Node.js',      logo: cdn('nodejs/nodejs-original.svg') },
      { name: 'Firebase',     logo: cdn('firebase/firebase-plain.svg') },
      { name: 'PostgreSQL',   logo: cdn('postgresql/postgresql-original.svg') },
      { name: 'Python',       logo: cdn('python/python-original.svg') },
      { name: 'Java',         logo: cdn('java/java-original.svg') },
    ],
  },
  {
    label: 'Other Tools',
    items: [
      { name: 'Git',          logo: cdn('git/git-original.svg') },
      { name: 'GitHub',       logo: cdn('github/github-original.svg'),        invert: true },
      { name: 'Canva',        logo: cdn('canva/canva-original.svg') },
      { name: 'Notion',       logo: 'https://www.notion.so/images/favicon.ico' },
      { name: 'Slack',        logo: 'https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png' },
      { name: 'Jira',         logo: 'https://wac-cdn.atlassian.com/assets/img/favicons/jira/favicon-32x32.png' },
      { name: 'Gemini',       logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
      { name: 'Claude',       logo: 'https://claude.ai/favicon.ico' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="bg-[#18181B] border-t border-zinc-800 section-padding">
      <div className="max-container padding-container">
        <Reveal className="text-center mb-16">
          <p className="label-xs text-brand mb-2">Skills & Stack</p>
          <h2 className="section-title mb-3">What I <span className="text-brand">Work With</span></h2>
          <p className="section-subtitle">Technologies I use across web, mobile and backend</p>
        </Reveal>

        <div className="space-y-12">
          {categories.map(({ label, items }, ci) => (
            <Reveal key={label} delay={ci * 100}>
              <div>
                <p className="label-xs text-zinc-500 mb-5 padding-container">{label}</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {items.map(({ name, logo, invert }) => (
                    <div key={name} className="card-dark group flexCenter flex-col gap-3 px-3 py-5">
                      <img
                        src={logo}
                        alt={name}
                        className={`w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300 ${invert ? 'invert' : ''}`}
                      />
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
