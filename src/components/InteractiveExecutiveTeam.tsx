import React, { useState, useRef, useEffect } from 'react';
import { Award, Sparkles, UserCheck } from 'lucide-react';

interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  badge: string;
  headX: number; // Percentage from left (0 - 100)
  headY: number; // Percentage from top (0 - 100)
  clipPath: string; // CSS clip-path polygon for silhouette selection
}

const executiveMembers: ExecutiveMember[] = [
  {
    id: 'sujata',
    name: 'Dr. Sujata Alegavi',
    role: 'Faculty Incharge of OpenAI Club IoT',
    subtitle: 'Head of Department (HoD) - IoT',
    badge: 'Faculty Advisory',
    headX: 18,
    headY: 15,
    clipPath: 'polygon(5% 15%, 28% 12%, 30% 88%, 4% 88%)',
  },
  {
    id: 'girik',
    name: 'Mr. Girik Arora',
    role: 'Chairperson',
    subtitle: 'OpenAI Club IoT 2026/27',
    badge: 'Executive Leader',
    headX: 34,
    headY: 12,
    clipPath: 'polygon(24% 10%, 43% 10%, 45% 90%, 22% 90%)',
  },
  {
    id: 'aayush',
    name: 'Mr. Aayush Randive',
    role: 'Vice Chairperson',
    subtitle: 'Core Technical Operations',
    badge: 'Core Leadership',
    headX: 50,
    headY: 14,
    clipPath: 'polygon(40% 12%, 58% 12%, 60% 90%, 38% 90%)',
  },
  {
    id: 'samannoy',
    name: 'Mr. Samannoy Bera',
    role: 'Secretary',
    subtitle: 'Operations & Public Relations',
    badge: 'Executive Board',
    headX: 66,
    headY: 14,
    clipPath: 'polygon(55% 12%, 75% 12%, 77% 90%, 54% 90%)',
  },
  {
    id: 'advisory',
    name: 'IEI & Core Advisory Board',
    role: 'Student Advisors & Mentors',
    subtitle: 'Institutional & Technical Guidance',
    badge: 'Advisory Board',
    headX: 82,
    headY: 16,
    clipPath: 'polygon(72% 14%, 96% 14%, 96% 90%, 72% 90%)',
  },
];

export const InteractiveExecutiveTeam: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeMember = executiveMembers.find((m) => m.id === activeId);

  // Close active card when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mt-6 group relative bg-neutral-950/90 backdrop-blur-2xl border border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl transition-all duration-500 font-sans select-none overflow-visible"
      onMouseLeave={() => setActiveId(null)}
    >
      {/* Background Glow Orb on Hover */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/15 via-amber-500/5 to-blue-600/15 transition-opacity duration-700 pointer-events-none ${
          activeId ? 'opacity-100' : 'opacity-40'
        }`}
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4 px-2 relative z-20">
        <div className="inline-flex items-center space-x-2 bg-black/80 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>Interactive Executive Board</span>
        </div>
        <span className="text-[11px] font-mono text-white/70 bg-white/10 px-3 py-0.5 rounded-md border border-white/10">
          {activeMember ? `Highlighting: ${activeMember.name}` : 'Hover or tap members'}
        </span>
      </div>

      {/* Interactive Photo Viewport */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl transition-all duration-500">
        
        {/* Base Group Photo (Dimmed & Blurred when a member is active) */}
        <img
          src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto:best/v1784908676/IMG_5801_uj8qt7.jpg"
          alt="OpenAI Club IoT Team & Faculty"
          className={`w-full h-auto object-contain transition-all duration-500 ease-out ${
            activeId
              ? 'filter brightness-50 contrast-90 grayscale-[40%] blur-[1px] opacity-45'
              : 'filter brightness-105 contrast-[1.03] opacity-100'
          }`}
          loading="eager"
        />

        {/* Dynamic Spotlight Glow Effect behind Active Member */}
        {activeMember && (
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out z-10"
            style={{
              background: `radial-gradient(circle 180px at ${activeMember.headX}% ${activeMember.headY + 25}%, rgba(249, 115, 22, 0.45), rgba(249, 115, 22, 0.1) 60%, transparent 80%)`,
            }}
          />
        )}

        {/* Highlighted Member Overlay Layer (Isolated silhouette highlight with outline & scale) */}
        {executiveMembers.map((member) => {
          const isActive = activeId === member.id;
          return (
            <div
              key={member.id}
              className="absolute inset-0 pointer-events-none z-20 transition-all duration-300 ease-out"
              style={{
                clipPath: member.clipPath,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(-10px) scale(1.04)' : 'translateY(0) scale(1)',
                filter: isActive
                  ? 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.95)) drop-shadow(0 0 35px rgba(251, 146, 60, 0.6)) brightness(1.15) contrast(1.05)'
                  : 'none',
              }}
            >
              <img
                src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto:best/v1784908676/IMG_5801_uj8qt7.jpg"
                alt={member.name}
                className="w-full h-auto object-contain"
              />
            </div>
          );
        })}

        {/* Invisible Hotspots with custom silhouette clip-paths for precise hover detection */}
        {executiveMembers.map((member) => (
          <div
            key={`hotspot-${member.id}`}
            onMouseEnter={() => setActiveId(member.id)}
            onClick={() => setActiveId(activeId === member.id ? null : member.id)}
            className="absolute inset-0 cursor-pointer z-30 transition-colors duration-200"
            style={{
              clipPath: member.clipPath,
            }}
            title={member.name}
          />
        ))}

        {/* Floating Glassmorphism Info Card (Animated fadeIn, scale & float above active head) */}
        {activeMember && (
          <div
            className="absolute z-40 pointer-events-none transform -translate-x-1/2 transition-all duration-300 ease-out animate-in fade-in zoom-in-95 slide-in-from-bottom-3"
            style={{
              left: `${activeMember.headX}%`,
              top: `${Math.max(5, activeMember.headY - 12)}%`,
            }}
          >
            <div className="relative bg-black/90 backdrop-blur-2xl border border-orange-500/60 text-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(249,115,22,0.4)] flex flex-col items-center text-center min-w-[200px] max-w-[260px]">
              
              {/* Top Accent Pill */}
              <div className="inline-flex items-center space-x-1.5 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                <UserCheck className="w-3 h-3 text-orange-400" />
                <span>{activeMember.badge}</span>
              </div>

              {/* Member Name */}
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight drop-shadow-md font-sans">
                {activeMember.name}
              </h4>

              {/* Member Role & Subtitle */}
              <p className="text-xs font-semibold text-orange-300 font-sans mt-0.5">
                {activeMember.role}
              </p>
              <p className="text-[10px] font-mono text-white/70 mt-0.5">
                {activeMember.subtitle}
              </p>

              {/* Glassmorphism Pointer Caret Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 border-r border-b border-orange-500/60 rotate-45" />
            </div>
          </div>
        )}

      </div>

      {/* Footer Caption */}
      <div className="mt-4 px-2 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90 relative z-20">
        <span className="font-semibold text-white tracking-tight flex items-center space-x-2">
          <Award className="w-4 h-4 text-orange-400" />
          <span>OpenAI Club IoT <span className="text-orange-400">&</span> IEI TCET Board</span>
        </span>
        <span className="text-[11px] font-mono text-white/70">
          Executive Leadership Team
        </span>
      </div>
    </div>
  );
};
