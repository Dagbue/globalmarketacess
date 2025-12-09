import { BarChart3, Brain, Lock, TrendingUp, Users, Zap } from 'lucide-react';

export default function ToolsSection() {
  const tools = [
    {
      icon: BarChart3,
      title: 'Advanced Charting Suite',
      description: 'Professional-grade technical analysis tools with over 100 indicators and drawing tools for precise market analysis.',
    },
    {
      icon: Brain,
      title: 'AI Market Intelligence',
      description: 'Machine learning algorithms analyzing millions of data points to identify opportunities in real-time.',
    },
    {
      icon: Lock,
      title: 'Secure Trading Environment',
      description: 'Bank-level encryption and multi-layer security protocols protecting every transaction you make.',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <span className="text-blue-300 text-sm font-medium">Advanced Tools</span>
          </div>
        </div>

        {/* Centered Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Unlock the Power of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Professional Trading
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Industry-leading tools and technology designed to give you the competitive edge you need to succeed
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Everything You Need to Trade Successfully
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold">Real-Time Data</h4>
                  <p className="text-slate-400 text-sm">
                    Live market feeds with sub-second latency for instant decision making
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold">Expert Support</h4>
                  <p className="text-slate-400 text-sm">
                    24/7 access to trading specialists ready to help you succeed
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold">Lightning Fast</h4>
                  <p className="text-slate-400 text-sm">
                    Ultra-low latency execution for the best possible trade prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
