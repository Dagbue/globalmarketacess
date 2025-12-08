import { UserPlus, CreditCard, TrendingUp } from 'lucide-react';
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
              Three Simple Steps
            </span>
            <span className="block mt-2">To Start Trading</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get started in minutes and join a global community of successful traders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                    <span className="text-5xl font-black text-white">{step.number}</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-slate-900 backdrop-blur-xl rounded-2xl shadow-lg flex items-center justify-center border-2 border-cyan-500/30">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
              onClick={handleBack}
              className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all font-bold text-lg hover:scale-105">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}
