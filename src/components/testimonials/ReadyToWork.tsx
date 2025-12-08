import { ArrowRight, Shield, Users, Award, Sparkles, CheckCircle, Zap, Target } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function ReadyToWork() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#0066ff]/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#00ccff]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full mb-8 animate-float" style={{
            background: 'rgba(0, 102, 255, 0.08)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 204, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2), inset 0 0 30px rgba(0, 204, 255, 0.1)'
          }}>
            <Sparkles className="w-5 h-5 text-[#00ccff] mr-3 animate-pulse" />
            <span className="text-[#00ccff] font-black text-sm tracking-wider uppercase">Your Journey Starts Here</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="text-white">Ready to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-gradient">
              Transform
            </span>
            <span className="block text-white mt-2">Your Financial Future?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join 50,000+ successful traders and start your journey to financial freedom today
          </p>
        </div>

        {/* Feature Cards - Horizontal Layout */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Shield, title: 'Bank-Grade Security', desc: 'Military-level encryption', gradient: 'from-[#0066ff] to-[#0080ff]' },
            { icon: Users, title: '24/7 Expert Support', desc: '60-second response time', gradient: 'from-[#0080ff] to-[#00ccff]' },
            { icon: Award, title: 'Award-Winning', desc: 'Industry recognized', gradient: 'from-[#00ccff] to-[#0080ff]' },
            { icon: Target, title: 'Proven Results', desc: '98.7% success rate', gradient: 'from-[#0080ff] to-[#0066ff]' }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3"
              style={{
                background: 'rgba(0, 102, 255, 0.04)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(0, 128, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.1), inset 0 0 40px rgba(0, 204, 255, 0.05)'
              }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.15), transparent 70%)'
              }}></div>

              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4 shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <h3 className="text-4xl font-black text-white mb-8">
              What You Get When You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff]">Join Today</span>
            </h3>

            {[
              { icon: CheckCircle, title: 'Instant Account Setup', desc: 'Get started in under 2 minutes with our streamlined onboarding process' },
              { icon: Zap, title: 'Zero Hidden Fees', desc: 'Transparent pricing with no surprise charges or commissions' },
              { icon: Target, title: 'Professional Trading Tools', desc: 'Access institutional-grade analytics and charting tools' },
              { icon: Award, title: 'Educational Resources', desc: 'Comprehensive learning materials from beginner to advanced' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-6 rounded-2xl transition-all duration-300 hover:translate-x-2"
                style={{
                  background: 'rgba(0, 102, 255, 0.04)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 128, 255, 0.15)',
                  boxShadow: '0 4px 16px 0 rgba(0, 102, 255, 0.08)'
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - CTA Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

            <div className="relative rounded-3xl p-12 overflow-hidden" style={{
              background: 'rgba(0, 102, 255, 0.08)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(0, 204, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2), inset 0 0 60px rgba(0, 204, 255, 0.1)'
            }}>
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 204, 255, 0.4) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>

              <div className="relative z-10">
                {/* Minimum Deposit */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full mb-4" style={{
                    background: 'rgba(0, 204, 255, 0.15)',
                    border: '1px solid rgba(0, 204, 255, 0.3)'
                  }}>
                    <Sparkles className="w-4 h-4 text-[#00ccff]" />
                    <span className="text-xs text-[#00ccff] font-bold uppercase tracking-wide">Limited Time Offer</span>
                  </div>
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] mb-2">
                    $1,000
                  </div>
                  <div className="text-slate-300 font-semibold text-lg">Minimum deposit to start trading</div>
                </div>

                {/* Quick Benefits List */}
                <div className="space-y-3 mb-10">
                  {['Instant account activation', 'No setup fees', 'Full platform access'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#00ccff] to-[#0080ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBack}
                  className="group w-full px-8 py-6 rounded-2xl text-white font-black text-xl transition-all duration-300 hover:scale-105 overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, #0066ff 0%, #0080ff 50%, #00ccff 100%)',
                    boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.5), 0 0 0 2px rgba(0, 204, 255, 0.2)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span>Open Free Account</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>

                <p className="text-center text-sm text-slate-400 mt-4">
                  No credit card required • Free demo account available
                </p>

                {/* Trust Badge */}
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(0, 128, 255, 0.2)' }}>
                  <div className="text-center">
                    <div className="text-slate-500 text-xs uppercase tracking-wide mb-2 font-bold">Trusted By</div>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0080ff] to-[#00ccff] mb-1">
                      50,000+
                    </div>
                    <div className="text-slate-300 font-semibold">Active traders worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
