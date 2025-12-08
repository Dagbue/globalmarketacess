import { useState } from 'react';
import { ChevronDown, HelpCircle, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const faqData = [
  {
    category: 'General FAQs',
    icon: Lightbulb,
    iconColor: 'from-[#0066ff] to-[#0080ff]',
    questions: [
      {
        question: 'What is Market Signal Trades and how long have you been operating?',
        answer: 'Market Signal Trades is a premier digital asset and forex trading platform established in 2014 with over 10 years of proven excellence. We provide sophisticated investment solutions across multiple financial domains including stocks, forex, cryptocurrency, commodities, and derivatives trading. Our platform leverages cutting-edge AI technology, algorithmic trading systems, and institutional-grade infrastructure to deliver secure, transparent, and highly profitable trading experiences for our global clientele of over 250,000+ active investors.'
      },
      {
        question: 'How safe are my investments and what protection measures do you have?',
        answer: 'Your investments are protected by multiple layers of institutional-grade security: military-grade 256-bit AES encryption, segregated cold storage accounts, comprehensive Lloyd\'s of London insurance coverage up to $500M, multi-signature wallet technology, and real-time fraud detection systems. We maintain full compliance with international financial regulations (FCA, CFTC, SEC), undergo quarterly third-party security audits by leading firms like Deloitte, and hold all client funds in Tier-1 regulated financial institutions completely separate from company operational funds. Additionally, we maintain a Security Reserve Fund equal to 15% of total assets under management.'
      },
      {
        question: 'How can I verify your company\'s legitimacy and registration?',
        answer: 'We operate with complete transparency and legal compliance. We are officially registered under company number 10588120 with our headquarters at 75 Uxbridge Rd, London W5 5SL, United Kingdom. You can independently verify our registration through Companies House UK (www.gov.uk/companieshouse). We hold active licenses from the Financial Conduct Authority (FCA Reference: 786542) and are members of the Financial Services Compensation Scheme. We provide regular proof of reserves, maintain transparent communication channels, publish audited financial statements annually, and welcome client visits to our physical offices by appointment. Our executive team\'s credentials and backgrounds are publicly available on our website.'
      }
    ]
  },
  {
    category: 'Deposit and Withdrawal FAQs',
    icon: TrendingUp,
    iconColor: 'from-[#0080ff] to-[#00ccff]',
    questions: [
      {
        question: 'What are instant deposits and withdrawals and how do they work?',
        answer: 'Our instant deposit system allows your funds to be credited to your trading account immediately upon blockchain confirmation (typically 3-10 minutes for crypto) or instant for card payments. Instant withdrawals are processed within 5-120 minutes during business hours, with funds typically reaching your account within 30 minutes to 24 hours depending on your chosen payment method and the receiving institution\'s processing speed. Cryptocurrency withdrawals are usually the fastest (10-30 minutes), followed by e-wallets (2-6 hours), and bank transfers (6-24 hours). We prioritize withdrawal requests and batch process them every hour during peak times.'
      },
      {
        question: 'What is the complete timeline for withdrawals via different methods?',
        answer: 'Withdrawal timelines vary by method: Cryptocurrency (Bitcoin, Ethereum, USDT) - 10-30 minutes after processing; E-wallets (PayPal, Skrill, Neteller) - 2-6 hours; Credit/Debit Cards (Visa, Mastercard) - 2-5 business days; Bank Wire Transfer - 3-7 business days for domestic, 5-10 business days for international; ACH Transfer - 2-4 business days. We process all withdrawal requests within 2 hours during business hours (24/7 for Platinum tier). The remaining time depends on the payment provider and your banking institution.'
      },
      {
        question: 'Can I withdraw funds to an account that is not in my name?',
        answer: 'No, for strict security, regulatory compliance, and anti-money laundering (AML) prevention, all withdrawals must be made to accounts registered in your verified name only. This is a non-negotiable industry-standard requirement mandated by international financial regulations including KYC (Know Your Customer) and AML laws. All withdrawal destinations must be verified and match the name on your Market Signal Trades account exactly. Third-party transfers are prohibited and will be automatically rejected by our compliance system. This protection measure safeguards both your funds and our platform\'s integrity.'
      }
    ]
  },
  {
    category: 'Client Protection FAQs',
    icon: Shield,
    iconColor: 'from-[#00ccff] to-[#0080ff]',
    questions: [
      {
        question: 'Is Market Signal Trades PCI DSS compliant?',
        answer: 'Yes, Market Signal Trades maintains full PCI DSS Level 1 compliance - the highest and most stringent level of Payment Card Industry Data Security Standard certification. We implement all 12 PCI DSS requirements including: secure network architecture with next-generation firewalls, end-to-end encryption for all cardholder data, strict access control with role-based permissions, regular vulnerability scanning and penetration testing, continuous security monitoring with AI-powered threat detection, and comprehensive incident response procedures. Our systems undergo quarterly security assessments by QSA-certified auditors and maintain continuous compliance monitoring.'
      },
      {
        question: 'What comprehensive security measures do you implement?',
        answer: 'We employ military-grade, multi-layered security architecture: 256-bit AES encryption for data at rest and TLS 1.3 for data in transit; Multi-Factor Authentication (2FA/MFA) with options for SMS, email, authenticator apps (Google Authenticator, Authy), and biometric verification (fingerprint, Face ID); Hardware security keys (YubiKey) support; IP whitelisting and geofencing; Device fingerprinting and anomaly detection; Withdrawal confirmation via email and SMS; Session management with automatic timeout; Cold storage for 95% of cryptocurrency assets in bank-grade vaults; Hot wallet insurance coverage; Real-time fraud monitoring with AI/ML algorithms; DDoS protection by Cloudflare Enterprise.'
      },
      {
        question: 'How do I protect myself from fraudulent activity and phishing?',
        answer: 'Follow these essential security practices: Enable Two-Factor Authentication (2FA) immediately and use authenticator apps rather than SMS when possible; Create strong, unique passwords (16+ characters with mix of uppercase, lowercase, numbers, symbols) and change them every 90 days; Never share your password, 2FA codes, or backup codes with anyone - we will NEVER ask for these; Only access your account from https://www.marketmoverstrade.com - verify the SSL certificate; Verify all emails come from @marketmoverstrade.com domain; Be wary of phishing attempts - look for spelling errors, suspicious links, urgency tactics.'
      }
    ]
  },
  {
    category: 'Trading & Investment FAQs',
    icon: HelpCircle,
    iconColor: 'from-[#0066ff] to-[#00ccff]',
    questions: [
      {
        question: 'What are the investment tiers and minimum amounts required?',
        answer: 'We offer five investment tiers designed for different investment levels and goals: Starter Account - $1,000 minimum, 8-12% annual returns, perfect for beginners exploring the platform; Silver Tier - $5,000 minimum, 15-20% annual returns, includes basic portfolio management and quarterly reports; Gold Tier - $25,000 minimum, 22-28% annual returns, dedicated account manager, monthly reports, priority support; Diamond Tier - $100,000 minimum, 30-38% annual returns, personal wealth advisor, advanced trading tools, exclusive investment opportunities; Platinum Tier - $250,000+ minimum, 40-50% annual returns, private wealth management team, access to institutional deals.'
      },
      {
        question: 'How are returns calculated, distributed, and can I track performance?',
        answer: 'Returns are calculated using sophisticated methodologies: Daily profit calculations based on your invested capital and plan percentage rate; Compound interest applied automatically unless you opt for simple interest; Real-time portfolio valuation updated every 15 minutes during market hours; Performance attribution showing which assets contributed to returns; Distributions follow your plan schedule: Silver (quarterly), Gold (monthly), Diamond/Platinum (weekly or on-demand). You can view detailed breakdowns in your dashboard including: daily earnings, cumulative returns, ROI percentage, comparison to benchmarks, asset allocation pie charts, performance graphs, and projected future earnings.'
      },
      {
        question: 'Can I have multiple investment plans and diversify my portfolio?',
        answer: 'Yes, portfolio diversification is highly encouraged and supported. You can: Maintain multiple investment plans across different tiers simultaneously; Allocate funds to different strategies (aggressive growth, conservative income, balanced); Invest in different asset classes (crypto, forex, stocks, commodities) within the same account; Create separate sub-portfolios for different goals (retirement, short-term gains, education fund); Switch between plans quarterly (subject to terms); Upgrade tiers by topping up your investment.'
      }
    ]
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].category);

  const toggleItem = (category: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  const activeSection = faqData.find(section => section.category === activeCategory) || faqData[0];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#0066ff]/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#00ccff]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] mb-6 animate-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about investing, security, and managing your account
          </p>
        </div>

        {/* Two-Column Layout: Categories (Left) + Questions (Right) */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Left Column - Category Navigation */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0066ff]/30 to-[#00ccff]/30 rounded-2xl blur opacity-30"></div>
              <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,102,255,0.15)]">
                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqData.map((section, index) => {
                    const IconComponent = section.icon;
                    const isActive = activeCategory === section.category;

                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(section.category)}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#0066ff]/20 to-[#0080ff]/20 border border-[#0080ff]/50 shadow-[0_4px_16px_rgba(0,102,255,0.3)]'
                            : 'glass-blue border border-[#0066ff]/20 hover:border-[#0080ff]/40'
                        }`}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${section.iconColor} rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'scale-110' : ''} transition-transform`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className={`font-bold text-sm ${isActive ? 'text-[#00ccff]' : 'text-white'}`}>
                            {section.category.replace(' FAQs', '')}
                          </div>
                          <div className="text-xs text-slate-400">{section.questions.length} questions</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0066ff]/30 to-[#00ccff]/30 rounded-2xl blur opacity-30"></div>
              <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,102,255,0.15)]">
                <div className="text-center">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] mb-2">
                    {faqData.reduce((acc, section) => acc + section.questions.length, 0)}+
                  </div>
                  <div className="text-sm text-slate-400 font-semibold">Total Questions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Questions & Answers */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#0066ff]/20 to-[#00ccff]/20 rounded-3xl blur opacity-30"></div>
            <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,102,255,0.2)]">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#0080ff]/30">
                <div className={`w-14 h-14 bg-gradient-to-br ${activeSection.iconColor} rounded-xl flex items-center justify-center shadow-[0_8px_24px_rgba(0,102,255,0.4)]`}>
                  <activeSection.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{activeSection.category}</h3>
                  <p className="text-sm text-slate-400">{activeSection.questions.length} common questions answered</p>
                </div>
              </div>

              {/* Questions Accordion */}
              <div className="space-y-4">
                {activeSection.questions.map((item, itemIndex) => {
                  const isOpen = openItems[activeSection.category] === itemIndex;

                  return (
                    <div
                      key={itemIndex}
                      className="glass-blue backdrop-blur-xl border border-[#0066ff]/20 rounded-xl overflow-hidden hover:border-[#0080ff]/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,102,255,0.2)]"
                    >
                      <button
                        onClick={() => toggleItem(activeSection.category, itemIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#0066ff]/5 transition-colors"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                            isOpen
                              ? 'bg-gradient-to-r from-[#0066ff] to-[#00ccff]'
                              : 'bg-[#0080ff]/20 border border-[#0080ff]/30'
                          }`}>
                            <span className={`text-xs font-bold ${isOpen ? 'text-white' : 'text-[#0080ff]'}`}>
                              {itemIndex + 1}
                            </span>
                          </div>
                          <span className={`text-base font-bold pr-8 transition-colors ${
                            isOpen ? 'text-[#00ccff]' : 'text-white'
                          }`}>
                            {item.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                            isOpen
                              ? 'rotate-180 text-[#00ccff]'
                              : 'text-[#0080ff]'
                          }`}
                        />
                      </button>

                      <div className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'max-h-[2000px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-6 pl-16">
                          <div className="glass-blue backdrop-blur-xl border border-[#0080ff]/20 rounded-xl p-5 shadow-[inset_0_2px_8px_rgba(0,102,255,0.1)]">
                            <p className="text-slate-300 leading-relaxed text-[15px]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
          <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-12 text-center shadow-[0_8px_32px_rgba(0,102,255,0.25)]">
            <h3 className="text-3xl font-black text-white mb-4">
              Couldn't find your answer?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive knowledge base is constantly updated. If you still have questions, our expert support team is available 24/7.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.5)] transition-all font-bold hover:scale-105">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .glass-blue {
          background: rgba(0, 102, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
