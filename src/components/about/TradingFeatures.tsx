import { Zap, Target, BarChart3, Shield, TrendingUp, Clock } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Execution', description: 'Execute trades in milliseconds with tier-1 liquidity and institutional infrastructure.' },
  { icon: Target, title: 'Precision Trading', description: 'Advanced order types including limit, stop, and trailing orders for precise entries.' },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Professional charting tools with 100+ technical indicators and drawing tools.' },
  { icon: Shield, title: 'Risk Management', description: 'Comprehensive risk controls, position sizing calculators, and automated stop losses.' },
  { icon: TrendingUp, title: 'Real-Time Data', description: 'Live market data, streaming quotes, and instant price updates across all instruments.' },
  { icon: Clock, title: '24/7 Trading', description: 'Access global markets around the clock with continuous trading on major instruments.' },
];

export default function TradingFeatures() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Professional Tools</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Professional Trading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Features
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Institutional-grade tools and features designed for serious traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all h-full">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
