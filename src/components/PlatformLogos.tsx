import React from 'react';

export const OpenAIClubLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-6' }) => (
  <svg
    viewBox="0 0 120 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Minimalist Tech/AI/IoT Wing + Node Swoosh Logo */}
    <path
      d="M2 28C18 20 42 14 68 18C94 22 110 32 118 40C112 28 92 10 64 4C36 -2 14 12 2 28Z"
      fill="#FFFFFF"
    />
    <path
      d="M18 36C32 28 54 26 78 30C100 34 112 42 118 46C108 36 90 22 66 18C42 14 26 24 18 36Z"
      fill="#FFFFFF"
      fillOpacity="0.75"
    />
    <circle cx="108" cy="36" r="3" fill="#FFFFFF" />
    <circle cx="64" cy="4" r="2.5" fill="#FFFFFF" />
  </svg>
);

export const WingLogo = OpenAIClubLogo;

export const TripAdvisorLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="7.5" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="16.5" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="7.5" cy="12" r="1.5" fill="#FFFFFF" />
    <circle cx="16.5" cy="12" r="1.5" fill="#FFFFFF" />
    <path d="M12 9C12.8 9 13.5 9.5 14 10.2M12 9C11.2 9 10.5 9.5 10 10.2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 8.5C6 6.5 9 5.5 12 5.5C15 5.5 18 6.5 20 8.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#FFFFFF"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#FFFFFF"
      fillOpacity="0.9"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FFFFFF"
      fillOpacity="0.8"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ClutchLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <text x="2" y="16" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="DM Sans, sans-serif">
      Clutch
    </text>
  </svg>
);

export const TrustpilotLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const RatingStars: React.FC<{ rating: string; count?: number }> = ({ rating, count = 5 }) => {
  return (
    <div className="flex items-center space-x-1.5">
      <span className="text-xs font-semibold text-white tracking-wider">{rating}</span>
      <div className="flex text-white text-[10px] space-x-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="text-white text-[11px]">★</span>
        ))}
      </div>
    </div>
  );
};
