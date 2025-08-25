import { useState } from 'react';
import { X, Shield, Heart, EyeOff, Lock, Check, AlertTriangle } from 'lucide-react';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onActivateIncognito?: () => void;
}

export function PreferencesModal({ isOpen, onClose, onActivateIncognito }: PreferencesModalProps) {
  const [bambinoMode, setBambinoMode] = useState(false);
  const [halalMode, setHalalMode] = useState(false);
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [showHalalConfirm, setShowHalalConfirm] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');

  const handleBambinoToggle = () => {
    if (bambinoMode) {
      // Turning off - require PIN
      setShowPinPrompt(true);
    } else {
      // Turning on - direct toggle
      setBambinoMode(true);
    }
  };

  const handlePinSubmit = () => {
    // Mock PIN validation (in real app, this would be secure)
    if (pin === '1234') {
      setBambinoMode(false);
      setShowPinPrompt(false);
      setPin('');
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Please try again.');
    }
  };

  const handleHalalToggle = () => {
    if (!halalMode) {
      setHalalMode(true);
      setShowHalalConfirm(true);
      setTimeout(() => setShowHalalConfirm(false), 3000);
    } else {
      setHalalMode(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#222635] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#957D65]/20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-medium text-[#E3DCD4] tracking-wide">
              Preferences
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200"
            >
              <X size={20} className="text-[#E3DCD4]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Bambino Mode */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <Shield size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">Bambino Mode</h3>
                  <p className="text-xs text-[#E3DCD4]/60">Child-friendly content only</p>
                </div>
              </div>
              <button
                onClick={handleBambinoToggle}
                className={`relative w-12 h-6 rounded-full transition-all duration-200 ${bambinoMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                  }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${bambinoMode ? 'translate-x-7' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              Ensures all content, images, and recommendations are filtered to be age-appropriate for children.
            </p>
          </div>

          {/* Halal Mode */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <Heart size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">Halal Mode</h3>
                  <p className="text-xs text-[#E3DCD4]/60">Halal-friendly options only</p>
                </div>
              </div>
              <button
                onClick={handleHalalToggle}
                className={`relative w-12 h-6 rounded-full transition-all duration-200 ${halalMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                  }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${halalMode ? 'translate-x-7' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              All recommendations will include only Halal-certified options for dining and experiences.
            </p>
          </div>

          {/* Incognito Mode */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <EyeOff size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">Incognito Mode</h3>
                  <p className="text-xs text-[#E3DCD4]/60">Private browsing experience</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!incognitoMode && onActivateIncognito) {
                    onActivateIncognito();
                    onClose();
                  } else {
                    setIncognitoMode(!incognitoMode);
                  }
                }}
                className={`relative w-12 h-6 rounded-full transition-all duration-200 ${incognitoMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                  }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${incognitoMode ? 'translate-x-7' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              Minimal interface with private conversations. No history saved, trending recommendations available.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#957D65]/20">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#957D65] hover:bg-[#957D65]/80 text-[#E3DCD4] rounded-xl font-medium tracking-wide transition-all duration-200 hover:scale-[1.02]"
          >
            Save Preferences
          </button>
        </div>
      </div>

      {/* PIN Prompt Modal */}
      {showPinPrompt && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#222635] rounded-xl p-6 max-w-sm w-full">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-[#957D65]/20 rounded-full flex items-center justify-center mx-auto">
                <Lock size={24} className="text-[#957D65]" />
              </div>
              <h3 className="text-lg font-medium text-[#E3DCD4]">Enter Parental PIN</h3>
              <p className="text-sm text-[#E3DCD4]/70">
                Please enter your PIN to disable Bambino Mode
              </p>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="w-full p-3 bg-[#E3DCD4]/10 border border-[#E3DCD4]/20 rounded-lg text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:border-[#957D65]"
                maxLength={4}
              />
              {pinError && (
                <p className="text-red-400 text-sm">{pinError}</p>
              )}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowPinPrompt(false);
                    setPin('');
                    setPinError('');
                  }}
                  className="flex-1 py-2 border border-[#E3DCD4]/20 text-[#E3DCD4] rounded-lg hover:bg-[#E3DCD4]/5 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePinSubmit}
                  className="flex-1 py-2 bg-[#957D65] text-[#E3DCD4] rounded-lg hover:bg-[#957D65]/80 transition-all duration-200"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Halal Mode Confirmation */}
      {showHalalConfirm && (
        <div className="absolute top-4 right-4 bg-[#957D65] text-[#E3DCD4] p-4 rounded-xl shadow-lg animate-slide-in-right">
          <div className="flex items-center space-x-3">
            <Check size={20} />
            <div>
              <p className="font-medium">Halal Mode Active</p>
              <p className="text-xs opacity-80">All content is now Halal-friendly</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}