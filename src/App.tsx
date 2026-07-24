import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ScrollCanvas } from './components/ScrollCanvas';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full bg-transparent text-white font-sans flex flex-col justify-between selection:bg-white selection:text-black overflow-x-hidden relative">
        {/* Background Frame Scroll Animation Canvas */}
        <ScrollCanvas />

        {/* Main UI Overlay Container */}
        <div className="w-full relative z-10 flex flex-col min-h-screen justify-between py-2 sm:py-4">
          {/* Top Header */}
          <Header onContactClick={() => setContactModalOpen(true)} />

          {/* Dynamic Page Routes */}
          <div className="flex-1 py-6 sm:py-12">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route
                path="/projects"
                element={<ProjectsPage onContactClick={() => setContactModalOpen(true)} />}
              />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </div>

          {/* Footer & Location Map */}
          <FooterSection />
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </div>
    </Router>
  );
}

