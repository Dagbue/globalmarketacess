import { UserPlus, CreditCard, TrendingUp, Sparkles, Rocket } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const steps = [
  {
    number: '1',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Register in under 3 minutes with our streamlined onboarding. Completely free with no minimum deposit required to get started.',
  },
  {
    number: '2',
    icon: CreditCard,
    title: 'Fund Your Wallet',
    description: 'Add funds instantly via multiple payment methods including bank transfer, debit card, or cryptocurrency. Flexible deposit options starting from any amount.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Begin Trading',
    description: 'Access thousands of instruments across global markets. Execute orders with institutional-grade tools and real-time data feeds.',
  },
];

export default function GetStarted() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ccff08_1px,transparent_1px),linear-gradient(to_bottom,#00ccff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* New diagonal layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center px-5 py-2.5 glass-strong border border-cyan-500/30 rounded-full shadow-lg shadow-cyan-500/20 animate-glow">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-bold text-sm tracking-wide">GET STARTED</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
                Three Simple Steps
              </span>
              <span className="block mt-2">To Start Trading</span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              Get started in minutes and join a global community of successful traders
            </p>

            <button
              onClick={handleBack}
              className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center space-x-3 animate-glow"
            >
              <span>Create Account Now</span>
              <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Unique stacked glassmorphic cards */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-glow"></div>

            <div className="relative space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group glass-strong rounded-3xl p-8 border border-blue-500/30 hover:border-cyan-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,102,255,0.5)] transition-all duration-500 hover:translate-x-4 animate-float backdrop-blur-xl"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transform: `translateX(${index * 20}px)`,
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity animate-glow"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <span className="text-3xl font-black text-white">{step.number}</span>
                        </div>
                      </div>

                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-cyan-400" />
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating glassmorphic stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Active Traders', value: '50K+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Daily Volume', value: '$2.5B', color: 'from-cyan-500 to-blue-600' },
            { label: 'Countries', value: '150+', color: 'from-blue-600 to-cyan-400' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 border border-blue-500/20 hover:border-cyan-500/30 hover:shadow-[0_15px_50px_-10px_rgba(0,204,255,0.4)] transition-all duration-500 text-center animate-float"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 animate-glow`}>
                {stat.value}
              </div>
              <div className="text-slate-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
