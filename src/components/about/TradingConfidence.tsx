import { Headphones, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function TradingConfidence() {
  const benefits = [
    { title: 'Expert Support', desc: '24/7 dedicated team', icon: Headphones },
    { title: 'Advanced Tools', desc: 'Professional analytics', icon: Cpu },
    { title: 'Fast Execution', desc: 'Lightning-quick trades', icon: Zap },
    { title: 'Secure Platform', desc: 'Bank-level protection', icon: ShieldCheck },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Trade With Confidence</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Join the Elite
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                Trading Community
              </span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              Experience professional-grade trading with institutional tools combined with retail accessibility. Join thousands of successful traders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                  <div className="relative p-6 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
