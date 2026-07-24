import React, { useState } from 'react';
import { Target, Compass, Cpu, Zap, Layers, Network } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const [activeObjective, setActiveObjective] = useState<number | null>(0);

  const objectives = [
    {
      id: 1,
      title: 'Bridge AI & Physical World',
      description: 'Bridge AI and the physical world through AI-IoT integration.',
      icon: Cpu,
      tag: '01 / INTEGRATION',
    },
    {
      id: 2,
      title: 'Intelligent Connected Systems',
      description: 'Encourage development of intelligent connected systems.',
      icon: Network,
      tag: '02 / ARCHITECTURE',
    },
    {
      id: 3,
      title: 'Practical Engineering & Teamwork',
      description: 'Promote innovation, teamwork, and practical engineering.',
      icon: Layers,
      tag: '03 / COLLABORATION',
    },
    {
      id: 4,
      title: 'Future Tech Readiness',
      description: 'Prepare students for rapidly evolving technology ecosystems.',
      icon: Zap,
      tag: '04 / EVOLUTION',
    },
  ];

  return (
    <section id="about-us" className="w-full bg-transparent text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Banner Card */}
        <div className="w-full max-w-4xl bg-black/75 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 flex flex-col items-center">
          
          {/* Logo Emblem & Clean Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="p-3.5 bg-white/5 border border-white/15 rounded-full backdrop-blur-md shadow-xl mb-4 hover:scale-105 transition-transform duration-300">
              <img
                src="/openai_logo_vibrant.png"
                alt="OpenAI Club IoT Logo"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_8px_20px_rgba(255,140,0,0.5)]"
              />
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              About Us
            </h2>
          </div>

          {/* Clean 2-Card Photo Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
            {/* Card 1 */}
            <div className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 cursor-pointer">
              <img
                src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/agentspace_by3bak"
                alt="Agent Space Keynote"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-orange-500/30">
                  Keynote Sessions
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 cursor-pointer">
              <img
                src="https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/aiot_yklxrg"
                alt="AIoT Workshops"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-orange-500/30">
                  IoT Labs & Workshops
                </span>
              </div>
            </div>
          </div>

          {/* Plus Box & Department Badge */}
          <div className="flex flex-col items-center mt-6 mb-6">
            <div className="w-5 h-5 border border-white/60 bg-white/10 flex items-center justify-center text-xs text-white rounded mb-2 font-bold">
              +
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wider">
              OpenAI Club — IoT Department
            </span>
            {/* Vertical line connector */}
            <div className="w-px h-10 bg-gradient-to-b from-white/60 to-white/20 my-4" />
          </div>

          {/* Main Headline Statement */}
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl leading-snug sm:leading-snug drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            A student-driven technical community at TCET focused on bridging Artificial Intelligence with the physical world through AI-IoT integration and real-world engineering innovation.
          </h3>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-3xl text-xs sm:text-base text-white/95 leading-relaxed mb-20 text-center font-normal">
          <p className="bg-black/65 border border-white/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 text-white shadow-2xl drop-shadow-md">
            The OpenAI Club is a student-driven technical community established under the Department of Internet of Things (IoT) at TCET. The club focuses on bridging Artificial Intelligence with the physical world through AI-IoT integration, enabling students to design intelligent, connected systems that address real-world challenges.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 text-left">
          {/* Vision Card */}
          <div className="bg-black/65 border border-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
                  01 / DIRECTION
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Vision</h4>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                To cultivate a future-ready generation of engineers capable of integrating Artificial Intelligence, IoT hardware, and creative problem-solving to build meaningful, scalable solutions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/60">
              <span>TCET IoT Ecosystem</span>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-black/65 border border-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
                  02 / ACTION
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Mission</h4>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                Promote technical excellence by connecting AI with real-world applications through workshops, collaborative projects, and hands-on learning experiences.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/60">
              <span>Hands-on Engineering</span>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Club Objectives Animated Section */}
        <div className="w-full max-w-4xl text-left bg-black/65 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/15">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>CORE FOUNDATIONS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                Club Objectives
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs mt-3 sm:mt-0">
              Strategic pillars guiding our workshops, research labs, and IoT projects.
            </p>
          </div>

          {/* Interactive Animated Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              const isActive = activeObjective === idx;
              return (
                <motion.div
                  key={obj.id}
                  onClick={() => setActiveObjective(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-white text-black border-white shadow-xl shadow-white/10'
                      : 'bg-white/5 hover:bg-white/10 border-white/15 text-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase ${
                        isActive ? 'text-black/60' : 'text-white/50'
                      }`}
                    >
                      {obj.tag}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? 'text-black' : 'text-white/80'
                      }`}
                    />
                  </div>

                  <h5
                    className={`text-base font-semibold mb-2 ${
                      isActive ? 'text-black' : 'text-white'
                    }`}
                  >
                    {obj.title}
                  </h5>

                  <p
                    className={`text-xs leading-relaxed ${
                      isActive ? 'text-black/80' : 'text-white/70'
                    }`}
                  >
                    • {obj.description}
                  </p>

                  {/* Subtle active glow indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Auto/Interactive Progress Status Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end text-xs text-white/60">
            <span className="font-mono text-white/80">4 Active Pillars</span>
          </div>
        </div>

      </div>
    </section>
  );
};

