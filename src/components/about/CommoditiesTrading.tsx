import { TrendingUp, Coins, DollarSign, Bitcoin } from 'lucide-react';

const commodities = [
  { name: 'Gold', icon: Coins, desc: 'Precious metals & commodities' },
  { name: 'Oil', icon: TrendingUp, desc: 'Energy & futures markets' },
  { name: 'Forex', icon: DollarSign, desc: 'Global currency pairs' },
  { name: 'Crypto', icon: Bitcoin, desc: 'Digital assets & tokens' },
];

export default function CommoditiesTrading() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-5">
            Trade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
              Commodities
            </span>{' '}
            & More
          </h2>
          <p className="text-xl text-slate-300">
            Access global markets including precious metals, energy, forex, and cryptocurrencies with competitive spreads
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {commodities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group glass-purple rounded-2xl p-8 border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 text-center animate-glow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-all duration-500 animate-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{item.name}</h3>
                <p className="text-sm text-purple-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
