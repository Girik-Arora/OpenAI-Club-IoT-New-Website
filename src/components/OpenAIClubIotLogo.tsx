import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const OpenAIClubIotLogo: React.FC<LogoProps> = ({
  className = "w-36 h-auto",
}) => {
  return (
    <img
      src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/image_3_ekqien"
      alt="OpenAI Club IoT Logo"
      className={`object-contain ${className}`}
    />
  );
};


