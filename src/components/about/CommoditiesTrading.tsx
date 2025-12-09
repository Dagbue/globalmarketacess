import { TrendingUp, Coins, Droplets, DollarSign, Bitcoin } from 'lucide-react';

export default function CommoditiesTrading() {
  const markets = [
    { name: 'Gold & Silver', icon: Coins, description: 'Precious metals trading' },
    { name: 'Oil & Energy', icon: Droplets, description: 'Energy commodities' },
    { name: 'Forex', icon: DollarSign, description: 'Currency pairs' },
    { name: 'Cryptocurrencies', icon: Bitcoin, description: 'Digital assets' },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Diverse Markets</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Trade
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Commodities </span>
            & More
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Access global markets with competitive spreads and instant execution across multiple asset classes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, i) => {
            const Icon = market.icon;
            return (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{market.name}</h3>
                  <p className="text-sm text-slate-400">{market.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
