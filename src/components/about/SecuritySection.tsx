import { Scale, Shield, Lock, Server } from 'lucide-react';
import {Advanced} from "../../assets";

export default function SecuritySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-[#0066ff]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#00ccff]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#0080ff]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with Floating Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 border border-[#00ccff]/30 rounded-full mb-6 shadow-lg shadow-[#0066ff]/30 animate-float">
            <Shield className="w-4 h-4 text-[#00ccff] mr-2 animate-pulse" />
            <span className="text-[#00ccff] font-bold text-sm tracking-wide uppercase">Security First</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            There's a Time and a Place
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              for Risk
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your funds and data are protected by military-grade encryption and industry-leading security protocols. Trade with absolute confidence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Side - Stacked Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Large Feature Card */}
            <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-transparent border border-[#0066ff]/30 rounded-3xl p-8 hover:border-[#00ccff]/60 hover:shadow-[0_0_60px_rgba(0,102,255,0.4)] transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-black text-white mb-3">
                  Setting New Standards in Global Finance Technology
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Market Signal Trades is revolutionizing global finance with cutting-edge technology, delivering a secure, fair, and intuitive platform that empowers traders worldwide with institutional-grade capabilities.
                </p>
              </div>
            </div>

            {/* Medium Feature Card */}
            <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-[#00ccff]/15 via-[#0080ff]/10 to-transparent border border-[#00ccff]/30 rounded-3xl p-8 hover:border-[#0066ff]/60 hover:shadow-[0_0_60px_rgba(0,204,255,0.4)] transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ccff]/20 to-[#0066ff]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-black text-white mb-3">
                  Simplifying Complex Systems for Everyone
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  We believe wealth creation should be accessible to all. Our mission is to eliminate barriers and provide equal opportunities for financial growth, regardless of your background or location.
                </p>
              </div>
            </div>

            {/* Regulatory Card with Icon */}
            <div className="group relative flex items-start space-x-4 p-8 backdrop-blur-2xl bg-gradient-to-br from-[#0080ff]/15 to-transparent border border-[#0080ff]/30 rounded-3xl hover:border-[#00ccff]/60 hover:shadow-[0_0_60px_rgba(0,128,255,0.4)] transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0080ff]/20 to-[#00ccff]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div className="relative">
                <h4 className="font-black text-white text-xl mb-2">Multiple Regulatory Licenses</h4>
                <p className="text-slate-300 leading-relaxed">
                  Fully regulated and authorized across multiple jurisdictions, ensuring the highest standards of compliance, transparency, and investor protection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Video with Overlapping Elements */}
          <div className="lg:col-span-7 relative">
            {/* Main Video Container */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#0066ff]/10 to-[#00ccff]/5 border border-[#0066ff]/30 rounded-3xl p-6 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-[#0066ff]/40 object-cover"
                  src={Advanced}
                ></video>
              </div>
            </div>

            {/* Floating Stats Overlays */}
            <div className="absolute -bottom-8 -left-6 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/30 to-[#0080ff]/20 border border-[#0066ff]/40 rounded-2xl p-6 shadow-xl animate-float">
              <Lock className="w-6 h-6 text-[#00ccff] mb-2" />
              <div className="text-sm text-[#00ccff] font-semibold mb-1">Bank-Grade Security</div>
              <div className="text-2xl font-black text-white">256-bit SSL</div>
            </div>

            <div className="absolute -top-6 -right-6 backdrop-blur-2xl bg-gradient-to-br from-[#00ccff]/30 to-[#0080ff]/20 border border-[#00ccff]/40 rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <Server className="w-6 h-6 text-[#00ccff] mb-2" />
              <div className="text-sm text-[#00ccff] font-semibold mb-1">Infrastructure</div>
              <div className="text-2xl font-black text-white">99.9% Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
