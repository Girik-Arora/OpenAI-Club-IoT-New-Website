import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TeamSection } from './components/TeamSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ScrollCanvas } from './components/ScrollCanvas';
import { NavItem } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('Home');
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleNavClick = (nav: NavItem) => {
    setActiveNav(nav);
    if (nav === 'About Us') {
      const el = document.getElementById('about-us');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (nav === 'Events') {
      const el = document.getElementById('events');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (nav === 'Projects') {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (nav === 'Team') {
      const el = document.getElementById('team');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (nav === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-transparent text-white font-sans flex flex-col justify-between selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Background Frame Scroll Animation Canvas */}
      <ScrollCanvas />

      {/* Main UI Overlay Container */}
      <div className="w-full relative z-10 flex flex-col min-h-screen justify-between py-2 sm:py-4">
        {/* Top Header */}
        <Header
          activeNav={activeNav}
          setActiveNav={handleNavClick}
          onContactClick={() => setContactModalOpen(true)}
        />

        {/* Main Banner Hero Section */}
        <main className="flex-1 flex flex-col justify-center my-auto min-h-[85vh]">
          <Hero />
        </main>

        {/* Second Section: About Us */}
        <AboutSection />

        {/* Third Section: Events We Conducted */}
        <EventsSection />

        {/* Fourth Section: Projects */}
        <ProjectsSection onContactClick={() => setContactModalOpen(true)} />

        {/* Fifth Section: Team */}
        <TeamSection />

        {/* Sixth Section: Footer & Location Map */}
        <FooterSection onNavClick={handleNavClick} />
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

