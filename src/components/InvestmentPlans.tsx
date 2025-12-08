import { Check, Sparkles, Crown, Gem, Award } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const plans = [
  {
    name: 'Silver',
    icon: Sparkles,
    percentage: '5',
    duration: '4 Months',
    minimum: '$5,000',
    daily: '1.2%',
    features: [
      'Enhanced Security',
      '1.2% Daily Returns',
      'Guaranteed ROI',
      '24/7 Support',
      'Instant Withdrawals',
    ],
    gradient: 'from-gray-400 to-gray-600',
    bgGradient: 'from-gray-50 to-blue-50',
  },
  {
    name: 'Gold',
    icon: Crown,
    percentage: '10',
    duration: '8 Months',
    minimum: '$25,000',
    daily: '1.4%',
    features: [
      'Enhanced Security',
      '1.4% Daily Returns',
      'Guaranteed ROI',
      '24/7 Priority Support',
      'Instant Withdrawals',
      'Personal Account Manager',
    ],
    popular: true,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    name: 'Diamond',
    icon: Gem,
    percentage: '15',
    duration: '12 Months',
    minimum: '$100,000',
    daily: '1.6%',
    features: [
      'Enhanced Security',
      '1.6% Daily Returns',
      'Guaranteed ROI',
      '24/7 VIP Support',
      'Instant Withdrawals',
      'Dedicated Manager',
      'Exclusive Market Insights',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50',
  },
  {
    name: 'Platinum',
    icon: Award,
    percentage: '20',
    duration: '24 Months',
    minimum: '$250,000',
    daily: '1.8%',
    features: [
      'Enhanced Security',
      '1.8% Daily Returns',
      'Guaranteed ROI',
      '24/7 Concierge Service',
      'Instant Withdrawals',
      'Dedicated Management Team',
      'Exclusive Events Access',
      'Custom Trading Strategies',
    ],
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
  },
];

export default function InvestmentPlans() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-bold text-sm">INVESTMENT PLANS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Choose Your Path to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Financial Freedom
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select a plan that matches your investment goals and unlock exclusive benefits designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2.5 rounded-full text-xs font-black shadow-2xl border-2 border-white">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 h-full ${
                  plan.popular
                    ? 'border-orange-300 shadow-2xl shadow-orange-200'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-2xl'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{plan.percentage}</span>
                        <span className="text-3xl text-gray-600 font-bold mb-2">%</span>
                      </div>
                      <p className="text-gray-600 font-bold text-lg">{plan.duration}</p>
                    </div>

                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <div className="text-sm text-gray-600 font-semibold mb-1">Minimum Investment</div>
                      <div className="text-2xl font-black text-gray-900">{plan.minimum}</div>
                    </div>

                    <button
                        onClick={handleBack}
                        className={`w-full py-4 rounded-xl font-bold text-base mb-6 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-300 hover:scale-105'
                        : 'bg-gray-900 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:shadow-xl'
                    }`}>
                      Get Started
                    </button>

                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white font-bold" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm leading-relaxed">
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
