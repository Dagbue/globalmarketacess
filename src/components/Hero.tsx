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
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-dark-blue-500/20 to-dark-blue-600/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-dark-blue-400/15 to-dark-blue-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 glass-card rounded-full shadow-glass">
              <Globe className="w-4 h-4 text-dark-blue-400 mr-3" />
              <span className="text-white font-semibold text-sm">Access 50+ Global Exchanges Instantly</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="text-white">Your Gateway to</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-dark-blue-200 to-dark-blue-400 animate-gradient">
                Global Financial Markets
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
              Experience next-generation trading with institutional-grade tools designed for modern investors.
              Trade <span className="text-dark-blue-300 font-semibold">equities, forex, cryptocurrencies, and commodities</span> through
              a unified platform powered by real-time data.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                  onClick={() => handleBack()}
                  className="group relative px-8 py-4 bg-gradient-to-r from-dark-blue-500 to-dark-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-blue">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-400 to-dark-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center space-x-3">
                  <span>Begin Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-dark-blue-400" />
                </div>
                <span className="text-slate-200 font-medium">Lightning Fast Execution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-slate-200 font-medium">24/7 Market Access</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-dark-blue-500/20 via-dark-blue-600/10 to-dark-blue-400/20 rounded-3xl blur-3xl"></div>

            <div className="relative glass-card rounded-3xl shadow-glow-blue overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-500/10 to-transparent"></div>

              <div className="relative p-8 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center shadow-glass">
                      <TrendingUp className="w-7 h-7 text-dark-blue-400"/>
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

                <div className="glass rounded-2xl p-6 border border-dark-blue-500/30">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-white font-bold text-lg">Market Opportunities</div>
                    <div className="px-4 py-1.5 glass-card text-green-400 rounded-full text-xs font-bold">
                      TRENDING NOW
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['NVDA', 'TSLA', 'AAPL'].map((ticker) => (
                        <div key={ticker}
                             className="flex items-center justify-between text-sm hover:glass rounded-xl p-3 transition-all duration-300 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center shadow-glass">
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
