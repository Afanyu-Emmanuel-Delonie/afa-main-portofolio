import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const links = [
  { name: { en: 'About',    fr: 'À Propos'  }, href: '#about' },
  { name: { en: 'Services', fr: 'Services'  }, href: '#services' },
  { name: { en: 'Skills',   fr: 'Compétences' }, href: '#skills' },
  { name: { en: 'Projects', fr: 'Projets'   }, href: '#projects' },
  { name: { en: 'Journey',  fr: 'Parcours'  }, href: '#journey' },
  { name: { en: 'Contact',  fr: 'Contact'   }, href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { pathname } = useLocation();
  const { lang, toggle } = useLang();
  const isHome = pathname === '/';

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace('#', ''));
    const observers = [];

    // Clear active when hero is in view
    const hero = document.querySelector('header');
    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(''); },
        { rootMargin: '0px 0px -80% 0px' }
      );
      heroObserver.observe(hero);
      observers.push(heroObserver);
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const navHref = (hash) => isHome ? hash : `/${hash}`;
  const isActive = (href) => activeSection === href.replace('#', '');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-container padding-container">
        <div className="hidden lg:grid grid-cols-3 h-20 items-center">
          <Link to="/" className="heading-sm text-white hover:text-brand transition-colors duration-300">
            &lt;Afanyu/&gt;
          </Link>

          <div className="flex items-center justify-center gap-4 xl:gap-8">
            {links.map((l) => (
              <a key={l.href} href={navHref(l.href)}
                className={`body-sm transition-colors duration-300 relative group whitespace-nowrap ${
                  isActive(l.href) ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}>
                {l.name[lang]}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${
                  isActive(l.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button onClick={toggle} className="body-sm text-zinc-400 hover:text-brand transition-colors duration-300 border border-zinc-700 hover:border-brand px-6 py-3 rounded-lg font-semibold">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href={navHref('#contact')} className="btn-sm-primary">
              {t[lang].nav.letstalk}
            </a>
          </div>
        </div>

        <div className="flex lg:hidden justify-between h-20 items-center">
          <Link to="/" className="heading-sm text-white hover:text-brand transition-colors duration-300">
            &lt;Afanyu/&gt;
          </Link>

          <div className="flex items-center gap-3">
            <button onClick={toggle} className="body-sm text-zinc-400 hover:text-brand transition-colors duration-300 border border-zinc-700 hover:border-brand px-3 py-1 rounded-lg">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <button onClick={() => setOpen(!open)} className="text-white hover:text-brand transition-colors" aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden py-6 border-t border-zinc-800/50 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={navHref(l.href)} onClick={() => setOpen(false)}
                className={`body-sm transition-colors py-2 ${
                  isActive(l.href) ? 'text-brand font-semibold' : 'text-zinc-400 hover:text-white'
                }`}>
                {l.name[lang]}
              </a>
            ))}
            <a href={navHref('#contact')} onClick={() => setOpen(false)} className="btn-sm-primary w-full justify-center mt-2">
              {t[lang].nav.letstalk}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
