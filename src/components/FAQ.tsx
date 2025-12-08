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
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-6">
            <span className="text-blue-700 font-bold text-sm flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, security, and trading services
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
              >
                <span className="font-bold text-gray-900 text-base lg:text-lg pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-400 rotate-180'
                    : 'bg-gray-100 group-hover:bg-blue-100'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900 rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          </div>

          <div className="relative">
            <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help answer any questions you may have
            </p>
            <div
                onSubmit={handleBack}
                className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all font-bold text-base shadow-xl hover:scale-105">
                Contact Support
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
