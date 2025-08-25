import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { CRMDashboard } from '@/components/CRMDashboard';

const Index = () => {
  const [activeSection, setActiveSection] = useState('request-member');

  const renderMainContent = () => {
    switch (activeSection) {
      case 'request-member':
        return <CRMDashboard />;
      case 'users':
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Users</h2>
              <p className="text-muted-foreground">Users management coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Settings</h2>
              <p className="text-muted-foreground">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <CRMDashboard />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Fixed Header */}
      <Header />
      
      {/* Content area with fixed sidebar and scrollable main content */}
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <div className="flex-1 overflow-auto">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
