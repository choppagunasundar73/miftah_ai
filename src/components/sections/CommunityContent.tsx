import {
  Users,
  Plus,
  Filter
} from 'lucide-react';

export function CommunityContent() {

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
      </div>

      {/* Luxury Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-12">
        <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-8">
          <Users size={32} className="text-[#957D65]" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-[#E3DCD4]/80 mb-4" 
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
          Exclusive Circle Launching Soon
        </h3>
        <p className="text-base text-[#E3DCD4]/60 max-w-lg leading-relaxed mb-8" 
           style={{ fontFamily: "'Avenir Next', sans-serif" }}>
          Join our distinguished community of discerning travelers. Share exclusive experiences, access insider recommendations, and connect with like-minded connoisseurs.
        </p>
        <div className="space-y-3">
          <button className="px-8 py-4 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wider hover:scale-102 transition-all duration-400 shadow-lg shadow-[#957D65]/30 text-base uppercase"
                  style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
            Request Invitation
          </button>
          <p className="text-xs text-[#E3DCD4]/40 uppercase tracking-wider" 
             style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '1px' }}>
            Membership by invitation only
          </p>
        </div>
      </div>
    </div>
  );
}
