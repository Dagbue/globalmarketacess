import { TrendingUp, Shield, Wallet, Settings, ArrowRight } from 'lucide-react';

const popularTopics = [
  {
    icon: TrendingUp,
    title: 'Investment Plans',
    description: 'Explore our tiered investment strategies and guaranteed returns',
    articles: '18 articles',
    color: 'from-purple-600 to-fuchsia-600',
    borderColor: 'border-purple-500/50',
    hoverColor: 'hover:border-purple-400',
    shadowColor: 'shadow-purple-500/30',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Learn about our advanced protection measures and compliance',
    articles: '14 articles',
    color: 'from-fuchsia-600 to-pink-600',
    borderColor: 'border-fuchsia-500/50',
    hoverColor: 'hover:border-fuchsia-400',
    shadowColor: 'shadow-fuchsia-500/30',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]'
  },
  {
    icon: Wallet,
    title: 'Deposits & Withdrawals',
    description: 'Everything about managing your funds and transactions',
    articles: '16 articles',
    color: 'from-pink-600 to-purple-600',
    borderColor: 'border-pink-500/50',
    hoverColor: 'hover:border-pink-400',
    shadowColor: 'shadow-pink-500/30',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]'
  },
  {
    icon: Settings,
    title: 'Account Management',
    description: 'Account settings, verification, and customization options',
    articles: '12 articles',
    color: 'from-magenta-600 to-purple-600',
    borderColor: 'border-magenta-500/50',
    hoverColor: 'hover:border-magenta-400',
    shadowColor: 'shadow-magenta-500/30',
    hoverShadow: 'hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]'
  }
];

export default function FAQSearch() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 mb-4 animate-gradient">
            Popular Topics
          </h2>
          <p className="text-lg text-purple-300">
            Quick access to the most searched questions and comprehensive guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={index}
                className={`glass-purple backdrop-blur-md border-2 ${topic.borderColor} ${topic.hoverColor} rounded-3xl p-8 ${topic.hoverShadow} transition-all duration-300 cursor-pointer group hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${topic.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-glow relative`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{topic.title}</h3>
                <p className="text-purple-300 text-sm mb-4 leading-relaxed">{topic.description}</p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-800/50">
                  <span className="text-fuchsia-400 text-xs font-semibold">{topic.articles}</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 group-hover:text-fuchsia-400 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-magenta backdrop-blur-md border border-fuchsia-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-[0_0_40px_rgba(217,70,239,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-3">Need More Help?</h3>
            <p className="text-purple-300 mb-6">
              Browse our complete knowledge base with over 100+ detailed articles and guides
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105 animate-glow">
              View All Articles
            </button>
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
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
