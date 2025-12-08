import { Trophy, Medal, Award, TrendingUp, Users } from 'lucide-react';
import {useNavigate} from "react-router-dom";

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
  if (rank === 1) return 'from-purple-500 to-fuchsia-500';
  if (rank === 2) return 'from-fuchsia-500 to-pink-600';
  if (rank === 3) return 'from-pink-500 to-purple-500';
  return 'from-purple-600 to-fuchsia-600';
};

export default function TopTraders() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full mb-6 animate-glow">
            <span className="text-purple-400 font-bold text-sm flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>TOP PERFORMERS</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Most Copied Traders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 animate-glow">
              Over The Last Year
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful investors who are copying these verified top performers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {traders.map((trader, idx) => {
            const RankIcon = getRankIcon(trader.rank);
            const rankColor = getRankColor(trader.rank);

            return (
              <div
                key={trader.rank}
                className="group relative glass-purple rounded-3xl p-8 border-2 border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {trader.rank <= 3 && (
                  <div className="absolute -top-4 -right-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${rankColor} rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-500 animate-glow`}>
                      {RankIcon && <RankIcon className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={traderImages[idx]}
                      alt={trader.name}
                      className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white/20 group-hover:ring-purple-400/50 transition-all"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl border-2 border-gray-900 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${rankColor}`}>
                        #{trader.rank}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-lg leading-tight">{trader.name}</h4>
                    <p className="text-gray-400 text-sm">{trader.handle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-purple rounded-xl p-3 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">Annual Return</div>
                      <div className="text-2xl font-black text-green-400">{trader.return}</div>
                    </div>
                    <div className="glass-purple rounded-xl p-3 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">Win Rate</div>
                      <div className="text-2xl font-black text-purple-400">{trader.winRate}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-xl border border-purple-400/30">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-semibold">Copiers</span>
                    </div>
                    <span className="text-2xl font-black text-white">
                      {parseInt(trader.copiers).toLocaleString()}
                    </span>
                  </div>

                  <button
                      onClick={handleBack}
                      className="w-full py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all font-bold text-base group-hover:scale-105 animate-glow">
                    Copy This Trader
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
