import { ArrowRight, TrendingUp, Zap, Globe } from 'lucide-react';
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
    <section className="relative pt-36 pb-24 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-l from-teal-500/15 to-cyan-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-12">
          <div className="space-y-6">
            <div className="inline-flex items-center px-5 py-2.5 bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-full shadow-lg shadow-cyan-500/10">
              <Globe className="w-4 h-4 text-cyan-400 mr-2.5" />
              <span className="text-cyan-300 font-semibold text-sm tracking-wide">Access 50+ Global Exchanges Instantly</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Your Gateway to</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 animate-gradient">
                Global Financial Markets
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Experience next-generation trading with institutional-grade tools designed for modern investors.
              Trade <span className="text-cyan-400 font-semibold">equities, forex, cryptocurrencies, and commodities</span> through
              a unified platform powered by real-time data and advanced execution technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                  onClick={() => handleBack()}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center space-x-3">
                  <span>Begin Your Journey</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300 font-medium">Lightning Fast Execution</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">24/7 Market Access</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-teal-500/30 rounded-3xl blur-3xl"></div>

            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:32px_32px]"></div>

              <div className="relative p-8 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-slate-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <TrendingUp className="w-7 h-7 text-white"/>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Live Market Data</div>
                      <div className="text-slate-400 text-sm flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Real-Time Updates</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <SingleQuoteWidget/>
                  <SingleQuoteWidget2/>
                  <SingleQuoteWidget3/>
                  <SingleQuoteWidget4/>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-bold text-lg">Market Opportunities</div>
                    <div className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-400/30">
                      TRENDING NOW
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['NVDA', 'TSLA', 'AAPL'].map((ticker) => (
                        <div key={ticker}
                             className="flex items-center justify-between text-sm hover:bg-white/5 rounded-xl p-3 -mx-2 transition-all">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                              <span className="text-white font-bold text-sm">{ticker.charAt(0)}</span>
                            </div>
                            <span className="text-white font-bold">{ticker}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-slate-300 font-medium">${(Math.random() * 500 + 100).toFixed(2)}</span>
                            <span className="text-green-400 font-bold">+{(Math.random() * 5 + 1).toFixed(1)}%</span>
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
