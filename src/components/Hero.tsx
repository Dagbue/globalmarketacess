import { ArrowRight, Sparkles, Zap, Globe, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import SingleQuoteWidget from "./widgets/SingleQuoteWidget.tsx";
import SingleQuoteWidget2 from "./widgets/SingleQuoteWidget2.tsx";
import SingleQuoteWidget3 from "./widgets/SingleQuoteWidget3.tsx";
import SingleQuoteWidget4 from "./widgets/SingleQuoteWidget4.tsx";
import {useNavigate} from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="relative min-h-screen pt-24 pb-32 px-6 bg-slate-950 overflow-hidden">
      {/* Animated Background Orbs - Blue Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[900px] h-[900px] bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-[160px] animate-pulse animate-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/20 to-blue-400/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/15 to-blue-700/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative">
        {/* Main Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-6 items-start">

          {/* Left Column - Hero Content (Spans 7 cols) */}
          <div className="col-span-12 lg:col-span-7 space-y-8 relative z-10">

            {/* Floating Badge - Tilted */}
            <div className="inline-block" style={{ transform: 'rotate(-2deg)' }}>
              <div className="glass-strong backdrop-blur-2xl border border-blue-400/30 rounded-full px-6 py-3 shadow-[0_0_40px_rgba(0,102,255,0.2)] animate-shimmer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center animate-glow">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-cyan-300 font-bold text-sm tracking-wider">50+ GLOBAL EXCHANGES</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Main Heading with Staggered Layout */}
            <div className="space-y-4">
              <div className="glass backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,102,255,0.15)] animate-float" style={{ animationDelay: '0.3s' }}>
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                  <span className="block text-white mb-3">Trade</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                    Beyond
                  </span>
                  <span className="block text-white mt-3">Limits</span>
                </h1>
              </div>

              {/* Diagonal Floating Panel */}
              <div className="relative ml-12" style={{ transform: 'rotate(1deg)' }}>
                <div className="glass-card backdrop-blur-2xl border border-cyan-400/20 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,204,255,0.2)] animate-float" style={{ animationDelay: '0.6s' }}>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 font-bold text-xl">Next-generation platform</span> for institutional-grade trading.
                    Access <span className="text-blue-400 font-semibold">equities, forex, crypto & commodities</span> with
                    lightning-fast execution and real-time data intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section with Overlapping Cards */}
            <div className="relative pt-6">
              {/* Main CTA Button - Large */}
              <div className="relative z-20" style={{ transform: 'rotate(-1deg)' }}>
                <button
                  onClick={() => handleBack()}
                  className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-2xl font-black text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(0,102,255,0.8)] animate-glow w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center space-x-4">
                    <span>START TRADING NOW</span>
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Overlapping Feature Cards */}
              <div className="absolute -bottom-8 left-0 right-0 flex gap-4 z-10">
                <div className="glass-strong backdrop-blur-xl border border-blue-400/30 rounded-xl px-6 py-4 flex items-center space-x-3 shadow-[0_0_30px_rgba(0,102,255,0.2)] animate-shimmer flex-1">
                  <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
                  <span className="text-slate-200 font-bold">0.01s Execution</span>
                </div>
                <div className="glass-strong backdrop-blur-xl border border-cyan-400/30 rounded-xl px-6 py-4 flex items-center space-x-3 shadow-[0_0_30px_rgba(0,204,255,0.2)] animate-shimmer flex-1" style={{ animationDelay: '0.5s' }}>
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-200 font-bold">Bank-Grade Security</span>
                </div>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-16">
              <div className="glass backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">50+</div>
                <div className="text-slate-400 font-semibold text-sm mt-2">Exchanges</div>
              </div>
              <div className="glass backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-400">24/7</div>
                <div className="text-slate-400 font-semibold text-sm mt-2">Trading</div>
              </div>
              <div className="glass backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all animate-float" style={{ animationDelay: '1.4s' }}>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">1M+</div>
                <div className="text-slate-400 font-semibold text-sm mt-2">Users</div>
              </div>
            </div>
          </div>

          {/* Right Column - Market Data Stack (Spans 5 cols) */}
          <div className="col-span-12 lg:col-span-5 relative">
            {/* Background Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-blue-600/30 rounded-[3rem] blur-[80px] animate-pulse"></div>

            {/* Stacked Cards with Z-Index Layering */}
            <div className="relative space-y-6">

              {/* Card 1 - Market Overview (Top Layer) */}
              <div className="relative z-30" style={{ transform: 'rotate(-1.5deg)' }}>
                <div className="glass-strong backdrop-blur-2xl rounded-3xl border border-blue-400/40 shadow-[0_0_100px_rgba(0,102,255,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff10_1px,transparent_1px),linear-gradient(to_bottom,#0066ff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.5)] animate-glow">
                          <BarChart3 className="w-8 h-8 text-white"/>
                        </div>
                        <div>
                          <div className="text-white font-black text-xl">Live Markets</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></span>
                            <span className="text-cyan-400 text-sm font-bold">STREAMING</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-xl">
                        <span className="text-cyan-300 font-bold text-sm">REALTIME</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <SingleQuoteWidget/>
                      <SingleQuoteWidget2/>
                      <SingleQuoteWidget3/>
                      <SingleQuoteWidget4/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Trending Assets (Middle Layer, Offset) */}
              <div className="relative z-20 -mt-12 ml-8" style={{ transform: 'rotate(1deg)' }}>
                <div className="glass-card backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,204,255,0.3)] animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-cyan-400 animate-pulse" />
                      <span className="text-white font-black text-lg">Hot Assets</span>
                    </div>
                    <div className="px-4 py-1.5 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-cyan-300 rounded-full text-xs font-black border border-cyan-400/40 animate-pulse">
                      TRENDING
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { ticker: 'NVDA', name: 'NVIDIA', price: 487.32, change: 5.8 },
                      { ticker: 'BTC', name: 'Bitcoin', price: 43267.89, change: 3.2 },
                      { ticker: 'TSLA', name: 'Tesla', price: 238.45, change: 4.5 }
                    ].map((asset, idx) => (
                      <div key={asset.ticker}
                           className="glass backdrop-blur-xl border border-blue-400/20 rounded-2xl p-4 hover:border-cyan-400/40 transition-all hover:shadow-[0_0_30px_rgba(0,204,255,0.2)] group"
                           style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                              <span className="text-white font-black text-lg">{asset.ticker.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-white font-bold text-base">{asset.ticker}</div>
                              <div className="text-slate-400 text-xs">{asset.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-bold text-base">${asset.price.toFixed(2)}</div>
                            <div className="text-cyan-400 font-bold text-sm">+{asset.change}%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3 - Platform Stats (Bottom Layer, More Offset) */}
              <div className="relative z-10 -mt-8 -ml-6" style={{ transform: 'rotate(-0.5deg)' }}>
                <div className="glass-strong backdrop-blur-2xl border border-blue-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,102,255,0.25)] animate-shimmer">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">$2.4B+</div>
                      <div className="text-slate-400 font-semibold text-sm">Daily Volume</div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">100%</div>
                      <div className="text-slate-400 font-semibold text-sm">Secure</div>
                    </div>
                  </div>
                </div>
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
          animation: gradient 8s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 20px rgba(0, 102, 255, 0.5));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 40px rgba(0, 204, 255, 0.8));
          }
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .glass {
          background: rgba(0, 26, 64, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .glass-card {
          background: rgba(0, 51, 128, 0.35);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .glass-strong {
          background: rgba(0, 61, 153, 0.45);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }
      `}</style>
    </section>
  );
}
