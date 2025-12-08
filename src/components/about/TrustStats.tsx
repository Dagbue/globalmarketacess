import { Users, Shield, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Trusted by',
    value: '7M+ people',
    color: 'from-[#0066ff] to-[#0080ff]',
  },
  {
    icon: Shield,
    label: 'Insurance on custodial assets',
    partners: ['Ledger', 'Fireblocks'],
    color: 'from-[#0080ff] to-[#00ccff]',
  },
  {
    icon: Award,
    label: 'Operating securely since',
    value: '2014',
    color: 'from-[#00ccff] to-[#0066ff]',
  },
  {
    icon: Star,
    label: 'Trustpilot rating',
    value: '4.6',
    color: 'from-[#0066ff] to-[#00ccff]',
  },
];

export default function TrustStats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-950 border-b border-[#0066ff]/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0066ff]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ccff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Diagonal Grid Layout */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const rotation = index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1';
            const translateY = index % 2 === 0 ? 'md:translate-y-8' : '';

            return (
              <div
                key={index}
                className={`group relative ${translateY}`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Card */}
                <div className={`relative flex flex-col items-center text-center space-y-6 p-8 backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/10 via-[#0080ff]/5 to-transparent border border-[#0066ff]/30 rounded-3xl hover:border-[#00ccff]/60 hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.5)] transition-all duration-500 hover:-translate-y-3 ${rotation}`}>

                  {/* Floating Icon Container */}
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-50`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-sm text-[#00ccff] font-medium mb-3 uppercase tracking-wider">{stat.label}</div>
                    {stat.value ? (
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff]">
                        {stat.value}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3 flex-wrap">
                        {stat.partners?.map((partner, i) => (
                          <div
                            key={i}
                            className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff]"
                          >
                            {partner}
                          </div>
                        ))}
                      </div>
                    )}
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
