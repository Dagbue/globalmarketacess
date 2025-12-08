import { ArrowRight, TrendingUp, Sparkles, } from 'lucide-react';
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
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
          <div className="space-y-4">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
              <span className="text-blue-300 font-semibold text-sm tracking-wide">Trade Across 20+ Global Exchanges</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Invest in Markets,</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                from Local to Global
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Harness institutional-grade technology with retail accessibility. Execute trades
              seamlessly across <span className="text-cyan-400 font-semibold">stocks, forex, crypto, and commodities</span> with
              advanced analytics and real-time market insights.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <button
                  onClick={() => handleBack()}
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center space-x-3">
                  <span>Start Trading</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>


          </div>

          <div className="relative ">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.2)] overflow-hidden border border-slate-700/50">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="relative p-8 space-y-6">

                <div className="flex items-center justify-between pb-6 border-b border-slate-700/50">
                  <div className="flex items-center space-x-4">
                    <div
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <TrendingUp className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Portfolio Overview</div>
                      <div className="text-slate-400 text-sm flex items-center space-x-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Real-time Performance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <SingleQuoteWidget/>
                  <SingleQuoteWidget2/>
                  <SingleQuoteWidget3/>
                  <SingleQuoteWidget4/>
                </div>


                <div
                    className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm  p-5  border border-blue-400/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-bold">Market Signals</div>
                    <div
                        className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-400/30 animate-pulse">
                      5 STRONG BUY
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['NVDA', 'MSFT', 'AMZN'].map((ticker) => (
                        <div key={ticker}
                             className="flex items-center justify-between text-sm hover:bg-white/5 rounded-lg p-2 -mx-2 transition-all">
                          <div className="flex items-center space-x-3">
                            <div
                                className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                              <span className="text-white font-bold text-xs">{ticker.charAt(0)}</span>
                            </div>
                            <span className="text-white font-bold">{ticker}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                                className="text-slate-300 font-medium">${(Math.random() * 500 + 100).toFixed(2)}</span>
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
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
