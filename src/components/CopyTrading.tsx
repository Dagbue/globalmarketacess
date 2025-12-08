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
    <section className="py-32 px-6 bg-gradient-to-br from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-40 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full">
              <span className="text-cyan-700 font-bold text-sm flex items-center space-x-2">
                <Copy className="w-4 h-4" />
                <span>CopyTrader Technology</span>
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
              When They Invest,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                You Invest
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
              Leverage the expertise of <span className="text-gray-900 font-bold">seasoned investors</span> through our advanced CopyTrader system.
              Mirror successful strategies automatically with verified performance metrics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Vetted Experts
                </h3>
                <p className="text-gray-600 text-sm">
                  Rigorously screened traders with verified performance history
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Real-Time Sync
                </h3>
                <p className="text-gray-600 text-sm">
                  Trades execute instantly in your account with zero latency
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Full Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed performance metrics and risk analytics dashboard
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Risk Control
                </h3>
                <p className="text-gray-600 text-sm">
                  Set custom limits and stop-loss parameters for safety
                </p>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-5" >
              {topTraders.map((trader, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100 hover:border-cyan-300 hover:shadow-cyan-200/50 transition-all duration-500 group hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="relative">
                      <img
                        src={trader.image}
                        alt={trader.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-gray-100 group-hover:ring-cyan-200 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{trader.name}</h3>
                      <p className="text-gray-500 text-sm">{trader.followers} followers</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <span className="text-gray-600 text-sm font-medium">Return</span>
                      <span className="font-black text-green-600 text-xl">{trader.return}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">Win Rate</div>
                        <div className="font-bold text-gray-900">{trader.winRate}</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">Trades</div>
                        <div className="font-bold text-gray-900">{trader.trades}</div>
                      </div>
                    </div>

                    <button
                        onClick={handleBack}
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-300 transition-all font-bold text-sm group-hover:scale-105">
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
