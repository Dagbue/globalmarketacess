import { MessageCircle, Mail, Phone, Clock, Globe, Shield } from 'lucide-react';

export default function FAQCTA() {
  return (
    <>
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-magenta border border-fuchsia-500/30 rounded-full shadow-lg shadow-fuchsia-500/20 mb-6 animate-glow">
              <MessageCircle className="w-4 h-4 text-fuchsia-400 mr-2 animate-pulse" />
              <span className="text-fuchsia-300 font-semibold text-sm tracking-wide">24/7 Support Available</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 mb-6 animate-gradient">
              Still have questions?
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed">
              Can't find the answer you're looking for? Our dedicated support team is here to help you every step of the way with personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-purple backdrop-blur-md border-2 border-purple-500/50 rounded-3xl p-8 text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow relative">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Live Chat</h3>
              <p className="text-purple-300 mb-6 leading-relaxed">
                Get instant answers from our expert support team through live chat. Average response time under 30 seconds.
              </p>

              <div className="flex items-center justify-center gap-2 text-fuchsia-400 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>

              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold w-full group-hover:scale-105 animate-glow">
                Start Chat Now
              </button>
            </div>

            <div className="glass-magenta backdrop-blur-md border-2 border-fuchsia-500/50 rounded-3xl p-8 text-center hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow relative">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">Email Support</h3>
              <p className="text-fuchsia-300 mb-6 leading-relaxed">
                Send us a detailed message and receive comprehensive responses within 2 hours guaranteed.
              </p>

              <div className="flex items-center justify-center gap-2 text-pink-400 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                <span>Response in 2 hours</span>
              </div>

              <a
                href="mailto:support@marketsignaltrades.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all font-semibold w-full group-hover:scale-105 animate-glow"
              >
                Send Email
              </a>
            </div>

            <div className="glass-purple backdrop-blur-md border-2 border-pink-500/50 rounded-3xl p-8 text-center hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow relative">
                <Phone className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">Phone Support</h3>
              <p className="text-pink-300 mb-6 leading-relaxed">
                Speak directly with our specialists for urgent matters and personalized guidance.
              </p>

              <div className="flex items-center justify-center gap-2 text-purple-400 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                <span>Global Coverage</span>
              </div>

              <a
                href="tel:+442012345678"
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all font-semibold w-full group-hover:scale-105 animate-glow"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="glass-magenta backdrop-blur-md border border-fuchsia-500/30 rounded-3xl p-10 mb-16 shadow-[0_0_50px_rgba(217,70,239,0.3)]">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/30 animate-glow">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Priority Support for Premium Members</h3>
                <p className="text-purple-300 leading-relaxed mb-6">
                  Diamond and Platinum tier members receive priority support with dedicated account managers, direct phone lines, and guaranteed response times. Enjoy white-glove service with personal assistance for all your investment needs.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass-purple backdrop-blur-sm border border-purple-700/50 rounded-xl p-4">
                    <div className="text-fuchsia-400 font-bold text-lg mb-1">Diamond</div>
                    <div className="text-purple-300 text-sm">Dedicated Manager</div>
                  </div>
                  <div className="glass-purple backdrop-blur-sm border border-purple-700/50 rounded-xl p-4">
                    <div className="text-fuchsia-400 font-bold text-lg mb-1">Platinum</div>
                    <div className="text-purple-300 text-sm">Personal Wealth Team</div>
                  </div>
                  <div className="glass-purple backdrop-blur-sm border border-purple-700/50 rounded-xl p-4">
                    <div className="text-fuchsia-400 font-bold text-lg mb-1">24/7</div>
                    <div className="text-purple-300 text-sm">Direct Access Line</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 mb-4 animate-gradient">
              Explore More Resources
            </h3>
            <p className="text-purple-300 text-lg mb-8">
              Discover everything you need to know about investing with Market Signal Trades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="/about"
              className="glass-purple backdrop-blur-md border-2 border-purple-800/50 hover:border-purple-500/50 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group hover:scale-105"
            >
              <div className="text-2xl mb-3">🏢</div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">About Us</h4>
              <p className="text-purple-400 text-sm">Learn about our history and mission</p>
            </a>

            <a
              href="/pricing"
              className="glass-purple backdrop-blur-md border-2 border-fuchsia-800/50 hover:border-fuchsia-500/50 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all group hover:scale-105"
            >
              <div className="text-2xl mb-3">💎</div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-fuchsia-300 transition-colors">Investment Plans</h4>
              <p className="text-fuchsia-400 text-sm">Compare tiers and choose your plan</p>
            </a>

            <a
              href="/security"
              className="glass-purple backdrop-blur-md border-2 border-pink-800/50 hover:border-pink-500/50 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all group hover:scale-105"
            >
              <div className="text-2xl mb-3">🔒</div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-pink-300 transition-colors">Security</h4>
              <p className="text-pink-400 text-sm">How we protect your investments</p>
            </a>

            <a
              href="/contact"
              className="glass-purple backdrop-blur-md border-2 border-purple-800/50 hover:border-purple-500/50 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group hover:scale-105"
            >
              <div className="text-2xl mb-3">📞</div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Contact</h4>
              <p className="text-purple-400 text-sm">Get in touch with our team</p>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/knowledge-base"
              className="px-8 py-4 glass-purple backdrop-blur-md border-2 border-purple-800/50 hover:border-purple-500/50 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all font-semibold hover:scale-105"
            >
              Knowledge Base
            </a>
            <a
              href="/tutorials"
              className="px-8 py-4 glass-purple backdrop-blur-md border-2 border-fuchsia-800/50 hover:border-fuchsia-500/50 text-white rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all font-semibold hover:scale-105"
            >
              Video Tutorials
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105 animate-glow"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
}
