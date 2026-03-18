import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-2xl font-bold text-white hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            &lt;Afanyu/&gt;
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Geist, sans-serif' }}>
                {l.name}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/Afanyu-Emmanuel-Delonie' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'www.linkedin.com/in/afanyu-emmanuel' },
              { icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/afanyudelonie?igsh=YWx6Y3I4a2hhdDhx' },
            ].map((s, i) => (
              <a key={i} href={s.href} target=' className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 hover:text-[#F59E0B] text-zinc-400 flex items-center justify-center transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-600" style={{ fontFamily: 'Geist, sans-serif' }}>
            © {new Date().getFullYear()} &lt;Afanyu/&gt;. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
