import { Server, UserCheck, Sliders, Wallet, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Server,
    title: 'Lightning-Fast Execution',
    description: 'London-based tier-1 servers deliver institutional-grade execution speeds with minimal latency for optimal trade performance.',
  },
  {
    icon: UserCheck,
    title: 'Unrestricted Trading',
    description: 'No restrictions on stop-loss or take-profit distances. Trade with complete flexibility, perfect for high-volume traders.',
  },
  {
    icon: Sliders,
    title: 'Advanced Hedging',
    description: 'Go long and short simultaneously on any instrument. Full support for Expert Advisors (EAs) and automated strategies.',
  },
  {
    icon: Wallet,
    title: 'Seamless Funding',
    description: 'Deposit and withdraw funds instantly with multiple payment methods. Your money, available whenever you need it.',
  },
];

export default function WhyTradeSection() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Why Trade with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Globalmarketacess?
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience the advantages that set us apart from other trading platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
