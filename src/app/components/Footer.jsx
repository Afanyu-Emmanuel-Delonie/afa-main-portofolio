import { Link, useLocation } from 'react-router';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useLang } from '../../context/LanguageContext.jsx';
import { t } from '../../data/translations.js';

const links = [
  { name: { en: 'About',    fr: 'À Propos'     }, href: '#about' },
  { name: { en: 'Services', fr: 'Services'      }, href: '#services' },
  { name: { en: 'Projects', fr: 'Projets'       }, href: '#projects' },
  { name: { en: 'Skills',   fr: 'Compétences'   }, href: '#skills' },
  { name: { en: 'Journey',  fr: 'Parcours'      }, href: '#journey' },
  { name: { en: 'Contact',  fr: 'Contact'       }, href: '#contact' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const tx = t[lang].footer;
  const isHome = pathname === '/';
  const navHref = (hash) => isHome ? hash : `/${hash}`;

  return (
    <footer className="bg-[#18181B] border-t border-zinc-800">
      <div className="max-container padding-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="heading-sm text-white hover:text-brand transition-colors duration-300">
            &lt;Afanyu/&gt;
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={navHref(l.href)} className="body-sm text-zinc-400 hover:text-white transition-colors duration-300">
                {l.name[lang]}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/Afanyu-Emmanuel-Delonie' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/afanyu-emmanuel' },
              { icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/afanyudelonie?igsh=YWx6Y3I4a2hhdDhx' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#F59E0B]/50 hover:text-brand text-zinc-400 flexCenter transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="body-sm text-zinc-600">
            © {new Date().getFullYear()} &lt;Afanyu/&gt;. {tx.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
