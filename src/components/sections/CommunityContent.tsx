import { useState } from 'react';
import {
  Users,
  Plus,
  Filter,
  User,
  Building2
} from 'lucide-react';

export function CommunityContent() {
  const [activeTab, setActiveTab] = useState('individual');

  const tabs = [
    { id: 'individual', label: 'Individual', icon: User, description: 'Personal membership for discerning travelers' },
    { id: 'corporate', label: 'Corporate', icon: Building2, description: 'Exclusive access for organizations and teams' }
  ];

  return (
    <div className="h-full flex flex-col bg-[#222635]">
      {/* Luxury Header */}
      <div className="px-8 py-6 border-b border-[#957D65]/20 bg-[#222635]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-2" 
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Exclusive Circle
            </h1>
            <p className="text-base text-[#E3DCD4]/70 leading-relaxed font-light" 
               style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              Connect with distinguished members and access insider experiences
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20">
              <Filter size={20} />
            </button>
            <button className="group p-4 bg-gradient-to-r from-[#957D65] to-[#957D65]/90 text-[#E3DCD4] rounded-2xl hover:scale-102 transition-all duration-400 shadow-2xl shadow-[#957D65]/30 hover:shadow-[#957D65]/40">
              <Plus size={24} className="group-hover:rotate-90 transition-transform duration-400" />
            </button>
          </div>
        </div>

        {/* Luxury Navigation Tabs */}
        <div className="flex space-x-2 bg-[#E3DCD4]/5 rounded-2xl p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-400 ${
                  activeTab === tab.id
                    ? 'bg-[#957D65] text-[#E3DCD4] shadow-xl shadow-[#957D65]/20'
                    : 'text-[#E3DCD4]/70 hover:text-[#E3DCD4] hover:bg-[#E3DCD4]/10'
                }`}
                style={{ fontFamily: "'Avenir Next', sans-serif" }}
              >
                <Icon size={18} />
                <span className="tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-12">
        {activeTab === 'individual' ? (
          <>
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-8">
              <User size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#E3DCD4]/80 mb-4" 
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
              Individual Membership
            </h3>
            <p className="text-base text-[#E3DCD4]/60 max-w-lg leading-relaxed mb-8" 
               style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              Join our distinguished community of discerning travelers. Share exclusive experiences, access insider recommendations, and connect with like-minded connoisseurs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl">
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Exclusive Access
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  Private events, hidden venues, and curated experiences unavailable to the public
                </p>
              </div>
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.5s' }}>
                  Insider Network
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  Connect with fellow connoisseurs and access their personal recommendations
                </p>
              </div>
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '1s' }}>
                  Concierge Service
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  24/7 personal concierge for bookings, reservations, and special requests
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-8">
              <Building2 size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#E3DCD4]/80 mb-4" 
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
              Corporate Membership
            </h3>
            <p className="text-base text-[#E3DCD4]/60 max-w-lg leading-relaxed mb-8" 
               style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              Elevate your organization with exclusive access to premium experiences, team building events, and corporate hospitality services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl">
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Team Experiences
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  Exclusive team building activities and corporate retreat experiences
                </p>
              </div>
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.5s' }}>
                  Client Entertainment
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  Impress clients with access to premium venues and exclusive events
                </p>
              </div>
              <div className="p-6 bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20">
                <h4 className="text-lg font-semibold text-[#E3DCD4] mb-3 typewriter-enhanced" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '1s' }}>
                  Volume Benefits
                </h4>
                <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  Preferential rates and priority booking for multiple employees
                </p>
              </div>
            </div>
          </>
        )}
        
        <div className="space-y-3">
          <button className="px-8 py-4 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wider hover:scale-102 transition-all duration-400 shadow-lg shadow-[#957D65]/30 text-base uppercase"
                  style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
            {activeTab === 'individual' ? 'Request Individual Invitation' : 'Request Corporate Partnership'}
          </button>
          <p className="text-xs text-[#E3DCD4]/40 uppercase tracking-wider" 
             style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '1px' }}>
            {activeTab === 'individual' ? 'Membership by invitation only' : 'Partnership by application'}
          </p>
        </div>
      </div>
    </div>
  );
}
