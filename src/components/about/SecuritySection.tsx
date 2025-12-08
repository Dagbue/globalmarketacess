import { Scale, Shield } from 'lucide-react';
import {Advanced} from "../../assets";

export default function SecuritySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-pulse animate-float"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-[100px] animate-pulse animate-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20 animate-glow">
            <Shield className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 font-bold text-sm tracking-wide">SECURITY FIRST</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            There's a Time and a Place
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
                for Risk
              </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your funds and data are protected by military-grade encryption and industry-leading security protocols. Trade with absolute confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="group glass-purple backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 animate-glow">
              <h3 className="text-3xl font-black text-white mb-3">
                Setting New Standards in Global Finance Technology
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Market Signal Trades is revolutionizing global finance with cutting-edge technology, delivering a secure, fair, and intuitive platform that empowers traders worldwide with institutional-grade capabilities.
              </p>
            </div>

            <div className="group glass-magenta backdrop-blur-sm rounded-3xl p-8 border border-fuchsia-500/20 hover:border-pink-400/50 hover:shadow-[0_20px_60px_-15px_rgba(232,121,249,0.4)] transition-all duration-500 animate-glow">
              <h3 className="text-3xl font-black text-white mb-3">
                Simplifying Complex Systems for Everyone
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                We believe wealth creation should be accessible to all. Our mission is to eliminate barriers and provide equal opportunities for financial growth, regardless of your background or location.
              </p>
            </div>

            <div className="group flex items-start space-x-4 p-8 glass-purple rounded-3xl border-2 border-purple-500/30 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-black text-white text-xl mb-2">Multiple Regulatory Licenses</h4>
                <p className="text-slate-300 leading-relaxed">
                  Fully regulated and authorized across multiple jurisdictions, ensuring the highest standards of compliance, transparency, and investor protection.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
                className="absolute -inset-8 bg-gradient-to-br from-purple-500 via-fuchsia-400 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse animate-glow"></div>

            <div className="relative flex items-center justify-center">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-purple-500/30 object-cover animate-float"
                  src={Advanced}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
