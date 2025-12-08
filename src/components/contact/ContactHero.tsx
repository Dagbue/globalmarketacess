import { Send, Headphones, Clock, Globe, Sparkles } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-magenta-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-fuchsia-500/30 rounded-full shadow-lg shadow-purple-500/20 mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-fuchsia-400 mr-2 animate-pulse" />
            <span className="text-fuchsia-300 font-semibold text-sm tracking-wide">We're Here to Help</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Get in Touch</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-gradient">
              With Our Team
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Have questions about our investment plans? Need support with your account? Our <span className="text-fuchsia-400 font-semibold">expert team is ready to assist you 24/7</span>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group glass-purple rounded-2xl p-6 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">24/7 Support</div>
              <div className="text-slate-400 text-sm">Always available</div>
            </div>

            <div className="group glass-magenta rounded-2xl p-6 border border-fuchsia-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,121,249,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Fast Response</div>
              <div className="text-slate-400 text-sm">Under 2 hours</div>
            </div>

            <div className="group glass-purple rounded-2xl p-6 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">150+ Countries</div>
              <div className="text-slate-400 text-sm">Global support</div>
            </div>

            <div className="group glass-magenta rounded-2xl p-6 border border-fuchsia-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,121,249,0.25)] animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Instant Chat</div>
              <div className="text-slate-400 text-sm">Live assistance</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
