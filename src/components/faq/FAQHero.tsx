import { HelpCircle, Search, BookOpen, MessageCircle, Sparkles } from 'lucide-react';

export default function FAQHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full shadow-lg shadow-blue-500/10 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide">Help Center</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-4">
            <span className="text-white">How can we</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
              help you today?
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Find answers to common questions about investments, security, withdrawals, and more. Can't find what you're looking for? <span className="text-cyan-400 font-semibold">Our support team is ready to help</span>.
          </p>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Getting Started</div>
              <div className="text-slate-400 text-sm">12 articles</div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Account</div>
              <div className="text-slate-400 text-sm">8 articles</div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Security</div>
              <div className="text-slate-400 text-sm">10 articles</div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-bold text-lg mb-2">Support</div>
              <div className="text-slate-400 text-sm">6 articles</div>
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
