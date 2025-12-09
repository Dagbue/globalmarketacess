import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    category: 'General FAQs',
    questions: [
      {
        question: 'What is Globalmarketacess?',
        answer: 'Globalmarketacess is a multi-asset trading and investment platform founded in 2014, serving over 1.8 million clients worldwide. We offer institutional-grade trading conditions on forex, cryptocurrencies, global stocks, indices, commodities, and precious metals with cutting-edge technology and 24/7 dedicated support.'
      },
      {
        question: 'Is Globalmarketacess regulated and licensed?',
        answer: 'Yes, we operate under strict regulatory oversight and hold multiple international licenses. Our operations are monitored by top-tier financial authorities, and we maintain full compliance with global AML/KYC standards. Full regulatory details are available in the footer of our website and upon request.'
      },
      {
        question: 'How safe are my investments in your company?',
        answer: 'Your funds are fully protected through segregated client accounts at Tier-1 banks, negative balance protection, and up to $1,000,000 insurance per client via our dedicated compensation fund. We have never had a single case of client fund loss in over 10 years.'
      },
      {
        question: 'How can I make sure your company is real and not a fake one?',
        answer: 'We are officially registered in the United Kingdom under company number 10588120 with headquarters at 75 Uxbridge Rd, London W5 5SL. We also maintain verified offices in Dubai, Singapore, and Cyprus. You can visit by appointment, and we regularly publish audited financial reports and live trading proof.'
      },
      {
        question: 'Can I lose money if I invest now?',
        answer: 'While trading always involves risk, our professionally managed investment plans come with guaranteed minimum monthly returns ranging from 8% to 25% depending on your tier. Our risk management team actively protects your capital using advanced hedging strategies and stop-loss automation.'
      },
      {
        question: 'Do you provide proof of your trading activities?',
        answer: 'Absolutely. Every client receives real-time access to live trading statements, verified performance reports, and third-party audited results. We also stream live trading sessions weekly and share verified Myfxbook and FXBlue links for full transparency.'
      },
      {
        question: 'Who manages my money?',
        answer: 'Your portfolio is managed by our in-house team of senior traders with over 50 years of combined experience from institutions like Goldman Sachs, JPMorgan, and Deutsche Bank. You can view your personal account manager’s credentials and track record inside your dashboard.'
      }
    ]
  },

  {
    category: 'Account Types & Verification',
    questions: [
      {
        question: 'What account types do you offer?',
        answer: 'We offer five account tiers: Starter ($1,000), Silver ($5,000), Gold ($25,000), Diamond ($100,000), and VIP Platinum ($250,000+). Higher tiers include personal account managers, higher profit shares, lower fees, priority withdrawals, and exclusive market signals.'
      },
      {
        question: 'How long does account verification take?',
        answer: 'Standard verification is completed within 30 minutes to 2 hours after submitting ID and proof of address. VIP clients receive white-glove verification with a dedicated officer — often approved in under 15 minutes.'
      },
      {
        question: 'Do you accept clients from all countries?',
        answer: 'We proudly serve clients from over 180 countries. Certain restricted jurisdictions apply due to local regulations (e.g., USA, North Korea), but we offer alternative offshore solutions for high-net-worth individuals from sanctioned regions through our St. Vincent entity.'
      },
      {
        question: 'Can I have Islamic (swap-free) accounts?',
        answer: 'Yes, all our account types are available as fully Sharia-compliant Islamic accounts with zero swap or interest charges. Simply select "Islamic" during registration or contact support to convert your existing account instantly.'
      }
    ]
  },

  {
    category: 'Deposit and Withdrawal FAQs',
    questions: [
      {
        question: 'What are instant deposits and withdrawals?',
        answer: 'Deposits are credited instantly credited 24/7. Withdrawals are processed instantly for crypto and e-wallets (under 30 minutes), and within 1–24 hours for bank cards/wires. VIP clients enjoy zero-wait withdrawals regardless of amount.'
      },
      {
        question: 'Are there any deposit or withdrawal fees?',
        answer: 'We cover all deposit fees. Withdrawal fees are zero for cryptocurrency and e-wallets. Bank wires have a flat $25 fee (waived for withdrawals over $10,000 and all VIP accounts).'
      },
      {
        question: 'How long do withdrawals take via bank card?',
        answer: 'We process your request within 1 hour. Funds typically appear on your card within 1–5 business days depending on your bank. You can track status live in your dashboard.'
      },
      {
        question: 'Can I withdraw profits without withdrawing my initial deposit?',
        answer: 'Yes, 100% of your profits are freely withdrawable at any time with no restrictions after the 30-day initial lock-in period for managed plans.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'Visa/Mastercard, Bank Wire, Bitcoin, Ethereum, USDT (ERC20 & TRC20), USDC, Binance Pay, Skrill, Neteller, Perfect Money, PayPal (selected regions), and local bank transfers in 40+ countries.'
      },
      {
        question: 'Is there a maximum withdrawal limit?',
        answer: 'No limits for verified accounts. Our largest single withdrawal to date was $4.7 million paid out within 4 hours via USDT.'
      }
    ]
  },

  {
    category: 'Bonuses & Promotions',
    questions: [
      {
        question: 'Do you offer welcome bonuses?',
        answer: 'Yes! New clients receive up to 100% welcome bonus on first deposit (e.g., deposit $10,000 → receive $20,000 trading balance). Bonus is fully withdrawable after meeting fair volume requirements.'
      },
      {
        question: 'Are there any hidden conditions on bonuses?',
        answer: 'No hidden terms. All bonus conditions are clearly displayed before acceptance. Most clients complete the required trading volume within 30–60 days and withdraw both deposit and bonus with no issues.'
      },
      {
        question: 'Do you have trading contests or rewards?',
        answer: 'Yes — weekly demo contests with $10,000 real prizes, monthly live trading competitions, and a loyalty program where you earn cashback and luxury gifts (iPhones, MacBooks, Rolex watches) based on trading volume.'
      }
    ]
  },

  {
    category: 'Client Protection & Security',
    questions: [
      {
        question: 'Is Globalmarketacess PCI DSS compliant?',
        answer: 'Yes — Level 1 PCI DSS certified annually by Trustwave. We also hold ISO 27001 certification for information security management.'
      },
      {
        question: 'What security measures protect my account?',
        answer: '256-bit SSL, 2FA (Google/Authy/SMS), biometric login, anti-phishing codes, login alerts, IP/device binding, cold wallet storage (98% of crypto funds offline), and $50M cyber insurance policy.'
      },
      {
        question: 'What happens if the platform gets hacked?',
        answer: 'Impossible due to our military-grade infrastructure, but in the extremely unlikely event — every client is 100% covered by our compensation fund and insurance. No client has ever lost funds due to security breach.'
      },
      {
        question: 'How do I know you won’t run away with my money?',
        answer: 'We have paid out over $780 million in withdrawals since 2014 with zero delays or refusals for verified clients. All payouts are documented and verifiable on our public withdrawal proof page.'
      }
    ]
  },

  {
    category: 'Trading & Managed Investment Plans',
    questions: [
      {
        question: 'What returns can I expect?',
        answer: 'Our managed plans deliver 8–25% monthly compounded returns depending on tier. Historical average across all clients: 14.7% monthly over the past 5 years (audited).'
      },
      {
        question: 'How are returns calculated and distributed?',
        answer: 'Profits are calculated and credited daily at 00:00 server time. You can withdraw or reinvest at any time. Monthly payouts are automatic on the 1st, or you can request instant withdrawal anytime.'
      },
      {
        question: 'Can I withdraw my initial deposit anytime?',
        answer: 'Yes — after 30 days lock-in (to prevent bonus abuse), your initial capital is fully withdrawable along with all profits, 24/7.'
      },
      {
        question: 'Do you copy trade or use robots?',
        answer: 'We use a combination of expert human oversight and proprietary AI algorithms developed by our quant team. All trades are executed automatically on your behalf with full transparency.'
      },
      {
        question: 'What is the minimum investment duration?',
        answer: 'Minimum 30 days for bonus plans, no minimum for self-trading accounts. Most clients stay 6–24 months to maximize compounding.'
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes — anytime. Just make an additional deposit to reach the next tier and receive instant upgrade with pro-rata bonus and higher returns.'
      }
    ]
  },

  {
    category: 'Support & Communication',
    questions: [
      {
        question: 'How can I contact support?',
        answer: '24/7 live chat, phone support (+44 20 8157, WhatsApp, Telegram, and email. VIP clients receive a personal relationship manager with direct mobile number.'
      },
      {
        question: 'Do you have customer support in my language?',
        answer: 'Yes — native support in 18 languages including English, Spanish, Arabic, Portuguese, Russian, Chinese, Hindi, German, French, and more.'
      },
      {
        question: 'Can I meet my account manager in person?',
        answer: 'Yes — we regularly host client events in Dubai, London, Singapore, and Cyprus. Many clients fly in to meet their manager and tour our offices.'
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
