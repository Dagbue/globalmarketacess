import { Scale, Shield } from 'lucide-react';
import {Advanced} from "../../assets";

export default function SecuritySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-200 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-100 rounded-full mb-6 shadow-lg">
            <Shield className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-bold text-sm tracking-wide">SECURITY FIRST</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            There's a time and a place
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                for risk
              </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your funds and data are always secure. With Market Signal Trades you're protected by industry-leading protocols.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500">
              <h3 className="text-3xl font-black text-slate-900 mb-3">
                Setting New Standards in Global Finance Technology
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Market Signal Trades is set on a mission to provide a fair, secure, and easy-to-use platform with the highest class of financial technologies globally.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] transition-all duration-500">
              <h3 className="text-3xl font-black text-slate-900 mb-3">
                Simplifying Complex Systems for Everyone
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We strongly believe that everyone should be able to enjoy equal and unrestricted wealth-building opportunities no matter who you are and where you live.
              </p>
            </div>

            <div className="group flex items-start space-x-4 p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-xl mb-2">Multiple regulatory licenses</h4>
                <p className="text-slate-600 leading-relaxed">
                  Regulated and authorized across multiple jurisdictions to ensure compliance and security.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
                className="absolute -inset-8 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative flex items-center justify-center">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  src={Advanced}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
