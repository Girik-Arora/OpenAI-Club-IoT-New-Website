import React from 'react';
import { Hero } from '../components/Hero';

export const HomePage: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col justify-center my-auto min-h-[85vh]">
      <Hero />
    </main>
  );
};
