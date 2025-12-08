import { useNavigate } from "react-router-dom";
import { ArrowRight, Focus } from 'lucide-react';

export default function FocusOnTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
          <Focus className="w-4 h-4 text-blue-400" />
          <span className="text-blue-300 text-sm font-medium">Simplified Trading</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Focus on
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Trading</span>,
          <br />
          We Handle the Rest
        </h2>

        <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Our platform manages the complex infrastructure, regulatory compliance, and technical operations. You focus on what matters most - making profitable trading decisions.
        </p>

        <button
          onClick={handleBack}
          className="group inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/30"
        >
          Start Trading Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
