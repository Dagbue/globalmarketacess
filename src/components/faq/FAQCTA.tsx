import { MessageCircle, Mail, BookOpen, TrendingUp, Phone } from 'lucide-react';

export default function FAQCTA() {
  return (
    <>
      <section className="relative py-24 px-6 bg-[#0a0e27]">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                Questions?
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-slate-400 mb-6">
                  Get instant answers from our support team through live chat.
                </p>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30">
                  Start Chat
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-slate-400 mb-6">
                  Send us a message and we'll respond within 2 hours.
                </p>
                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-[#0a0e27] border-t border-slate-800/50">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More Resources
            </h3>
            <p className="text-slate-400 mb-8">
              Learn more about investing with Market Signal Trades
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700/50"
              >
                <BookOpen className="w-5 h-5" />
                <span>About Us</span>
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700/50"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Investment Plans</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
