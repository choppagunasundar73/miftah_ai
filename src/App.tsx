import { useState, useEffect } from 'react';
import { AmbientStatusBar } from './components/AmbientStatusBar';
import { MemoryContextPanel } from './components/MemoryContextPanel';
// import { InspirationContextPanel } from './components/InspirationContextPanel';
import { ConversationCanvas } from './components/ConversationCanvas';
import { SplashScreen } from './components/SplashScreen';
import { PreferencesModal } from './components/PreferencesModal';
import { IncognitoInterface } from './components/IncognitoInterface';
import { LanguageProvider } from './contexts/LanguageContext';
import { useIsMobile } from './hooks/use-mobile';
import './styles/rtl.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [memoryPanelOpen, setMemoryPanelOpen] = useState(false);
  // const [inspirationPanelOpen, setInspirationPanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('chats');
  const [showPreferences, setShowPreferences] = useState(false);
  const [incognitoMode, setIncognitoMode] = useState(false);
  const isMobile = useIsMobile();

  // Handle responsive behavior
  useEffect(() => {
    if (isMobile) {
      setMemoryPanelOpen(false);
    } else {
      // Auto-open memory panel on desktop for better UX
      setMemoryPanelOpen(true);
    }
  }, [isMobile]);

  // Handle keyboard shortcuts for conversation-centric experience
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case 'm':
            e.preventDefault();
            // Voice input functionality - integrated with conversation
            console.log('Voice input activated in conversation');
            break;
          case 'c':
            e.preventDefault();
            // Camera input functionality - visual search in conversation
            console.log('Visual search activated in conversation');
            break;
          case 'k':
            e.preventDefault();
            // Quick calendar functionality - contextual to conversation
            console.log('Calendar context activated');
            break;
          case 'p':
            e.preventDefault();
            // Call concierge functionality - priority escalation
            console.log('Live concierge connection initiated');
            break;
          case '!':
            e.preventDefault();
            // Priority help functionality - emergency assistance
            console.log('Priority assistance activated');
            break;
          case '[':
            e.preventDefault();
            setMemoryPanelOpen(prev => !prev);
            break;
          // case ']':
          //   e.preventDefault();
          //   setInspirationPanelOpen(prev => !prev);
          //   break;
          case 'Escape':
            e.preventDefault();
            // Close memory panel for focus mode
            setMemoryPanelOpen(false);
            break;
          case '1':
            e.preventDefault();
            setActiveSection('chats');
            break;
          case '2':
            e.preventDefault();
            setActiveSection('recommendations');
            break;
          case '3':
            e.preventDefault();
            setActiveSection('discover');
            break;
          case '4':
            e.preventDefault();
            setActiveSection('booking');
            break;
          case '5':
            e.preventDefault();
            setActiveSection('calendar');
            break;
          case '6':
            e.preventDefault();
            setActiveSection('itinerary');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (incognitoMode) {
    return <IncognitoInterface onExitIncognito={() => setIncognitoMode(false)} />;
  }

  return (
    <LanguageProvider>
      <div className="h-screen bg-[#E3DCD4] overflow-hidden font-sans">
      {/* Ambient Top Status Bar - Ultra-thin, conversation-focused */}
      <AmbientStatusBar
        onMemoryToggle={() => setMemoryPanelOpen(prev => !prev)}
        memoryOpen={memoryPanelOpen}
        onSettingsClick={() => setShowPreferences(true)}
      />

      {/* Main Conversation-Centric Layout */}
      <div className="flex relative h-[calc(100vh-4rem)]">
        {/* Left Context Panel - Memory (Sand theme) */}
        <MemoryContextPanel
          isOpen={memoryPanelOpen}
          onToggle={() => setMemoryPanelOpen(prev => !prev)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Central Conversation Canvas - Primary interaction surface */}
        <ConversationCanvas
          memoryOpen={memoryPanelOpen}
          activeSection={activeSection}
        />

        {/* Right Context Panel - Inspiration (Navy theme) */}
        {/* <InspirationContextPanel 
          isOpen={inspirationPanelOpen} 
          onToggle={() => setInspirationPanelOpen(prev => !prev)} 
        /> */}
      </div>

      {/* Smart Context Drawer - Contextual actions repositioned - Commented out */}
      {/* <SmartContextDrawer /> */}

      {/* Overlay for mobile panel management */}
      {memoryPanelOpen && isMobile && (
        <div
          className="fixed inset-0 bg-[#222635]/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => {
            setMemoryPanelOpen(false);
          }}
        />
      )}

      {/* Preferences Modal */}
      <PreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        onActivateIncognito={() => setIncognitoMode(true)}
      />
      </div>
    </LanguageProvider>
  );
}

export default App;