import React from 'react';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';
import { Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24 flex flex-col items-center text-center relative z-20 font-sans">
      
      {/* Main Glassmorphic Container for Title & Logo */}
      <div className="w-full flex flex-col items-center bg-black/60 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/80">
        
        {/* Top Badge Pill: IEI TCET ASSOCIATED CLUB */}
        <div className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/20 border border-white/30 backdrop-blur-lg px-4 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-default mb-6 sm:mb-8 shadow-lg shadow-black/90">
          <div className="flex items-center bg-white text-black px-2 py-1 rounded-md shadow-sm">
            <img
              src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/iei-logo_2_wcjjok"
              alt="IEI TCET Logo"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase drop-shadow-sm">
            IEI TCET ASSOCIATED CLUB
          </span>
        </div>

        {/* OpenAI Club IoT Official Emblem */}
        <div className="mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105">
          <OpenAIClubIotLogo className="w-36 sm:w-44 h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]" variant="light" />
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] max-w-4xl mb-6 sm:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          OpenAI Club IoT
        </h1>

        {/* Subheadline / Description */}
        <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8">
          Open AI Club of IoT is a student-led innovation hub focused on artificial intelligence, embedded systems and real-world engineering.
        </p>

        {/* GLASSMORPHISM TEAM & FACULTY PHOTO SHOWCASE (CENTERED BELOW TITLE) */}
        <div className="w-full max-w-3xl mt-4 group relative bg-neutral-950/80 backdrop-blur-2xl border border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(249,115,22,0.2)] transition-all duration-500">
          
          {/* Glowing ambient backdrop aura */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Header Badge Overlay */}
          <div className="flex items-center justify-between mb-4 px-2 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-black/70 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-md shadow-md">
              <Users className="w-3.5 h-3.5 text-orange-400" />
              <span>Team & Faculty Leadership</span>
            </div>
            <span className="text-[11px] font-mono text-white/70 bg-white/10 px-3 py-0.5 rounded-md border border-white/10">
              TCET Mumbai
            </span>
          </div>

          {/* Photo Display Viewport */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl group-hover:border-white/40 transition-all duration-500">
            <img
              src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto:best/v1784908676/IMG_5801_uj8qt7.jpg"
              alt="OpenAI Club IoT Team & Faculty"
              className="w-full h-auto object-contain filter contrast-[1.03] brightness-105 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>

          {/* Footer Caption */}
          <div className="mt-4 px-2 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90 relative z-10">
            <span className="font-semibold text-white tracking-tight">
              OpenAI Club IoT <span className="text-orange-400">&</span> IEI TCET Board
            </span>
            <span className="text-[11px] font-mono text-white/70">
              Founding Committee
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

