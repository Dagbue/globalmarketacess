import { Server, UserCheck, Sliders, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: Server,
    title: 'London-based server',
    description: 'Our London based server and industry reputation helps us provide a tier-one liquidity solution, so we can consistently deliver lightning-quick execution speeds.',
  },
  {
    icon: UserCheck,
    title: 'Unrestricted Trading',
    description: 'Our platform have no restrictions on minimum stop-loss or take-profit distances and limits, especially useful for high-volume traders.',
  },
  {
    icon: Sliders,
    title: 'Hedge your positions',
    description: 'Go long and short at the same time on a specific instrument, with no interruption for traders using Expert Advisors (EAs).',
  },
  {
    icon: Wallet,
    title: 'Straightforward funding',
    description: 'Deposit and withdraw funds easily, and whenever you want to.',
  },
];

export default function WhyTradeSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6 shadow-lg">
            <span className="text-blue-300 font-bold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-white">Why trade with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Market Signal Trades?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {reason.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-lg">
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
