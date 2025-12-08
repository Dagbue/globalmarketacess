import { UserCheck, Wallet, Rocket } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const steps = [
  {
    number: '1',
    icon: UserCheck,
    title: 'Create Account',
    description: 'Quick 2-minute registration with instant verification. No hidden fees, no minimum balance requirements, completely free to start.',
  },
  {
    number: '2',
    icon: Wallet,
    title: 'Deposit Funds',
    description: 'Add capital through secure payment channels including bank wire, credit cards, or digital assets. Multiple currencies supported.',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Start Trading',
    description: 'Execute trades across thousands of global instruments with professional-grade tools and real-time market intelligence.',
  },
];

export default function GetStarted() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-36 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-28">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400">
              Launch in Minutes
            </span>
            <span className="block mt-2">Three Quick Steps</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
            Join a community of professional traders executing millions in daily volume
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-emerald-500/40 group-hover:scale-110 transition-all duration-500">
                    <span className="text-6xl font-black text-white">{step.number}</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl flex items-center justify-center border-2 border-emerald-500/40">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-5 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
              onClick={handleBack}
              className="px-14 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] transition-all font-black text-xl hover:scale-105">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
