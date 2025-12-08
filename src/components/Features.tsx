import { Coins, Wallet, TrendingDown, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const features = [
  {
    icon: Coins,
    title: 'Flexible Investment Options',
    description: 'Start with fractional shares or whole units tailored to your budget. Build a diversified portfolio across multiple asset classes with minimal capital requirements.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Wallet,
    title: 'Automated Dividend Reinvestment',
    description: 'Receive dividend payouts automatically credited to your account. Choose to reinvest or withdraw earnings for compound growth.',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    icon: TrendingDown,
    title: 'Transparent Fee Structure',
    description: 'Trade with confidence with our competitive flat-fee pricing model. Zero markup on spreads ensures you keep more of your profits.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your funds are secured with multi-layer protection including SSL encryption, AML compliance, and segregated accounts.',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Execution',
    description: 'Execute trades in milliseconds with our optimized infrastructure. Never miss an opportunity with real-time market data.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'Global Market Access',
    description: 'Trade across 20+ exchanges worldwide. Access stocks, forex, crypto, and commodities from a single unified platform.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Features() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-200 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-100 rounded-full mb-6 shadow-lg">
            <span className="text-blue-600 font-bold text-sm tracking-wide">PLATFORM FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trade with Confidence
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional-grade tools and features designed to give you the competitive edge in global markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                Ready to Experience the Difference?
              </h3>
              <p className="text-l text-slate-300 mb-6 max-w-xl mx-auto">
                Join over 50,000 traders who trust Market Signal Trades for their investment success
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack}
                    className="group px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-blue-50 transition-all font-bold text-l shadow-xl hover:scale-105 flex items-center space-x-2">
                  <span>Start Trading Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
