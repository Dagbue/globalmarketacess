import {Check, Star, Zap, Crown, Sparkles, TrendingUp, Gem, Rocket} from 'lucide-react';
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
    rotation: 'rotate-2',
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
    rotation: '-rotate-1',
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
    icon: Gem,
    tagline: 'For serious investors',
    percentage: '15',
    duration: '12 Months',
    daily: '1.6',
    minDeposit: '$100,000',
    popular: false,
    rotation: 'rotate-1',
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
    rotation: '-rotate-2',
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
    <section className="py-28 px-6 bg-gradient-to-b from-slate-950 via-blue-950/60 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Overlapping Glass */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#0066ff]/20 rounded-full blur-[100px]"></div>

          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 glass-strong rounded-full blur-md scale-110"></div>
            <div className="relative inline-flex items-center px-8 py-4 glass-card border-2 border-[#0080ff]/50 rounded-full shadow-xl shadow-[#0066ff]/30 animate-glow backdrop-blur-3xl">
              <TrendingUp className="w-5 h-5 text-[#00ccff] mr-3 animate-pulse"/>
              <span className="text-[#00ccff] font-bold text-base tracking-wide">Premium Investment Plans</span>
              <Sparkles className="w-5 h-5 text-[#0080ff] ml-3 animate-pulse"/>
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Investment strategies that
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">amplify your wealth</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto font-medium">
            From beginner-friendly tiers to elite platinum access, discover premium plans engineered for exponential financial growth.
          </p>
        </div>

        {/* Pricing Cards - Unique 3D Stacked & Tilted Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 relative perspective-1000">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
                <div
                    key={index}
                    className="group relative transform hover:scale-105 transition-all duration-700 preserve-3d"
                >
                  {/* 3D Stacked Background Layers */}
                  <div className={`absolute inset-0 glass-strong rounded-3xl opacity-20 blur-lg ${plan.rotation} scale-95 translate-y-3`}></div>
                  <div className={`absolute inset-0 glass-strong rounded-3xl opacity-40 blur-md ${plan.rotation} scale-97 translate-y-1.5`}></div>

                  {/* Main Card with Featured Plan Special Treatment */}
                  <div
                      className={`relative glass-card backdrop-blur-3xl rounded-3xl p-8 border-2 transition-all duration-700 hover:-translate-y-3 ${
                          plan.popular
                              ? 'border-[#00ccff]/70 shadow-2xl shadow-[#00ccff]/40 scale-105 z-10 hover:scale-110 -rotate-1 hover:rotate-0'
                              : `border-[#0066ff]/40 hover:border-[#0080ff]/60 hover:shadow-2xl hover:shadow-[#0066ff]/30 ${plan.rotation} hover:rotate-0`
                      }`}
                  >
                    {/* Featured Plan Floating Badge */}
                    {plan.popular && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] rounded-full blur-xl opacity-70 animate-pulse"></div>
                            <div className="relative px-8 py-3 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] text-white text-xs font-black rounded-full shadow-2xl border-2 border-white/30">
                              <Sparkles className="w-3 h-3 inline mr-2 animate-pulse"/>
                              MOST POPULAR
                              <Sparkles className="w-3 h-3 inline ml-2 animate-pulse"/>
                            </div>
                          </div>
                        </div>
                    )}

                    {/* Overlapping Glass Header */}
                    <div className="relative mb-8">
                      <div className="absolute -top-4 -left-4 w-24 h-24 glass-strong rounded-full blur-xl opacity-50"></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl flex items-center justify-center mb-6 shadow-2xl ${plan.popular ? 'shadow-[#00ccff]/60 scale-110' : 'shadow-[#0066ff]/40'} group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl blur-2xl opacity-60"></div>
                        <IconComponent className="w-10 h-10 text-white relative z-10"/>
                      </div>
                      <h3 className="text-4xl font-black text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-[#00ccff] font-bold uppercase tracking-wider">{plan.tagline}</p>
                    </div>

                    {/* Pricing Display with Glass Effect */}
                    <div className="relative mb-8 pb-8 border-b-2 border-[#0066ff]/30">
                      <div className="absolute inset-0 glass-strong rounded-2xl -z-10"></div>
                      <div className="flex items-baseline mb-6 justify-center">
                        <span
                            className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] ${plan.popular ? 'text-7xl' : ''}`}>{plan.percentage}</span>
                        <span className="text-3xl text-[#0080ff] ml-2 font-black">%</span>
                      </div>
                      <div className="space-y-3 text-sm glass-strong rounded-xl p-4 backdrop-blur-2xl border border-[#0066ff]/20">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300 font-semibold">Duration:</span>
                          <span className="font-black text-white text-base">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300 font-semibold">Daily returns:</span>
                          <span className="font-black text-[#00ccff] text-base">{plan.daily}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300 font-semibold">Minimum:</span>
                          <span className="font-black text-white text-base">{plan.minDeposit}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button with Unique Featured Style */}
                    <button
                        onClick={handleBack}
                        className={`w-full py-5 rounded-2xl font-black text-base mb-8 transition-all duration-500 relative overflow-hidden group/btn ${
                        plan.popular
                            ? 'bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] text-white shadow-xl shadow-[#00ccff]/50 hover:shadow-2xl hover:shadow-[#00ccff]/70 hover:scale-105 border-2 border-white/20'
                            : 'glass-card text-white hover:bg-[#0066ff]/30 border-2 border-[#0066ff]/40 hover:border-[#00ccff]/60'
                    }`}>
                      <span className="relative z-10 flex items-center justify-center">
                        Start Investing
                        <Rocket className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"/>
                      </span>
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] via-[#0066ff] to-[#0080ff] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      )}
                    </button>

                    {/* Features List with Glass Items */}
                    <div className="space-y-4">
                      <div className="text-xs font-black text-[#00ccff] uppercase tracking-widest mb-5 flex items-center">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent mr-3"></div>
                        What's Included
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent ml-3"></div>
                      </div>
                      {plan.features.map((feature, featureIndex) => (
                          <div
                              key={featureIndex}
                              className="flex items-start space-x-3 glass-strong rounded-lg p-3 backdrop-blur-xl border border-[#0066ff]/20 hover:border-[#00ccff]/40 transition-all duration-300"
                          >
                            <div className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00ccff] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0066ff]/30">
                              <Check className="w-4 h-4 text-white font-bold"/>
                            </div>
                            <span className="text-sm text-blue-100 leading-relaxed font-medium">
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


        {/* Custom Solutions CTA with Heavy Glassmorphism */}
        <div className="mt-32 relative">
          {/* Multi-layer Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0080ff] via-[#0066ff] to-[#00ccff] rounded-[3rem] blur-2xl opacity-15"></div>

          {/* Stacked Glass Backgrounds */}
          <div className="absolute inset-0 glass-strong rounded-[3rem] rotate-1 scale-98 opacity-30 blur-sm"></div>
          <div className="absolute inset-0 glass-strong rounded-[3rem] -rotate-1 scale-99 opacity-50"></div>

          <div className="relative glass-card backdrop-blur-3xl rounded-[3rem] p-12 lg:p-20 shadow-2xl overflow-hidden border-2 border-[#00ccff]/40">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff15_1px,transparent_1px),linear-gradient(to_bottom,#0066ff15_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

            {/* Floating Orbs */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-[#00ccff]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#0066ff]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl shadow-2xl shadow-[#00ccff]/50 mb-8 animate-pulse">
                <Crown className="w-12 h-12 text-white"/>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Need a bespoke solution?
              </h3>
              <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                For investments exceeding <span className="text-[#00ccff] font-black">$500,000</span> or institutional requirements, our elite team crafts personalized investment architectures designed exclusively for your wealth objectives.
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <button
                    onClick={handleBack2}
                    className="group/cta relative px-10 py-5 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#00ccff]/60 transition-all font-black text-lg hover:scale-105 border-2 border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] via-[#0080ff] to-[#0066ff] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative flex items-center space-x-3">
                    <span>Contact Elite Advisors</span>
                    <TrendingUp className="w-6 h-6 group-hover/cta:translate-x-2 transition-transform"/>
                  </span>
                </button>

                <button
                    onClick={handleBack}
                    className="px-10 py-5 glass-strong text-white rounded-2xl hover:bg-[#0066ff]/30 transition-all font-black text-lg border-2 border-[#0066ff]/50 hover:border-[#00ccff]/70 hover:shadow-xl hover:shadow-[#0066ff]/30 backdrop-blur-2xl">
                  View All Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
