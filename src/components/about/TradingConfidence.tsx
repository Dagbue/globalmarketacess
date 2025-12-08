import { TrendingUp, Award, Shield, Zap } from 'lucide-react';

export default function TradingConfidence() {
  const features = [
    { title: 'Expert Support', desc: '24/7 dedicated team ready to assist', icon: TrendingUp },
    { title: 'Advanced Tools', desc: 'Professional analytics & insights', icon: Award },
    { title: 'Fast Execution', desc: 'Lightning-quick trade execution', icon: Zap },
    { title: 'Secure Platform', desc: 'Military-grade protection', icon: Shield },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0066ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00ccff]/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Asymmetric Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Side - Content Panel */}
          <div className="lg:col-span-5">
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-transparent border border-[#0066ff]/30 rounded-3xl p-10 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 rounded-3xl blur-xl opacity-50"></div>

              <div className="relative">
                <div className="inline-flex items-center px-5 py-2 backdrop-blur-xl bg-gradient-to-r from-[#0066ff]/30 to-[#00ccff]/30 border border-[#00ccff]/40 rounded-full mb-6 shadow-lg shadow-[#0066ff]/30">
                  <Award className="w-4 h-4 text-[#00ccff] mr-2" />
                  <span className="text-[#00ccff] font-bold text-xs uppercase tracking-wider">Trade With Confidence</span>
                </div>

                <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                  Join the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
                    Elite Trading Community
                  </span>
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Experience professional-grade trading with institutional tools, cutting-edge technology, and retail accessibility. Join millions of traders worldwide who trust our platform.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {features.map((item, i) => {
                const Icon = item.icon;
                const offsetClass = i % 2 === 0 ? 'translate-y-6' : '-translate-y-3';
                const colorVariant = i % 3 === 0 ? 'from-[#0066ff]' : i % 3 === 1 ? 'from-[#0080ff]' : 'from-[#00ccff]';

                return (
                  <div
                    key={i}
                    className={`group relative ${offsetClass}`}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${colorVariant} to-[#00ccff] rounded-[1.5rem] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>

                    {/* Card */}
                    <div className="relative h-full p-8 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/10 via-[#0080ff]/5 to-transparent border border-[#0066ff]/30 rounded-2xl hover:border-[#00ccff]/60 hover:shadow-[0_0_60px_rgba(0,102,255,0.4)] hover:-translate-y-2 transition-all duration-500">

                      {/* Floating Icon */}
                      <div className="relative w-16 h-16 mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorVariant} to-[#00ccff] rounded-xl blur-lg opacity-50`}></div>
                        <div className={`relative w-full h-full bg-gradient-to-br ${colorVariant} via-[#0080ff] to-[#00ccff] rounded-xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-black text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066ff] group-hover:to-[#00ccff] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>

                      {/* Bottom Accent */}
                      <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${colorVariant} to-[#00ccff] rounded-full group-hover:w-full transition-all duration-500`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
