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
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0066ff]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00ccff]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-[#0080ff]/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/20 border border-[#00ccff]/30 rounded-full mb-6 shadow-lg shadow-[#0066ff]/30 animate-float">
            <span className="text-[#00ccff] font-bold text-sm tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-white">Why Trade with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              Market Signal Trades?
            </span>
          </h2>
        </div>

        {/* Overlapping Cards Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            const offsetClass = isEven ? 'md:translate-y-8' : 'md:-translate-y-4';

            return (
              <div
                key={index}
                className={`group relative ${offsetClass}`}
              >
                {/* Glow Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 via-[#0080ff]/20 to-[#00ccff]/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main Card */}
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0066ff]/10 via-[#0080ff]/5 to-transparent border border-[#0066ff]/30 rounded-3xl p-8 hover:border-[#00ccff]/60 hover:shadow-[0_0_80px_rgba(0,102,255,0.4)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">

                  {/* Inner Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 to-[#00ccff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    {/* Icon Container with Multiple Layers */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl blur-lg opacity-50"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-10 h-10 text-white relative z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066ff] group-hover:to-[#00ccff] transition-all duration-300">
                      {reason.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-lg">
                      {reason.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-full group-hover:w-full transition-all duration-500"></div>
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
