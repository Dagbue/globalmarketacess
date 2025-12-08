import { Server, UserCheck, Sliders, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: Server,
    title: 'Lightning-Fast Execution',
    description: 'Our London-based servers and tier-one liquidity infrastructure deliver institutional-grade execution speeds, ensuring your trades are executed in milliseconds with minimal slippage.',
  },
  {
    icon: UserCheck,
    title: 'Unrestricted Trading Freedom',
    description: 'Trade without limitations. No minimum stop-loss or take-profit restrictions, perfect for high-volume traders and automated strategies using Expert Advisors (EAs).',
  },
  {
    icon: Sliders,
    title: 'Advanced Hedging Strategies',
    description: 'Execute sophisticated hedging strategies by going long and short simultaneously on the same instrument, with seamless integration for algorithmic trading systems.',
  },
  {
    icon: Wallet,
    title: 'Seamless Fund Management',
    description: 'Deposit and withdraw funds instantly with multiple payment methods. Your capital is always accessible when you need it, with no hidden fees or restrictions.',
  },
];

export default function WhyTradeSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse animate-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20 animate-glow">
            <span className="text-purple-300 font-bold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-white">Why Trade with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
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
                className="group relative glass-purple backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2 animate-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-all">
                    {reason.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-lg">
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
