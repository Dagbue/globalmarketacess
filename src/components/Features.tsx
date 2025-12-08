import { Rocket, Shield, Wallet, Brain, Globe2, Lock, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const features = [
  {
    icon: Rocket,
    title: 'Blazing-Fast Execution',
    description: 'Execute trades in microseconds with our cutting-edge infrastructure. Direct market access and co-located servers ensure your orders are filled instantly at optimal prices.',
    color: 'from-emerald-500 via-teal-500 to-green-500',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Multi-layer security architecture with 256-bit encryption, biometric authentication, and cold wallet storage. Your funds are protected by comprehensive insurance and regulatory safeguards.',
    color: 'from-teal-500 via-green-500 to-lime-500',
  },
  {
    icon: Wallet,
    title: 'Zero-Fee Trading',
    description: 'Trade without worrying about hidden costs. We offer commission-free trading on all asset classes with transparent pricing and no account minimums or maintenance fees.',
    color: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning algorithms that analyze billions of data points to surface high-probability trading opportunities and predict market movements with unprecedented accuracy.',
    color: 'from-emerald-500 via-lime-500 to-teal-500',
  },
  {
    icon: Globe2,
    title: 'Global Market Access',
    description: 'Trade across 50+ international exchanges from one unified platform. Access stocks, forex pairs, cryptocurrencies, commodities, and indices from markets around the world.',
    color: 'from-lime-500 via-emerald-500 to-green-500',
  },
  {
    icon: Lock,
    title: 'Fully Regulated Platform',
    description: 'Operating under strict regulatory oversight with licenses from top-tier financial authorities. We maintain rigorous compliance standards and transparent operational practices.',
    color: 'from-teal-500 via-emerald-500 to-lime-500',
  },
];

export default function Features() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="relative py-36 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-lime-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-7 py-3.5 bg-gray-800/60 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl mb-10 shadow-2xl shadow-emerald-500/20">
            <span className="text-emerald-400 font-black text-sm tracking-widest uppercase">Platform Excellence</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
            Engineered for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 mt-2">
              Professional Traders
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology and institutional infrastructure designed to maximize your trading potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-10 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_25px_90px_-15px_rgba(16,185,129,0.5)] transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-5 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-lime-500/25 rounded-[3rem] blur-[100px]"></div>
          <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-[3rem] p-16 lg:p-20 shadow-2xl overflow-hidden border border-emerald-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative text-center">
              <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                Begin Your Trading Evolution
              </h3>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join a global community of over 250,000 traders leveraging the most advanced trading platform
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <button
                    onClick={handleBack}
                    className="group px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] transition-all font-black text-xl hover:scale-105 flex items-center space-x-3">
                  <span>Launch Your Account</span>
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
