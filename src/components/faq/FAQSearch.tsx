import { TrendingUp, Shield, Wallet, Settings } from 'lucide-react';

const popularTopics = [
  {
    icon: TrendingUp,
    title: 'Investment Plans',
    description: 'Learn about our investment tiers and returns'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'How we protect your investments'
  },
  {
    icon: Wallet,
    title: 'Deposits & Withdrawals',
    description: 'Managing your funds and transactions'
  },
  {
    icon: Settings,
    title: 'Account Management',
    description: 'Settings, verification, and more'
  }
];

export default function FAQSearch() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Topics
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Quick access to the most searched questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div key={index} className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all h-full">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-slate-400 text-sm">{topic.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
