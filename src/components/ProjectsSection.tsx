import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/projects';
import { ArrowRight, ExternalLink, X, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Quadruple the project items to create a seamless infinite news broadcast loop
  const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

  return (
    <section id="projects" className="w-full bg-transparent text-white py-24 sm:py-32 relative z-20 border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label in Orange Accent */}
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
          Behind the Innovations
        </span>

        {/* Large Display Title: Curious What We Create */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          Curious What We Create
        </h2>

        {/* Sub-description */}
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-8 font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          Explore hardware prototypes, AI neural nodes, autonomous robotics, and connected systems engineered by OpenAI Club IoT members.
        </p>

        {/* Action Button: create projects with us! */}
        <div 
          onClick={onContactClick}
          className="inline-flex items-center space-x-3 bg-black/65 hover:bg-black/80 border border-white/20 px-6 py-3 rounded-full mb-16 backdrop-blur-xl transition-all duration-300 cursor-pointer group shadow-2xl hover:border-orange-500/50"
        >
          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-white capitalize">
            create projects with us!
          </span>
          <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors shadow-md">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>

      {/* 3D Perspective Curved News Broadcast Marquee Track */}
      <div 
        className="w-full relative py-8 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Dark Fade Gradient Overlays for News Ticker Edge Vignette */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Curved 3D Stage Container */}
        <div className="perspective-1000 flex w-max">
          <motion.div
            className="flex items-center gap-4 sm:gap-6"
            animate={{
              x: isPaused ? undefined : ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {duplicatedProjects.map((project, idx) => {
              const isHovered = hoveredId === `${project.id}-${idx}`;

              // Gentle alternating 3D rotation angle to enhance the curved/arc news broadcast visual
              const curveAngle = (idx % 2 === 0 ? 6 : -6);

              return (
                <div
                  key={`${project.id}-${idx}`}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredId(`${project.id}-${idx}`)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex-none w-[240px] sm:w-[280px] md:w-[310px] flex flex-col items-center group cursor-pointer transition-all duration-300"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateY(${isHovered ? 0 : curveAngle}deg) translateZ(${isHovered ? 20 : 0}px)`,
                  }}
                >
                  {/* Card Shell */}
                  <div className="w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden relative border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-orange-500/60 group-hover:shadow-orange-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-left z-10">
                      {/* Top Category Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-white/90">
                          {project.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      {/* Bottom Title & Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors font-sans">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/70 line-clamp-2 mb-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Below Card Number + Title Sub-caption */}
                  <div className="mt-3 text-center bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-4 py-1.5 shadow-xl shadow-black/80 inline-flex items-center space-x-2">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono drop-shadow-sm">
                      {project.number}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-300 transition-colors font-sans drop-shadow-sm">
                      {project.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* PROJECT POP-UP MODAL WITH FULL IMAGE & DETAILED BREAKDOWN */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl bg-black/90 border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:bg-black transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8 text-left">
                {/* Full-width High Resolution Image Preview */}
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/15 relative bg-neutral-900 shadow-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center space-x-3">
                    <span className="text-xs font-mono uppercase tracking-widest bg-orange-500/20 border border-orange-500/40 text-orange-300 px-3.5 py-1.5 rounded-full font-bold backdrop-blur-md">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-white/80 bg-black/60 border border-white/20 px-3 py-1 rounded-full">
                      Project {selectedProject.number}
                    </span>
                  </div>
                </div>

                {/* Project Header */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3 font-sans">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-white/10 text-white/90 border border-white/20 px-3 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Technical Architecture & Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  {/* System Architecture */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center space-x-2 text-orange-400 font-bold text-sm mb-3">
                      <Cpu className="w-4 h-4" />
                      <span>System Architecture & Hardware</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 font-mono leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center space-x-2 text-orange-400 font-bold text-sm mb-3">
                      <Layers className="w-4 h-4" />
                      <span>Key Features & Innovations</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-none mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/60">OpenAI Club IoT Engineering Initiative</span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      if (onContactClick) onContactClick();
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 cursor-pointer"
                  >
                    Collaborate on this Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

