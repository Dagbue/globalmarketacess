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
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#0066ff]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[550px] h-[550px] bg-[#00ccff]/30 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Professional Trading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access institutional-grade tools and features designed for serious traders
          </p>
        </div>

        {/* Bento Grid with Asymmetric Layout */}
        <div className="grid md:grid-cols-6 gap-6">
          {/* Large Feature - Spans 2 columns */}
          <div className="md:col-span-3 group relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#0066ff]/30 to-[#0080ff]/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative h-full backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-transparent border border-[#0066ff]/30 rounded-3xl p-10 hover:border-[#00ccff]/60 hover:shadow-[0_0_80px_rgba(0,102,255,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 to-[#00ccff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">{features[0].title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{features[0].description}</p>
              </div>
            </div>
          </div>

          {/* Medium Feature - Spans 2 columns */}
          <div className="md:col-span-3 group relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#0080ff]/30 to-[#00ccff]/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative h-full backdrop-blur-2xl bg-gradient-to-br from-[#00ccff]/15 via-[#0080ff]/10 to-transparent border border-[#00ccff]/30 rounded-3xl p-10 hover:border-[#0066ff]/60 hover:shadow-[0_0_80px_rgba(0,204,255,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/5 to-[#0066ff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-[#00ccff] via-[#0080ff] to-[#0066ff] rounded-3xl flex items-center justify-center shadow-lg shadow-[#00ccff]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">{features[1].title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{features[1].description}</p>
              </div>
            </div>
          </div>

          {/* Two Smaller Features - Each spans 3 columns */}
          {features.slice(2).map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="md:col-span-3 group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#0080ff]/30 to-[#00ccff]/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full backdrop-blur-2xl bg-gradient-to-br from-[#0080ff]/10 via-[#0066ff]/5 to-transparent border border-[#0080ff]/30 rounded-3xl p-8 hover:border-[#00ccff]/60 hover:shadow-[0_0_80px_rgba(0,128,255,0.4)] transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff]/5 to-[#00ccff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl blur-lg opacity-50"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0080ff]/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
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
