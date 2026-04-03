import Reveal from './Reveal.jsx';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '< 24h', label: 'Response Time' },
];

export default function Stats() {
  return (
    <section className="bg-[#18181B] border-zinc-800">
      <div className="max-container padding-container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <div className="card-dark group flexCenter flex-col text-center p-6">
                <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value}
                </div>
                <div className="body-sm text-zinc-400">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
