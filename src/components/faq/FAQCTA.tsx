import { MessageCircle, Mail, Phone, Clock, Zap, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export default function FAQCTA() {
  return (
    <>
      {/* Main Support Section with Card Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#0066ff]/20 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-[#00ccff]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-blue backdrop-blur-2xl border border-[#0080ff]/40 rounded-full shadow-[0_0_30px_rgba(0,102,255,0.3)] mb-8">
              <Zap className="w-5 h-5 text-[#00ccff] mr-2 animate-pulse" />
              <span className="text-[#00ccff] font-bold text-sm tracking-wide">24/7 SUPPORT AVAILABLE</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] mb-6 animate-gradient">
              Still have questions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our dedicated support team is here to help you every step of the way with personalized assistance
            </p>
          </div>

          {/* Support Methods in Diagonal Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Live Chat Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
              <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(0,102,255,0.2)] hover:border-[#0080ff]/60 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 glass-blue backdrop-blur-xl border border-[#00ccff]/30 rounded-full px-3 py-1.5">
                    <div className="w-2 h-2 bg-[#00ccff] rounded-full animate-pulse"></div>
                    <span className="text-[#00ccff] text-xs font-bold">ONLINE</span>
                  </div>
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(0,102,255,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00ccff] transition-colors">Live Chat</h3>
                <p className="text-slate-300 mb-6 leading-relaxed flex-1">
                  Get instant answers from our expert support team through live chat
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-[#00ccff] text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Average 30s response</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#0080ff] text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Available 24/7</span>
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-[#0066ff] to-[#0080ff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.5)] transition-all font-bold w-full group-hover:scale-105 flex items-center justify-center gap-2">
                  <span>Start Chat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0080ff] via-[#00ccff] to-[#0080ff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
              <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(0,102,255,0.2)] hover:border-[#0080ff]/60 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="absolute top-4 right-4">
                  <div className="glass-blue backdrop-blur-xl border border-[#0080ff]/30 rounded-full px-3 py-1.5">
                    <span className="text-[#0080ff] text-xs font-bold">2H REPLY</span>
                  </div>
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(0,128,255,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Mail className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00ccff] transition-colors">Email Support</h3>
                <p className="text-slate-300 mb-6 leading-relaxed flex-1">
                  Send detailed messages and receive comprehensive responses guaranteed
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-[#00ccff] text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>2 hour guarantee</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#0080ff] text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Detailed responses</span>
                  </div>
                </div>

                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0080ff] to-[#00ccff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,128,255,0.5)] transition-all font-bold w-full group-hover:scale-105"
                >
                  <span>Send Email</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Support Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00ccff] via-[#0080ff] to-[#0066ff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
              <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(0,102,255,0.2)] hover:border-[#0080ff]/60 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="absolute top-4 right-4">
                  <div className="glass-blue backdrop-blur-xl border border-[#00ccff]/30 rounded-full px-3 py-1.5">
                    <span className="text-[#00ccff] text-xs font-bold">URGENT</span>
                  </div>
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(0,204,255,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Phone className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00ccff] transition-colors">Phone Support</h3>
                <p className="text-slate-300 mb-6 leading-relaxed flex-1">
                  Speak directly with specialists for urgent matters and personalized guidance
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-[#00ccff] text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Immediate connection</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#0080ff] text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Global coverage</span>
                  </div>
                </div>

                <a
                  href="tel:+442012345678"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ccff] to-[#0066ff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,204,255,0.5)] transition-all font-bold w-full group-hover:scale-105"
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Premium Support Banner */}
          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"></div>
            <div className="relative glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,102,255,0.25)]">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 glass-blue backdrop-blur-xl border border-[#00ccff]/30 rounded-full px-4 py-2 mb-4">
                    <Zap className="w-4 h-4 text-[#00ccff]" />
                    <span className="text-[#00ccff] text-sm font-bold">PREMIUM MEMBERS</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">Priority Support Access</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Diamond and Platinum tier members receive priority support with dedicated account managers, direct phone lines, and guaranteed response times. Enjoy white-glove service for all your investment needs.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="glass-blue backdrop-blur-xl border border-[#0066ff]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] mb-1">Diamond</div>
                      <div className="text-slate-400 text-xs">Dedicated Manager</div>
                    </div>
                    <div className="glass-blue backdrop-blur-xl border border-[#0080ff]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0080ff] to-[#00ccff] mb-1">Platinum</div>
                      <div className="text-slate-400 text-xs">Personal Team</div>
                    </div>
                    <div className="glass-blue backdrop-blur-xl border border-[#00ccff]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ccff] to-[#0066ff] mb-1">24/7</div>
                      <div className="text-slate-400 text-xs">Direct Access</div>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.5)] transition-all font-bold hover:scale-105 whitespace-nowrap">
                    Upgrade Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0080ff]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00ccff] mb-4 animate-gradient">
              Explore More Resources
            </h3>
            <p className="text-slate-300 text-lg">
              Discover everything you need to know about investing with Market Signal Trades
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: '🏢', title: 'About Us', desc: 'Our history and mission', href: '/about' },
              { emoji: '💎', title: 'Investment Plans', desc: 'Compare tiers and pricing', href: '/pricing' },
              { emoji: '🔒', title: 'Security', desc: 'How we protect you', href: '/security' },
              { emoji: '📞', title: 'Contact', desc: 'Get in touch with us', href: '/contact' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0066ff]/30 to-[#00ccff]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative glass-blue backdrop-blur-2xl border border-[#0080ff]/30 hover:border-[#0080ff]/50 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,102,255,0.1)] transition-all group-hover:scale-105">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#00ccff] transition-colors flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/knowledge-base"
              className="px-8 py-4 glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 hover:border-[#0080ff]/60 text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.3)] transition-all font-bold hover:scale-105"
            >
              Knowledge Base
            </a>
            <a
              href="/tutorials"
              className="px-8 py-4 glass-blue backdrop-blur-2xl border-2 border-[#0080ff]/40 hover:border-[#0080ff]/60 text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.3)] transition-all font-bold hover:scale-105"
            >
              Video Tutorials
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] text-white rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.5)] transition-all font-bold hover:scale-105"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
}
