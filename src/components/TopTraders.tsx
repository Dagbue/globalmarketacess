import { Trophy, Star, TrendingUp, Users, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function TopTraders() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const traders = [
    { rank: 1, name: 'Thomas P. Jones', handle: '@thomaspj', copiers: '28,869', return: '+64.2%', winRate: '92%', badge: 'Elite' },
    { rank: 2, name: 'Jay Smith', handle: '@jaynemesis', copiers: '10,305', return: '+58.7%', winRate: '89%', badge: 'Pro' },
    { rank: 3, name: 'Jeppe K. Bonde', handle: '@JeppeKirkBonde', copiers: '29,903', return: '+71.5%', winRate: '94%', badge: 'Elite' },
    { rank: 4, name: 'Zechariah Zheng', handle: '@FundManagerZech', copiers: '9,391', return: '+53.4%', winRate: '87%', badge: 'Pro' },
    { rank: 5, name: 'Blue Screen Media', handle: '@CPHequities', copiers: '13,563', return: '+49.8%', winRate: '85%', badge: 'Pro' },
    { rank: 6, name: 'Amit Kupfer', handle: '@AmitKup', copiers: '8,725', return: '+47.2%', winRate: '83%', badge: 'Verified' },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <Trophy className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Top Performers</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Most Successful
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Trading Experts
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Follow and copy strategies from our highest-performing traders with verified track records
          </p>
        </div>

        {/* Traders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map((trader) => (
            <div
              key={trader.rank}
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

              <div className="relative">
                {/* Rank Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-bold">#{trader.rank}</span>
                    </div>
                    {trader.rank <= 3 && (
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>
                  <div className="px-3 py-1 bg-blue-600/20 rounded-full">
                    <span className="text-blue-300 text-xs font-medium">{trader.badge}</span>
                  </div>
                </div>

                {/* Trader Info */}
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{trader.name}</h3>
                  <p className="text-slate-400 text-sm">{trader.handle}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-xs text-slate-400 mb-1">Total Return</div>
                    <div className="text-green-400 font-bold text-lg flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {trader.return}
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                    <div className="text-blue-400 font-bold text-lg">{trader.winRate}</div>
                  </div>
                </div>

                {/* Copiers */}
                <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400 text-sm">Copiers</span>
                  </div>
                  <span className="text-white font-semibold">{parseInt(trader.copiers).toLocaleString()}</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBack}
                  className="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Copy Trader
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-lg mb-6">
            Want to see more top performers?
          </p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 text-white rounded-lg font-semibold hover:border-blue-800/50 transition-all"
          >
            View All Traders
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
