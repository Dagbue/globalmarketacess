export default function ExecutionStats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Average Execution', value: '<10ms', color: 'from-blue-500 to-cyan-500' },
            { label: 'Daily Trades', value: '500K+', color: 'from-cyan-500 to-blue-600' },
            { label: 'Uptime', value: '99.9%', color: 'from-blue-600 to-cyan-500' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
              <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3`}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
