import { UserPlus, CreditCard, TrendingUp } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const steps = [
  {
    number: '1',
    icon: UserPlus,
    title: 'Open an Account',
    description: 'Quick and secure registration process is completely free. Complete your profile in under 5 minutes with no hidden fees or obligations.',
  },
  {
    number: '2',
    icon: CreditCard,
    title: 'Verify and Deposit',
    description: 'Complete identity verification for security compliance. Fund your account instantly using bank transfer, credit card, or cryptocurrency with flexible minimum deposits.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Start Trading',
    description: 'Access 6,000+ instruments across stocks, forex, crypto, and commodities. Execute trades instantly with real-time pricing and professional analytics tools.',
  },
];

export default function GetStarted() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black  text-gray-900 mb-6 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Start Investing Today
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20">
                    <span className="text-4xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-blue-100">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
              onClick={handleBack}
              className="px-10 py-4 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-600/20">
            Open Your Account
          </button>
        </div>
      </div>
    </section>
  );
}
