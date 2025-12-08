import { Zap, Target, BarChart3, Shield } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Execution', description: 'Execute trades in milliseconds with our tier-1 infrastructure' },
  { icon: Target, title: 'Precision Trading', description: 'Advanced order types and precise market entry points' },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Professional-grade charting and technical analysis tools' },
  { icon: Shield, title: 'Risk Management', description: 'Comprehensive tools to protect your capital' },
];

export default function TradingFeatures() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Professional Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Features</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
