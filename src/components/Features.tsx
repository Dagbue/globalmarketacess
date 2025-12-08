import { Coins, Lock, DollarSign, Shield, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency Execution',
    description: 'Experience sub-millisecond order execution powered by co-located servers at major exchange data centers. Our advanced routing technology ensures you get the best available price every time.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your assets are protected by military-grade encryption, cold storage solutions, and multi-signature authentication. We maintain segregated accounts and comprehensive insurance coverage.',
    color: 'from-blue-500 to-teal-500',
  },
  {
    icon: DollarSign,
    title: 'Zero Hidden Fees',
    description: 'Complete transparency with our straightforward pricing. No markup on spreads, no withdrawal fees, and no account maintenance charges. Only pay for the trades you make.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics Suite',
    description: 'Access professional-grade charting tools, technical indicators, and market sentiment analysis. Make informed decisions with our AI-powered insights and pattern recognition.',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    icon: Coins,
    title: 'Fractional Trading',
    description: 'Invest in high-value assets with any amount. Buy portions of expensive stocks and build a diversified portfolio without significant capital requirements.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Fully licensed and regulated across multiple jurisdictions. We adhere to strict KYC/AML protocols and maintain compliance with international financial standards.',
    color: 'from-cyan-500 to-teal-600',
  },
];

export default function Features() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-dark-blue-500/15 to-dark-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-l from-dark-blue-400/10 to-dark-blue-500/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-card rounded-full mb-8 shadow-glass">
            <span className="text-white font-bold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Built for Serious
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-dark-blue-200 to-dark-blue-400">
              Market Participants
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Industry-leading technology and infrastructure that empowers you to trade with precision and confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative glass-card rounded-3xl p-8 hover:glass-hover hover:shadow-glass-hover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-500/10 to-dark-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-glass">
                    <Icon className="w-8 h-8 text-dark-blue-400 group-hover:text-dark-blue-300 transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-500/15 via-dark-blue-600/10 to-dark-blue-400/15 rounded-3xl blur-3xl"></div>
          <div className="relative glass-card rounded-3xl p-12 lg:p-16 shadow-glow-blue overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-500/10 to-transparent"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Ready to Trade Smarter?
              </h3>
              <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of active traders who trust Globalmarketacess for their trading journey
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack}
                    className="group px-10 py-5 bg-gradient-to-r from-dark-blue-500 to-dark-blue-600 text-white rounded-2xl hover:shadow-glow-blue transition-all duration-300 font-bold text-lg hover:scale-105 flex items-center space-x-3">
                  <span>Open Free Account</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
