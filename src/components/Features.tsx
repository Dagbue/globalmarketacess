import { Coins, Lock, DollarSign, Shield, Zap, TrendingUp } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency Execution',
    description: 'Experience sub-millisecond order execution powered by co-located servers at major exchange data centers. Our advanced routing technology ensures you get the best available price every time.',
    color: 'from-blue-500 to-cyan-600',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your assets are protected by military-grade encryption, cold storage solutions, and multi-signature authentication. We maintain segregated accounts and comprehensive insurance coverage.',
    color: 'from-cyan-500 to-blue-500',
    size: 'medium',
  },
  {
    icon: DollarSign,
    title: 'Zero Hidden Fees',
    description: 'Complete transparency with our straightforward pricing. No markup on spreads, no withdrawal fees, and no account maintenance charges.',
    color: 'from-blue-600 to-cyan-500',
    size: 'medium',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics Suite',
    description: 'Access professional-grade charting tools, technical indicators, and market sentiment analysis. Make informed decisions with our AI-powered insights.',
    color: 'from-cyan-600 to-blue-600',
    size: 'small',
  },
  {
    icon: Coins,
    title: 'Fractional Trading',
    description: 'Invest in high-value assets with any amount. Buy portions of expensive stocks and build a diversified portfolio without significant capital requirements.',
    color: 'from-blue-500 to-cyan-600',
    size: 'small',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Fully licensed and regulated across multiple jurisdictions. We adhere to strict KYC/AML protocols and maintain compliance with international financial standards.',
    color: 'from-cyan-500 to-blue-600',
    size: 'small',
  },
];

export default function Features() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff10_1px,transparent_1px),linear-gradient(to_bottom,#0066ff10_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-strong border border-blue-500/30 rounded-full mb-8 shadow-lg shadow-blue-500/20 animate-glow">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Built for Serious
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
              Market Participants
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Industry-leading technology and infrastructure that empowers you to trade with precision and confidence
          </p>
        </div>

        {/* New Bento Grid Layout with Different Sizes */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          {/* Large Feature - Spans 8 columns on desktop */}
          <div
            className="col-span-12 lg:col-span-8 group relative glass-strong rounded-3xl p-10 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_20px_80px_-15px_rgba(0,102,255,0.5)] transition-all duration-500 animate-float"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex flex-col lg:flex-row items-start gap-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${features[0].color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/30 animate-glow`}>
                <Zap className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {features[0].title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Medium Feature - Spans 4 columns */}
          <div
            className="col-span-12 lg:col-span-4 group relative glass-card rounded-3xl p-8 border border-blue-500/20 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,204,255,0.4)] transition-all duration-500 animate-float"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${features[1].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/20 animate-glow`}>
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {features[1].title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Second row - overlapping design */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative glass-card rounded-3xl p-8 border border-cyan-500/20 hover:border-blue-500/40 hover:shadow-[0_20px_60px_-15px_rgba(0,128,255,0.4)] transition-all duration-500 hover:-translate-y-3 animate-float"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${features[2].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/20 animate-glow`}>
                <DollarSign className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {features[2].title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Three small cards */}
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 group relative glass-card rounded-3xl p-8 border border-blue-500/10 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.4)] transition-all duration-500 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${(index + 3) * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/20 animate-glow`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section with new glassmorphic design */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-glow"></div>
          <div className="relative glass-strong rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff15_1px,transparent_1px),linear-gradient(to_bottom,#0066ff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Ready to Trade Smarter?
              </h3>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of active traders who trust Globalmarketacess for their trading journey
              </p>
              <button
                onClick={handleBack}
                className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center space-x-3 mx-auto animate-glow"
              >
                <span>Open Free Account</span>
                <TrendingUp className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
