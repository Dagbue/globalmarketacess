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
      'Enhanced security protocols',
      '1.2% daily returns',
      'Guaranteed ROI',
      '24/7 priority support',
      '30-day maturity term',
      'Instant capital release',
      'Portfolio dashboard access',
      'Market insights & reports'
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
      'Enhanced security protocols',
      '1.4% daily returns',
      'Guaranteed ROI',
      '24/7 VIP support',
      '30-day maturity term',
      'Instant capital release',
      'Advanced portfolio tools',
      'Dedicated account manager',
      'Quarterly strategy calls'
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
      'Maximum security protocols',
      '1.6% daily returns',
      'Guaranteed ROI',
      '24/7 VIP support',
      '30-day maturity term',
      'Priority capital release',
      'Premium portfolio suite',
      'Senior account manager',
      'Monthly strategy sessions',
      'Exclusive market analysis'
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
      'Military-grade security',
      '1.8% daily returns',
      'Guaranteed ROI',
      '24/7 concierge support',
      '30-day maturity term',
      'Priority capital release',
      'Enterprise portfolio suite',
      'Executive account manager',
      'Weekly strategy sessions',
      'Private market intelligence',
      'Custom investment strategies'
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-blue-600 mr-2"/>
            <span className="text-blue-600 font-semibold text-sm tracking-wide">Investment Plans</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Plans that scale
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">with your ambitions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly options to elite investment tiers, find the perfect plan to match your financial
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
                <div
                    key={index}
                    className={`group relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2 ${
                        plan.popular
                            ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                            : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                    }`}
                >
                  {plan.popular && (
                      <div
                          className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                        MOST POPULAR
                      </div>
                  )}

                  <div className="relative">
                    <div className="mb-8">
                      <div
                          className={`w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${plan.popular ? 'shadow-blue-500/30' : 'shadow-blue-500/20'} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-7 h-7 text-white"/>
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{plan.tagline}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <div className="flex items-baseline mb-4">
                        <span
                            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{plan.percentage}</span>
                        <span className="text-2xl text-gray-600 ml-1">%</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-bold text-gray-900">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Daily returns:</span>
                          <span className="font-bold text-cyan-600">{plan.daily}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Minimum:</span>
                          <span className="font-bold text-gray-900">{plan.minDeposit}</span>
                        </div>
                      </div>
                    </div>

                    <button
                        onClick={handleBack}
                        className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 ${
                        plan.popular
                            ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Start Investing
                    </button>

                    <div className="space-y-4">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">What's Included
                      </div>
                      {plan.features.map((feature, featureIndex) => (
                          <div
                              key={featureIndex}
                              className="flex items-start space-x-3"
                          >
                            <div className="mt-0.5">
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0"/>
                            </div>
                            <span className="text-sm text-gray-600 leading-relaxed">
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
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
          <div
              className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                Need a custom solution?
              </h3>
              <p className="text-l text-slate-300 mb-6 max-w-xl mx-auto">
                For investments over $500,000 or institutional requirements, our team can create a tailored investment strategy designed specifically for your needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack2}
                    className="group px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-blue-50 transition-all font-bold text-l shadow-xl hover:scale-105 flex items-center space-x-2">
                  <span>Contact Enterprise Sales</span>
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
