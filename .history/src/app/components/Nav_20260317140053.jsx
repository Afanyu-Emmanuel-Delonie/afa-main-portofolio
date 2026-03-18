import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl text-white hover:text-[#F59E0B] transition-colors duration-300 font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            &lt;Dev/&gt;
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-zinc-400 hover:text-white transition-colors duration-300 relative group" style={{ fontFamily: 'Geist, sans-serif' }}>
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:inline-block px-6 py-2.5 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#18181B] font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Geist, sans-serif' }}>
            Let's Talk
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white hover:text-[#F59E0B] transition-colors" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-6 border-t border-zinc-800/50 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition-colors py-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                {l.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-6 py-2.5 bg-[#F59E0B] text-[#18181B] font-semibold rounded-lg text-center mt-2" style={{ fontFamily: 'Geist, sans-serif' }}>
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
