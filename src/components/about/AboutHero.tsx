import { Sparkles, ArrowRight } from 'lucide-react';
import {homeHero} from "../../assets";
import {useNavigate} from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse animate-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full shadow-lg shadow-purple-500/10 animate-glow">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2 animate-pulse" />
                <span className="text-purple-300 font-semibold text-sm tracking-wide">Market Signal Trades</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Investing, Now Available</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
                to Everyone.
              </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Experience the future of investing. We're dismantling the complex barriers and exclusive walls of traditional finance, creating a powerful platform where everyone can access institutional-grade trading tools and opportunities.
              </p>

              <button
              onClick={handleBack}
                  className="group px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] animate-glow flex items-center space-x-3">
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-purple-500 via-fuchsia-400 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse animate-glow"></div>

              <div className="relative flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-1/2 h-auto rounded-2xl shadow-2xl shadow-purple-500/20 object-cover animate-float"
                    src={homeHero}
                ></video>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes dash {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 20; }
        }
      `}</style>
      </section>
  );
}
