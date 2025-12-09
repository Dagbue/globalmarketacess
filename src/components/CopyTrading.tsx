import { Copy, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function CopyTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const features = [
    {
      title: 'Verified Traders',
      description: 'Access audited performance data and transparent trading history',
      stat: '250+',
      label: 'Expert Traders'
    },
    {
      title: 'Auto Execution',
      description: 'Trades copied instantly with millisecond precision',
      stat: '<1ms',
      label: 'Execution Time'
    },
    {
      title: 'Risk Control',
      description: 'Set custom stop-loss and position size limits',
      stat: '100%',
      label: 'Customizable'
    },
    {
      title: 'Performance Tracking',
      description: 'Real-time analytics and detailed reporting',
      stat: '24/7',
      label: 'Monitoring'
    }
  ];

  // Top 3 performers with real professional avatars
  const topPerformers = [
    {
      name: 'Sarah Chen',
      return: '+52.8%',
      winRate: '91%',
      badge: 'Elite',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Mike Morgan',
      return: '+47.3%',
      winRate: '87%',
      badge: 'Pro',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Emma Davis',
      return: '+44.2%',
      winRate: '88%',
      badge: 'Pro',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
  ];

  return (
      <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
              <Copy className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Social Trading</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Replicate Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Automatically
            </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Copy proven trading strategies from top performers and grow your portfolio with expert guidance
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

                  <div className="relative">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-white mb-1">{feature.stat}</div>
                      <div className="text-blue-400 text-sm font-medium">{feature.label}</div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
            ))}
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: How It Works */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-10">
                <h3 className="text-3xl font-bold text-white mb-8">How Copy Trading Works</h3>

                <div className="space-y-8">
                  {[
                    { step: '1', title: 'Browse Expert Traders', desc: 'Review verified performance metrics and trading strategies' },
                    { step: '2', title: 'Select & Allocate', desc: 'Choose traders and set your investment amount' },
                    { step: '3', title: 'Auto-Copy Trades', desc: 'Trades execute automatically in your account' }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-2xl">{item.step}</span>
                        </div>
                        <div className="pt-2">
                          <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                          <p className="text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                  ))}
                </div>

                <button
                    onClick={handleBack}
                    className="mt-10 w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-3 group"
                >
                  Start Copy Trading Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Top Performers WITH AVATARS */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white">Top Performers</h3>
                  <Users className="w-8 h-8 text-blue-400" />
                </div>

                <div className="space-y-6">
                  {topPerformers.map((trader, idx) => (
                      <div
                          key={idx}
                          className="group/trader bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/40 hover:border-blue-600/60 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-4">
                            {/* Real Avatar */}
                            <img
                                src={trader.avatar}
                                alt={trader.name}
                                className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-600/30 shadow-2xl"
                            />
                            <div>
                              <div className="text-white font-bold text-xl">{trader.name}</div>
                              <div className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold ${
                                  trader.badge === 'Elite' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40' :
                                      'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                              }`}>
                                {trader.badge} Trader
                              </div>
                            </div>
                          </div>
                          <TrendingUp className="w-7 h-7 text-green-400" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-5">
                          <div className="bg-gradient-to-br from-green-600/10 to-transparent rounded-xl p-4 border border-green-500/30">
                            <div className="text-sm text-slate-400">Total Return</div>
                            <div className="text-green-400 font-bold text-2xl">{trader.return}</div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl p-4 border border-blue-500/30">
                            <div className="text-sm text-slate-400">Win Rate</div>
                            <div className="text-blue-400 font-bold text-2xl">{trader.winRate}</div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/20 rounded-2xl border border-blue-700/30">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-slate-400 text-sm mb-2">Average Monthly Return</div>
                      <div className="text-white font-bold text-3xl">+48.1%</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm mb-2">Platform Success Rate</div>
                      <div className="text-white font-bold text-3xl">88.7%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}