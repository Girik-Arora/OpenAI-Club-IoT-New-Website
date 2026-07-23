import React from 'react';
import { Linkedin, Github, Award, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface StudentMember {
  name: string;
  role: string;
  number: string;
  badge: string;
  bio: string;
  linkedin: string;
  github: string;
  avatar: string;
  skills: string[];
}

interface FacultyMember {
  name: string;
  role: string;
  subtitle: string;
  designation: string;
  bio: string;
  avatar: string;
  department: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: 'Dr. Sujata Alegavi',
    role: 'Faculty Incharge of OpenAI Club IoT',
    subtitle: 'Head of Department (HoD) - IoT',
    designation: '',
    department: 'Department of Internet of Things, TCET',
    bio: 'Pioneering academic guidance, driving research in embedded intelligence, smart sensor ecosystems, and institutional innovation.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mr. Sunil Khatri',
    role: 'Faculty Incharge of IEI TCET',
    subtitle: 'Faculty Mentor - OpenAI Club IoT',
    designation: '',
    department: 'The Institution of Engineers (India) - TCET',
    bio: 'Empowering engineering excellence, student chapter management, technical ethics, and interdisciplinary collaboration.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
];

const studentTeam: StudentMember[] = [
  {
    name: 'Girik Arora',
    role: 'Chairperson',
    number: '#01',
    badge: 'Executive Leader',
    bio: 'Leading strategic vision, IoT hardware initiatives, and AI community outreach for OpenAI Club IoT.',
    linkedin: 'https://linkedin.com/in/girik-arora',
    github: 'https://github.com/girikarora',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    skills: ['IoT Architecture', 'AI Integration', 'Strategy'],
  },
  {
    name: 'Aayush Randive',
    role: 'Vice Chairperson',
    number: '#02',
    badge: 'Core Operations',
    bio: 'Directing technical projects, event execution, and cross-departmental development workflows.',
    linkedin: 'https://linkedin.com/in/aayush-randive',
    github: 'https://github.com/aayushrandive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    skills: ['Embedded Systems', 'Project Lead', 'Hardware'],
  },
  {
    name: 'Samannoy Bera',
    role: 'Secretary',
    number: '#03',
    badge: 'Operations & Relations',
    bio: 'Managing club communications, technical documentation, member engagement, and institutional alignment.',
    linkedin: 'https://linkedin.com/in/samannoy-bera',
    github: 'https://github.com/samannoybera',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    skills: ['Documentation', 'Communications', 'Full-Stack'],
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="w-full bg-transparent text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/10 font-sans overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/10 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 rounded-full text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership & Mentorship</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            The Minds Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white font-bold">OpenAI Club IoT</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Guided by distinguished faculty leadership and powered by passionate student innovators pushing the boundaries of AI and Internet of Things.
          </p>
        </div>

        {/* SUBSECTION 1: FACULTY SUPPORT */}
        <div className="mb-24">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl mb-10 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 flex-none shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans drop-shadow-md">
                Faculty Support & Leadership
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">Institutional Mentors & Advisory Board</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, idx) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative min-h-[380px] sm:min-h-[420px] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-orange-500/60 hover:shadow-orange-500/20 flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Main Card Background Image with 3D Pop / Zoom Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={faculty.avatar}
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 filter brightness-90 group-hover:brightness-100"
                  />
                  {/* Dark Gradient Overlay for High Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30 group-hover:via-black/75 transition-colors duration-500" />
                </div>

                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent group-hover:via-orange-400 transition-all z-10" />

                {/* Card Content Overlay */}
                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 backdrop-blur-md">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <span>Faculty Advisory Board</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors font-sans">
                    {faculty.name}
                  </h4>

                  <p className="text-sm font-semibold text-orange-400 mb-1 font-sans">
                    {faculty.role}
                  </p>

                  <p className="text-xs font-mono text-white/80 mb-3">
                    {faculty.subtitle}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed font-sans border-t border-white/20 pt-3">
                    {faculty.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2: STUDENT CORE TEAM */}
        <div>
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl mb-10 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-none shadow-md">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans drop-shadow-md">
                Student Core Team
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">Founding Board & Executive Committee</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {studentTeam.map((student, idx) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-black/75 border border-white/20 hover:border-orange-500/60 rounded-3xl overflow-hidden flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-orange-500/10 cursor-pointer"
              >
                {/* Top Half: Photo Header with 3D Pop Effect */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Subtle Gradient Fade into content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                  
                  {/* Active Indicator Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/80">Core Member</span>
                  </div>
                </div>

                {/* Bottom Half: Student Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Name & Role */}
                    <div className="text-left mb-3">
                      <h4 className="text-2xl font-bold text-white mb-0.5 group-hover:text-orange-400 transition-colors font-sans">
                        {student.name}
                      </h4>
                      <p className="text-sm font-semibold text-orange-400 font-sans tracking-wide">
                        {student.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-white/70 leading-relaxed mb-4 font-sans text-left">
                      {student.bio}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {student.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono text-white/80 bg-white/10 border border-white/15 px-2 py-0.5 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links Footer (LinkedIn & GitHub Only) */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-start space-x-3">
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-md group/icon"
                      aria-label={`${student.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                    </a>

                    <a
                      href={student.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-neutral-800 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-md group/icon"
                      aria-label={`${student.name} GitHub`}
                    >
                      <Github className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
