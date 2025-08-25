import React, { useState, useEffect } from 'react';
import { AmbientStatusBar } from './components/AmbientStatusBar';
import { MemoryContextPanel } from './components/MemoryContextPanel';
import { InspirationContextPanel } from './components/InspirationContextPanel';
import { ConversationCanvas } from './components/ConversationCanvas';
import { SmartContextDrawer } from './components/SmartContextDrawer';

function App() {
  const [memoryPanelOpen, setMemoryPanelOpen] = useState(false);
  const [inspirationPanelOpen, setInspirationPanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('chats');

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMemoryPanelOpen(false);
        setInspirationPanelOpen(false);
      } else {
        // Auto-open panels on desktop for better UX
        setMemoryPanelOpen(true);
        setInspirationPanelOpen(true);
      }
    };

    // Set initial state based on screen size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          case ']':
            e.preventDefault();
            setInspirationPanelOpen(prev => !prev);
            break;
          case 'Escape':
            e.preventDefault();
            // Close all panels for focus mode
            setMemoryPanelOpen(false);
            setInspirationPanelOpen(false);
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

  return (
    <div className="h-screen bg-[#E3DCD4] overflow-hidden font-sans">
      {/* Ambient Top Status Bar - Ultra-thin, conversation-focused */}
      <AmbientStatusBar 
        onMemoryToggle={() => setMemoryPanelOpen(prev => !prev)}
        onInspirationToggle={() => setInspirationPanelOpen(prev => !prev)}
        memoryOpen={memoryPanelOpen}
        inspirationOpen={inspirationPanelOpen}
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
          inspirationOpen={inspirationPanelOpen}
          activeSection={activeSection}
        />

        {/* Right Context Panel - Inspiration (Navy theme) */}
        <InspirationContextPanel 
          isOpen={inspirationPanelOpen} 
          onToggle={() => setInspirationPanelOpen(prev => !prev)} 
        />
      </div>

      {/* Smart Context Drawer - Contextual actions repositioned */}
      <SmartContextDrawer />

      {/* Overlay for mobile panel management */}
      {(memoryPanelOpen || inspirationPanelOpen) && window.innerWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-[#222635]/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => {
            setMemoryPanelOpen(false);
            setInspirationPanelOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;