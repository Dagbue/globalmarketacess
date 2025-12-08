import { Users, Shield, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Trusted by',
    value: '7M+ people',
  },
  {
    icon: Shield,
    label: 'Insurance on custodial assets',
    partners: ['Ledger', 'Fireblocks'],
  },
  {
    icon: Award,
    label: 'Operating securely since',
    value: '2014',
  },
  {
    icon: Star,
    label: 'Trustpilot rating',
    value: '4.6',
  },
];

export default function TrustStats() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl group-hover:bg-blue-600/10 transition-all"></div>
                <div className="relative flex flex-col items-center text-center space-y-6 p-8 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-3">{stat.label}</div>
                    {stat.value ? (
                      <div className="text-3xl font-bold text-blue-400">
                        {stat.value}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3 flex-wrap">
                        {stat.partners?.map((partner, i) => (
                          <div key={i} className="text-xl font-bold text-blue-400">
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
