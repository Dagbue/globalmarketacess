import { Trophy, Medal, Award, TrendingUp, Users, Star, Zap } from 'lucide-react';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

const traders = [
  { rank: 1, name: 'Thomas Parry Jones', handle: '@thomaspj', copiers: '28,869', return: '+64.2%', winRate: '92%' },
  { rank: 2, name: 'Jay Smith', handle: '@jaynemesis', copiers: '10,305', return: '+58.7%', winRate: '89%' },
  { rank: 3, name: 'Jeppe Kirk Bonde', handle: '@JeppeKirkBonde', copiers: '29,903', return: '+71.5%', winRate: '94%' },
  { rank: 4, name: 'Zechariah Bin Zheng', handle: '@FundManagerZech', copiers: '9,391', return: '+53.4%', winRate: '87%' },
  { rank: 5, name: 'Blue Screen Media ApS', handle: '@CPHequities', copiers: '13,563', return: '+49.8%', winRate: '85%' },
  { rank: 6, name: 'Amit Kupfer', handle: '@AmitKup', copiers: '8,725', return: '+47.2%', winRate: '83%' },
];

const traderImages = [
  'https://images.pexels.com/photos/7709266/pexels-photo-7709266.jpeg?_gl=1*npsu5y*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI0OTkkajQwJGwwJGgw',
  'https://images.pexels.com/photos/3966786/pexels-photo-3966786.jpeg?_gl=1*npsu5y*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI0OTkkajQwJGwwJGgw',
  'https://images.pexels.com/photos/25985695/pexels-photo-25985695.jpeg?_gl=1*4zrjqx*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
  'https://images.pexels.com/photos/17767534/pexels-photo-17767534.jpeg?_gl=1*npsu5y*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI0OTkkajQwJGwwJGgw',
  'https://images.pexels.com/photos/15029211/pexels-photo-15029211.jpeg?_gl=1*nmzggw*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI0OTkkajQwJGwwJGgw',
  'https://images.pexels.com/photos/6930579/pexels-photo-6930579.jpeg?_gl=1*4zrjqx*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return Trophy;
  if (rank === 2) return Medal;
  if (rank === 3) return Award;
  return null;
};

const getRankColor = (rank: number) => {
  if (rank === 1) return 'from-blue-500 to-cyan-500';
  if (rank === 2) return 'from-cyan-500 to-blue-500';
  if (rank === 3) return 'from-blue-600 to-cyan-600';
  return 'from-cyan-600 to-blue-600';
};

export default function TopTraders() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2.5 glass-strong border border-blue-500/30 rounded-full mb-6 animate-glow">
            <span className="text-cyan-400 font-bold text-sm flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>TOP PERFORMERS</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Most Copied Traders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-glow">
              Over The Last Year
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful investors who are copying these verified top performers
          </p>
        </div>

        {/* Carousel-style layout - Featured trader in center */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Side traders - smaller */}
            <div className="hidden lg:block space-y-6">
              {traders.slice(0, 2).map((trader, idx) => {
                const RankIcon = getRankIcon(trader.rank);
                const rankColor = getRankColor(trader.rank);

                return (
                  <div
                    key={trader.rank}
                    className="group relative glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] transition-all duration-500 hover:scale-105 animate-float"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    {RankIcon && (
                      <div className="absolute -top-3 -right-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${rankColor} rounded-xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-500 animate-glow`}>
                          <RankIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={traderImages[idx]}
                        alt={trader.name}
                        className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/30"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm">{trader.name}</h4>
                        <p className="text-gray-400 text-xs">{trader.handle}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Return</span>
                        <span className="font-bold text-green-400">{trader.return}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Win Rate</span>
                        <span className="font-bold text-cyan-400">{trader.winRate}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Featured center trader - large */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-glow"></div>

              <div className="relative glass-strong rounded-3xl p-10 border-2 border-blue-500/40 shadow-2xl backdrop-blur-xl animate-float">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-black shadow-2xl shadow-blue-500/50 border-4 border-slate-900 animate-glow flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    FEATURED TRADER
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-50 animate-glow"></div>
                    <img
                      src={traderImages[2]}
                      alt={traders[2].name}
                      className="relative w-32 h-32 rounded-3xl object-cover ring-4 ring-blue-500/50 shadow-2xl"
                    />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl border-4 border-slate-900 flex items-center justify-center shadow-xl">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      #{traders[2].rank}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{traders[2].name}</h3>
                  <p className="text-cyan-400 font-semibold mb-6">{traders[2].handle}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card rounded-2xl p-5 border border-blue-500/30 text-center">
                    <div className="text-xs text-slate-400 mb-2">Annual Return</div>
                    <div className="text-3xl font-black text-green-400">{traders[2].return}</div>
                  </div>
                  <div className="glass-card rounded-2xl p-5 border border-cyan-500/30 text-center">
                    <div className="text-xs text-slate-400 mb-2">Win Rate</div>
                    <div className="text-3xl font-black text-cyan-400">{traders[2].winRate}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center animate-glow">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">Copiers</span>
                  </div>
                  <span className="text-3xl font-black text-white">
                    {parseInt(traders[2].copiers).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handleBack}
                  className="w-full py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 animate-glow"
                >
                  <Zap className="w-5 h-5" />
                  Copy This Trader
                </button>
              </div>
            </div>

            {/* Side traders - smaller (right) */}
            <div className="hidden lg:block space-y-6">
              {traders.slice(3, 5).map((trader, idx) => {
                const rankColor = getRankColor(trader.rank);

                return (
                  <div
                    key={trader.rank}
                    className="group relative glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,204,255,0.4)] transition-all duration-500 hover:scale-105 animate-float"
                    style={{ animationDelay: `${(idx + 3) * 0.15}s` }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${rankColor}`}>
                        #{trader.rank}
                      </div>
                      <img
                        src={traderImages[idx + 3]}
                        alt={trader.name}
                        className="w-12 h-12 rounded-xl object-cover ring-2 ring-cyan-500/30"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm">{trader.name}</h4>
                        <p className="text-gray-400 text-xs">{trader.handle}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Return</span>
                        <span className="font-bold text-green-400">{trader.return}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Win Rate</span>
                        <span className="font-bold text-cyan-400">{trader.winRate}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom trader card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border border-blue-500/20 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.4)] transition-all duration-500 animate-float">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  #{traders[5].rank}
                </div>
                <img
                  src={traderImages[5]}
                  alt={traders[5].name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-500/30"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{traders[5].name}</h4>
                  <p className="text-gray-400 text-sm">{traders[5].handle}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Return</div>
                  <div className="text-xl font-bold text-green-400">{traders[5].return}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                  <div className="text-xl font-bold text-cyan-400">{traders[5].winRate}</div>
                </div>
                <button
                  onClick={handleBack}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all font-bold text-sm hover:scale-105 animate-glow"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
