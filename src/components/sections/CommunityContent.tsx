import {
  Users,
  Plus,
  Filter
} from 'lucide-react';

export function CommunityContent() {

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              Community
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              Connect with fellow travelers and discover local insights
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
              <Filter size={20} />
            </button>
            <button className="group p-4 bg-gradient-to-r from-[#957D65] to-[#957D65]/90 text-[#E3DCD4] rounded-2xl hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20 hover:shadow-xl">
              <Plus size={24} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
          <Users size={32} className="text-[#957D65]" />
        </div>
        <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">Community Coming Soon</h3>
        <p className="text-[#222635]/40 max-w-md leading-relaxed mb-6">
          Connect with fellow travelers, share experiences, and discover local insights from the Dubai community.
        </p>
        <button className="px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
