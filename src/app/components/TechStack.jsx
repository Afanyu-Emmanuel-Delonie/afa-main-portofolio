const tools = [
  { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Python',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Canva',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'GitHub',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Django',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
];

// Duplicate for seamless infinite loop
const doubled = [...tools, ...tools];

export default function TechStack() {
  return (
    <section className="bg-[#18181B] border-t border-zinc-800 py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Tools & <span className="text-[#F59E0B]">Technologies</span>
        </h2>
        <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
          The stack I use to bring ideas to life
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#18181B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#18181B] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee w-max">
          {doubled.map(({ name, logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex flex-col items-center gap-3 px-6 py-5 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-[#F59E0B]/50 transition-all duration-300 group min-w-[100px]"
            >
              <img src={logo} alt={name} className={`w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 ${name === 'GitHub' || name === 'Django' ? 'invert' : ''}`} />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" style={{ fontFamily: 'Geist, sans-serif' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
