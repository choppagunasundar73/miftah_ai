import { useState } from 'react';
import {
  Users,
  Plus,
  Filter,
  User,
  Building2,
  Target,
  Gem,
  Handshake,
  Search
} from 'lucide-react';

export function CommunityContent() {
  const [activeTab, setActiveTab] = useState('individual');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'individual', label: 'Individual', icon: User, description: 'Personal membership for discerning travelers' },
    { id: 'corporate', label: 'Corporate', icon: Building2, description: 'Exclusive access for organizations and teams' }
  ];

  return (
    <div className="h-full flex flex-col bg-[#222635]">
      {/* Luxury Header */}
      <div className="pl-16 pr-8 py-6 bg-[#222635]">
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

        {/* Luxury Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#957D65] z-10" style={{ opacity: 1 }} />
          <input
            type="text"
            placeholder="Search professionals, communities, or partnerships..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 rounded-2xl text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:ring-2 focus:ring-[#957D65]/40 focus:border-[#957D65]/50 transition-all duration-400 backdrop-blur-sm text-sm"
            style={{ fontFamily: "'Avenir Next', sans-serif" }}
          />
        </div>

        {/* Luxury Navigation Tabs */}
        <div className="flex space-x-2 bg-[#E3DCD4]/5 rounded-2xl p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-400 ${activeTab === tab.id
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

        {/* Border separator contained within padding */}
        <div className="border-b border-[#957D65]/20 mt-6"></div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto pl-16 pr-8 py-6">
        {activeTab === 'individual' ? (
          <>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <User size={32} className="text-[#957D65]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#E3DCD4]/80 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                Individual Professionals
              </h3>
              <p className="text-base text-[#E3DCD4]/60 max-w-lg leading-relaxed mb-8 mx-auto"
                style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                Connect with distinguished professionals across various industries
              </p>
            </div>

            {/* Professional Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop&crop=center"
                    alt="Legal professionals"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Lawyers
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Legal professionals specializing in corporate law, international business, and luxury asset management
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Connect
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center"
                    alt="Financial advisors"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Financial Advisors
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Wealth management experts and private banking specialists serving high-net-worth individuals
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Connect
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=200&fit=crop&crop=center"
                    alt="Architects"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Architects
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Visionary architects creating iconic structures and luxury residential developments
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Connect
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop&crop=center"
                    alt="Designers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Designers
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Interior designers, fashion designers, and creative professionals shaping luxury experiences
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Connect
                  </button>
                </div>
              </div>
            </div>


          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Building2 size={32} className="text-[#957D65]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#E3DCD4]/80 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                Corporate Communities
              </h3>
              <p className="text-base text-[#E3DCD4]/60 max-w-lg leading-relaxed mb-8 mx-auto"
                style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                Exclusive partnerships with Dubai's most prestigious hospitality destinations
              </p>
            </div>

            {/* Corporate Communities */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop&crop=center"
                    alt="Jumeirah Marsa Al Arab luxury resort"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Jumeirah Marsa Al Arab
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Exclusive access to Dubai's newest luxury resort with private beach experiences and world-class dining
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Join Community
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop&crop=center"
                    alt="Royal Atlantis The Palm resort"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Royal Atlantis The Palm
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Premium partnerships with the iconic resort featuring exclusive suites and underwater experiences
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Join Community
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop&crop=center"
                    alt="Cheval Blanc Dubai luxury hotel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Cheval Blanc Dubai
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    French luxury hospitality with bespoke experiences and Michelin-starred dining partnerships
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Join Community
                  </button>
                </div>
              </div>

              <div className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-2xl border-none transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  boxShadow: '0px 8px 24px rgba(34, 38, 53, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=200&fit=crop&crop=center"
                    alt="Saadiyat Island cultural destination"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#222635] mb-3 group-hover:text-[#957D65] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Faya Saadiyat Abu Dhabi
                  </h4>
                  <p className="text-sm text-[#222635]/70 leading-relaxed mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Cultural island retreat with exclusive access to art galleries, pristine beaches, and wellness sanctuaries
                  </p>
                  <button className="w-full py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium hover:scale-[1.02] transition-all duration-200 text-sm">
                    Join Community
                  </button>
                </div>
              </div>
            </div>

            {/* Corporate Benefits */}
            <div className="bg-[#E3DCD4]/10 rounded-2xl border border-[#957D65]/20 p-6 mb-8">
              <h4 className="text-lg font-semibold text-[#E3DCD4] mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Corporate Partnership Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target size={24} className="text-[#957D65]" />
                  </div>
                  <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Exclusive event hosting privileges
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Gem size={24} className="text-[#957D65]" />
                  </div>
                  <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Priority booking and concierge services
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Handshake size={24} className="text-[#957D65]" />
                  </div>
                  <p className="text-sm text-[#E3DCD4]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    Networking with industry leaders
                  </p>
                </div>
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
