import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Globe, Linkedin } from 'lucide-react';
import { NavItem } from '../types';

export const FooterSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer id="contact" className="w-full bg-transparent text-white mt-16 sm:mt-24 pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/15 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* TOP: Embedded Interactive Google Map for Thakur College of Engineering and Technology */}
        <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
          <div className="w-full h-[320px] sm:h-[400px] md:h-[450px] relative">
            <iframe
              title="Thakur College of Engineering and Technology Map"
              src="https://maps.google.com/maps?q=Thakur%20College%20of%20Engineering%20and%20Technology,%20Kandivali%20East,%20Mumbai&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(105%) brightness(98%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* BOTTOM: 4-Column Footer Information */}
        <div className="bg-black/65 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Column 1: Club Info */}
            <div className="flex flex-col space-y-3 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                OpenAI Club IoT
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-xs">
                Special Interest Group on Artificial Intelligence & Internet of Things at Thakur College of Engineering and Technology.
              </p>
              <p className="text-xs text-orange-400 font-mono font-semibold pt-1">
                IEI TCET Associated Student Club
              </p>
            </div>

            {/* Column 2: Pages Links */}
            <div className="flex flex-col space-y-3 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
                Pages
              </h4>
              <ul className="flex flex-col space-y-2 text-xs sm:text-sm text-white/85 font-sans">
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className="hover:text-orange-400 transition-colors cursor-pointer text-left font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/about')}
                    className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/events')}
                    className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/projects')}
                    className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/team')}
                    className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                  >
                    Team
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col space-y-3 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
                Contact
              </h4>
              <div className="flex flex-col space-y-3 text-xs sm:text-sm text-white/70 font-sans">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 flex-none mt-0.5" />
                  <span>Thakur College of Engineering & Technology, Kandivali East, Mumbai</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-orange-400 flex-none" />
                  <a href="mailto:openaiclubiot@tcetmumbai.in" className="hover:text-white transition-colors">
                    openaiclubiot@tcetmumbai.in
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-orange-400 flex-none" />
                  <a href="tel:+919967363452" className="hover:text-white transition-colors font-mono">
                    +91 9967363452
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Follow Us */}
            <div className="flex flex-col space-y-4 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
                Follow & Connect
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/tcet_iei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-md group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/company/iei-tcet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-md group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://www.iei.tcetmumbai.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-md group"
                  aria-label="IEI TCET Website"
                  title="IEI TCET Official Website"
                >
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-2 text-center">
          <div className="inline-block bg-black/85 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full shadow-2xl">
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide drop-shadow-md">
              © {new Date().getFullYear()} OpenAI Club IoT • IEI TCET Associated Club. All Rights Reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
