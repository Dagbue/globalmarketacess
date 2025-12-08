import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import {homeHero} from "../../assets";
import {useNavigate} from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[700px] h-[700px] bg-[#0066ff]/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00ccff]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#0080ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6 mt-20">
            {/* Left Column - Main Content with Diagonal Elements */}
            <div className="lg:col-span-7 space-y-6">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#0066ff]/20 via-[#0080ff]/20 to-[#00ccff]/20 border border-[#00ccff]/30 rounded-full shadow-lg shadow-[#0066ff]/20 animate-float">
                <Sparkles className="w-4 h-4 text-[#00ccff] mr-2 animate-pulse" />
                <span className="text-[#00ccff] font-semibold text-sm tracking-wide">Market Signal Trades</span>
              </div>

              {/* Main Hero Content Card */}
              <div className="relative p-8 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/10 via-[#0080ff]/5 to-transparent border border-[#0066ff]/30 rounded-3xl shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 rounded-3xl blur-xl opacity-50"></div>

                <div className="relative space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                    <span className="text-white">Investing, Now</span>
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-pulse">
                      Available to Everyone.
                    </span>
                  </h1>

                  <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                    Experience the future of investing. We're dismantling the complex barriers and exclusive walls of traditional finance, creating a powerful platform where everyone can access institutional-grade trading tools and opportunities.
                  </p>
                </div>
              </div>

              {/* Overlapping Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-xl bg-gradient-to-br from-[#0066ff]/15 to-[#0080ff]/5 border border-[#0066ff]/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]">
                  <TrendingUp className="w-8 h-8 text-[#00ccff] mb-3" />
                  <div className="text-3xl font-black text-white mb-1">7M+</div>
                  <div className="text-sm text-[#00ccff]">Active Traders</div>
                </div>
                <div className="backdrop-blur-xl bg-gradient-to-br from-[#00ccff]/15 to-[#0080ff]/5 border border-[#00ccff]/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(0,204,255,0.3)] -translate-y-4">
                  <div className="text-3xl font-black text-white mb-1">99.9%</div>
                  <div className="text-sm text-[#00ccff]">Uptime</div>
                  <div className="mt-2 text-xs text-slate-400">Always Available</div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBack}
                className="group px-10 py-5 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,102,255,0.6)] flex items-center space-x-3 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Get Started</span>
                <ArrowRight className="w-6 h-6 relative group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right Column - Video with Floating Panels */}
            <div className="lg:col-span-5 relative">
              {/* Floating Background Elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>

              {/* Main Video Container */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#0066ff]/10 to-[#00ccff]/5 border border-[#0066ff]/30 rounded-3xl p-4 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-[#0066ff]/30 object-cover"
                  src={homeHero}
                ></video>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 backdrop-blur-2xl bg-gradient-to-br from-[#0080ff]/30 to-[#00ccff]/20 border border-[#00ccff]/40 rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-sm text-[#00ccff] font-semibold mb-1">Real-time Trading</div>
                <div className="text-2xl font-black text-white">&lt;10ms</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
