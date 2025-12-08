import { LineChart, Cpu, Satellite, Users } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const tools = [
  {
    icon: LineChart,
    title: 'Pro-Grade Charting Engine',
    description: 'Advanced technical analysis suite featuring 150+ indicators, pattern recognition, multi-timeframe analysis, and customizable workspace layouts. Real-time data visualization with zero lag.',
    color: 'from-emerald-500 via-teal-500 to-green-500',
  },
  {
    icon: Cpu,
    title: 'Smart Trading Algorithms',
    description: 'Neural network models process market microstructure data to detect anomalies, predict volatility, and identify alpha-generating opportunities before they become obvious to the market.',
    color: 'from-teal-500 via-lime-500 to-emerald-500',
  },
  {
    icon: Satellite,
    title: 'Real-Time Market Intelligence',
    description: 'Live feeds from global exchanges, economic calendars, earnings reports, and breaking news aggregated into a unified dashboard. Never miss market-moving events.',
    color: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Copy Trading Ecosystem',
    description: 'Follow top-performing traders with verified track records. One-click portfolio replication with customizable risk parameters and position sizing controls.',
    color: 'from-lime-500 via-teal-500 to-green-500',
  },
];

export default function ToolsSection() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-36 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:88px_88px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <div className="inline-block px-7 py-3.5 bg-gray-800/60 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl mb-10 shadow-2xl shadow-emerald-500/20">
            <span className="text-emerald-400 font-black text-sm tracking-widest uppercase">Trading Ecosystem</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
            Next-Generation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 mt-2">
              Trading Technology
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Institutional-grade tools and real-time intelligence designed to maximize performance in any market condition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-12 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_25px_80px_-15px_rgba(16,185,129,0.5)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex items-start space-x-7">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-lime-500/25 rounded-[3rem] blur-[100px]"></div>
          <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl border border-emerald-500/30">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-16 lg:p-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="relative space-y-8">
                  <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
                    Transform Your Trading Game
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Unlock professional-grade infrastructure and advanced analytics. Experience zero-commission trading with lightning-fast execution.
                  </p>
                  <div className="flex flex-wrap gap-5 pt-8">
                    <button
                        onClick={handleBack}
                        className="px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] transition-all font-black text-xl hover:scale-105">
                      Get Started Free
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-800/50 backdrop-blur-2xl p-10 lg:p-14">
                <div className="space-y-5">
                  <div className="bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-white font-black text-xl">Live Analytics</span>
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
                        <LineChart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-400 text-base">Streaming market data with sub-millisecond precision and advanced charting</p>
                  </div>

                  <div className="bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-white font-black text-xl">AI Insights</span>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/30">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-400 text-base">Smart alerts and predictive analytics for critical market opportunities</p>
                  </div>

                  <div className="bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-white font-black text-xl">Risk Management</span>
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
                        <Satellite className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-400 text-base">Real-time portfolio monitoring and automated risk assessment tools</p>
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
