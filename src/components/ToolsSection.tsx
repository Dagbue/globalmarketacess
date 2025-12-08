import { BarChart3, Brain, Radio, UserCheck } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const tools = [
  {
    icon: BarChart3,
    title: 'Professional Charting Tools',
    description: 'Access institutional-grade technical analysis with over 100 indicators, drawing tools, and customizable layouts. Powered by advanced charting technology for precise market analysis.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Market Intelligence',
    description: 'Leverage machine learning algorithms that analyze millions of data points to identify trading opportunities, predict market movements, and provide actionable insights in real-time.',
    color: 'from-blue-500 to-teal-600',
  },
  {
    icon: Radio,
    title: 'Live Market Commentary',
    description: 'Stay informed with expert analysis from seasoned traders. Get daily market briefings, earnings coverage, and breaking news that impacts your portfolio.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: UserCheck,
    title: 'Social Trading Network',
    description: 'Connect with verified professional traders and automatically replicate their strategies. Access transparent performance metrics and risk profiles before copying.',
    color: 'from-cyan-600 to-blue-500',
  },
];

export default function ToolsSection() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-full mb-8">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">ADVANCED TOOLS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Professional Trading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
              Infrastructure
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade tools and analytics designed to give you the edge in competitive markets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_20px_70px_-15px_rgba(6,182,212,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                <div className="relative space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Elevate Your Trading Experience
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Access professional-grade trading infrastructure when you open your account. Start with zero commissions and experience the difference.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-6">
                    <button
                        onClick={handleBack}
                        className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all font-bold text-lg hover:scale-105">
                      Start Trading Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-800/40 backdrop-blur-xl p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">Real-Time Analytics</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">Live market data and advanced charting with millisecond precision</p>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">Smart Alerts</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">AI-driven notifications for critical market movements and opportunities</p>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">Portfolio Insights</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Radio className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">Comprehensive performance tracking and risk assessment tools</p>
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
