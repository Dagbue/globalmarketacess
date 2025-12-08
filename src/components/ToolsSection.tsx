import { BarChart3, LineChart, Podcast, Users, Sparkles } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const tools = [
  {
    icon: BarChart3,
    title: 'In-Depth Market Analysis',
    description: 'Institutional-grade charting powered by TradingView. Access real-time technical indicators, pattern recognition, and comprehensive data feeds.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LineChart,
    title: 'Tap Into the Trends',
    description: 'Advanced algorithms scan 20+ global exchanges to surface top-performing assets, momentum shifts, and breakout candidates.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Podcast,
    title: 'Market Insights Podcast',
    description: 'Expert analysts decode earnings, macroeconomic trends, and geopolitical developments that drive volatility and opportunities.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Copy Top Traders',
    description: 'Browse detailed trader profiles with audited performance. One-click copying executes trades proportionally in your account.',
    color: 'from-cyan-600 to-blue-600',
  },
];

export default function ToolsSection() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full mb-6">
            <span className="text-blue-700 font-bold text-sm flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>POWERFUL TOOLS</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            The Tools to Help You
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Invest Smarter
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From foundational basics to advanced strategies, unlock features that elevate your portfolio to the next level
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0  transition-opacity duration-500"></div>

                <div className="relative flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
              </div>

              <div className="relative space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Start Your Trading Journey Today
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Access all these powerful tools and features when you create your free account. No credit card required to get started.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <button
                      onClick={handleBack}
                      className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-base hover:scale-105">
                    Get Started Free
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-800 to-cyan-800 p-8 lg:p-12">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-lg">Real-Time Alerts</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">Get instant notifications on market movements and opportunities</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-lg">Portfolio Analytics</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">Track performance with institutional-grade analytics dashboard</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-lg">Risk Management</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                      <LineChart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">Advanced tools to protect your capital and manage exposure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
