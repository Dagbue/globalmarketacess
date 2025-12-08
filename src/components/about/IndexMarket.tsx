import { ArrowRight, BarChart3, TrendingUp, Activity } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function IndexMarket() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const indices = [
    { name: 'S&P 500', icon: BarChart3 },
    { name: 'NASDAQ', icon: TrendingUp },
    { name: 'FTSE 100', icon: Activity },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#0066ff]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#00ccff]/20 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Split Diagonal Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Side - Content Card */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Large Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#0066ff]/30 via-[#0080ff]/30 to-[#00ccff]/30 rounded-[3rem] blur-3xl opacity-50"></div>

              {/* Main Card */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-[#00ccff]/5 border-2 border-[#0066ff]/40 rounded-[2.5rem] p-12 shadow-2xl">

                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:24px_24px] rounded-[2.5rem] opacity-30"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#0080ff]/5 to-[#00ccff]/10 rounded-[2.5rem]"></div>

                <div className="relative">
                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                    Trade Global Indices with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
                      Confidence
                    </span>
                  </h2>

                  <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                    Access major market indices including S&P 500, NASDAQ, FTSE 100, DAX, and more with competitive spreads and lightning-fast execution
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={handleBack}
                    className="group relative inline-flex items-center space-x-3 px-10 py-5 overflow-hidden"
                  >
                    {/* Button Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] to-[#0066ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button Content */}
                    <span className="relative text-white font-bold text-lg">Explore Markets</span>
                    <ArrowRight className="relative w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Index Cards */}
          <div className="lg:col-span-5 space-y-6">
            {indices.map((index, i) => {
              const Icon = index.icon;
              const offsetClass = i === 1 ? 'lg:translate-x-8' : '';
              const rotateClass = i === 0 ? 'lg:-rotate-2' : i === 2 ? 'lg:rotate-2' : '';

              return (
                <div
                  key={i}
                  className={`group relative ${offsetClass} ${rotateClass}`}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0066ff]/40 to-[#00ccff]/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative flex items-center space-x-6 p-8 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/20 via-[#0080ff]/15 to-transparent border border-[#0066ff]/40 rounded-2xl hover:border-[#00ccff]/60 hover:shadow-[0_0_60px_rgba(0,102,255,0.5)] transition-all duration-500 hover:-translate-y-2 hover:rotate-0">

                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-xl blur-lg opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066ff] group-hover:to-[#00ccff] transition-all duration-300">
                        {index.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-[#0066ff] to-[#00ccff] rounded-full group-hover:w-24 transition-all duration-500"></div>
                        <span className="text-xs text-[#00ccff] font-semibold uppercase tracking-wider">Live Trading</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-6 h-6 text-[#00ccff] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
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
