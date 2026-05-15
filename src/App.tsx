/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import ProjectsCatalogue from './components/ProjectsCatalogue';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { projects } from './data/projects';

function HomePage() {
  const maricunga = projects.find(p => p.id === 'maricunga')!;

  return (
    <>
      <SEO 
        title="Inicio" 
        description="CoSocial Mining conecta interesados con proyectos mineros reales en Chile. Explora activos estratégicos como Tierras Raras." 
        url="/"
      />
      <Hero />
      <About />
      <FeaturedProject project={maricunga} />
      <ProjectsCatalogue />
      <HowItWorks />
    </>
  );
}

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white font-sans min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  );
}

