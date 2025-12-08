import { Check, Sparkles, Crown, Gem, Trophy } from 'lucide-react';
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
      'Bank-Level Security',
      '1.2% Daily Returns',
      'Real-Time ROI Tracking',
      '24/7 Support Access',
      'Fast Withdrawal Processing',
    ],
    gradient: 'from-gray-400 to-gray-600',
    bgGradient: 'from-gray-800/30 to-gray-900/30',
  },
  {
    name: 'Professional',
    icon: Crown,
    percentage: '10',
    duration: '8 Months',
    minimum: '$25,000',
    daily: '1.4%',
    features: [
      'Advanced Security',
      '1.4% Daily Returns',
      'Portfolio Analytics Dashboard',
      '24/7 Priority Support',
      'Instant Withdrawals',
      'Dedicated Account Manager',
    ],
    popular: true,
    gradient: 'from-emerald-500 via-teal-500 to-green-500',
    bgGradient: 'from-emerald-500/15 to-teal-500/15',
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
      'Advanced Market Intelligence',
      '24/7 VIP Support Line',
      'Priority Withdrawal Processing',
      'Personal Trading Consultant',
      'Exclusive Research Access',
    ],
    gradient: 'from-teal-500 via-lime-500 to-emerald-500',
    bgGradient: 'from-teal-500/15 to-emerald-500/15',
  },
  {
    name: 'Institution',
    icon: Trophy,
    percentage: '20',
    duration: '24 Months',
    minimum: '$250,000',
    daily: '1.8%',
    features: [
      'Enterprise Security Suite',
      '1.8% Daily Returns',
      'Custom Strategy Development',
      '24/7 Concierge Service',
      'Premium Withdrawal Priority',
      'Dedicated Management Team',
      'Exclusive Event Access',
      'Institutional Research Portal',
    ],
    gradient: 'from-lime-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-lime-500/15 to-teal-500/15',
  },
];

export default function InvestmentPlans() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-36 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-lime-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <div className="inline-block px-7 py-3.5 bg-gray-800/60 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl mb-10 shadow-2xl shadow-emerald-500/20">
            <span className="text-emerald-400 font-black text-sm tracking-widest uppercase">Investment Plans</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
            Scale Your Wealth
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 mt-2">
              With Confidence
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Select the investment tier that matches your goals and unlock premium benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'lg:scale-110 lg:-mt-8' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl shadow-emerald-500/40 border-2 border-gray-900">
                      BEST VALUE
                    </div>
                  </div>
                )}

                <div className={`relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-10 border transition-all duration-500 h-full ${
                  plan.popular
                    ? 'border-emerald-500/40 shadow-2xl shadow-emerald-500/30'
                    : 'border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/20'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-3">{plan.name}</h3>
                    <div className="mb-8">
                      <div className="flex items-end">
                        <span className={`text-6xl font-black ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400' : 'text-white'}`}>{plan.percentage}</span>
                        <span className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-emerald-400' : 'text-gray-400'}`}>%</span>
                      </div>
                      <p className="text-gray-400 font-bold text-lg">{plan.duration}</p>
                    </div>

                    <div className="mb-8 p-5 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/30">
                      <div className="text-sm text-gray-400 font-bold mb-2">Minimum Investment</div>
                      <div className="text-3xl font-black text-white">{plan.minimum}</div>
                    </div>

                    <button
                        onClick={handleBack}
                        className={`w-full py-5 rounded-2xl font-black text-lg mb-8 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105'
                        : 'bg-gray-800/60 backdrop-blur-xl text-white border border-emerald-500/30 hover:bg-gradient-to-r hover:from-emerald-500 hover:via-teal-500 hover:to-green-500 hover:border-transparent hover:shadow-xl hover:shadow-emerald-500/40'
                    }`}>
                      Get Started
                    </button>

                    <div className="space-y-5">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-7 h-7 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center mt-0.5 shadow-lg`}>
                            <Check className="w-4 h-4 text-white font-bold" />
                          </div>
                          <span className="text-gray-300 font-medium text-base leading-relaxed">
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
