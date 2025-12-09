import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const faqs = [
  {
    question: 'What is Globalmarketacess?',
    answer:
      'Globalmarketacess is a comprehensive digital trading platform that provides access to global financial markets including stocks, forex, cryptocurrencies, and indices. We offer institutional-grade tools with retail accessibility, enabling traders of all levels to participate in markets across 20+ exchanges worldwide.',
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
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Help Center</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, security, and trading services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-blue-800/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-semibold text-white text-base lg:text-lg pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-12 text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help answer any questions you may have
            </p>

            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
