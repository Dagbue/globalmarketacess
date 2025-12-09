import {Check, Sparkles, Crown, Star, ArrowRight, Zap} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const plans = [
  {
    name: 'Silver',
    icon: Star,
    percentage: '5',
    duration: '4 Months',
    minimum: '$5,000',
    daily: '1.2%',
    features: [
      'Bank-Grade Security',
      '1.2% Daily Returns',
      'Verified ROI Tracking',
      '24/7 Customer Support',
      'Fast Withdrawals',
    ],
  },
  {
    name: 'Gold',
    icon: Zap,
    percentage: '10',
    duration: '8 Months',
    minimum: '$25,000',
    daily: '1.4%',
    features: [
      'Military-Grade Security',
      '1.4% Daily Returns',
      'Portfolio Analytics',
      '24/7 Priority Support',
      'Instant Withdrawals',
      'Dedicated Account Manager',
    ],
    popular: true,
  },
  {
    name: 'Diamond',
    icon: Sparkles,
    percentage: '15',
    duration: '12 Months',
    minimum: '$100,000',
    daily: '1.6%',
    features: [
      'Maximum Security Protocol',
      '1.6% Daily Returns',
      'Advanced Market Insights',
      '24/7 VIP Support',
      'Priority Withdrawals',
      'Personal Trading Advisor',
      'Exclusive Research Reports',
    ],
  },
  {
    name: 'Platinum',
    icon: Crown,
    percentage: '20',
    duration: '18 Months',
    minimum: '$500,000',
    daily: '2.0%',
    features: [
      'Enterprise-Grade Security',
      '2.0% Daily Returns',
      'White-Glove Service',
      'Direct Market Access',
      'Custom Trading Solutions',
      'Dedicated Trading Team',
      'Private Research & Analysis',
      'Exclusive Investment Opportunities',
    ],
  },
];

export default function InvestmentPlans() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Investment Plans</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Investment Tier
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Select a plan that matches your investment goals and unlock exclusive trading benefits
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative bg-slate-900/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  plan.popular
                    ? 'border-blue-800/50 shadow-lg shadow-blue-600/20'
                    : 'border-slate-800/50 hover:border-blue-800/50'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

                  <div className="relative flex-1 flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

                    {/* Percentage & Duration */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl font-bold text-white">{plan.percentage}</span>
                        <span className="text-2xl text-blue-400 font-bold">%</span>
                      </div>
                      <p className="text-slate-400 text-sm">{plan.duration} Investment Period</p>
                    </div>

                    {/* Minimum Investment */}
                    <div className="mb-6 p-4 bg-slate-800/40 rounded-lg border border-slate-700/30">
                      <div className="text-xs text-slate-400 mb-1">Minimum Investment</div>
                      <div className="text-2xl font-bold text-white">{plan.minimum}</div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={handleBack}
                      className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-600/30'
                          : 'bg-slate-800/40 border border-slate-700/30 text-white hover:bg-slate-700/40 hover:border-blue-800/50'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            All plans include 24/7 support and industry-leading security
          </p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-6 py-3 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Compare All Features
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
