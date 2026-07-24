import React, { useState } from 'react';
import { X, Send, CheckCircle2, Cpu } from 'lucide-react';
import { OpenAIClubIotLogo } from './OpenAIClubIotLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI & IoT Integration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save message to localStorage so it is stored persistently
    try {
      const existing = JSON.parse(localStorage.getItem('openai_club_inquiries') || '[]');
      const newInquiry = {
        id: Date.now(),
        date: new Date().toISOString(),
        ...formData
      };
      localStorage.setItem('openai_club_inquiries', JSON.stringify([newInquiry, ...existing]));
    } catch (err) {
      console.error('Failed to save message to localStorage:', err);
    }

    // Submit to Web3Forms API
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e90c84e0-9eb6-428b-a7c9-13ca451f3ddd';
    if (accessKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Project Inquiry from ${formData.name} (${formData.projectType})`,
            from_name: 'OpenAI Club IoT Website',
            to_email: 'iei@tcetmumbai.in',
            ...formData,
          }),
        });
      } catch (err) {
        console.error('Web3Forms submit error:', err);
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      projectType: 'AI & IoT Integration',
      message: '',
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2.5 mb-2">
          <OpenAIClubIotLogo className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
            Open AI Club IoT
          </span>
        </div>

        <h3 className="text-2xl font-normal text-white mb-2">
          Contact Us for Projects
        </h3>
        <p className="text-xs text-white/70 mb-6">
          Partner with our student innovation team for AI, embedded systems, and IoT prototyping.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
            <p className="text-xs text-white/70">
              Thank you for reaching out to OpenAI Club IoT. Our team will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Rivers"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@organization.com"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">Project Category</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/50"
              >
                <option value="AI & IoT Integration">AI & IoT Integration</option>
                <option value="Embedded Systems Hardware">Embedded Systems Hardware</option>
                <option value="Machine Learning Models">Machine Learning Models</option>
                <option value="Research & Prototyping">Research & Prototyping</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">Project Details</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your project requirements..."
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold text-xs sm:text-sm py-3 rounded-full hover:bg-white/90 transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg mt-2"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Submit Project Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
