import { Activity } from 'lucide-react';

export default function ExecutionStats() {
  const stats = [
    { label: 'Average Execution', value: '<10ms' },
    { label: 'Daily Trades', value: '500K+' },
    { label: 'Platform Uptime', value: '99.9%' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Performance Metrics</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative text-center p-8 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="text-5xl font-bold text-blue-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-lg font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
