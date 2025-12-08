import { Users, Copy, BarChart2, TrendingUp, Shield, Zap, Award } from 'lucide-react';
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

const benefits = [
  {
    icon: Users,
    title: 'Verified Professionals',
    description: 'Thoroughly vetted traders with audited track records',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Instant Execution',
    description: 'Zero-delay synchronization for perfect timing',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: BarChart2,
    title: 'Deep Analytics',
    description: 'Comprehensive metrics and performance dashboards',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Risk Protection',
    description: 'Customizable stop-loss and position limits',
    gradient: 'from-cyan-600 to-blue-600'
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
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Asymmetric Header */}
        <div className="mb-20">
          <div className="inline-block px-6 py-3 glass-strong border border-blue-500/30 rounded-full shadow-lg shadow-blue-500/20 animate-glow mb-8">
            <span className="text-cyan-400 font-bold text-sm flex items-center space-x-2">
              <Copy className="w-4 h-4" />
              <span>SOCIAL TRADING PLATFORM</span>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                Replicate Success
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
                  Automatically
                </span>
              </h2>
            </div>

            <div>
              <p className="text-xl text-slate-400 leading-relaxed">
                Connect with elite traders and mirror their strategies in real-time. Our sophisticated copy trading system
                executes trades proportionally to your portfolio size with <span className="text-cyan-400 font-semibold">complete transparency</span> and verified performance metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetric Two-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left column - Benefits in diagonal stack */}
          <div className="lg:col-span-1 space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] transition-all duration-500 hover:-translate-y-2 animate-float"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    marginLeft: `${index * 8}px`,
                  }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right column - Traders grid */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-glow"></div>

            <div className="relative grid sm:grid-cols-2 gap-6">
              {topTraders.map((trader, i) => (
                <div
                  key={i}
                  className="glass-strong rounded-3xl p-6 shadow-2xl border border-blue-500/30 hover:border-cyan-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,204,255,0.5)] transition-all duration-500 group hover:-translate-y-3 hover:scale-105 animate-float backdrop-blur-xl"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur opacity-50 animate-glow"></div>
                      <img
                        src={trader.image}
                        alt={trader.name}
                        className="relative w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-500/30 group-hover:ring-cyan-500/50 transition-all"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg leading-tight">{trader.name}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Users className="w-3 h-3" />
                        <span>{trader.followers} followers</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-xl border border-green-500/30 backdrop-blur-xl">
                      <span className="text-slate-300 text-sm font-medium flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-400" />
                        Annual Return
                      </span>
                      <span className="font-black text-green-400 text-2xl">{trader.return}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 glass-card rounded-xl border border-blue-500/20">
                        <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                        <div className="font-bold text-white text-lg">{trader.winRate}</div>
                      </div>
                      <div className="p-3 glass-card rounded-xl border border-cyan-500/20">
                        <div className="text-xs text-slate-400 mb-1">Trades</div>
                        <div className="font-bold text-white text-lg">{trader.trades}</div>
                      </div>
                    </div>

                    <button
                      onClick={handleBack}
                      className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all font-bold text-sm group-hover:scale-105 animate-glow"
                    >
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
