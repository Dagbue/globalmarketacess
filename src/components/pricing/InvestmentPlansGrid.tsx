import {Check, Star, Zap, Crown, Sparkles, TrendingUp} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const plans = [
  {
    name: 'Silver',
    icon: Star,
    tagline: 'Perfect for beginners',
    percentage: '5',
    duration: '4 Months',
    daily: '1.2',
    minDeposit: '$5,000',
    popular: false,
    features: [
      'Military-grade encryption',
      '1.2% daily returns',
      'Guaranteed ROI',
      '24/7 priority support',
      '30-day maturity term',
      'Instant capital release',
      'Advanced portfolio dashboard',
      'Weekly market insights',
      'Email & chat support'
    ]
  },
  {
    name: 'Gold',
    icon: Zap,
    tagline: 'Most popular choice',
    percentage: '10',
    duration: '8 Months',
    daily: '1.4',
    minDeposit: '$25,000',
    popular: true,
    features: [
      'Maximum security protocols',
      '1.4% daily returns',
      'Guaranteed ROI',
      '24/7 VIP concierge support',
      '30-day maturity term',
      'Priority capital release',
      'Premium portfolio suite',
      'Dedicated account manager',
      'Bi-weekly strategy sessions',
      'Exclusive market analysis'
    ]
  },
  {
    name: 'Diamond',
    icon: Sparkles,
    tagline: 'For serious investors',
    percentage: '15',
    duration: '12 Months',
    daily: '1.6',
    minDeposit: '$100,000',
    popular: false,
    features: [
      'Enterprise-grade security',
      '1.6% daily returns',
      'Guaranteed ROI',
      '24/7 executive support',
      '30-day maturity term',
      'VIP capital release',
      'Elite portfolio management',
      'Senior wealth advisor',
      'Weekly strategy calls',
      'Private market intelligence',
      'Tax optimization guidance'
    ]
  },
  {
    name: 'Platinum',
    icon: Crown,
    tagline: 'Elite investment tier',
    percentage: '20',
    duration: '24 Months',
    daily: '1.8',
    minDeposit: '$250,000',
    popular: false,
    features: [
      'Ultra-secure vault protection',
      '1.8% daily returns',
      'Guaranteed ROI',
      '24/7 white-glove service',
      '30-day maturity term',
      'Immediate priority release',
      'Bespoke portfolio architecture',
      'Executive wealth strategist',
      'Daily market briefings',
      'Exclusive investment opportunities',
      'Custom wealth strategies',
      'Concierge financial planning'
    ]
  }
];

export default function InvestmentPlansGrid() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  const handleBack2 = () => {
    navigate('/contact');
  };
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-8 animate-glow">
            <TrendingUp className="w-4 h-4 text-purple-400 mr-2"/>
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Premium Investment Plans</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Wealth strategies that scale
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">with your vision</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            From beginner-friendly tiers to elite platinum access, discover premium plans engineered to amplify your financial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
                <div
                    key={index}
                    className={`group relative glass backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2 ${
                        plan.popular
                            ? 'border-fuchsia-500/50 shadow-2xl shadow-fuchsia-500/30 animate-glow'
                            : 'border-purple-500/30 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20'
                    }`}
                >
                  {plan.popular && (
                      <div
                          className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                        MOST POPULAR
                      </div>
                  )}

                  <div className="relative">
                    <div className="mb-8">
                      <div
                          className={`w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${plan.popular ? 'shadow-fuchsia-500/40' : 'shadow-purple-500/30'} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-7 h-7 text-white"/>
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-purple-300 font-medium">{plan.tagline}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-purple-500/30">
                      <div className="flex items-baseline mb-4">
                        <span
                            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">{plan.percentage}</span>
                        <span className="text-2xl text-purple-300 ml-1">%</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-400">Duration:</span>
                          <span className="font-bold text-white">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-400">Daily returns:</span>
                          <span className="font-bold text-fuchsia-400">{plan.daily}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-400">Minimum:</span>
                          <span className="font-bold text-white">{plan.minDeposit}</span>
                        </div>
                      </div>
                    </div>

                    <button
                        onClick={handleBack}
                        className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 ${
                        plan.popular
                            ? 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white hover:shadow-lg hover:shadow-fuchsia-500/40 hover:scale-105'
                            : 'glass-magenta text-white hover:bg-purple-600/30 border border-purple-500/30'
                    }`}>
                      Start Investing
                    </button>

                    <div className="space-y-4">
                      <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4">What's Included
                      </div>
                      {plan.features.map((feature, featureIndex) => (
                          <div
                              key={featureIndex}
                              className="flex items-start space-x-3"
                          >
                            <div className="mt-0.5">
                              <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0"/>
                            </div>
                            <span className="text-sm text-purple-200 leading-relaxed">
                          {feature}
                        </span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
            );
          })}
        </div>


        <div className="mt-24 relative">
          <div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
          <div
              className="relative glass-purple backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-purple-500/30 animate-glow">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                Need a bespoke solution?
              </h3>
              <p className="text-l text-purple-200 mb-6 max-w-xl mx-auto">
                For investments exceeding $500,000 or institutional requirements, our elite team crafts personalized investment architectures designed exclusively for your wealth objectives.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack2}
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/40 transition-all font-bold text-l hover:scale-105 flex items-center space-x-2">
                  <span>Contact Elite Advisors</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
