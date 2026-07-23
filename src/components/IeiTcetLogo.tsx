import React from 'react';

export const IeiTcetLogo: React.FC<{ className?: string }> = ({ className = "h-6 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 420 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Seal Circle */}
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="1.5" />

      {/* Inner Engineer Wheel / Gear Symbol */}
      <circle cx="40" cy="40" r="16" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 18 V22 M40 58 V62 M18 40 H22 M58 40 H62 M24 24 L27 27 M53 53 L56 56 M24 56 L27 53 M53 27 L56 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* IEI Block Text */}
      <text x="92" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="38" fill="currentColor" letterSpacing="1">
        IEI
      </text>
      <text x="93" y="66" fontFamily="sans-serif" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="6">
        TCET
      </text>

      {/* Divider Bar */}
      <line x1="180" y1="12" x2="180" y2="68" stroke="currentColor" strokeWidth="2" opacity="0.6" />

      {/* Full Name Stack */}
      <text x="196" y="38" fontFamily="sans-serif" fontWeight="600" fontSize="20" fill="currentColor">
        The Institution of
      </text>
      <text x="196" y="62" fontFamily="sans-serif" fontWeight="700" fontSize="22" fill="currentColor">
        Engineers (India)
      </text>
    </svg>
  );
};
