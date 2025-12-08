import { Users, Shield, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Trusted by',
    value: '7M+ people',
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Shield,
    label: 'Insurance on custodial assets',
    partners: ['Ledger', 'Fireblocks'],
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    icon: Award,
    label: 'Operating securely since',
    value: '2014',
    color: 'from-pink-600 to-purple-600',
  },
  {
    icon: Star,
    label: 'Trustpilot rating',
    value: '4.6',
    color: 'from-purple-600 to-fuchsia-500',
  },
];

export default function TrustStats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-950 border-b border-purple-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-6 p-8 rounded-3xl glass-purple border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 animate-glow"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 animate-glow`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-300 font-medium mb-3">{stat.label}</div>
                  {stat.value ? (
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                      {stat.value}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      {stat.partners?.map((partner, i) => (
                        <div
                          key={i}
                          className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400"
                        >
                          {partner}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
