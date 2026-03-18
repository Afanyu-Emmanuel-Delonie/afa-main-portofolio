import { useRef, useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';

const categories = [
  {
    name: 'Mobile & Frontend',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'React JS', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'Django REST', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'Spring Boot', level: 55 },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'Git', level: 75 },
      { name: 'UI/UX', level: 55 },
      { name: 'AI Prompting', level: 70 },
      { name: 'Digital Marketing', level: 30 },
    ],
  },
];

function SkillCard({ name, skills, delay }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="bg-[#18181B] border border-zinc-800 rounded-2xl p-8 h-full">
        <h3 className="text-lg font-semibold text-[#F59E0B] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {name}
        </h3>
        <div className="space-y-5">
          {skills.map(({ name: skill, level }, i) => (
            <div key={skill}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-zinc-300" style={{ fontFamily: 'Geist, sans-serif' }}>{skill}</span>
                <span className="text-sm text-zinc-500" style={{ fontFamily: 'Geist, sans-serif' }}>{level}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F59E0B] rounded-full"
                  style={{
                    width: animated ? `${level}%` : '0%',
                    transition: `width 0.9s ease ${i * 120}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            My <span className="text-[#F59E0B]">Skills</span>
          </h2>
          <p className="text-zinc-400" style={{ fontFamily: 'Geist, sans-serif' }}>
            Technologies I work with and my proficiency level
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map(({ name, skills }, i) => (
            <SkillCard key={name} name={name} skills={skills} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
