import { useState, useEffect } from 'react';
import { User, Bell, Settings, Wifi, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import miftahLogo from '../assets/miftah_logo.png';

interface AmbientStatusBarProps {
  onMemoryToggle: () => void;
  onInspirationToggle: () => void;
  memoryOpen: boolean;
  inspirationOpen: boolean;
  onSettingsClick?: () => void;
}

export function AmbientStatusBar({
  onMemoryToggle,
  onInspirationToggle,
  memoryOpen,
  inspirationOpen,
  onSettingsClick
}: AmbientStatusBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
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
          title="Toggle Memory Panel"
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
            <div className="text-lg font-serif font-medium tracking-wide">MIFTAH AI</div>
            <div className="text-xs text-[#E3DCD4]/60 tracking-wider">LUXURY CONCIERGE</div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105 lg:hidden"
        >
          {showMobileMenu ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Center Section - Location & Time */}
      <div className="flex items-center space-x-6">
        <div className="text-sm font-light tracking-wide">
          UAE • {formatTime(currentTime)}
        </div>

        {/* Concierge Status */}
        <div className="hidden sm:flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#957D65] rounded-full animate-pulse shadow-sm shadow-[#957D65]/50"></div>
          <span className="text-xs font-medium tracking-wide text-[#957D65]">CONCIERGE ONLINE</span>
        </div>
      </div>

      {/* Right Section - User Controls */}
      <div className="flex items-center space-x-3">
        {/* Connection Status */}
        <div className="hidden sm:flex items-center space-x-2">
          <Wifi size={14} className="text-[#957D65]" />
          <span className="text-xs text-[#E3DCD4]/60">Connected</span>
        </div>

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
            <div className="text-sm font-medium">Sarah Al-Mansouri</div>
            <div className="text-xs text-[#E3DCD4]/60">Premium Member</div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#957D65] to-[#957D65]/80 rounded-full flex items-center justify-center shadow-sm ring-2 ring-[#957D65]/20">
            <User size={16} className="text-[#222635]" />
          </div>
        </div>

        {/* Inspiration Panel Toggle */}
        <button
          onClick={onInspirationToggle}
          className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${inspirationOpen
            ? 'bg-[#957D65]/20 text-[#957D65]'
            : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4] hover:bg-[#957D65]/5'
            }`}
          title="Toggle Inspiration Panel"
        >
          <ChevronLeft size={16} className={`transition-transform duration-200 ${inspirationOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-[#222635] border-b border-[#957D65]/10 lg:hidden">
          <div className="p-4 space-y-3">
            <button
              onClick={() => {
                onMemoryToggle();
                setShowMobileMenu(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${memoryOpen
                ? 'bg-[#957D65]/20 text-[#957D65]'
                : 'text-[#E3DCD4]/80 hover:bg-[#957D65]/5'
                }`}
            >
              Memory Panel
            </button>
            <button
              onClick={() => {
                onInspirationToggle();
                setShowMobileMenu(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${inspirationOpen
                ? 'bg-[#957D65]/20 text-[#957D65]'
                : 'text-[#E3DCD4]/80 hover:bg-[#957D65]/5'
                }`}
            >
              Inspiration Panel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}