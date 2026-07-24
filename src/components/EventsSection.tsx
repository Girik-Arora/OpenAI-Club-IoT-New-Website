import React, { useState } from 'react';
import { eventsData, EventItem } from '../data/events';
import { Calendar, Users, ArrowUpRight, Sparkles, FileText, Download, X, MapPin, User, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EventsSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'2026' | '2025'>('2026');
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = eventsData.filter((ev) => ev.year === selectedYear);

  return (
    <section id="events" className="w-full bg-transparent text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Category Eyebrow */}
        <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>PAST & UPCOMING ACTIVITIES</span>
        </div>

        {/* Large Display Title: Events We Conducted */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 sm:mb-10 max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          Events We Conducted
        </h2>

        {/* Year Selector Buttons: 2026/27 & 2025/26 */}
        <div className="inline-flex items-center bg-black/65 border border-white/20 p-1.5 rounded-full mb-12 sm:mb-16 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setSelectedYear('2026')}
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedYear === '2026'
                ? 'bg-white text-black font-bold shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            2026/27 Events
          </button>
          <button
            onClick={() => setSelectedYear('2025')}
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedYear === '2025'
                ? 'bg-white text-black font-bold shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            2025/26 Events
          </button>
        </div>

        {/* Expandable Image Cards Grid/Flex */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-4 sm:gap-6 min-h-[480px] sm:min-h-[520px] w-full"
            >
              {filteredEvents.map((ev, index) => {
                const isHovered = hoveredEventId === ev.id || (hoveredEventId === null && index === 0);

                return (
                  <motion.div
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev)}
                    onMouseEnter={() => setHoveredEventId(ev.id)}
                    onMouseLeave={() => setHoveredEventId(null)}
                    layout
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className={`relative rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 cursor-pointer group flex flex-col justify-end ${
                      isHovered
                        ? 'md:flex-[2.8] lg:flex-[3] shadow-2xl shadow-white/10 border-white/50'
                        : 'md:flex-1 opacity-80 hover:opacity-100'
                    } h-[420px] md:h-auto`}
                  >
                    {/* Background Image with Dark Vignette Gradient */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isHovered ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      {/* Dark Overlay Gradient matching reference style */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* Card Content Container */}
                    <div className="relative z-10 p-6 sm:p-8 text-left flex flex-col justify-end h-full">
                      
                      {/* Category Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white">
                          {ev.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Main Title on Image */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-2">
                        {ev.title}
                      </h3>

                      {/* Extended Description revealed on hover / when expanded */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isHovered ? 'auto' : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal mt-2 mb-4 max-w-lg">
                          {ev.description}
                        </p>

                        <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-white/70 font-medium">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1.5">
                              <Calendar className="w-3.5 h-3.5 text-white/80" />
                              <span>{ev.date}</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Users className="w-3.5 h-3.5 text-white/80" />
                              <span>{ev.attendees}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Compact Date shown when not expanded on desktop */}
                      {!isHovered && (
                        <div className="hidden md:flex items-center space-x-1 text-[11px] text-white/70 font-mono mt-1">
                          <Calendar className="w-3 h-3 text-white/60" />
                          <span>{ev.date}</span>
                        </div>
                      )}

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Upcoming Events Banner for 2026 */}
        {selectedYear === '2026' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mt-10 p-6 sm:p-8 rounded-3xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 group cursor-pointer hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 flex-none shadow-md">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-orange-400 transition-colors">
                  More exciting events upcoming soon!
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-medium">
                  Stay tuned for upcoming hackathons, AIoT tech sprints, and expert industry seminars.
                </p>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white uppercase tracking-wider font-mono self-start sm:self-auto">
              AY 2026-27 Season
            </div>
          </motion.div>
        )}

      </div>

      {/* EVENT POP-UP MODAL WITH FULL IMAGE & DETAILED REPORT BREAKDOWN */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl bg-black/90 border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:bg-black transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8 text-left">
                {/* Full-width High Resolution Image Preview */}
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/15 relative bg-neutral-900 shadow-2xl">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest bg-orange-500/20 border border-orange-500/40 text-orange-300 px-3.5 py-1.5 rounded-full font-bold backdrop-blur-md">
                      {selectedEvent.category}
                    </span>
                    <span className="text-xs font-mono text-white/80 bg-black/60 border border-white/20 px-3 py-1 rounded-full">
                      Academic Year {selectedEvent.year}
                    </span>
                  </div>
                </div>

                {/* Event Header */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3 font-sans">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans">
                    {selectedEvent.longDescription || selectedEvent.description}
                  </p>
                </div>

                {/* Event Metadata Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="flex items-center space-x-1.5 text-orange-400 text-xs font-mono mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Date</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">{selectedEvent.date}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="flex items-center space-x-1.5 text-blue-400 text-xs font-mono mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Turnout</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">{selectedEvent.attendees}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-mono mb-1">
                      <User className="w-3.5 h-3.5" />
                      <span>Speaker / Lead</span>
                    </div>
                    <p className="text-xs font-medium text-white/90 line-clamp-1">{selectedEvent.speaker}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="flex items-center space-x-1.5 text-purple-400 text-xs font-mono mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Venue</span>
                    </div>
                    <p className="text-xs font-medium text-white/90 line-clamp-1">{selectedEvent.venue}</p>
                  </div>
                </div>

                {/* Event Highlights & Learnings */}
                {selectedEvent.highlights && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-sm font-bold text-orange-400 uppercase tracking-widest font-mono mb-4 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Event Highlights & Takeaways</span>
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-white/85">
                      {selectedEvent.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-none mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modal Footer with PDF Download Link */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-mono text-white/60">Official Event Activity Report</span>
                  
                  {selectedEvent.reportUrl ? (
                    <a
                      href={selectedEvent.reportUrl}
                      download
                      className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 cursor-pointer w-full sm:w-auto justify-center"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download Official Event Report (PDF)</span>
                      <Download className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-white/50">Report Available On Request</span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
