import { ArrowRight, TrendingUp, BarChart3, Globe2, Activity, DollarSign } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const stats = [
    { label: 'Active Traders', value: '50K+', icon: Activity },
    { label: 'Daily Volume', value: '$2.8B', icon: DollarSign },
    { label: 'Markets', value: '180+', icon: Globe2 },
    { label: 'Instruments', value: '5,000+', icon: BarChart3 }
  ];

  return (
    <section className="relative min-h-screen px-6 overflow-hidden bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-800/8 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto pt-48 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">Real-Time Market Intelligence</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-white mb-2">Trade Smarter.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
              Grow Faster.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional trading platform with institutional-grade execution,
            advanced analytics, and access to global markets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => handleBack()}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <span className="flex items-center gap-2">
                Start Trading Now
                <ArrowRight className="w-7 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:border-blue-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <div className="relative">
                  <Icon className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative">
          {/* Subtle glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Market Overview</div>
                  <div className="text-slate-400 text-sm">Live trading dashboard</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Live</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { name: 'S&P 500', price: '4,783.45', change: '+1.2%', positive: true },
                  { name: 'NASDAQ', price: '15,095.14', change: '+0.8%', positive: true },
                  { name: 'DOW JONES', price: '37,305.16', change: '-0.3%', positive: false }
                ].map((market, idx) => (
                  <div key={idx} className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
                    <div className="text-slate-400 text-sm mb-1">{market.name}</div>
                    <div className="text-white text-xl font-bold mb-1">{market.price}</div>
                    <div className={`text-sm font-semibold ${market.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {market.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trading Activity */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-semibold">Top Movers</div>
                  <div className="text-slate-400 text-sm">Last 24h</div>
                </div>
                <div className="space-y-3">
                  {[
                    { symbol: 'AAPL', name: 'Apple Inc.', price: '195.71', change: '+2.4%' },
                    { symbol: 'TSLA', name: 'Tesla Inc.', price: '242.84', change: '+3.8%' },
                    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '495.22', change: '+5.1%' }
                  ].map((stock, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-700/20 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{stock.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{stock.symbol}</div>
                          <div className="text-slate-400 text-xs">{stock.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">${stock.price}</div>
                        <div className="text-green-400 text-sm font-semibold">{stock.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
