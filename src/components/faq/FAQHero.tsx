import { Search, Zap, TrendingUp, Shield, Wallet, BookOpen } from 'lucide-react';

export default function FAQHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[#0066ff]/30 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#00ccff]/25 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0080ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-8">
        {/* Hero Content with Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center px-5 py-2.5 glass-blue border border-[#0080ff]/40 rounded-full shadow-[0_0_30px_rgba(0,102,255,0.3)] mb-8 backdrop-blur-xl">
              <Zap className="w-4 h-4 text-[#00ccff] mr-2 animate-pulse" />
              <span className="text-[#00ccff] font-bold text-sm tracking-wide">Knowledge Center</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-white block mb-3">Get Answers</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] animate-gradient">
                Instantly
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Comprehensive answers to everything about investments, security, withdrawals, and more.
              <span className="text-[#00ccff] font-semibold block mt-2">24/7 expert support available</span>
            </p>

            {/* Search Bar with Heavy Glassmorphism */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500 animate-glow"></div>
              <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,102,255,0.2)]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0080ff]" />
                <input
                  type="text"
                  placeholder="Search for answers, guides, topics..."
                  className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder-slate-400 focus:outline-none text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Getting Started', 'Security', 'Deposits', 'Withdrawals'].map((tag, i) => (
                <button
                  key={i}
                  className="px-5 py-2 glass-blue backdrop-blur-xl border border-[#0066ff]/30 rounded-full text-[#00ccff] text-sm font-semibold hover:border-[#0080ff]/50 hover:shadow-[0_0_20px_rgba(0,128,255,0.3)] transition-all hover:scale-105"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Category Cards with Heavy Glass */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: 'Getting Started', articles: '15', color: 'from-[#0066ff] to-[#0080ff]' },
              { icon: Shield, title: 'Security', articles: '14', color: 'from-[#0080ff] to-[#00ccff]' },
              { icon: Wallet, title: 'Deposits', articles: '16', color: 'from-[#00ccff] to-[#0080ff]' },
              { icon: TrendingUp, title: 'Trading', articles: '18', color: 'from-[#0066ff] to-[#00ccff]' }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0066ff]/50 to-[#00ccff]/50 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-2xl p-6 hover:border-[#0080ff]/60 transition-all duration-300 cursor-pointer group-hover:scale-105 shadow-[0_8px_32px_rgba(0,102,255,0.15)]">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-[0_8px_24px_rgba(0,102,255,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-white font-bold text-lg mb-1">{item.title}</div>
                  <div className="text-[#00ccff] text-sm font-semibold">{item.articles} articles</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar with Heavy Glassmorphism */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,102,255,0.2)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '100+', label: 'Help Articles' },
                { value: '24/7', label: 'Support Available' },
                { value: '<30s', label: 'Avg Response' },
                { value: '98%', label: 'Satisfaction Rate' }
              ].map((stat, i) => (
                <div key={i} className="group/stat">
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] mb-2 group-hover/stat:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-blue {
          background: rgba(0, 102, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
