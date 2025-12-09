import { Trophy, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function TopTraders() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const traders = [
    {
      rank: 1,
      name: 'Thomas P. Jones',
      handle: '@thomaspj',
      copiers: '28,869',
      return: '+64.2%',
      winRate: '92%',
      badge: 'Elite',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      rank: 2,
      name: 'Jay Smith',
      handle: '@jaynemesis',
      copiers: '10,305',
      return: '+58.7%',
      winRate: '89%',
      badge: 'Pro',
      avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      rank: 3,
      name: 'Jeppe K. Bonde',
      handle: '@JeppeKirkBonde',
      copiers: '29,903',
      return: '+71.5%',
      winRate: '94%',
      badge: 'Elite',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      rank: 4,
      name: 'Zechariah Zheng',
      handle: '@FundManagerZech',
      copiers: '9,391',
      return: '+53.4%',
      winRate: '87%',
      badge: 'Pro',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      rank: 5,
      name: 'Blue Screen Media',
      handle: '@CPHequities',
      copiers: '13,563',
      return: '+49.8%',
      winRate: '85%',
      badge: 'Pro',
      avatar: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      rank: 6,
      name: 'Amit Kupfer',
      handle: '@AmitKup',
      copiers: '8,725',
      return: '+47.2%',
      winRate: '83%',
      badge: 'Verified',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
  ];

  return (
      <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
              <Trophy className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Top Performers</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Most Successful
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Trading Experts
            </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Follow and copy strategies from our highest-performing traders with verified track records
            </p>
          </div>

          {/* Traders Grid – NOW WITH PROFESSIONAL AVATARS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traders.map((trader) => (
                <div
                    key={trader.rank}
                    className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

                  <div className="relative">

                    {/* Rank + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xl">#{trader.rank}</span>
                        </div>
                        {trader.rank <= 3 && (
                            <Trophy className="w-7 h-7 text-yellow-400" />
                        )}
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                          trader.badge === 'Elite' ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' :
                              trader.badge === 'Pro' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                                  'bg-green-600/20 text-green-300 border border-green-500/30'
                      }`}>
                        {trader.badge}
                      </div>
                    </div>

                    {/* AVATAR + NAME + HANDLE */}
                    <div className="flex items-center gap-4 mb-6">
                      <img
                          src={trader.avatar}
                          alt={trader.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-600/20 shadow-xl"
                      />
                      <div>
                        <h3 className="text-white font-bold text-xl">{trader.name}</h3>
                        <p className="text-slate-400 text-sm font-medium">{trader.handle}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-green-600/10 to-transparent rounded-xl p-4 border border-green-500/20">
                        <div className="text-xs text-slate-400 mb-1">Total Return</div>
                        <div className="text-green-400 font-bold text-2xl flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          {trader.return}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl p-4 border border-blue-500/20">
                        <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                        <div className="text-blue-400 font-bold text-2xl">{trader.winRate}</div>
                      </div>
                    </div>

                    {/* Copiers */}
                    <div className="flex items-center justify-between p-4 bg-slate-800/60 rounded-xl border border-slate-700/40 mb-6">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-slate-300" />
                        <span className="text-slate-300 font-medium">Copiers</span>
                      </div>
                      <span className="text-white font-bold text-xl">
                    {parseInt(trader.copiers).toLocaleString()}
                  </span>
                    </div>

                    {/* Copy Button */}
                    <button
                        onClick={handleBack}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-600/40 flex items-center justify-center gap-3 group/btn"
                    >
                      Copy This Trader
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-slate-300 text-xl mb-8 font-medium">
              Want to copy real trading legends?
            </p>
            <button
                onClick={handleBack}
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-blue-600/50"
            >
              Start Copy Trading Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
  );
}