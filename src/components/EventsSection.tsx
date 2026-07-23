import React, { useState } from 'react';
import { eventsData, EventItem } from '../data/events';
import { Calendar, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EventsSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'2026' | '2025'>('2026');
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

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

        {/* Year Selector Buttons: 2026 & 2025 */}
        <div className="inline-flex items-center bg-black/65 border border-white/20 p-1.5 rounded-full mb-12 sm:mb-16 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setSelectedYear('2026')}
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedYear === '2026'
                ? 'bg-white text-black font-bold shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            2026 Events
          </button>
          <button
            onClick={() => setSelectedYear('2025')}
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedYear === '2025'
                ? 'bg-white text-black font-bold shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            2025 Events
          </button>
        </div>

        {/* Expandable Image Cards Grid/Flex (Matching Reference Design) */}
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

                        <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[11px] sm:text-xs text-white/70 font-medium">
                          <div className="flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5 text-white/80" />
                            <span>{ev.date}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Users className="w-3.5 h-3.5 text-white/80" />
                            <span>{ev.attendees}</span>
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

      </div>
    </section>
  );
};
