import { MessageCircle, Mail } from 'lucide-react';

export default function FAQCTA() {
  return (
    <>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant answers from our support team through live chat.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us a message and we'll respond within 2 hours.
              </p>
              <a
                href="mailto:support@marketsignaltrades.com"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all font-semibold"
              >
                Send Email
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore more resources
            </h3>
            <p className="text-gray-600 mb-8">
              Learn more about investing with Market Movers Trade
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/about"
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all font-semibold"
              >
                About Us
              </a>
              <a
                href="/pricing"
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all font-semibold"
              >
                Investment Plans
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
