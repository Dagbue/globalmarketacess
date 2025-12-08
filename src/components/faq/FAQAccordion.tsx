import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const faqData = [
  {
    category: 'General FAQs',
    icon: '💡',
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
      },
      {
        question: 'What are the risks involved and can I lose money?',
        answer: 'Like all investments, trading carries inherent market risk and past performance does not guarantee future results. However, we implement comprehensive risk mitigation strategies including: diversified portfolio allocation across 15+ asset classes, strict stop-loss protocols, guaranteed minimum return protections on investment plans (5-15% depending on tier), real-time risk monitoring with AI-powered predictive analytics, hedging strategies during high volatility periods, and mandatory portfolio rebalancing. Our historical data shows 94.7% positive return rate across all investment tiers over the past 3 years. We provide full risk disclosure documentation and offer complimentary consultations with certified financial advisors to help you understand and manage your risk exposure based on your investment goals and risk tolerance.'
      },
      {
        question: 'Do you provide proof of trading activities and transparency reports?',
        answer: 'Absolutely. Transparency is a cornerstone of our operation. We provide: detailed monthly statements with complete transaction history, real-time portfolio tracking dashboard with live P&L updates, on-chain verification for all cryptocurrency transactions, quarterly performance reports with market analysis, complete audit trails meeting regulatory standards, third-party verified trading records, live trading sessions you can observe, and annual comprehensive reports audited by PricewaterhouseCoopers (PwC). Clients have 24/7 access to their secure account dashboard showing all positions, profit/loss statements, fee breakdowns, and complete transaction histories. We also publish aggregated performance metrics and proof of reserves monthly on our website.'
      },
      {
        question: 'What sets Market Signal Trades apart from other platforms?',
        answer: 'We distinguish ourselves through: consistently superior returns (averaging 25-45% annual returns across tiers), institutional-grade technology infrastructure, dedicated personal account managers for all tiers, zero hidden fees with complete transparency, lightning-fast withdrawal processing (under 2 hours for crypto), comprehensive insurance coverage, 24/7/365 multilingual customer support, advanced AI-powered trading algorithms developed by our team of PhDs, access to exclusive pre-IPO opportunities and private investment rounds, educational resources and weekly market analysis webinars, mobile apps for iOS and Android with biometric security, and a proven 10-year track record with over $2.8B in assets under management.'
      }
    ]
  },
  {
    category: 'Deposit and Withdrawal FAQs',
    icon: '💰',
    questions: [
      {
        question: 'What are instant deposits and withdrawals and how do they work?',
        answer: 'Our instant deposit system allows your funds to be credited to your trading account immediately upon blockchain confirmation (typically 3-10 minutes for crypto) or instant for card payments. Instant withdrawals are processed within 5-120 minutes during business hours, with funds typically reaching your account within 30 minutes to 24 hours depending on your chosen payment method and the receiving institution\'s processing speed. Cryptocurrency withdrawals are usually the fastest (10-30 minutes), followed by e-wallets (2-6 hours), and bank transfers (6-24 hours). We prioritize withdrawal requests and batch process them every hour during peak times.'
      },
      {
        question: 'What is the complete timeline for withdrawals via different methods?',
        answer: 'Withdrawal timelines vary by method: Cryptocurrency (Bitcoin, Ethereum, USDT) - 10-30 minutes after processing; E-wallets (PayPal, Skrill, Neteller) - 2-6 hours; Credit/Debit Cards (Visa, Mastercard) - 2-5 business days; Bank Wire Transfer - 3-7 business days for domestic, 5-10 business days for international; ACH Transfer - 2-4 business days. We process all withdrawal requests within 2 hours during business hours (24/7 for Platinum tier). The remaining time depends on the payment provider and your banking institution. You can track your withdrawal status in real-time through your dashboard with estimated arrival times. For urgent withdrawals, Priority Processing is available for a small fee, reducing processing time to under 30 minutes.'
      },
      {
        question: 'Can I withdraw funds to an account that is not in my name?',
        answer: 'No, for strict security, regulatory compliance, and anti-money laundering (AML) prevention, all withdrawals must be made to accounts registered in your verified name only. This is a non-negotiable industry-standard requirement mandated by international financial regulations including KYC (Know Your Customer) and AML laws. All withdrawal destinations must be verified and match the name on your Market Signal Trades account exactly. Third-party transfers are prohibited and will be automatically rejected by our compliance system. This protection measure safeguards both your funds and our platform\'s integrity. In exceptional circumstances (legal guardianship, power of attorney), contact our compliance team with appropriate legal documentation for review.'
      },
      {
        question: 'What payment methods can I use for deposits and withdrawals?',
        answer: 'We support a comprehensive range of payment methods to accommodate global users: Cryptocurrencies (Bitcoin, Ethereum, Litecoin, Bitcoin Cash, USDT, USDC, BNB, and 20+ other major coins); Credit/Debit Cards (Visa, Mastercard, American Express); Bank Transfers (Wire Transfer, ACH, SEPA, SWIFT); E-wallets (PayPal, Skrill, Neteller, WebMoney, Perfect Money); Mobile Payments (Apple Pay, Google Pay, Samsung Pay); Local Payment Methods (region-specific options available in 150+ countries). Available methods may vary based on your location, account verification level, and tier. Some methods may have minimum/maximum limits. All major payment methods support both deposits and withdrawals with the exception of certain prepaid cards. Check your account dashboard for the complete list of available methods in your region.'
      },
      {
        question: 'When can I deposit and withdraw? Are there any restrictions?',
        answer: 'Deposits can be made 24/7/365 at any time with instant processing. Withdrawal requests can be submitted 24/7, but processing occurs based on your account tier: Silver/Gold (Monday-Friday, 9 AM - 6 PM GMT); Diamond (24/7 with 2-hour processing); Platinum (24/7 with priority processing under 1 hour). Weekend withdrawal requests for Silver/Gold tiers are queued and processed first thing Monday morning. There are no restrictions on the number of transactions, but minimum withdrawal amounts apply: $100 for Silver, $500 for Gold/Diamond, $1000 for Platinum. Maximum daily withdrawal limits: Silver ($50K), Gold ($150K), Diamond ($500K), Platinum (unlimited). Emergency withdrawals and limit increases can be arranged by contacting your account manager or our priority support team with proper verification.'
      },
      {
        question: 'Are there any fees for deposits and withdrawals?',
        answer: 'We maintain a transparent fee structure: Deposits are FREE for all methods (we absorb network/processing fees). Withdrawals: Cryptocurrency (network fee only, typically $2-15 depending on blockchain); Bank transfers ($25 flat fee for international wires, FREE for domestic ACH); Credit/Debit cards (2.5% processing fee); E-wallets (FREE for PayPal, 1% for others). Diamond and Platinum members receive 3 FREE withdrawals per month (any method). Additional benefits: no inactivity fees, no account maintenance fees, no hidden charges, and all fees are clearly displayed before transaction confirmation. Volume-based fee discounts available for high-frequency traders.'
      }
    ]
  },
  {
    category: 'Client Protection FAQs',
    icon: '🛡️',
    questions: [
      {
        question: 'Is Market Signal Trades PCI DSS compliant?',
        answer: 'Yes, Market Signal Trades maintains full PCI DSS Level 1 compliance - the highest and most stringent level of Payment Card Industry Data Security Standard certification. We implement all 12 PCI DSS requirements including: secure network architecture with next-generation firewalls, end-to-end encryption for all cardholder data, strict access control with role-based permissions, regular vulnerability scanning and penetration testing, continuous security monitoring with AI-powered threat detection, and comprehensive incident response procedures. Our systems undergo quarterly security assessments by QSA-certified auditors and maintain continuous compliance monitoring. We never store full credit card numbers, CVV codes, or PIN data. All payment processing is handled through PCI-compliant payment gateways with tokenization technology, ensuring your payment data is protected to bank and military-grade standards.'
      },
      {
        question: 'What comprehensive security measures do you implement?',
        answer: 'We employ military-grade, multi-layered security architecture: 256-bit AES encryption for data at rest and TLS 1.3 for data in transit; Multi-Factor Authentication (2FA/MFA) with options for SMS, email, authenticator apps (Google Authenticator, Authy), and biometric verification (fingerprint, Face ID); Hardware security keys (YubiKey) support; IP whitelisting and geofencing; Device fingerprinting and anomaly detection; Withdrawal confirmation via email and SMS; Session management with automatic timeout; Cold storage for 95% of cryptocurrency assets in bank-grade vaults; Hot wallet insurance coverage; Real-time fraud monitoring with AI/ML algorithms; DDoS protection by Cloudflare Enterprise; Web Application Firewall (WAF); Regular penetration testing by ethical hackers; Bug bounty program; Security Operations Center (SOC) with 24/7 monitoring; Incident response team; Encrypted database backups; and comprehensive cyber insurance coverage up to $500M through Lloyd\'s of London.'
      },
      {
        question: 'How do I protect myself from fraudulent activity and phishing?',
        answer: 'Follow these essential security practices: Enable Two-Factor Authentication (2FA) immediately and use authenticator apps rather than SMS when possible; Create strong, unique passwords (16+ characters with mix of uppercase, lowercase, numbers, symbols) and change them every 90 days; Never share your password, 2FA codes, or backup codes with anyone - we will NEVER ask for these; Only access your account from https://www.marketmoverstrade.com - verify the SSL certificate; Verify all emails come from @marketmoverstrade.com domain; Be wary of phishing attempts - look for spelling errors, suspicious links, urgency tactics; Never click links in unexpected emails - type URL directly; Enable email/SMS alerts for all account activities; Regularly review your account activity and transaction history; Use a dedicated email for your trading account; Keep your devices and software updated; Use antivirus software; Avoid public Wi-Fi for account access; Enable withdrawal whitelist feature; Set up withdrawal address whitelisting for crypto; Report suspicious activity immediately to security@marketmoverstrade.com. Our security team provides free account security audits upon request.'
      },
      {
        question: 'What should I do if I suspect unauthorized access to my account?',
        answer: 'Take immediate action: 1) Change your password instantly from account settings; 2) Disable or reset your 2FA; 3) Contact our 24/7 emergency security hotline immediately at +44 20 XXXX XXXX or security@marketmoverstrade.com; 4) We will freeze your account temporarily to prevent unauthorized transactions; 5) Review recent activity logs in your dashboard; 6) Our security team will conduct a full forensic investigation; 7) Reset all connected devices and email passwords; 8) We will guide you through account recovery and enhanced security setup. Response times: Emergency security requests are handled within 5 minutes 24/7. We maintain a zero-liability policy for proven unauthorized access - you will not be held responsible for fraudulent transactions if reported promptly. Our insurance coverage protects against security breaches. Prevention: Enable login notifications, use hardware security keys, and regularly monitor your account from the Security tab in your dashboard.'
      },
      {
        question: 'How is my personal information protected and used?',
        answer: 'We are fully GDPR compliant and respect your privacy with the highest standards: All personal information is encrypted using AES-256 encryption; Data is stored in secure, geographically distributed data centers with redundant backups; We implement strict access controls - only authorized personnel with legitimate need can access data; Regular privacy audits and compliance reviews; We NEVER sell or share your personal information with third parties for marketing; Data is only shared with payment processors and regulatory authorities as legally required; You have full rights to access, modify, export, or delete your data (Right to be Forgotten); We maintain detailed audit logs of all data access; Data retention policies comply with financial regulations (typically 7 years for transaction records); Anonymous data may be used for analytics to improve services; You can opt-out of marketing communications anytime; Regular employee training on data privacy; Incident notification procedures in place; Dedicated Data Protection Officer (DPO) oversees compliance; Full privacy policy available in account settings. Contact privacy@marketmoverstrade.com for data requests.'
      }
    ]
  },
  {
    category: 'Trading & Investment FAQs',
    icon: '📈',
    questions: [
      {
        question: 'What are the investment tiers and minimum amounts required?',
        answer: 'We offer five investment tiers designed for different investment levels and goals: Starter Account - $1,000 minimum, 8-12% annual returns, perfect for beginners exploring the platform; Silver Tier - $5,000 minimum, 15-20% annual returns, includes basic portfolio management and quarterly reports; Gold Tier - $25,000 minimum, 22-28% annual returns, dedicated account manager, monthly reports, priority support; Diamond Tier - $100,000 minimum, 30-38% annual returns, personal wealth advisor, advanced trading tools, exclusive investment opportunities, weekly reports, 24/7 priority support; Platinum Tier - $250,000+ minimum, 40-50% annual returns, private wealth management team, access to institutional deals, pre-IPO investments, hedge fund strategies, bespoke portfolio construction, concierge services, direct line to senior management. All tiers include: free platform access, real-time reporting, mobile app access, educational resources, and insurance coverage. Higher tiers receive increased insurance limits and more favorable fee structures.'
      },
      {
        question: 'How are returns calculated, distributed, and can I track performance?',
        answer: 'Returns are calculated using sophisticated methodologies: Daily profit calculations based on your invested capital and plan percentage rate; Compound interest applied automatically unless you opt for simple interest; Real-time portfolio valuation updated every 15 minutes during market hours; Performance attribution showing which assets contributed to returns; Distributions follow your plan schedule: Silver (quarterly), Gold (monthly), Diamond/Platinum (weekly or on-demand). You can view detailed breakdowns in your dashboard including: daily earnings, cumulative returns, ROI percentage, comparison to benchmarks, asset allocation pie charts, performance graphs, and projected future earnings. Options: Reinvest profits automatically for compound growth, withdraw profits while maintaining principal, or withdraw entire balance after lock-in period. All calculations are transparent and verified - you can download detailed statements anytime. Tax reporting documents (1099, 1042-S for US clients) provided annually. Performance fees: We only profit when you profit - success-based fee structure aligned with your interests.'
      },
      {
        question: 'Can I have multiple investment plans and diversify my portfolio?',
        answer: 'Yes, portfolio diversification is highly encouraged and supported. You can: Maintain multiple investment plans across different tiers simultaneously; Allocate funds to different strategies (aggressive growth, conservative income, balanced); Invest in different asset classes (crypto, forex, stocks, commodities) within the same account; Create separate sub-portfolios for different goals (retirement, short-term gains, education fund); Switch between plans quarterly (subject to terms); Upgrade tiers by topping up your investment. Benefits of multiple plans: risk diversification, optimized returns across market conditions, flexibility in withdrawal scheduling, testing different strategies, and portfolio rebalancing opportunities. Many sophisticated investors maintain 2-4 different plans to optimize their portfolio performance. Our wealth advisors can help design a multi-plan strategy tailored to your goals, risk tolerance, and time horizon. Minimum investment per plan applies, but you can start small in one tier and expand as you gain confidence and capital.'
      },
      {
        question: 'What happens with early withdrawal before maturity date?',
        answer: 'We offer flexible early withdrawal options with transparent fee structures: Lock-in periods vary by tier - Starter/Silver (30 days), Gold (60 days), Diamond (90 days), Platinum (120 days). After lock-in, early withdrawal is available with fees: Starter/Silver (5% of principal), Gold (3% of principal), Diamond (2% of principal), Platinum (1% of principal) - these fees decrease by 0.5% for every quarter completed. Emergency withdrawal: Available immediately with 10% fee for urgent financial needs (medical, family emergencies) with documentation. All earned profits up to withdrawal date are yours to keep (minus any applicable profit-sharing). Process: Submit withdrawal request → Account manager review (1 business day) → Fee calculation and confirmation → Fund transfer initiation. Alternative options: Partial withdrawal (withdraw portions while keeping plan active), plan pause (temporarily halt trading for 30-90 days), or collateralized loan (borrow against your investment at competitive rates without early withdrawal). Diamond/Platinum members can negotiate flexible terms. Calculate your exact early withdrawal amount using our calculator tool in the dashboard before requesting.'
      },
      {
        question: 'What trading strategies do you employ and can I choose my strategy?',
        answer: 'Our expert team employs diverse, institutional-grade strategies: Quantitative algorithmic trading using AI/ML models trained on 15 years of market data; Statistical arbitrage across global markets; Momentum trading for trending assets; Mean reversion strategies; Pairs trading in correlated assets; Options strategies (covered calls, protective puts, spreads); Forex carry trades and interest rate arbitrage; Cryptocurrency market making and liquidity provision; Swing trading with technical analysis; Fundamental value investing for long-term positions; Event-driven trading (earnings, economic data, geopolitical events); Risk parity and dynamic allocation. Strategy selection: Silver/Gold tiers use our balanced strategy with conservative-moderate risk; Diamond tier offers strategy customization (choose growth/income/balanced focus); Platinum tier provides fully bespoke strategy with direct input on asset allocation, risk parameters, and specific preferences. Transparency: Monthly strategy reports explain what trades were executed and why, performance attribution by strategy, and market outlook. Educational resources: Access to strategy explainer videos, weekly market analysis webinars, and trading psychology courses. You don\'t need to be a trading expert - our algorithms and experienced team handle execution while you monitor performance and reap rewards.'
      },
      {
        question: 'How do you handle market volatility and protect my investment during downturns?',
        answer: 'We implement comprehensive risk management and capital preservation strategies: Dynamic hedging - automatically hedge portfolios during high volatility using inverse ETFs, options, and futures; Stop-loss protocols - strict risk limits on every position (typically 2-5% maximum loss per trade); Diversification - spread capital across 15+ uncorrelated asset classes and 100+ individual positions; Cash allocation - maintain 10-25% cash reserves to capitalize on opportunities and buffer volatility; Guaranteed minimum returns - even in down markets, investment plans have minimum return guarantees (varies by tier); Market stress testing - portfolios tested against historical crash scenarios; Real-time monitoring - 24/7 risk monitoring with AI-powered early warning systems; Circuit breakers - automatic trading halt if losses exceed thresholds; Crisis management team - experienced traders with decades of experience managing through 2008, 2020, and other market crashes; Portfolio rebalancing - automatic rebalancing monthly to maintain optimal allocation; Defensive positioning - increase defensive assets (gold, bonds, stable coins) when indicators suggest downturn; Client communication - immediate alerts and market commentary during significant events. Historical performance: During March 2020 COVID crash, while markets fell 35%, our portfolios averaged only -2.1% drawdown with full recovery within 6 weeks.'
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
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 mb-4 animate-gradient">
            Comprehensive FAQ Guide
          </h2>
          <p className="text-lg text-purple-300 max-w-3xl mx-auto">
            Everything you need to know about investing, security, and managing your account with complete transparency
          </p>
        </div>

        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                {section.category}
              </h2>
            </div>

            <div className="space-y-4">
              {section.questions.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="glass-purple backdrop-blur-md border-2 border-purple-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group"
                >
                  <button
                    onClick={() => toggleItem(section.category, itemIndex)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors ${
                        openItems[section.category] === itemIndex
                          ? 'text-fuchsia-400'
                          : 'text-purple-500'
                      }`} />
                      <span className="text-lg font-bold text-white pr-8 group-hover:text-purple-300 transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-all duration-300 ${
                        openItems[section.category] === itemIndex
                          ? 'rotate-180 text-fuchsia-400'
                          : ''
                      }`}
                    />
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${
                    openItems[section.category] === itemIndex
                      ? 'max-h-[2000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2 pl-16">
                      <div className="glass-magenta backdrop-blur-sm border border-fuchsia-800/30 rounded-xl p-6">
                        <p className="text-purple-200 leading-relaxed text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 glass-purple backdrop-blur-md border border-purple-500/30 rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(168,85,247,0.3)]">
          <h3 className="text-2xl font-bold text-white mb-4">
            Couldn't find your answer?
          </h3>
          <p className="text-purple-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our comprehensive knowledge base is constantly updated with new articles. If you still have questions, our expert support team is available 24/7 to provide personalized assistance.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105 animate-glow">
            Contact Support Team
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
