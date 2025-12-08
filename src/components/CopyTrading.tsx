import { Copy, Users, TrendingUp, BarChart2, ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router-dom";

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

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <Copy className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Social Trading</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
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
                  <div className="text-3xl font-bold text-white mb-1">{feature.stat}</div>
                  <div className="text-blue-400 text-xs font-medium">{feature.label}</div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: How It Works */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">How Copy Trading Works</h3>

              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Browse Expert Traders',
                    description: 'Review verified performance metrics and trading strategies'
                  },
                  {
                    step: '2',
                    title: 'Select & Allocate',
                    description: 'Choose traders and set your investment amount'
                  },
                  {
                    step: '3',
                    title: 'Auto-Copy Trades',
                    description: 'Trades execute automatically in your account'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleBack}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 mt-8 w-full justify-center"
              >
                Start Copy Trading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Performance Stats */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Top Performers</h3>
                <Users className="w-6 h-6 text-blue-400" />
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Sarah Chen', return: '+52.8%', winRate: '91%', badge: 'Elite' },
                  { name: 'Mike Morgan', return: '+47.3%', winRate: '87%', badge: 'Pro' },
                  { name: 'Emma Davis', return: '+44.2%', winRate: '88%', badge: 'Pro' },
                ].map((trader, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 hover:border-blue-800/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">{trader.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{trader.name}</div>
                          <div className="text-blue-400 text-xs font-medium">{trader.badge} Trader</div>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <div className="text-xs text-slate-400 mb-1">Total Return</div>
                        <div className="text-green-400 font-bold">{trader.return}</div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                        <div className="text-blue-400 font-bold">{trader.winRate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Average Return</div>
                    <div className="text-white font-bold text-xl">+48.1%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-sm mb-1">Success Rate</div>
                    <div className="text-white font-bold text-xl">88.7%</div>
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
