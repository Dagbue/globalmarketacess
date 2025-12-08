import { ArrowRight, Sparkles, Zap, Shield, BarChart3 } from 'lucide-react';
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
    <section className="relative pt-40 pb-32 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-lime-500/15 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[900px] h-[900px] bg-gradient-to-l from-green-500/10 via-emerald-500/15 to-teal-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[180px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:56px_56px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-16">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl shadow-xl shadow-emerald-500/20">
              <Shield className="w-5 h-5 text-emerald-400 mr-3" />
              <span className="text-emerald-300 font-bold text-sm tracking-wide">Trusted by 250,000+ Active Traders Worldwide</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
              <span className="text-white">Trade Without</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 animate-gradient">
                Boundaries
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              Access premium financial markets with zero-commission trading, lightning-fast execution, and institutional-grade security.
              Trade <span className="text-emerald-400 font-bold">stocks, forex, crypto, and commodities</span> from a single powerful platform.
            </p>

            <div className="flex flex-wrap gap-5 pt-6">
              <button
                  onClick={() => handleBack()}
                  className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.7)]">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center space-x-3">
                  <span>Start Trading Free</span>
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-3 group">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Instant Execution</div>
                  <div className="text-gray-400 text-xs">Sub-10ms latency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Advanced Analytics</div>
                  <div className="text-gray-400 text-xs">Real-time insights</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-lime-500/30 rounded-[3rem] blur-[80px]"></div>

            <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.4)] overflow-hidden border border-emerald-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              <div className="relative p-10 space-y-8">
                <div className="flex items-center justify-between pb-8 border-b border-emerald-500/20">
                  <div className="flex items-center space-x-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-60"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/40">
                        <Sparkles className="w-8 h-8 text-white"/>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-black text-xl">Live Market Feed</div>
                      <div className="text-gray-400 text-sm flex items-center space-x-2 mt-1">
                        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></span>
                        <span>Streaming in Real-Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SingleQuoteWidget/>
                  <SingleQuoteWidget2/>
                  <SingleQuoteWidget3/>
                  <SingleQuoteWidget4/>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-2xl p-7 rounded-3xl border border-emerald-500/30 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-white font-black text-xl">Top Movers Today</div>
                    <div className="px-5 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-black border border-emerald-400/40 shadow-lg shadow-emerald-500/20">
                      LIVE UPDATES
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['NVDA', 'TSLA', 'AAPL'].map((ticker, idx) => (
                        <div key={ticker}
                             className="flex items-center justify-between text-sm hover:bg-emerald-500/10 rounded-2xl p-4 -mx-2 transition-all border border-transparent hover:border-emerald-500/20">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
                              <span className="text-white font-black text-base">{ticker.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-white font-black text-base">{ticker}</div>
                              <div className="text-gray-400 text-xs">Tech Stock</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-5">
                            <span className="text-white font-bold text-base">${(Math.random() * 500 + 100).toFixed(2)}</span>
                            <span className="text-emerald-400 font-black text-base">+{(Math.random() * 5 + 1).toFixed(1)}%</span>
                          </div>
                        </div>
                    ))}
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
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
