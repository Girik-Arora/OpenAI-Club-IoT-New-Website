import React, { useState } from 'react';
import { X, Sparkles, Check } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('clarity');
  const [step, setStep] = useState<number>(1);

  if (!isOpen) return null;

  const goals = [
    { id: 'clarity', title: 'Mental Clarity', desc: 'Clear brain fog & boost decision making' },
    { id: 'sleep', title: 'Deep Sleep', desc: 'Fall asleep faster with calming soundscapes' },
    { id: 'stress', title: 'Stress Relief', desc: 'Instant 3-minute anxiety reset' },
    { id: 'focus', title: 'Quiet Focus', desc: 'Sustain deep work state effortlessly' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-white/80 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Personalized Experience</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-white mb-2">
              What is your primary goal today?
            </h3>
            <p className="text-xs text-white/60 mb-6">
              Select what you wish to cultivate through daily practice.
            </p>

            <div className="space-y-3 mb-6">
              {goals.map((g) => {
                const isSelected = selectedGoal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-white text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{g.title}</div>
                      <div className="text-xs text-white/60">{g.desc}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-white text-black font-semibold text-sm py-3 rounded-full hover:bg-white/90 transition-all cursor-pointer shadow-lg"
            >
              Continue with {goals.find((g) => g.id === selectedGoal)?.title}
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-white mb-2">You are ready!</h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              We have tailored your initial 7-day breathwork path for{' '}
              <strong className="text-white">
                {goals.find((g) => g.id === selectedGoal)?.title}
              </strong>
              . Check your email or open the app to start.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-white text-black font-semibold text-sm py-3 rounded-full hover:bg-white/90 transition-all cursor-pointer"
            >
              Start Practice Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
