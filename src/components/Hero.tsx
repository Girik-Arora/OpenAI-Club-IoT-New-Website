import React, { useState } from 'react';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';
import { Users, Crown, Award, Sparkles, X, Touchpad } from 'lucide-react';

interface MemberHotspot {
  id: string;
  name: string;
  role: string;
  badge: string;
  left: string;
  top: string;
  width: string;
  height: string;
  popoutLeft: string;
  popoutTop: string;
  accentColor: string;
  bgGlow: string;
}

const teamHotspots: MemberHotspot[] = [
  {
    id: 'sujata',
    name: 'Dr. Sujata Alegavi',
    role: 'Faculty Incharge',
    badge: 'HoD - IoT Department',
    left: '12%',
    top: '15%',
    width: '24%',
    height: '75%',
    popoutLeft: '24%',
    popoutTop: '8%',
    accentColor: 'border-blue-400 text-blue-400 bg-blue-500/20 shadow-blue-500/50',
    bgGlow: 'rgba(59, 130, 246, 0.4)',
  },
  {
    id: 'girik',
    name: 'Mr. Girik Arora',
    role: 'Chairperson',
    badge: 'Executive Leader',
    left: '36%',
    top: '12%',
    width: '24%',
    height: '80%',
    popoutLeft: '48%',
    popoutTop: '5%',
    accentColor: 'border-orange-400 text-orange-400 bg-orange-500/20 shadow-orange-500/50',
    bgGlow: 'rgba(249, 115, 22, 0.45)',
  },
  {
    id: 'aayush',
    name: 'Mr. Aayush Randive',
    role: 'Vice Chairperson',
    badge: 'Core Operations',
    left: '60%',
    top: '15%',
    width: '20%',
    height: '75%',
    popoutLeft: '70%',
    popoutTop: '8%',
    accentColor: 'border-emerald-400 text-emerald-400 bg-emerald-500/20 shadow-emerald-500/50',
    bgGlow: 'rgba(16, 185, 129, 0.4)',
  },
  {
    id: 'samannoy',
    name: 'Mr. Samannoy Bera',
    role: 'Secretary',
    badge: 'Relations & Docs',
    left: '80%',
    top: '15%',
    width: '18%',
    height: '75%',
    popoutLeft: '88%',
    popoutTop: '8%',
    accentColor: 'border-purple-400 text-purple-400 bg-purple-500/20 shadow-purple-500/50',
    bgGlow: 'rgba(168, 85, 247, 0.4)',
  },
];

export const Hero: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<MemberHotspot | null>(teamHotspots[1]); // Default Girik Arora selected

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

        {/* GLASSMORPHISM TEAM & FACULTY PHOTO SHOWCASE */}
        <div className="w-full max-w-3xl mt-4 group relative bg-neutral-950/80 backdrop-blur-2xl border border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl transition-all duration-500">
          
          {/* Glowing ambient backdrop aura */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Header Badge & Interactive Hint */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2 px-2 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-black/70 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-md shadow-md">
              <Users className="w-3.5 h-3.5 text-orange-400" />
              <span>Team & Faculty Leadership</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-orange-300/90 bg-orange-500/15 px-3 py-1 rounded-full border border-orange-500/30 animate-pulse">
              <Sparkles className="w-3 h-3 text-orange-400" />
              <span>Tap any member to reveal role!</span>
            </div>
          </div>

          {/* Quick Select Member Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 relative z-10">
            {teamHotspots.map((m) => {
              const isSelected = selectedMember?.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMember(isSelected ? null : m)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-white text-black font-bold shadow-lg scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                  }`}
                >
                  <span>{m.name.split(' ')[1] || m.name}</span>
                  <span className="text-[10px] opacity-75">({m.role.split(' ')[0]})</span>
                </button>
              );
            })}
          </div>

          {/* Photo Display Viewport with Interactive Hotspots */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl transition-all duration-500">
            
            {/* The Main Group Image */}
            <img
              src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto:best/v1784908676/IMG_5801_uj8qt7.jpg"
              alt="OpenAI Club IoT Team & Faculty"
              className="w-full h-auto object-contain filter contrast-[1.03] brightness-105 transition-transform duration-700 ease-out"
              loading="eager"
            />

            {/* Clickable Hotspot Zones overlay */}
            {teamHotspots.map((m) => {
              const isSelected = selectedMember?.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMember(isSelected ? null : m)}
                  style={{
                    left: m.left,
                    top: m.top,
                    width: m.width,
                    height: m.height,
                  }}
                  className={`absolute rounded-2xl transition-all duration-300 cursor-pointer z-20 ${
                    isSelected
                      ? 'border-2 border-orange-400 bg-orange-500/20 backdrop-blur-[2px] shadow-[0_0_30px_rgba(249,115,22,0.8)] scale-105'
                      : 'hover:border hover:border-white/50 hover:bg-white/10'
                  }`}
                  aria-label={`Highlight ${m.name}`}
                >
                  {/* Glowing Body Outline Halo on selection */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-orange-300 animate-ping opacity-30 pointer-events-none" />
                  )}
                </button>
              );
            })}

            {/* ROLE POPOUT BADGE (OVER THE SELECTED HEAD) */}
            {selectedMember && (
              <div
                style={{
                  left: selectedMember.popoutLeft,
                  top: selectedMember.popoutTop,
                  transform: 'translate(-50%, -100%)',
                }}
                className="absolute z-30 pointer-events-auto animate-in zoom-in-95 fade-in duration-200"
              >
                <div className="relative bg-black/90 backdrop-blur-xl border border-orange-500/60 rounded-2xl px-4 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-none">
                    <Crown className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center space-x-1.5">
                      <span>{selectedMember.name}</span>
                    </h5>
                    <p className="text-[11px] font-semibold text-orange-400 font-mono">
                      {selectedMember.role}
                    </p>
                    <p className="text-[9px] text-white/70">
                      {selectedMember.badge}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-1 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  {/* Down Arrow Indicator pointing to head */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-orange-500/80" />
                </div>
              </div>
            )}

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


