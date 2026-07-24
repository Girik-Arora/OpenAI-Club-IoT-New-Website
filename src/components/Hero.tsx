import React from 'react';
import { IeiTcetLogo } from './IeiTcetLogo';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';

export const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24 flex flex-col items-center text-center relative z-20">
      <div className="w-full flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/80">
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
        <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Open AI Club of IoT is a student-led innovation hub focused on artificial intelligence, embedded systems and real-world engineering.
        </p>
      </div>
    </section>
  );
};
