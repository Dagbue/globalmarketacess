import { UserPlus, Wallet, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up in minutes with just your email. No credit card required.',
      time: '2 min',
    },
    {
      number: '02',
      icon: Wallet,
      title: 'Fund Wallet',
      description: 'Deposit funds securely using multiple payment methods.',
      time: '5 min',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Start Trading',
      description: 'Access global markets and execute your first trade.',
      time: 'Instant',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <span className="text-blue-300 text-sm font-medium">Getting Started</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Start Trading in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of traders and start your investment journey today
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

                <div className="relative">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl font-bold text-blue-400/30">{step.number}</div>
                    <div className="px-3 py-1 bg-blue-600/20 rounded-full">
                      <span className="text-blue-300 text-xs font-medium">{step.time}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Benefits List */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Why traders choose us
                </h3>

                <div className="space-y-4">
                  {[
                    'No hidden fees or commissions',
                    'Instant account verification',
                    'Multiple payment methods',
                    '24/7 customer support',
                    'Industry-leading security'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBack}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 mt-6"
                >
                  Create Free Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="text-3xl font-bold text-white mb-2">$0</div>
                  <div className="text-slate-400 text-sm">Account Fees</div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">Support Available</div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="text-3xl font-bold text-white mb-2">2min</div>
                  <div className="text-slate-400 text-sm">Setup Time</div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-slate-400 text-sm">Secure Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
