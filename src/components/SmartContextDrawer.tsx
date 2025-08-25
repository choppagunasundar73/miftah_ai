import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Camera, 
  Calendar, 
  AlertTriangle, 
  ChevronUp, 
  ChevronDown,
  Zap,
  Phone,
  MessageSquare
} from 'lucide-react';

interface SmartContextDrawerProps {
  className?: string;
}

export function SmartContextDrawer({ className = '' }: SmartContextDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);

  const contextualActions = [
    { 
      id: 'voice',
      icon: Mic, 
      label: 'Voice Request', 
      shortcut: '⌘M',
      description: 'Speak naturally to your concierge',
      primary: true
    },
    { 
      id: 'visual',
      icon: Camera, 
      label: 'Visual Search', 
      shortcut: '⌘C',
      description: 'Upload or capture images for assistance',
      primary: false
    },
    { 
      id: 'calendar',
      icon: Calendar, 
      label: 'Quick Calendar', 
      shortcut: '⌘K',
      description: 'View and manage your schedule',
      primary: false
    },
    { 
      id: 'priority',
      icon: AlertTriangle, 
      label: 'Priority Help', 
      shortcut: '⌘!',
      description: 'Urgent assistance needed',
      primary: false
    }
  ];

  const quickCommands = [
    'Book a table for tonight',
    'Show my upcoming reservations',
    'Find luxury shopping nearby',
    'Plan weekend activities',
    'Call my concierge'
  ];

  const handleActionClick = (actionId: string) => {
    setActiveAction(activeAction === actionId ? null : actionId);
    
    if (actionId === 'voice') {
      setIsListening(!isListening);
      // Simulate voice recognition
      if (!isListening) {
        setTimeout(() => setIsListening(false), 3000);
      }
    }
  };

  // Auto-collapse after inactivity
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        if (!activeAction) {
          setIsExpanded(false);
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, activeAction]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className={`bg-[#957D65] rounded-2xl shadow-2xl shadow-[#957D65]/30 transition-all duration-300 backdrop-blur-sm border border-[#957D65]/20 ${
        isExpanded ? 'px-6 py-4' : 'px-4 py-3'
      }`}>
        
        {!isExpanded ? (
          /* Collapsed State */
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center space-x-2 text-[#E3DCD4] hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Zap size={18} />
              <span className="font-medium tracking-wide text-sm">Actions</span>
              <ChevronUp size={16} />
            </button>
          </div>
        ) : (
          /* Expanded State */
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Zap size={20} className="text-[#E3DCD4]" />
                <span className="font-serif font-medium text-[#E3DCD4] tracking-wide">Contextual Actions</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 text-[#E3DCD4] hover:text-white hover:bg-[#E3DCD4]/10 rounded-full transition-all duration-200 hover:scale-105"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Action Buttons - Grid Layout */}
            <div className="grid grid-cols-2 gap-2">
              {contextualActions.map((action) => {
                const Icon = action.icon;
                const isActive = activeAction === action.id;
                const isVoiceActive = action.id === 'voice' && isListening;
                
                return (
                  <button
                    key={action.id}
                    onClick={() => handleActionClick(action.id)}
                    className={`group relative flex flex-col items-center space-y-1 px-3 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      action.primary 
                        ? 'bg-[#E3DCD4] text-[#222635] hover:bg-white shadow-lg hover:shadow-xl' 
                        : isActive || isVoiceActive
                        ? 'bg-[#E3DCD4]/20 text-[#E3DCD4] border border-[#E3DCD4]/30'
                        : 'text-[#E3DCD4] hover:bg-[#E3DCD4]/10 border border-[#E3DCD4]/20'
                    }`}
                    title={`${action.label} (${action.shortcut})`}
                  >
                    <Icon size={18} className={isVoiceActive ? 'animate-pulse' : ''} />
                    <span className="font-medium tracking-wide text-xs text-center">{action.label}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#222635] text-[#E3DCD4] px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg font-light tracking-wide pointer-events-none z-10">
                      {action.description}
                      <div className="text-xs opacity-70 mt-1">{action.shortcut}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Voice Status */}
            {isListening && (
              <div className="flex items-center justify-center space-x-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#E3DCD4] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#E3DCD4] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-[#E3DCD4] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-[#E3DCD4] text-sm font-light">Listening...</span>
              </div>
            )}

            {/* Quick Commands */}
            {activeAction && !isListening && (
              <div className="border-t border-[#E3DCD4]/20 pt-4">
                <h4 className="text-[#E3DCD4]/80 text-xs font-medium uppercase tracking-widest mb-3">
                  Quick Commands
                </h4>
                <div className="flex flex-wrap gap-2">
                  {quickCommands.slice(0, 3).map((command, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-[#E3DCD4]/10 text-[#E3DCD4] text-sm rounded-full hover:bg-[#E3DCD4]/20 transition-all duration-200 hover:scale-105 font-light tracking-wide border border-[#E3DCD4]/20"
                    >
                      {command}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency Contact */}
            <div className="border-t border-[#E3DCD4]/20 pt-4">
              <button className="flex items-center space-x-2 text-[#E3DCD4]/80 hover:text-[#E3DCD4] transition-all duration-200 hover:scale-105">
                <Phone size={14} />
                <span className="text-sm font-light tracking-wide">Connect to Live Concierge</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}