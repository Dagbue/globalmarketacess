export default function ExecutionStats() {
  const stats = [
    { label: 'Average Execution', value: '<10ms', color: 'from-[#0066ff] to-[#0080ff]', desc: 'Lightning-fast trades' },
    { label: 'Daily Trades', value: '500K+', color: 'from-[#0080ff] to-[#00ccff]', desc: 'Global volume' },
    { label: 'Platform Uptime', value: '99.9%', color: 'from-[#00ccff] to-[#0066ff]', desc: 'Always available' },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0066ff]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00ccff]/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Diagonal Floating Panel Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const rotateClass = i === 0 ? 'md:-rotate-2' : i === 2 ? 'md:rotate-2' : '';
            const translateY = i === 1 ? 'md:-translate-y-6' : '';

            return (
              <div
                key={i}
                className={`group relative ${rotateClass} ${translateY}`}
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-3 bg-gradient-to-br ${stat.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

                {/* Main Card */}
                <div className="relative text-center p-10 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/15 via-[#0080ff]/10 to-transparent border-2 border-[#0066ff]/30 rounded-3xl hover:border-[#00ccff]/60 transition-all duration-500 hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_0_80px_rgba(0,102,255,0.5)] group">

                  {/* Inner Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                  <div className="relative">
                    {/* Large Value */}
                    <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-white text-xl font-bold mb-3">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-[#00ccff] text-sm font-medium uppercase tracking-wider">
                      {stat.desc}
                    </div>

                    {/* Bottom Accent */}
                    <div className={`mt-6 h-1 w-16 mx-auto bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
