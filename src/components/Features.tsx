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
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-full mb-8 shadow-lg shadow-cyan-500/10">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Built for Serious
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
              Market Participants
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Industry-leading technology and infrastructure that empowers you to trade with precision and confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_20px_80px_-15px_rgba(6,182,212,0.4)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/20`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Ready to Trade Smarter?
              </h3>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of active traders who trust Globalmarketacess for their trading journey
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack}
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center space-x-3">
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
