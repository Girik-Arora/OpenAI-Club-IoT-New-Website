import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { allTestimonialPages } from '../data/testimonials';
import {
  TripAdvisorLogo,
  GoogleLogo,
  ClutchLogo,
  TrustpilotLogo,
  RatingStars,
} from './PlatformLogos';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = allTestimonialPages.length;
  const currentTestimonials = allTestimonialPages[currentPage];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const renderPlatformLogo = (platform: Testimonial['platform']) => {
    switch (platform) {
      case 'TripAdvisor':
        return <TripAdvisorLogo className="w-5 h-5 text-white" />;
      case 'Google':
        return <GoogleLogo className="w-5 h-5 text-white" />;
      case 'Clutch':
        return <ClutchLogo className="w-12 h-5 text-white" />;
      case 'Trustpilot':
        return <TrustpilotLogo className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-20">
      {/* Header Row: Title on Left, Controls on Right */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div className="flex items-center space-x-2.5">
          <Quote className="w-5 h-5 text-white fill-white/20 rotate-180" />
          <h2 className="text-sm sm:text-base font-normal text-white tracking-wide">
            What They Say About Us
          </h2>
        </div>

        {/* Arrow Navigation Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* 4 Testimonial Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {currentTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/10 shadow-lg shadow-black/60 group"
          >
            <div>
              {/* Card Header: Platform Icon + Label */}
              <div className="flex items-center space-x-2 mb-4">
                {renderPlatformLogo(item.platform)}
                <span className="text-[11px] text-white/70 tracking-tight font-light">
                  {item.platformText}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal mb-8 min-h-[56px] line-clamp-3">
                {item.quote}
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-medium text-white">
                    {item.author}
                  </span>
                  <span className="text-[10px] text-white/60">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Stars & Rating */}
              <RatingStars rating={item.rating} count={item.stars} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              currentPage === idx
                ? 'w-6 h-1.5 bg-white rounded-full'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60 rounded-full'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
