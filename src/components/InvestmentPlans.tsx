import { Check, Sparkles, Crown, Gem, Award } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
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
    gradient: 'from-slate-400 to-gray-600',
    bgGradient: 'from-slate-800/40 to-slate-900/40',
  },
  {
    name: 'Professional',
    icon: Crown,
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
    gradient: 'from-purple-500 to-fuchsia-600',
    bgGradient: 'from-purple-500/10 to-fuchsia-500/10',
  },
  {
    name: 'Elite',
    icon: Gem,
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
    gradient: 'from-fuchsia-500 to-pink-600',
    bgGradient: 'from-fuchsia-500/10 to-pink-500/10',
  },
  {
    name: 'Institution',
    icon: Award,
    percentage: '20',
    duration: '24 Months',
    minimum: '$250,000',
    daily: '1.8%',
    features: [
      'Enterprise Security Suite',
      '1.8% Daily Returns',
      'Custom Trading Strategies',
      '24/7 Concierge Service',
      'Premium Withdrawals',
      'Dedicated Management Team',
      'Private Events Access',
      'Institutional Research',
    ],
    gradient: 'from-pink-500 to-purple-600',
    bgGradient: 'from-pink-500/10 to-purple-500/10',
  },
];

export default function InvestmentPlans() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 glass-purple border border-purple-500/20 rounded-full mb-8 shadow-lg shadow-purple-500/10 animate-glow">
            <span className="text-purple-400 font-bold text-sm tracking-wide">INVESTMENT TIERS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Scale Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 animate-glow">
              Investment Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Choose the tier that aligns with your financial goals and access premium trading benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative group animate-float ${
                  plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-4 py-2.5 rounded-full text-xs font-black shadow-2xl shadow-purple-500/30 border-2 border-slate-900 animate-glow">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`relative glass-purple rounded-3xl p-8 border transition-all duration-500 h-full ${
                  plan.popular
                    ? 'border-purple-500/30 shadow-2xl shadow-purple-500/20'
                    : 'border-purple-500/10 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">{plan.percentage}</span>
                        <span className="text-3xl text-purple-400 font-bold mb-2">%</span>
                      </div>
                      <p className="text-slate-400 font-bold text-lg">{plan.duration}</p>
                    </div>

                    <div className="mb-6 p-4 glass-purple rounded-xl border border-purple-500/20">
                      <div className="text-sm text-slate-400 font-semibold mb-1">Minimum Investment</div>
                      <div className="text-2xl font-black text-white">{plan.minimum}</div>
                    </div>

                    <button
                        onClick={handleBack}
                        className={`w-full py-4 rounded-xl font-bold text-base mb-6 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 animate-glow'
                        : 'glass-purple text-white border border-purple-500/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-600 hover:border-transparent hover:shadow-xl hover:shadow-purple-500/30'
                    }`}>
                      Select Plan
                    </button>

                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center mt-0.5 animate-glow">
                            <Check className="w-4 h-4 text-white font-bold" />
                          </div>
                          <span className="text-slate-300 font-medium text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
