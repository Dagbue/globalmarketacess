import { TrendingUp, Shield, Wallet, Settings } from 'lucide-react';

const popularTopics = [
  {
    icon: TrendingUp,
    title: 'Investment Plans',
    description: 'Learn about our investment tiers and returns',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'How we protect your investments',
    color: 'from-green-600 to-emerald-500'
  },
  {
    icon: Wallet,
    title: 'Deposits & Withdrawals',
    description: 'Managing your funds and transactions',
    color: 'from-purple-600 to-pink-500'
  },
  {
    icon: Settings,
    title: 'Account Management',
    description: 'Settings, verification, and more',
    color: 'from-orange-600 to-red-500'
  }
];

export default function FAQSearch() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Popular Topics
          </h2>
          <p className="text-lg text-gray-600">
            Quick access to the most searched questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
