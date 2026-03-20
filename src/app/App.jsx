import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Loader from './components/Loader.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import TechStack from './components/TechStack.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import HowIWork from './components/HowIWork.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <TechStack />
      <Skills />
      <Projects />
      <Journey />
      <HowIWork />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onDone={() => setLoading(false)} />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
