import { TrendingUp } from 'lucide-react';

export default function CommoditiesTrading() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-5">
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Commodities</span> & More
          </h2>
          <p className="text-xl text-slate-600">Access global markets including gold, oil, forex, and cryptocurrencies</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {['Gold', 'Oil', 'Forex', 'Crypto'].map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
