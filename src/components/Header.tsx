import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';
import { NavItem } from '../types';

interface HeaderProps {
  onContactClick: () => void;
}

const navRoutes: { name: NavItem; path: string }[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
];

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 flex items-center justify-between text-white relative z-30">
      <div className="w-full flex items-center justify-between bg-black/65 backdrop-blur-xl border border-white/20 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/90">
        {/* Top Left: Logo + Open AI Club IoT Text */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-left cursor-pointer hover:opacity-90 transition-opacity"
        >
          <OpenAIClubIotLogo className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="font-semibold text-sm sm:text-base text-white tracking-tight drop-shadow-md">
            Open AI Club IoT
          </span>
        </div>

        {/* Top Center: Pill Navigation */}
        <nav className="hidden md:flex items-center bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-2 py-1 shadow-inner">
          {navRoutes.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={name}
                onClick={() => navigate(path)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {name}
              </button>
            );
          })}
        </nav>

        {/* Top Right: Contact us for projects Button */}
        <div className="flex items-center">
          <button
            onClick={onContactClick}
            className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white border border-white/30 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-white/20"
          >
            Contact us for projects
          </button>
        </div>
      </div>
    </header>
  );
};
