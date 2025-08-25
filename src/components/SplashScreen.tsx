import { useEffect, useState } from 'react';
import miftahLogo from '../assets/miftah_logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#222635] via-[#2a2f42] to-[#222635] flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo with animation */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto mb-8 relative animate-pulse-slow">
            <img 
              src={miftahLogo} 
              alt="Miftah AI" 
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#957D65]/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Brand text */}
        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-bold text-[#E3DCD4] tracking-wider animate-slide-up">
            MIFTAH AI
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#957D65] to-transparent mx-auto animate-expand"></div>
          <p className="text-xl text-[#957D65] font-light tracking-widest animate-slide-up-delay">
            LUXURY CONCIERGE
          </p>
          <p className="text-sm text-[#E3DCD4]/70 max-w-md mx-auto leading-relaxed animate-fade-in-delay">
            Your gateway to extraordinary experiences in the UAE. 
            Unlock personalized luxury with AI-powered concierge services.
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center space-x-2 animate-fade-in-delay-2">
          <div className="w-2 h-2 bg-[#957D65] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#957D65] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#957D65] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.8s both;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 1.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 1.8s both;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 1s both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}