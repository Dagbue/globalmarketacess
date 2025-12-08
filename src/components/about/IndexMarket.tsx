import { ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function IndexMarket() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          <div className="relative text-center">
            <h2 className="text-4xl lg:text-4xl font-black text-white mb-6">
              Trade Global Indices with Confidence
            </h2>
            <p className="text-l text-slate-300 mb-10 max-w-3xl mx-auto">
              Access major market indices including S&P 500, NASDAQ, FTSE 100, and more with competitive spreads
            </p>
            <button
                onClick={handleBack}
                className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-l hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center space-x-3">
              <span>Explore Markets</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
