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
    avatar: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/image_2026-07-24_164019598_nlqxfa',
  },
  {
    name: 'Mr. Sunil Khatri',
    role: 'Faculty Incharge of IEI TCET',
    subtitle: 'Faculty Mentor - OpenAI Club IoT',
    designation: '',
    department: 'The Institution of Engineers (India) - TCET',
    bio: 'Empowering engineering excellence, student chapter management, technical ethics, and interdisciplinary collaboration.',
    avatar: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/image_2026-07-24_164218775_vl967s',
  },
];

const studentTeam2026: StudentMember[] = [
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

const studentTeam2025: StudentMember[] = [
  {
    name: 'Mr. Girik Arora',
    role: 'Chairperson',
    number: '#01',
    badge: 'Executive Leader',
    bio: 'Pioneered early IoT projects, foundational club architecture, and student research mentorship.',
    linkedin: 'https://linkedin.com/in/girik-arora',
    github: 'https://github.com/girikarora',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    skills: ['IoT Architecture', 'AI Integration', 'Leadership'],
  },
  {
    name: 'Mr. Parth Desai',
    role: 'Vice Chairperson',
    number: '#02',
    badge: 'Core Operations',
    bio: 'Coordinated initial technical initiatives, hardware workshops, and operational workflows.',
    linkedin: 'https://linkedin.com/in/parth-desai',
    github: 'https://github.com/parthdesai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    skills: ['Operations', 'Embedded Systems', 'Technical Execution'],
  },
  {
    name: 'Ms. Shreya Shrivastav',
    role: 'Secretary',
    number: '#03',
    badge: 'Operations & Relations',
    bio: 'Managed club administration, documentation, event relations, and community outreach.',
    linkedin: 'https://linkedin.com/in/shreya-shrivastav',
    github: 'https://github.com/shreyashrivastav',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    skills: ['Administration', 'Documentation', 'Public Relations'],
  },
  {
    name: 'Mr. Krishna Bitthariya',
    role: 'Student Advisor',
    number: '#04',
    badge: 'Advisory & Mentorship',
    bio: 'Providing strategic guidance, technical domain advisory, and student mentorship for foundational initiatives.',
    linkedin: 'https://linkedin.com/in/krishna-bitthariya',
    github: 'https://github.com/krishnabitthariya',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    skills: ['Strategic Advisory', 'Mentorship', 'IoT Systems'],
  },
];

export const TeamSection: React.FC = () => {
  const [activeYear, setActiveYear] = React.useState<'2026' | '2025'>('2026');

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
            {facultyMembers.map((faculty, idx) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-white/20 bg-neutral-950/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-[0_20px_40px_rgba(249,115,22,0.25)]"
              >
                {/* TOP PORTRAIT PHOTO VIEWPORT WITH CLEAN FRAMING */}
                <div className="w-full h-80 sm:h-96 relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border-b border-white/10 flex items-center justify-center p-4">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img
                    src={faculty.avatar}
                    alt={faculty.name}
                    className="w-full h-full object-contain filter brightness-95 group-hover:brightness-105 transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center space-x-2 bg-black/70 border border-white/20 text-orange-400 px-3.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <span>Faculty Advisory Board</span>
                  </div>
                </div>

                {/* BOTTOM TEXT CONTENT CARD */}
                <div className="p-6 sm:p-8 text-left flex flex-col flex-1 justify-between bg-black">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors font-sans tracking-tight">
                      {faculty.name}
                    </h4>

                    <p className="text-sm font-semibold text-orange-400 mb-1 font-sans">
                      {faculty.role}
                    </p>

                    <p className="text-xs font-mono text-white/70 mb-4">
                      {faculty.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans border-t border-white/15 pt-4">
                      {faculty.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2: STUDENT CORE TEAM WITH YEAR TABS */}
        <div>
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
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

            {/* Year Switcher Tabs */}
            <div className="flex items-center bg-white/10 border border-white/15 p-1 rounded-xl shadow-inner self-start sm:self-auto">
              <button
                onClick={() => setActiveYear('2026')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeYear === '2026'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                2026/27 Team
              </button>
              <button
                onClick={() => setActiveYear('2025')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeYear === '2025'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                2025/26 Team
              </button>
            </div>
          </div>

          {/* Active Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(activeYear === '2026' ? studentTeam2026 : studentTeam2025).map((student, idx) => (
              <motion.div
                key={`${activeYear}-${student.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-black/75 border border-white/20 ${
                  activeYear === '2026' ? 'hover:border-orange-500/60 hover:shadow-orange-500/10' : 'hover:border-amber-500/60 hover:shadow-amber-500/10'
                } rounded-3xl overflow-hidden flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center space-x-1.5">
                    <div className={`w-2 h-2 rounded-full ${activeYear === '2026' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    <span className="text-[10px] font-mono text-white/80">{activeYear} Core</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-left mb-3">
                      <h4 className={`text-2xl font-bold text-white mb-0.5 transition-colors font-sans ${
                        activeYear === '2026' ? 'group-hover:text-orange-400' : 'group-hover:text-amber-400'
                      }`}>
                        {student.name}
                      </h4>
                      <p className={`text-sm font-semibold font-sans tracking-wide ${
                        activeYear === '2026' ? 'text-orange-400' : 'text-amber-400'
                      }`}>
                        {student.role}
                      </p>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed mb-4 font-sans text-left">
                      {student.bio}
                    </p>

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
