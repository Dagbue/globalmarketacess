import { TrendingUp, Shield, Clock, Award, Sparkles, Zap, Target, Rocket } from 'lucide-react';

export default function PricingHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[700px] h-[700px] bg-[#0066ff]/30 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-[#00ccff]/25 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#0080ff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff12_1px,transparent_1px),linear-gradient(to_bottom,#0066ff12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-16">
        {/* Hero Content with Overlapping Glass Layers */}
        <div className="relative mb-20">
          {/* Background Glass Layer */}
          <div className="absolute inset-0 glass-strong backdrop-blur-2xl rounded-[3rem] border border-[#0066ff]/30 -rotate-1 scale-105"></div>

          {/* Main Content Layer */}
          <div className="relative glass-card backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 border-2 border-[#00ccff]/40 shadow-2xl shadow-[#0066ff]/20">
            <div className="text-center">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-8 py-4 glass-strong border-2 border-[#0080ff]/50 rounded-full shadow-xl shadow-[#0066ff]/30 mb-10 animate-glow relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 rounded-full blur-xl"></div>
                <Sparkles className="w-5 h-5 text-[#00ccff] mr-3 animate-pulse relative z-10" />
                <span className="text-[#00ccff] font-bold text-base tracking-wide relative z-10">Premium Investment Solutions</span>
                <Zap className="w-5 h-5 text-[#0080ff] ml-3 animate-pulse relative z-10" />
              </div>

              {/* Title with 3D Effect */}
              <div className="relative mb-8">
                <h1 className="text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">
                  <span className="text-white drop-shadow-2xl">Transform Your</span>
                  <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-gradient drop-shadow-2xl">
                    Financial Future
                  </span>
                </h1>
                {/* 3D Shadow Effect */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent blur-2xl"></div>
              </div>

              <p className="text-xl lg:text-2xl text-blue-200 leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
                Elite investment strategies with <span className="text-[#00ccff] font-bold">guaranteed returns</span> and military-grade security. Join <span className="text-[#0080ff] font-bold">50,000+ investors</span> building extraordinary wealth.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid with Tilted & Stacked Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Card 1 - Tilted Left */}
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 glass-strong rounded-2xl -rotate-3 scale-95 opacity-50 blur-sm"></div>
            <div className="relative glass-card backdrop-blur-2xl rounded-2xl p-8 border-2 border-[#0066ff]/40 hover:border-[#0066ff]/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0066ff]/30 rotate-1 hover:rotate-0">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-[#0066ff]/50 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl blur-xl opacity-70"></div>
                  <Shield className="w-8 h-8 text-white relative z-10" />
                </div>
                <div className="text-white font-black text-xl mb-3 text-center">Military Security</div>
                <div className="text-[#00ccff] text-sm font-semibold text-center">256-bit encryption</div>
              </div>
            </div>
          </div>

          {/* Card 2 - Tilted Right */}
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 glass-strong rounded-2xl rotate-3 scale-95 opacity-50 blur-sm"></div>
            <div className="relative glass-card backdrop-blur-2xl rounded-2xl p-8 border-2 border-[#0080ff]/40 hover:border-[#0080ff]/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0080ff]/30 -rotate-1 hover:rotate-0">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-[#0080ff]/50 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl blur-xl opacity-70"></div>
                  <Clock className="w-8 h-8 text-white relative z-10" />
                </div>
                <div className="text-white font-black text-xl mb-3 text-center">VIP Support</div>
                <div className="text-[#00ccff] text-sm font-semibold text-center">24/7 Concierge service</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Stacked Layers */}
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 glass-strong rounded-2xl -rotate-2 scale-98 opacity-40 blur-sm"></div>
            <div className="absolute inset-0 glass-strong rounded-2xl rotate-2 scale-96 opacity-30 blur-md"></div>
            <div className="relative glass-card backdrop-blur-2xl rounded-2xl p-8 border-2 border-[#00ccff]/40 hover:border-[#00ccff]/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00ccff]/30 hover:rotate-0">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-[#00ccff]/50 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-2xl blur-xl opacity-70"></div>
                  <Award className="w-8 h-8 text-white relative z-10" />
                </div>
                <div className="text-white font-black text-xl mb-3 text-center">Premium ROI</div>
                <div className="text-[#00ccff] text-sm font-semibold text-center">Guaranteed returns</div>
              </div>
            </div>
          </div>

          {/* Card 4 - 3D Depth Effect */}
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 glass-strong rounded-2xl rotate-1 scale-93 opacity-30 blur-lg translate-y-2"></div>
            <div className="absolute inset-0 glass-strong rounded-2xl -rotate-1 scale-96 opacity-50 blur-sm translate-y-1"></div>
            <div className="relative glass-card backdrop-blur-2xl rounded-2xl p-8 border-2 border-[#0080ff]/40 hover:border-[#0080ff]/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0080ff]/30 hover:rotate-0">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-[#0066ff]/50 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl blur-xl opacity-70"></div>
                  <TrendingUp className="w-8 h-8 text-white relative z-10" />
                </div>
                <div className="text-white font-black text-xl mb-3 text-center">50K+ Investors</div>
                <div className="text-[#00ccff] text-sm font-semibold text-center">Elite community</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar with Heavy Glass */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/20 via-[#00ccff]/20 to-[#0080ff]/20 rounded-3xl blur-2xl"></div>
          <div className="relative glass-strong backdrop-blur-3xl rounded-3xl p-8 border-2 border-[#0066ff]/30 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] mb-2">$2.5B+</div>
                <div className="text-blue-300 font-semibold">Assets Under Management</div>
              </div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0080ff] to-[#00ccff] mb-2">98.7%</div>
                <div className="text-blue-300 font-semibold">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ccff] to-[#0066ff] mb-2">8 Years</div>
                <div className="text-blue-300 font-semibold">Proven Track Record</div>
              </div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#0080ff] mb-2">24/7</div>
                <div className="text-blue-300 font-semibold">Elite Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
