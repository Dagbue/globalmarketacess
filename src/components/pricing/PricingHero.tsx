import { TrendingUp, Shield, Clock, Award, DollarSign } from 'lucide-react';

export default function PricingHero() {
  const features = [
    { icon: Shield, title: 'Bank Security', description: '256-bit encryption' },
    { icon: Clock, title: '24/7 Support', description: 'Always available' },
    { icon: Award, title: 'Guaranteed ROI', description: 'Assured returns' },
    { icon: TrendingUp, title: '50K+ Investors', description: 'Growing community' },
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <DollarSign className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Smart Investment Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Investment Journey
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Transparent pricing, guaranteed returns, and world-class security. Start building your wealth with plans designed for every investor.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                  <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="text-white font-bold text-lg mb-2">{feature.title}</div>
                    <div className="text-slate-400 text-sm">{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
