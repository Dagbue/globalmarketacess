import { TrendingUp, Coins, DollarSign, Bitcoin } from 'lucide-react';

const commodities = [
  { name: 'Gold', icon: Coins, desc: 'Precious metals & commodities', color: 'from-[#0066ff] to-[#0080ff]' },
  { name: 'Oil', icon: TrendingUp, desc: 'Energy & futures markets', color: 'from-[#0080ff] to-[#00ccff]' },
  { name: 'Forex', icon: DollarSign, desc: 'Global currency pairs', color: 'from-[#00ccff] to-[#0066ff]' },
  { name: 'Crypto', icon: Bitcoin, desc: 'Digital assets & tokens', color: 'from-[#0066ff] to-[#00ccff]' },
];

export default function CommoditiesTrading() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[550px] h-[550px] bg-[#0066ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[550px] h-[550px] bg-[#00ccff]/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-5">
            Trade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              Commodities
            </span>{' '}
            & More
          </h2>
          <p className="text-xl text-slate-300">
            Access global markets including precious metals, energy, forex, and cryptocurrencies with competitive spreads
          </p>
        </div>

        {/* Circular/Radial Layout */}
        <div className="grid md:grid-cols-4 gap-6">
          {commodities.map((item, i) => {
            const Icon = item.icon;
            const rotateClass = i === 0 ? 'md:-rotate-3' : i === 1 ? 'md:rotate-2' : i === 2 ? 'md:-rotate-2' : 'md:rotate-3';
            const translateY = i % 2 === 0 ? 'md:translate-y-8' : '';

            return (
              <div
                key={i}
                className={`group relative ${rotateClass} ${translateY}`}
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>

                {/* Main Card */}
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-transparent border-2 border-[#0066ff]/30 rounded-3xl p-10 hover:border-[#00ccff]/60 hover:shadow-[0_0_80px_rgba(0,102,255,0.5)] transition-all duration-500 hover:-translate-y-3 hover:rotate-0 text-center">

                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                  <div className="relative">
                    {/* Icon Container with Multiple Layers */}
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-50`}></div>

                      {/* Middle Layer */}
                      <div className={`absolute inset-2 bg-gradient-to-br ${item.color} rounded-2xl opacity-60`}></div>

                      {/* Icon Container */}
                      <div className={`relative w-full h-full bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <Icon className="w-12 h-12 text-white relative z-10" />
                      </div>

                      {/* Floating Ring */}
                      <div className={`absolute inset-0 rounded-3xl border-2 border-[#00ccff]/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500`}></div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066ff] group-hover:to-[#00ccff] transition-all duration-300">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#00ccff] font-medium uppercase tracking-wider">
                      {item.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`mt-6 h-1 w-16 mx-auto bg-gradient-to-r ${item.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
