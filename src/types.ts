export interface Testimonial {
  id: string;
  platform: 'TripAdvisor' | 'Google' | 'Clutch' | 'Trustpilot';
  platformText: string;
  quote: string;
  author: string;
  role: string;
  rating: string;
  stars: number;
  avatar: string;
}

export type NavItem = 'Home' | 'About Us' | 'Events' | 'Projects' | 'Team';

export type Language = 'EN' | 'ES' | 'FR' | 'DE' | 'JA';
