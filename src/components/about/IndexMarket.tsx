import { ArrowRight, BarChart2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function IndexMarket() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const indices = ['S&P 500', 'NASDAQ', 'FTSE 100', 'DAX 30', 'Nikkei 225'];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-slate-800/50">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
              <BarChart2 className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Global Indices</span>
            </div>

            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
              Trade Global Indices with Confidence
            </h2>

            <p className="text-l text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access major market indices with competitive spreads and instant execution.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {indices.map((index, i) => (
                <div key={i} className="px-4 py-2 bg-slate-800/40 border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium">
                  {index}
                </div>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/30"
            >
              Explore Markets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
