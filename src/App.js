import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './components/Header/Header';
import Hero from './components/Hero/Hero';  // Asegúrate de que el import coincida con el nombre del componente
import Servicios from './components/Services/Services';
import Testimonios from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Encabezado />
        <main>
          <Hero />
          <Servicios />
          <Testimonios />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;