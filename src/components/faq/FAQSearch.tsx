import { Sparkles, Lock, CreditCard, BarChart3, Users, ArrowRight, Star } from 'lucide-react';

const popularTopics = [
  {
    icon: BarChart3,
    title: 'Investment Plans',
    description: 'Explore our tiered investment strategies and guaranteed returns',
    articles: '18 articles',
    featured: true
  },
  {
    icon: Lock,
    title: 'Security & Safety',
    description: 'Learn about our advanced protection measures and compliance',
    articles: '14 articles',
    featured: true
  },
  {
    icon: CreditCard,
    title: 'Deposits & Withdrawals',
    description: 'Everything about managing your funds and transactions',
    articles: '16 articles',
    featured: false
  },
  {
    icon: Users,
    title: 'Account Management',
    description: 'Account settings, verification, and customization options',
    articles: '12 articles',
    featured: false
  }
];

export default function FAQSearch() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ccff]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-blue backdrop-blur-2xl border border-[#0080ff]/40 rounded-full shadow-[0_0_30px_rgba(0,102,255,0.3)] mb-6">
            <Sparkles className="w-5 h-5 text-[#00ccff] mr-2 animate-pulse" />
            <span className="text-[#00ccff] font-bold text-sm tracking-wide">MOST POPULAR</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] mb-6 animate-gradient">
            Trending Topics
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Quick access to the most searched questions and comprehensive guides
          </p>
        </div>

        {/* Topic Cards in Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Featured Large Cards */}
          {popularTopics.filter(t => t.featured).map((topic, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
              <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,102,255,0.2)] hover:border-[#0080ff]/60 transition-all duration-300 cursor-pointer group-hover:scale-[1.02] h-full">
                <div className="absolute top-6 right-6">
                  <div className="glass-blue backdrop-blur-xl border border-[#0080ff]/30 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#00ccff] fill-[#00ccff]" />
                    <span className="text-[#00ccff] text-xs font-bold">Featured</span>
                  </div>
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_32px_rgba(0,102,255,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <topic.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00ccff] transition-colors">{topic.title}</h3>
                <p className="text-slate-300 text-base mb-6 leading-relaxed">{topic.description}</p>

                <div className="flex items-center justify-between pt-6 border-t border-[#0080ff]/30">
                  <span className="text-[#00ccff] text-sm font-bold">{topic.articles}</span>
                  <div className="flex items-center gap-2 text-[#0080ff] group-hover:text-[#00ccff] transition-colors">
                    <span className="text-sm font-semibold">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {popularTopics.filter(t => !t.featured).map((topic, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0066ff]/40 to-[#00ccff]/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,102,255,0.15)] hover:border-[#0080ff]/50 transition-all duration-300 cursor-pointer group-hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(0,128,255,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <topic.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ccff] transition-colors">{topic.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{topic.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#0080ff] text-xs font-bold">{topic.articles}</span>
                      <ArrowRight className="w-4 h-4 text-[#0080ff] group-hover:translate-x-1 group-hover:text-[#00ccff] transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Heavy Glass */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
          <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-12 text-center shadow-[0_8px_32px_rgba(0,102,255,0.25)]">
            <h3 className="text-3xl font-black text-white mb-4">Need More Help?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Browse our complete knowledge base with over 100+ detailed articles and guides
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.5)] transition-all font-bold hover:scale-105">
                View All Articles
              </button>
              <button className="px-8 py-4 glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.3)] hover:border-[#0080ff]/60 transition-all font-bold hover:scale-105">
                Contact Support
              </button>
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
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
