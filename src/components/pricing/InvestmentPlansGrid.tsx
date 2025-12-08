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
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Investment Plans</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Plans that Scale
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">with Your Ambitions</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From beginner-friendly options to elite investment tiers, find the perfect plan to match your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className="relative group">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg z-10">
                    MOST POPULAR
                  </div>
                )}

                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className={`relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border transition-all h-full ${
                  plan.popular
                    ? 'border-blue-600/50 shadow-lg shadow-blue-600/20'
                    : 'border-slate-800/50 group-hover:border-blue-800/50'
                }`}>
                  <div className="mb-8">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-blue-400"/>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-slate-400 font-medium">{plan.tagline}</p>
                  </div>

                  <div className="mb-8 pb-8 border-b border-slate-800/50">
                    <div className="flex items-baseline mb-4">
                      <span className="text-5xl font-bold text-blue-400">{plan.percentage}</span>
                      <span className="text-2xl text-slate-400 ml-1">%</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Duration:</span>
                        <span className="font-bold text-white">{plan.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Daily returns:</span>
                        <span className="font-bold text-blue-400">{plan.daily}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Minimum:</span>
                        <span className="font-bold text-white">{plan.minDeposit}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBack}
                    className={`w-full py-4 rounded-lg font-semibold mb-8 transition-all ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}>
                    Start Investing
                  </button>

                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                      What's Included
                    </div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="mt-0.5">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                        </div>
                        <span className="text-sm text-slate-300 leading-relaxed">
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


        <div className="mt-24 relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-slate-800/50">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              For investments over $500,000 or institutional requirements, our team can create a tailored investment strategy designed specifically for your needs.
            </p>
            <button
              onClick={handleBack2}
              className="group inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/30"
            >
              <span>Contact Enterprise Sales</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
