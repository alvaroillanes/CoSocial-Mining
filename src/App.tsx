/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Opportunity from './components/Opportunity';
import CalendlySection from './components/CalendlySection';
import Footer from './components/Footer';
import DueDiligence from './components/DueDiligence';
import SEO from './components/SEO';
import { AuthProvider } from './components/AuthProvider';

function HomePage() {
  return (
    <>
      <SEO 
        title="Inicio" 
        description="CoSocial Mining conecta capital con propiedad minera real en Chile. Participa en activos estratégicos como Litio y Tierras Raras." 
        url="/"
      />
      <Hero />
      <ProjectInfo />
      <Opportunity />
      <CalendlySection />
    </>
  );
}

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-black font-sans selection:bg-emerald-500 selection:text-black min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto" element={
            <>
              <SEO title="El Proyecto" description="Detalles técnicos y estratégicos del Proyecto Maricunga." url="/proyecto" />
              <div className="pt-20"><ProjectInfo /></div>
              <CalendlySection />
            </>
          } />
          <Route path="/oportunidad" element={
            <>
              <SEO title="Oportunidad de Inversión" description="Conoce las ventajas de invertir en minería estratégica con CoSocial Mining." url="/oportunidad" />
              <div className="pt-20"><Opportunity /></div>
              <CalendlySection />
            </>
          } />
          <Route path="/due-diligence" element={<DueDiligence />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Layout />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

