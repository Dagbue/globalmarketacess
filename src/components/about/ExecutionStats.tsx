export default function ExecutionStats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Average Execution', value: '<10ms', color: 'from-purple-500 to-fuchsia-500', desc: 'Lightning-fast trades' },
            { label: 'Daily Trades', value: '500K+', color: 'from-fuchsia-500 to-pink-600', desc: 'Global volume' },
            { label: 'Platform Uptime', value: '99.9%', color: 'from-pink-600 to-purple-500', desc: 'Always available' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 glass-purple backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-fuchsia-400/50 transition-all duration-500 hover:-translate-y-2 animate-glow group"
            >
              <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 animate-glow`}>
                {stat.value}
              </div>
              <div className="text-slate-200 text-lg font-bold mb-2">{stat.label}</div>
              <div className="text-purple-300 text-sm font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
