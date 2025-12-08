import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    category: 'General FAQs',
    questions: [
      {
        question: 'What is Market Signal Trades?',
        answer: 'Market Signal Trades is a trusted digital asset and forex trading platform established in 2014. We provide advanced investment solutions across multiple financial domains including stocks, forex, cryptocurrency, and commodities trading. Our platform leverages cutting-edge technology to deliver secure, reliable trading experiences for our global clientele.'
      },
      {
        question: 'How safe are my investments in your company?',
        answer: 'Your investments are protected by bank-level 256-bit encryption, segregated accounts, and comprehensive insurance coverage. We comply with international financial regulations and undergo regular third-party security audits. All client funds are held in secure, regulated financial institutions separate from company operational funds.'
      },
      {
        question: 'How can I make sure your company is real and not a fake one?',
        answer: 'We are officially registered under company number 10588120 with our headquarters at 75 Uxbridge Rd, London W5 5SL, UK. You can verify our registration through Companies House UK. We also provide regular proof of trading activities, maintain transparent communication channels, and have a physical office where clients can visit by appointment.'
      },
      {
        question: 'Can I lose money if I invest now?',
        answer: 'All investments carry some level of risk, and past performance does not guarantee future results. However, we implement strict risk management protocols, offer guaranteed minimum returns on investment plans, and provide comprehensive portfolio protection. Our expert team actively monitors market conditions and adjusts strategies to minimize potential losses while maximizing returns.'
      },
      {
        question: 'Do you provide proof of your trading activities?',
        answer: 'Yes, we provide detailed monthly statements, real-time portfolio tracking, and transparent reporting of all trading activities. Clients have 24/7 access to their account dashboard showing transaction history, current positions, profit/loss statements, and complete audit trails of all investment activities.'
      }
    ]
  },
  {
    category: 'Deposit and Withdrawal FAQs',
    questions: [
      {
        question: 'What are instant deposits and withdrawals?',
        answer: 'Instant deposits allow your funds to be credited to your trading account immediately upon transaction confirmation. Instant withdrawals process your requests within minutes during business hours, with funds typically reaching your account within 2-24 hours depending on your payment method and bank processing times.'
      },
      {
        question: 'How long do withdrawals take via bank card?',
        answer: 'Bank card withdrawals typically take 2-5 business days to process. The exact timing depends on your card issuer and banking institution. We process withdrawal requests within 24 hours, and the remaining time is determined by your bank\'s processing procedures. You can track your withdrawal status in real-time through your account dashboard.'
      },
      {
        question: 'Can I withdraw funds to an account that is not my own?',
        answer: 'No, for security and regulatory compliance reasons, withdrawals can only be made to accounts in your name. This anti-money laundering measure protects both you and the platform. All withdrawal destinations must be verified and match the name on your Market Signal Trades account.'
      },
      {
        question: 'What payment accounts can I use to deposit and withdraw?',
        answer: 'We accept various payment methods including bank transfers, credit/debit cards (Visa, Mastercard), cryptocurrency wallets (Bitcoin, Ethereum, USDT), and electronic payment systems (PayPal, Skrill, Neteller). The available methods may vary based on your location and account verification level.'
      },
      {
        question: 'When can I deposit and withdraw?',
        answer: 'Deposits can be made 24/7 at any time. Withdrawals can be requested 24/7, but processing occurs during business hours (Monday-Friday, 9 AM - 6 PM GMT). Weekend withdrawal requests are queued and processed on the next business day. Emergency withdrawals may be arranged by contacting our priority support team.'
      }
    ]
  },
  {
    category: 'Client Protection FAQs',
    questions: [
      {
        question: 'Is MMT PCI DSS compliant?',
        answer: 'Yes, Market Signal Trades is fully PCI DSS (Payment Card Industry Data Security Standard) compliant. We maintain the highest level of security standards for processing, storing, and transmitting credit card information. Our systems undergo regular security assessments and maintain continuous compliance monitoring to protect your payment data.'
      },
      {
        question: 'What security types are available?',
        answer: 'We employ multiple security layers including 256-bit SSL encryption, two-factor authentication (2FA), biometric login options, IP whitelisting, device verification, withdrawal confirmation codes, and 24/7 fraud monitoring. Additionally, we use cold storage for cryptocurrency assets and maintain comprehensive cyber insurance coverage.'
      },
      {
        question: 'How do I protect myself from fraudulent activity?',
        answer: 'Enable two-factor authentication, use strong unique passwords, never share your login credentials, verify all communication comes from official @marketmoverstrade.com email addresses, be wary of phishing attempts, regularly review your account activity, and immediately report any suspicious activity to our security team. We will never ask for your password or 2FA codes.'
      }
    ]
  },
  {
    category: 'Trading & Investment FAQs',
    questions: [
      {
        question: 'What is the minimum investment amount?',
        answer: 'The minimum investment varies by plan: Silver ($5,000), Gold ($25,000), Diamond ($100,000), and Platinum ($250,000). We also offer a beginner account with a $1,000 minimum for new investors who want to start small and learn the platform before committing to larger investment plans.'
      },
      {
        question: 'How are returns calculated and distributed?',
        answer: 'Returns are calculated daily based on your investment plan\'s percentage rate and are compounded automatically. Distributions are made according to your plan\'s schedule - either monthly, quarterly, or at maturity. You can view your daily earnings in real-time through your dashboard and choose to reinvest or withdraw profits at any time after the initial lock-in period.'
      },
      {
        question: 'Can I have multiple investment plans simultaneously?',
        answer: 'Yes, you can maintain multiple investment plans across different tiers simultaneously. This allows you to diversify your investment strategy and take advantage of different return rates and time horizons. Many of our clients maintain positions in 2-3 different plans to optimize their portfolio performance.'
      },
      {
        question: 'What happens if I want to withdraw before the maturity date?',
        answer: 'Early withdrawal is possible but may incur fees depending on your plan and how much time remains until maturity. Silver and Gold plans have a 5% early withdrawal fee, while Diamond and Platinum plans offer more flexibility with reduced fees of 2-3%. Contact your account manager to discuss early withdrawal options and calculate the exact fees applicable to your situation.'
      }
    ]
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (category: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-6xl mx-auto relative">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.questions.map((item, itemIndex) => (
                <div key={itemIndex} className="relative group">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                  <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                    <button
                      onClick={() => toggleItem(section.category, itemIndex)}
                      className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
                    >
                      <span className="text-base md:text-lg font-bold text-white pr-8">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform ${
                          openItems[section.category] === itemIndex ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openItems[section.category] === itemIndex && (
                      <div className="px-6 md:px-8 pb-6 pt-2">
                        <p className="text-slate-400 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
