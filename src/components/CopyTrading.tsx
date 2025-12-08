import { Users2, Copy, LineChart, TrendingUp, Shield, Zap } from 'lucide-react';
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
    <section className="py-36 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[700px] h-[700px] bg-lime-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-7 py-3.5 bg-gray-800/60 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20">
              <span className="text-emerald-400 font-black text-sm flex items-center space-x-2 tracking-wide uppercase">
                <Copy className="w-5 h-5" />
                <span>Copy Trading Network</span>
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter">
              Mirror Elite
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 mt-2">
                Strategies
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
              Connect with top-performing traders and automatically replicate their proven strategies. Advanced algorithms execute trades proportionally with <span className="text-emerald-400 font-bold">zero latency</span> and complete transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.4)] transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-5 shadow-2xl shadow-emerald-500/30">
                  <Users2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Verified Experts
                </h3>
                <p className="text-gray-400 text-base">
                  Audited performance history with transparent metrics and risk profiles
                </p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.4)] transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5 shadow-2xl shadow-teal-500/30">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Real-Time Sync
                </h3>
                <p className="text-gray-400 text-base">
                  Instant trade replication with microsecond execution precision
                </p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.4)] transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-5 shadow-2xl shadow-green-500/30">
                  <LineChart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Advanced Analytics
                </h3>
                <p className="text-gray-400 text-base">
                  Detailed performance tracking with comprehensive risk assessment
                </p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.4)] transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-lime-500 via-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-5 shadow-2xl shadow-lime-500/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Risk Controls
                </h3>
                <p className="text-gray-400 text-base">
                  Customizable limits and automated stop-loss protection
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-lime-500/25 rounded-[3rem] blur-[80px]"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {topTraders.map((trader, i) => (
                <div key={i} className="bg-gray-900/70 backdrop-blur-2xl rounded-[2rem] p-7 shadow-2xl border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_25px_80px_-15px_rgba(16,185,129,0.5)] transition-all duration-500 group hover:-translate-y-3">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={trader.image}
                        alt={trader.name}
                        className="w-18 h-18 rounded-2xl object-cover ring-4 ring-emerald-500/30 group-hover:ring-emerald-500/50 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-white text-xl leading-tight">{trader.name}</h3>
                      <p className="text-gray-400 text-sm font-medium">{trader.followers} followers</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/15 to-green-500/15 rounded-2xl border border-emerald-500/30 backdrop-blur-xl">
                      <span className="text-gray-300 text-sm font-bold">Total Return</span>
                      <span className="font-black text-emerald-400 text-2xl">{trader.return}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20">
                        <div className="text-xs text-gray-400 mb-1 font-medium">Win Rate</div>
                        <div className="font-black text-white text-lg">{trader.winRate}</div>
                      </div>
                      <div className="p-4 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20">
                        <div className="text-xs text-gray-400 mb-1 font-medium">Total Trades</div>
                        <div className="font-black text-white text-lg">{trader.trades}</div>
                      </div>
                    </div>

                    <button
                        onClick={handleBack}
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl hover:shadow-xl hover:shadow-emerald-500/50 transition-all font-black text-base group-hover:scale-105">
                      Start Copying
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
