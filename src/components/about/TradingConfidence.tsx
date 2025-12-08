import { TrendingUp, Award, Shield, Zap } from 'lucide-react';

export default function TradingConfidence() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20 animate-glow">
              <Award className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 font-bold text-sm">TRADE WITH CONFIDENCE</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6">
              Join the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
                Elite Trading Community
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Experience professional-grade trading with institutional tools, cutting-edge technology, and retail accessibility. Join millions of traders worldwide who trust our platform.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Expert Support', desc: '24/7 dedicated team ready to assist', icon: TrendingUp },
              { title: 'Advanced Tools', desc: 'Professional analytics & insights', icon: Award },
              { title: 'Fast Execution', desc: 'Lightning-quick trade execution', icon: Zap },
              { title: 'Secure Platform', desc: 'Military-grade protection', icon: Shield },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 glass-purple rounded-2xl border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-glow group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-black text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
