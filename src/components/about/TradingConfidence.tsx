import { TrendingUp, Award } from 'lucide-react';

export default function TradingConfidence() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-bold text-sm">TRADE WITH CONFIDENCE</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Join the Elite Trading Community
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Experience professional-grade trading with institutional tools and retail accessibility.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Expert Support', desc: '24/7 dedicated team', icon: TrendingUp },
              { title: 'Advanced Tools', desc: 'Professional analytics', icon: Award },
              { title: 'Fast Execution', desc: 'Lightning-quick trades', icon: TrendingUp },
              { title: 'Secure Platform', desc: 'Bank-level protection', icon: Award },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
