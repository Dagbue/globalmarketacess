import { Users, Shield, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Trusted by',
    value: '7M+ people',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    label: 'Insurance on custodial assets',
    partners: ['Ledger', 'Fireblocks'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Award,
    label: 'Operating securely since',
    value: '2014',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Star,
    label: 'Trustpilot rating',
    value: '4.6',
    color: 'from-cyan-600 to-blue-500',
  },
];

export default function TrustStats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-6 p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 font-medium mb-3">{stat.label}</div>
                  {stat.value ? (
                    <div className="text-2xl font-black text-slate-900 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      {stat.partners?.map((partner, i) => (
                        <div
                          key={i}
                          className="text-xl font-black text-slate-900 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
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
