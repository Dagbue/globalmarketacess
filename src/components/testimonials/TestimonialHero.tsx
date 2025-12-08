import { Star, Quote, Users, TrendingUp, Award, Sparkles, Target } from 'lucide-react';

export default function TestimonialHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[#0066ff]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#00ccff]/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0080ff]/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Content */}
        <div className="text-center mb-20">
          {/* Rating Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full mb-8 group animate-float" style={{
            background: 'rgba(0, 102, 255, 0.08)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 204, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2), inset 0 0 30px rgba(0, 204, 255, 0.1)'
          }}>
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span className="text-[#00ccff] font-black text-sm tracking-wider uppercase">
              4.9/5 from 10,000+ Traders
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            <span className="block text-white mb-3">Real Stories From</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-gradient">
              Real Traders
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join <span className="text-[#00ccff] font-black">50,000+ successful traders</span> who
            have transformed their financial future with our platform.
          </p>

          {/* Quote Indicator */}
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl" style={{
            background: 'rgba(0, 128, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 128, 255, 0.2)'
          }}>
            <Quote className="w-5 h-5 text-[#0080ff]" />
            <span className="text-white font-semibold">Authentic testimonials verified by our team</span>
            <Sparkles className="w-5 h-5 text-[#00ccff] animate-pulse" />
          </div>
        </div>

        {/* Stats Grid - Unique Staggered Layout */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { icon: Users, title: '50,000+', desc: 'Active Traders', gradient: 'from-[#0066ff] to-[#0080ff]', delay: '0s' },
              { icon: TrendingUp, title: '$2.5B+', desc: 'Trading Volume', gradient: 'from-[#0080ff] to-[#00ccff]', delay: '0.15s' },
              { icon: Award, title: '180+', desc: 'Countries Served', gradient: 'from-[#00ccff] to-[#0066ff]', delay: '0.3s' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{
                  background: 'rgba(0, 102, 255, 0.05)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(0, 128, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)',
                  animationDelay: stat.delay
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.2), transparent 70%)'
                }}></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{stat.title}</div>
                  <div className="text-sm text-[#00ccff] font-bold uppercase tracking-wide">{stat.desc}</div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-[#00ccff]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Wider Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3" style={{
              background: 'rgba(0, 128, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 204, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 128, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)',
              animationDelay: '0.45s'
            }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.2), transparent 70%)'
              }}></div>

              <div className="relative z-10 flex items-center space-x-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-3xl shadow-lg shadow-[#0080ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">98.7%</div>
                  <div className="text-sm text-[#00ccff] font-bold uppercase tracking-wide">Success Rate</div>
                  <div className="text-xs text-slate-400 mt-1">Based on active accounts</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3" style={{
              background: 'rgba(0, 102, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 128, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)',
              animationDelay: '0.6s'
            }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.2), transparent 70%)'
              }}></div>

              <div className="relative z-10 flex items-center space-x-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-3xl shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">24/7</div>
                  <div className="text-sm text-[#00ccff] font-bold uppercase tracking-wide">Customer Support</div>
                  <div className="text-xs text-slate-400 mt-1">Average response: 60 seconds</div>
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
          50% { transform: translateY(-12px); }
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
