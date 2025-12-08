import { HelpCircle, Search, BookOpen, MessageCircle, Sparkles } from 'lucide-react';

export default function FAQHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magenta-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full shadow-lg shadow-purple-500/20 mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-fuchsia-400 mr-2 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Help Center</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-4">
            <span className="text-white">How can we</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-gradient">
              help you today?
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Find comprehensive answers to all your questions about investments, security, withdrawals, trading strategies, and more. Can't find what you're looking for? <span className="text-fuchsia-400 font-semibold">Our expert support team is available 24/7</span>.
          </p>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300 animate-glow"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-purple-800/50 glass-purple backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all text-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group glass-purple backdrop-blur-sm rounded-2xl p-6 border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all animate-glow">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Getting Started</div>
              <div className="text-purple-300 text-sm">15 articles</div>
            </div>

            <div className="group glass-magenta backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-800/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] cursor-pointer hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 group-hover:shadow-fuchsia-500/50 transition-all animate-glow">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Account</div>
              <div className="text-fuchsia-300 text-sm">12 articles</div>
            </div>

            <div className="group glass-purple backdrop-blur-sm rounded-2xl p-6 border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-magenta-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all animate-glow">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Security</div>
              <div className="text-purple-300 text-sm">14 articles</div>
            </div>

            <div className="group glass-magenta backdrop-blur-sm rounded-2xl p-6 border border-pink-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] cursor-pointer hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-pink-500/30 group-hover:scale-110 group-hover:shadow-pink-500/50 transition-all animate-glow">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Support</div>
              <div className="text-pink-300 text-sm">10 articles</div>
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
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
