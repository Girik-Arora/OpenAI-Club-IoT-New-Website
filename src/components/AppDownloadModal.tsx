import React from 'react';
import { X, Smartphone, QrCode, Apple } from 'lucide-react';
import { WingLogo } from './PlatformLogos';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-3">
          <WingLogo className="w-12 h-8 text-white" />
        </div>

        <h3 className="text-xl sm:text-2xl font-normal text-white mb-2">
          Download Daily Meditation
        </h3>
        <p className="text-xs text-white/70 mb-6 max-w-xs mx-auto">
          Scan the QR code with your mobile camera or download directly from your app store.
        </p>

        {/* Mock QR Code Frame */}
        <div className="bg-white p-4 rounded-2xl w-40 h-40 mx-auto mb-6 flex flex-col items-center justify-center border border-white/30 shadow-inner">
          <div className="w-32 h-32 bg-black/90 rounded-xl p-2 flex flex-col items-center justify-center text-white relative">
            <QrCode className="w-24 h-24 text-white" />
            <span className="text-[9px] font-mono tracking-widest text-white/80 mt-1">SCAN ME</span>
          </div>
        </div>

        {/* Store Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="#ios"
            onClick={(e) => {
              e.preventDefault();
              alert('App Store download link triggered!');
            }}
            className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 px-3 rounded-2xl transition-all cursor-pointer"
          >
            <Apple className="w-5 h-5 text-white" />
            <div className="text-left text-xs leading-tight">
              <div className="text-[9px] text-white/60">App Store</div>
              <div className="font-semibold text-white">iOS Download</div>
            </div>
          </a>

          <a
            href="#android"
            onClick={(e) => {
              e.preventDefault();
              alert('Google Play Store download link triggered!');
            }}
            className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 px-3 rounded-2xl transition-all cursor-pointer"
          >
            <Smartphone className="w-5 h-5 text-white" />
            <div className="text-left text-xs leading-tight">
              <div className="text-[9px] text-white/60">Google Play</div>
              <div className="font-semibold text-white">Android</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
