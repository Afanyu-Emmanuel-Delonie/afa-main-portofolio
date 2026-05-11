import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const links = [
  { name: { en: 'About',    fr: 'À Propos'  }, href: '#about' },
  { name: { en: 'Services', fr: 'Services'  }, href: '#services' },
  { name: { en: 'Projects', fr: 'Projets'   }, href: '#projects' },
  { name: { en: 'Skills',   fr: 'Compétences' }, href: '#skills' },
  { name: { en: 'Journey',  fr: 'Parcours'  }, href: '#journey' },
  { name: { en: 'Contact',  fr: 'Contact'   }, href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, toggle } = useLang();
  const isHome = pathname === '/';

  const navHref = (hash) => isHome ? hash : `/${hash}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-container padding-container">
        <div className="hidden lg:grid grid-cols-3 h-20 items-center">
          <Link to="/" className="heading-sm text-white hover:text-brand transition-colors duration-300">
            &lt;Afanyu/&gt;
          </Link>

          <div className="flex items-center justify-center gap-4 xl:gap-8">
            {links.map((l) => (
              <a key={l.href} href={navHref(l.href)} className="body-sm text-zinc-400 hover:text-white transition-colors duration-300 relative group whitespace-nowrap">
                {l.name[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
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
              <a key={l.href} href={navHref(l.href)} onClick={() => setOpen(false)} className="body-sm text-zinc-400 hover:text-white transition-colors py-2">
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
