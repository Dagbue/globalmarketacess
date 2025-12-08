import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
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
    <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 glass-strong border border-blue-500/30 rounded-full mb-6 animate-glow">
            <span className="text-cyan-400 font-bold text-sm flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
              Questions
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, security, and trading services
          </p>
        </div>

        {/* Different accordion design - side-by-side on desktop */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl border border-blue-500/30 overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] animate-float backdrop-blur-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-blue-500/5 transition-colors group"
              >
                <div className="flex-1 pr-4">
                  <span className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-600 rotate-180 animate-glow'
                    : 'glass-card border border-blue-500/20 group-hover:border-cyan-500/40'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${
                    openIndex === index ? 'text-white' : 'text-cyan-400'
                  }`} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-blue-500/20">
                    <p className="text-slate-300 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New contact CTA design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-glow"></div>

          <div className="relative glass-strong rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-blue-500/30 backdrop-blur-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 animate-glow">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our support team is available 24/7 to help answer any questions you may have
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleBack}
                  className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-base hover:scale-105 animate-glow"
                >
                  Contact Support
                </button>
                <div className="text-center text-slate-400 text-sm">
                  Average response time: Under 2 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
