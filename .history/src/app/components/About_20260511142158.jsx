import { ArrowRight, Lightbulb, Palette, Focus, Rocket } from 'lucide-react';
import aboutme from '../../assets/afa-2.png';
import Reveal from './Reveal.jsx';

const traits = [
  { icon: <Lightbulb className="w-4 h-4 text-brand" />, label: 'Innovative' },
  { icon: <Palette className="w-4 h-4 text-brand" />, label: 'Creative' },
  { icon: <Focus className="w-4 h-4 text-brand" />, label: 'Detail-Oriented' },
  { icon: <Rocket className="w-4 h-4 text-brand" />, label: 'Solution-Driven' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <Reveal className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-2xl blur-2xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#F59E0B]/50 transition-all duration-500 aspect-[4/5]">
              <img src={aboutme} alt="Afanyu Emmanuel" width={600} height={750} loading="lazy" decoding="async"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-x-[-1]" />
            </div>
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl">
              <span className="body-sm font-semibold text-brand">Based In Rwanda</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="section-badge">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                About Me
              </span>
              <h2 className="section-title" style={{ lineHeight: 1.1 }}>
                Crafting Digital <span className="text-brand">Solutions</span>
              </h2>
            </div>
<p className="body-md text-zinc-400">
  I am a Software Engineer dedicated to building high-performance digital ecosystems that drive market growth. With over two years of experience crafting seamless web and mobile applications, I bridge the gap between complex system architecture and business strategy. My work is defined by a "Senior-level" minimalist aesthetic and a commitment to engineering scalable solutions that transform user needs into commercially successful ventures.
</p>
<p className="body-md text-zinc-400">
  Beyond development, I leverage a rigorous analytical foundation built through the GICA Online Research Program organized by Andrews University. This background in structured inquiry fuels my passion for financial inclusion and innovation, allowing me to engineer data-rich platforms like dashboards and fintech solutions that move the needle. I don't just write code; I build the technical engines that empower businesses and communities to scale.
</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {traits.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                  {icon}
                  <span className="body-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-sm-primary">
                Work With Me <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#projects" className="btn-sm-outline">
                View Projects
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
