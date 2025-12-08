import { Sparkles, ArrowRight } from 'lucide-react';
import {homeHero} from "../../assets";
import {useNavigate} from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full shadow-lg shadow-blue-500/10">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
                <span className="text-blue-300 font-semibold text-sm tracking-wide">Market Signal Trades</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Investing, Now available</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                to everyone.
              </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
                We see investing differently. Today's financial system is complex, exclusive and expensive - making it hard for the typical person to start investing. So, we're building a platform without digital walls and complex barriers.
              </p>

              <button
              onClick={handleBack}
                  className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center space-x-3">
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              <div className="relative flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-1/2 h-auto rounded-2xl shadow-2xl object-cover"
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