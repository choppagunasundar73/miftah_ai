import { useState } from 'react';
import { X, Shield, Heart, EyeOff, Lock, Check, AlertTriangle, Globe, Baby } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onActivateIncognito?: () => void;
}

export function PreferencesModal({ isOpen, onClose, onActivateIncognito }: PreferencesModalProps) {
  const { language, setLanguage, t } = useLanguage();
  const [bambinoMode, setBambinoMode] = useState(false);
  const [halalMode, setHalalMode] = useState(false);
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [showHalalConfirm, setShowHalalConfirm] = useState(false);
  const [showLanguageConfirm, setShowLanguageConfirm] = useState(false);
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
      setPinError(t('preferences.incorrect_pin'));
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

  const handleLanguageChange = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage);
    setShowLanguageConfirm(true);
    setTimeout(() => setShowLanguageConfirm(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#222635] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#957D65]/20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-serif font-medium text-[#E3DCD4] tracking-wide">
              {t('preferences.title')}
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
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Language Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <Globe size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">{t('preferences.language')}</h3>
                  <p className="text-xs text-[#E3DCD4]/60">{t('preferences.interface_language')}</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${language === 'en'
                  ? 'bg-[#957D65] text-[#E3DCD4] border-[#957D65]'
                  : 'bg-[#E3DCD4]/5 text-[#E3DCD4] border-[#E3DCD4]/20 hover:bg-[#E3DCD4]/10'
                  }`}
              >
                <div className="text-center">
                  <div className="font-medium">English</div>
                  <div className="text-xs opacity-70">🇺🇸</div>
                </div>
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${language === 'ar'
                  ? 'bg-[#957D65] text-[#E3DCD4] border-[#957D65]'
                  : 'bg-[#E3DCD4]/5 text-[#E3DCD4] border-[#E3DCD4]/20 hover:bg-[#E3DCD4]/10'
                  }`}
              >
                <div className="text-center">
                  <div className="font-medium">العربية</div>
                  <div className="text-xs opacity-70">🇦🇪</div>
                </div>
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              {t('preferences.language_description')}
            </p>
          </div>

          {/* Bambino Mode */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <Shield size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">
                    {t('preferences.bambino_mode')}
                  </h3>
                  <p className="text-xs text-[#E3DCD4]/60">
                    {t('preferences.child_friendly')}
                  </p>
                </div>
              </div>
              <button
                onClick={handleBambinoToggle}
                className={`relative inline-flex items-center h-7 w-12 min-h-[28px] min-w-[48px] shrink-0 rounded-[14px] p-0 appearance-none [-webkit-appearance:none] overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#957D65] focus:ring-offset-2 focus:ring-offset-[#222635] ${
                  bambinoMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform transition-transform duration-200 ${
                    language === 'ar'
                      ? (bambinoMode ? 'translate-x-[-1.25rem]' : 'translate-x-[-0.25rem]')
                      : (bambinoMode ? 'translate-x-6' : 'translate-x-1')
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              {t('preferences.bambino_description')}
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
                  <h3 className="font-medium text-[#E3DCD4]">
                    {t('preferences.incognito_mode')}
                  </h3>
                  <p className="text-xs text-[#E3DCD4]/60">
                    {t('preferences.private_browsing')}
                  </p>
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
                className={`relative inline-flex items-center h-7 w-12 min-h-[28px] min-w-[48px] shrink-0 rounded-[14px] p-0 appearance-none [-webkit-appearance:none] overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#957D65] focus:ring-offset-2 focus:ring-offset-[#222635] ${
                  incognitoMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform transition-transform duration-200 ${
                    language === 'ar'
                      ? (incognitoMode ? 'translate-x-[-1.25rem]' : 'translate-x-[-0.25rem]')
                      : (incognitoMode ? 'translate-x-6' : 'translate-x-1')
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              {t('preferences.incognito_description')}
            </p>
          </div>

          {/* Halal Mode - Commented Out */}
          {/* <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                  <Heart size={20} className="text-[#957D65]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#E3DCD4]">
                    {t('preferences.halal_mode')}
                  </h3>
                  <p className="text-xs text-[#E3DCD4]/60">
                    {t('preferences.halal_friendly')}
                  </p>
                </div>
              </div>
              <button
                onClick={handleHalalToggle}
                className={`relative w-12 h-6 rounded-full transition-all duration-200 ${halalMode ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                  }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200`}
                  style={language === 'ar' ? {
                    right: halalMode ? '0.25rem' : '1.75rem',
                    left: 'auto',
                    transition: 'right 0.2s ease-in-out'
                  } : {
                    transform: halalMode ? 'translateX(1.75rem)' : 'translateX(0.25rem)',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                />
              </button>
            </div>
            <p className="text-sm text-[#E3DCD4]/70 leading-relaxed">
              {t('preferences.halal_description')}
            </p>
          </div> */}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#957D65]/20">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#957D65] hover:bg-[#957D65]/80 text-[#E3DCD4] rounded-xl font-medium tracking-wide transition-all duration-200 hover:scale-[1.02]"
          >
            {t('preferences.save')}
          </button>
        </div>

        {/* Language Change Confirmation */}
        {showLanguageConfirm && (
          <div className="absolute top-4 right-4 bg-[#957D65] text-[#E3DCD4] p-4 rounded-xl shadow-lg animate-slide-in-right">
            <div className="flex items-center space-x-3">
              <Globe size={20} />
              <div>
                <p className="font-medium">
                  {t('preferences.language_changed')}
                </p>
                <p className="text-xs opacity-80">
                  {language === 'ar' ? t('preferences.interface_arabic') : t('preferences.interface_english')}
                </p>
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

      {/* PIN Prompt Modal */}
      {showPinPrompt && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#222635] rounded-xl p-6 max-w-sm w-full">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-[#957D65]/20 rounded-full flex items-center justify-center mx-auto">
                <Lock size={24} className="text-[#957D65]" />
              </div>
              <h3 className="text-lg font-medium text-[#E3DCD4]">
                {t('preferences.enter_pin')}
              </h3>
              <p className="text-sm text-[#E3DCD4]/70">
                {t('preferences.pin_description')}
              </p>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder={t('preferences.enter_pin_placeholder')}
                className="w-full p-3 bg-[#E3DCD4]/10 border border-[#E3DCD4]/20 rounded-lg text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:border-[#957D65]"
                maxLength={4}
              />
              {pinError && (
                <p className="text-red-400 text-sm">
                  {pinError}
                </p>
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
                  {t('preferences.cancel')}
                </button>
                <button
                  onClick={handlePinSubmit}
                  className="flex-1 py-2 bg-[#957D65] text-[#E3DCD4] rounded-lg hover:bg-[#957D65]/80 transition-all duration-200"
                >
                  {t('preferences.confirm')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
