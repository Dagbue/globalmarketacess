import { Users, Copy, BarChart2, TrendingUp, Shield, Zap } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const topTraders = [
  {
    name: 'Mike Morgan',
    return: '+47.3%',
    followers: '2,847',
    image: 'https://images.pexels.com/photos/5717690/pexels-photo-5717690.jpeg?_gl=1*epfmsg*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjIwODAkajU5JGwwJGgw',
    winRate: '87%',
    trades: '342'
  },
  {
    name: 'Sarah Chen',
    return: '+52.8%',
    followers: '3,921',
    image: 'https://images.pexels.com/photos/8485868/pexels-photo-8485868.jpeg?_gl=1*1m1ans7*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjIxOTIkajYwJGwwJGgw',
    winRate: '91%',
    trades: '458'
  },
  {
    name: 'James Wilson',
    return: '+38.9%',
    followers: '1,653',
    image: 'https://images.pexels.com/photos/3782216/pexels-photo-3782216.jpeg?_gl=1*10lkz8t*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjIwODAkajU5JGwwJGgw',
    winRate: '84%',
    trades: '289'
  },
  {
    name: 'Emma Davis',
    return: '+44.2%',
    followers: '2,104',
    image: 'https://images.pexels.com/photos/7959566/pexels-photo-7959566.jpeg?_gl=1*1m1ans7*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjIxOTIkajYwJGwwJGgw',
    winRate: '88%',
    trades: '376'
  },
];

export default function CopyTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-full shadow-lg shadow-cyan-500/10">
              <span className="text-cyan-400 font-bold text-sm flex items-center space-x-2">
                <Copy className="w-4 h-4" />
                <span>SOCIAL TRADING PLATFORM</span>
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">
              Replicate Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                Automatically
              </span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              Connect with elite traders and mirror their strategies in real-time. Our sophisticated copy trading system
              executes trades proportionally to your portfolio size with <span className="text-cyan-400 font-semibold">complete transparency</span> and verified performance metrics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
              <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)] transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Verified Professionals
                </h3>
                <p className="text-slate-400 text-sm">
                  Thoroughly vetted traders with audited track records and transparent statistics
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)] transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Instant Execution
                </h3>
                <p className="text-slate-400 text-sm">
                  Zero-delay synchronization ensures you never miss opportunities
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)] transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Deep Analytics
                </h3>
                <p className="text-slate-400 text-sm">
                  Comprehensive metrics and performance dashboards for informed decisions
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)] transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Risk Protection
                </h3>
                <p className="text-slate-400 text-sm">
                  Customizable stop-loss and position limits for capital preservation
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
              {topTraders.map((trader, i) => (
                <div key={i} className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_20px_70px_-15px_rgba(6,182,212,0.4)] transition-all duration-500 group hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="relative">
                      <img
                        src={trader.image}
                        alt={trader.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-cyan-500/20 group-hover:ring-cyan-500/40 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg leading-tight">{trader.name}</h3>
                      <p className="text-slate-400 text-sm">{trader.followers} followers</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 backdrop-blur-xl">
                      <span className="text-slate-300 text-sm font-medium">Return</span>
                      <span className="font-black text-green-400 text-xl">{trader.return}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-slate-800/60 backdrop-blur-xl rounded-lg border border-cyan-500/10">
                        <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                        <div className="font-bold text-white">{trader.winRate}</div>
                      </div>
                      <div className="p-3 bg-slate-800/60 backdrop-blur-xl rounded-lg border border-cyan-500/10">
                        <div className="text-xs text-slate-400 mb-1">Trades</div>
                        <div className="font-bold text-white">{trader.trades}</div>
                      </div>
                    </div>

                    <button
                        onClick={handleBack}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-bold text-sm group-hover:scale-105">
                      Copy Trader
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
