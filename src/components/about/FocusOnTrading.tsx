import {useNavigate} from "react-router-dom";
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FocusOnTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00ccff]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Floating Panel Design */}
        <div className="relative">
          {/* Large Glow Background */}
          <div className="absolute -inset-12 bg-gradient-to-r from-[#0066ff]/20 via-[#0080ff]/20 to-[#00ccff]/20 rounded-[4rem] blur-3xl opacity-60"></div>

          {/* Main Content Card */}
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-[#00ccff]/5 border-2 border-[#0066ff]/40 rounded-[3rem] p-16 shadow-2xl">

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-[#0066ff]/30 to-[#00ccff]/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-[#00ccff]/30 to-[#0080ff]/30 rounded-3xl blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Inner Content Container */}
            <div className="relative text-center space-y-8">

              {/* Floating Badge */}
              <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#0066ff]/30 to-[#00ccff]/30 border border-[#00ccff]/40 rounded-full shadow-lg animate-float">
                <Sparkles className="w-5 h-5 text-[#00ccff] mr-2 animate-pulse" />
                <span className="text-[#00ccff] font-bold text-sm tracking-wide uppercase">Premium Trading Experience</span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Focus on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
                  Trading
                </span>
                ,<br />
                We Handle the Rest
              </h2>

              {/* Description */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Our powerful platform manages all the complex infrastructure, security, and technical details, allowing you to concentrate entirely on what matters most - executing winning trades and growing your portfolio.
              </p>

              {/* CTA Button with Enhanced Design */}
              <div className="pt-6">
                <button
                  onClick={handleBack}
                  className="group relative inline-flex items-center space-x-3 px-12 py-5 overflow-hidden"
                >
                  {/* Button Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] to-[#0066ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button Content */}
                  <span className="relative text-white font-bold text-lg">Start Trading Now</span>
                  <ArrowRight className="relative w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Accent Cards */}
          <div className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-gradient-to-br from-[#0066ff]/30 to-[#0080ff]/20 border border-[#0066ff]/40 rounded-2xl p-6 shadow-xl animate-float">
            <div className="text-sm text-[#00ccff] font-semibold mb-1">Instant Setup</div>
            <div className="text-2xl font-black text-white">5 Minutes</div>
          </div>

          <div className="absolute -top-6 -right-6 backdrop-blur-xl bg-gradient-to-br from-[#00ccff]/30 to-[#0080ff]/20 border border-[#00ccff]/40 rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="text-sm text-[#00ccff] font-semibold mb-1">Commission</div>
            <div className="text-2xl font-black text-white">0%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
