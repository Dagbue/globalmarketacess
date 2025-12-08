import { Zap, Headphones, Globe2, MessageSquare, Sparkles, ArrowDown } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-[#0066ff]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00ccff]/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0080ff]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Content - Centered Layout */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full mb-8 animate-float relative group" style={{
            background: 'rgba(0, 102, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 102, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 20px rgba(0, 204, 255, 0.1)'
          }}>
            <Sparkles className="w-5 h-5 text-[#00ccff] mr-3 animate-pulse" />
            <span className="text-[#0080ff] font-bold text-sm tracking-wider uppercase">Connect With Us 24/7</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            <span className="block text-white mb-3">Let's Talk About</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-gradient">
              Your Success
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-12">
            Our expert support team is standing by to help you
            <span className="text-[#00ccff] font-bold"> achieve your trading goals</span>.
            Reach out anytime, anywhere.
          </p>

          {/* Scroll Indicator */}
          <div className="inline-flex flex-col items-center space-y-3 animate-bounce">
            <span className="text-sm text-[#0080ff] font-semibold">Explore contact options</span>
            <ArrowDown className="w-6 h-6 text-[#00ccff]" />
          </div>
        </div>

        {/* Stats Grid - Diagonal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Headphones, title: '24/7 Live Support', desc: 'Always here to help', gradient: 'from-[#0066ff] to-[#0080ff]', delay: '0s' },
            { icon: Zap, title: 'Under 60 Seconds', desc: 'Average response time', gradient: 'from-[#0080ff] to-[#00ccff]', delay: '0.2s' },
            { icon: Globe2, title: '180+ Countries', desc: 'Global reach', gradient: 'from-[#00ccff] to-[#0080ff]', delay: '0.4s' },
            { icon: MessageSquare, title: 'Multi-Channel', desc: 'Chat, email & phone', gradient: 'from-[#0080ff] to-[#0066ff]', delay: '0.6s' }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fadeInUp"
              style={{
                background: 'rgba(0, 102, 255, 0.03)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(0, 128, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.1), inset 0 0 30px rgba(0, 204, 255, 0.05)',
                animationDelay: item.delay
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.15), transparent 70%)'
              }}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-black text-xl mb-2">{item.title}</div>
                <div className="text-slate-400 text-sm">{item.desc}</div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00ccff]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
