import { ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function IndexMarket() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="glass-magenta backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-purple-500/30 relative overflow-hidden animate-glow">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-pink-500/10"></div>

          <div className="relative text-center">
            <h2 className="text-4xl lg:text-4xl font-black text-white mb-6">
              Trade Global Indices with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
                Confidence
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto">
              Access major market indices including S&P 500, NASDAQ, FTSE 100, DAX, and more with competitive spreads and lightning-fast execution
            </p>
            <button
                onClick={handleBack}
                className="group px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 inline-flex items-center space-x-3 animate-glow">
              <span>Explore Markets</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
