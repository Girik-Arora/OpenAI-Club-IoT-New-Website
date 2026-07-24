import React from 'react';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';
import { Sparkles, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24 relative z-20 font-sans">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN: MAIN TITLE & LOGO INFO */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left bg-black/65 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/90">
          
          {/* Top Badge Pill: IEI TCET ASSOCIATED CLUB */}
          <div className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-lg px-4 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-default mb-6 shadow-lg">
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

          {/* OpenAI Club IoT Official Emblem + Name */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 mb-6">
            <OpenAIClubIotLogo className="w-24 sm:w-28 h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] flex-none" variant="light" />
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                OpenAI Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white">IoT</span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-orange-400 tracking-widest uppercase mt-1">
                TCET Student Chapter • Innovation Hub
              </p>
            </div>
          </div>

          {/* Subheadline / Description */}
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-xl mb-8 drop-shadow-sm">
            OpenAI Club of IoT is a premier student-led innovation hub dedicated to artificial intelligence, embedded hardware, machine learning, and real-world smart technology prototyping at TCET Mumbai.
          </p>

          {/* Key Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full border-t border-white/15 pt-6">
            <div className="flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white/90">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>AI & Hardware Integration</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white/90">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Faculty & Student Board</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: GLASSMORPHISM TEAM & FACULTY PHOTO SHOWCASE */}
        <div className="lg:col-span-6">
          <div className="group relative bg-black/60 backdrop-blur-2xl border border-white/25 rounded-3xl p-4 sm:p-5 shadow-2xl hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(249,115,22,0.2)] transition-all duration-500">
            
            {/* Glowing inner halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Header Badge overlay */}
            <div className="flex items-center justify-between mb-3.5 px-2 relative z-10">
              <div className="inline-flex items-center space-x-2 bg-black/70 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-md shadow-md">
                <Users className="w-3.5 h-3.5 text-orange-400" />
                <span>Team & Faculty Leadership</span>
              </div>
              <span className="text-[11px] font-mono text-white/60 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                TCET Mumbai
              </span>
            </div>

            {/* Photo Container Viewport */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/80 shadow-xl group-hover:border-white/30 transition-all duration-500">
              <img
                src="https://res.cloudinary.com/ilmaxkyq/image/upload/v1784908329/download_6_cuxh3y.png"
                alt="OpenAI Club IoT Team and Faculty"
                className="w-full h-auto object-contain filter brightness-105 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glassmorphic Footer Caption inside card */}
            <div className="mt-3.5 px-2 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90 relative z-10">
              <span className="font-semibold text-white tracking-tight">
                OpenAI Club IoT <span className="text-orange-400">&</span> IEI TCET Board
              </span>
              <span className="text-[11px] font-mono text-white/70">
                Founding Committee
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

