import { Zap, Target, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Execution',
    description: 'Execute trades in milliseconds with our tier-1 liquidity infrastructure and cutting-edge technology stack'
  },
  {
    icon: Target,
    title: 'Precision Trading',
    description: 'Advanced order types, precision entry points, and sophisticated trading tools for maximum control'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Professional-grade charting, technical indicators, and real-time market analysis at your fingertips'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk management tools, stop-loss automation, and portfolio protection features'
  },
];

export default function TradingFeatures() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-pulse animate-float"></div>
        <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-fuchsia-500/30 rounded-full blur-[100px] animate-pulse animate-glow"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Professional Trading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access institutional-grade tools and features designed for serious traders
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group glass-purple rounded-3xl p-8 border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 animate-glow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 animate-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
