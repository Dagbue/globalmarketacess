import { Shield, Zap, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption and multi-factor authentication protecting your assets 24/7.',
    },
    {
      icon: Zap,
      title: 'Lightning Execution',
      description: 'Sub-millisecond order execution with zero slippage on major markets.',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Professional-grade tools with AI-powered insights for informed decisions.',
    },
    {
      icon: Award,
      title: 'Regulated Platform',
      description: 'Fully licensed and compliant with international financial standards.',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <span className="text-blue-300 text-sm font-medium">Why Choose Us</span>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trusted Platform for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                Smart Trading
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Experience institutional-grade trading infrastructure designed for both beginners and professionals.
              Our platform combines cutting-edge technology with unmatched reliability.
            </p>

            <div className="space-y-4">
              {[
                'Real-time market data across 180+ markets',
                'Zero hidden fees or commissions',
                '24/7 dedicated customer support',
                'Advanced risk management tools'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99.9<span className="text-blue-400">%</span></div>
              <div className="text-slate-400 text-sm">Platform Uptime</div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">&lt;10<span className="text-blue-400">ms</span></div>
              <div className="text-slate-400 text-sm">Execution Speed</div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">$2.8<span className="text-blue-400">B</span></div>
              <div className="text-slate-400 text-sm">Daily Volume</div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50K<span className="text-blue-400">+</span></div>
              <div className="text-slate-400 text-sm">Active Traders</div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
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
      </div>
    </section>
  );
}
