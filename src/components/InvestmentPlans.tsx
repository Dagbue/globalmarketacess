import { Check, Sparkles, Crown, Gem, Award, Zap, ArrowRight } from 'lucide-react';
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
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
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
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
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
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
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
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 glass-strong border border-blue-500/30 rounded-full mb-8 shadow-lg shadow-blue-500/20 animate-glow">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">INVESTMENT TIERS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Scale Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
              Investment Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Choose the tier that aligns with your financial goals and access premium trading benefits
          </p>
        </div>

        {/* Unique zigzag / staggered pricing layout */}
        <div className="space-y-12 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={plan.name}
                className={`group animate-float ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content side */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} relative`}>
                    <div className="relative glass-strong rounded-3xl p-10 border transition-all duration-500 ${
                      plan.popular
                        ? 'border-blue-500/40 shadow-2xl shadow-blue-500/30'
                        : 'border-blue-500/20 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-blue-500/20'
                    } backdrop-blur-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      {plan.popular && (
                        <div className="absolute -top-4 -right-4 z-10">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full text-xs font-black shadow-2xl shadow-blue-500/50 border-2 border-slate-900 animate-glow flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            MOST POPULAR
                          </div>
                        </div>
                      )}

                      <div className="relative">
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-center gap-4">
                            <div className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow`}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-black text-white mb-1">{plan.name}</h3>
                              <p className="text-slate-400 font-bold text-lg">{plan.duration}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="flex items-end justify-end">
                              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{plan.percentage}</span>
                              <span className="text-3xl text-cyan-400 font-bold mb-2">%</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 p-6 glass-card rounded-2xl border border-blue-500/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-slate-400 font-semibold mb-1">Minimum Investment</div>
                              <div className="text-3xl font-black text-white">{plan.minimum}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-slate-400 font-semibold mb-1">Daily Rate</div>
                              <div className="text-3xl font-black text-cyan-400">{plan.daily}</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center animate-glow">
                                <Check className="w-4 h-4 text-white font-bold" />
                              </div>
                              <span className="text-slate-300 font-medium text-base leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={handleBack}
                          className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group ${
                            plan.popular
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 animate-glow'
                              : 'glass-card text-white border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 hover:border-transparent hover:shadow-xl hover:shadow-blue-500/40'
                          }`}
                        >
                          <span>Select {plan.name} Plan</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Visual side - decorative element */}
                  <div className={`${!isEven ? 'lg:order-1' : ''} relative hidden lg:block`}>
                    <div className="relative h-full min-h-[400px] flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-glow"></div>

                      <div className="relative glass-card rounded-3xl p-12 border border-blue-500/30 text-center backdrop-blur-xl">
                        <div className={`w-32 h-32 bg-gradient-to-br ${plan.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 animate-glow`}>
                          <Icon className="w-16 h-16 text-white" />
                        </div>

                        <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 animate-glow">
                          {plan.percentage}%
                        </div>

                        <div className="text-slate-400 font-bold text-xl mb-2">
                          Returns over
                        </div>
                        <div className="text-white font-black text-2xl">
                          {plan.duration}
                        </div>
                      </div>
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
