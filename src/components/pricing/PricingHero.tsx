import { TrendingUp, Shield, Clock, Award, Sparkles } from 'lucide-react';

export default function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magenta-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full shadow-lg shadow-purple-500/10 mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Premium Investment Solutions</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Elevate Your</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-gradient">
              Wealth Journey
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Premium pricing, exceptional returns, and military-grade security. Start building extraordinary wealth with <span className="text-fuchsia-400 font-semibold">plans crafted for visionary investors</span>.
          </p>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group glass backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Military Security</div>
              <div className="text-purple-300 text-sm">256-bit encryption</div>
            </div>

            <div className="group glass-magenta backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">VIP Support</div>
              <div className="text-fuchsia-300 text-sm">Concierge service</div>
            </div>

            <div className="group glass-purple backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Premium ROI</div>
              <div className="text-purple-300 text-sm">Guaranteed returns</div>
            </div>

            <div className="group glass backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">50K+ Investors</div>
              <div className="text-fuchsia-300 text-sm">Elite community</div>
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
