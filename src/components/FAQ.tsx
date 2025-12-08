import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const faqs = [
  {
    question: 'What is Market Signal Trades?',
    answer:
      'Market Signal Trades is a comprehensive digital trading platform that provides access to global financial markets including stocks, forex, cryptocurrencies, and indices. We offer institutional-grade tools with retail accessibility, enabling traders of all levels to participate in markets across 20+ exchanges worldwide.',
  },
  {
    question: 'How safe are my investments in your company?',
    answer:
      'Your investments are protected by multiple layers of security including SSL encryption, Anti-Money Laundering (AML) compliance, segregated accounts, and regular third-party security audits. We partner with tier-1 banks and maintain strict regulatory compliance to ensure maximum protection of client funds.',
  },
  {
    question: 'How can I make sure your company is real and not a fake one?',
    answer:
      'We maintain full transparency through verified regulatory registrations, published audit reports, and a physical office address. Our platform has received multiple industry awards and recognitions. You can verify our credentials through financial regulatory bodies and review independent assessments from trusted financial review sites.',
  },
  {
    question: 'Can I lose money if I invest now?',
    answer:
      'Yes, all trading and investing carries inherent risk of loss. Market conditions can be volatile and unpredictable. We strongly recommend only investing capital you can afford to lose, diversifying your portfolio, using risk management tools, and educating yourself thoroughly before making investment decisions.',
  },
  {
    question: 'Do you provide proof of your trading activities?',
    answer:
      'Yes, we provide full transparency through real-time account statements, transaction history, trade confirmations, and monthly performance reports. All trades are recorded and can be verified through your account dashboard. We also publish aggregated platform performance metrics quarterly.',
  },
  {
    question: 'How do I get started with trading?',
    answer:
      'Getting started is simple: Create a free account, complete the verification process (usually takes 24 hours), deposit funds using your preferred payment method, and start trading. We offer educational resources and a demo account to help you practice before trading with real money.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/contact');
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 glass-purple border border-purple-500/30 rounded-full mb-6 animate-glow">
            <span className="text-purple-400 font-bold text-sm flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 animate-glow">
              Questions
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, security, and trading services
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-magenta rounded-2xl border-2 border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors group"
              >
                <span className="font-bold text-white text-base lg:text-lg pr-8 group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-purple-600 to-fuchsia-400 rotate-180 animate-glow'
                    : 'glass-purple border border-purple-500/20 group-hover:border-purple-500/40'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-slate-300 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-magenta rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden border border-purple-500/20 animate-float">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          </div>

          <div className="relative">
            <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-glow" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help answer any questions you may have
            </p>
            <div
                onSubmit={handleBack}
                className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-bold text-base hover:scale-105 animate-glow">
                Contact Support
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
