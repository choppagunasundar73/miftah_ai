import { useState, useEffect } from 'react';
import { User, Bell, Settings, ChevronRight } from 'lucide-react';
import miftahLogo from '../assets/miftah_logo.png';
import { useLanguage } from '../contexts/LanguageContext';

interface AmbientStatusBarProps {
  onMemoryToggle: () => void;
  memoryOpen: boolean;
  onSettingsClick?: () => void;
}

export function AmbientStatusBar({
  onMemoryToggle,
  memoryOpen,
  onSettingsClick
}: AmbientStatusBarProps) {
  const { t, language } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const locale = language === 'ar' ? 'ar-AE' : 'en-US';
    return date.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Dubai'
    });
  };

  return (
    <div className="w-full h-16 bg-[#222635] text-[#E3DCD4] flex items-center justify-between px-6 border-b border-[#957D65]/10 backdrop-blur-sm relative z-40">

      {/* Left Section - Panel Controls & Logo */}
      <div className="flex items-center space-x-4">
        {/* Memory Panel Toggle */}
        <button
          onClick={onMemoryToggle}
          className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${memoryOpen
            ? 'bg-[#957D65]/20 text-[#957D65]'
            : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4] hover:bg-[#957D65]/5'
            }`}
          title={t('status.toggle_memory')}
        >
          <ChevronRight size={16} className={`transition-transform duration-200 ${memoryOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={miftahLogo}
            alt="Miftah AI"
            className="h-8 w-auto"
          />
          <div className="hidden sm:block">
            <div className="text-lg font-serif font-medium tracking-wide">{t('app.title')}</div>
            <div className="text-xs text-[#E3DCD4]/60 tracking-wider">{t('app.subtitle')}</div>
          </div>
        </div>


      </div>


      {/* Right Section - User Controls */}
      <div className="flex items-center space-x-3">
        {/* Connection Status */}
        {/* <div className="hidden sm:flex items-center space-x-2">
          <Wifi size={14} className="text-[#957D65]" />
          <span className="text-xs text-[#E3DCD4]/60">{t('app.connected')}</span>
        </div> */}

        {/* Notifications */}
        <button className="relative p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105">
          <Bell size={16} className="text-[#957D65]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#957D65] rounded-full flex items-center justify-center">
            <span className="text-[#222635] text-xs font-bold">2</span>
          </div>
        </button>

        {/* Settings */}
        <button 
          onClick={onSettingsClick}
          className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <Settings size={16} className="text-[#E3DCD4]/60 hover:text-[#E3DCD4]" />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-medium">{t('status.user_name')}</div>
            <div className="text-xs text-[#E3DCD4]/60">{t('status.premium_member')}</div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#957D65] to-[#957D65]/80 rounded-full flex items-center justify-center shadow-sm ring-2 ring-[#957D65]/20">
            <User size={16} className="text-[#222635]" />
          </div>
        </div>


      </div>


    </div>
  );
}