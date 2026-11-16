import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import useSEO from '../../hooks/useSEO.js';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Afanyu Emmanuel',
    description: 'This page does not exist. Head back to explore projects, design case studies, and more from Afanyu Emmanuel.',
    url: '/404',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-[#18181B] text-white flex flex-col">
      <Nav />
      <main className="flex-1 flexCenter flex-col gap-6 padding-container text-center pt-32 pb-16">
        <p className="label-xs text-brand">404</p>
        <h1 className="heading-lg text-white">Page not found</h1>
        <p className="body-md text-zinc-400 max-w-md">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-2">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
