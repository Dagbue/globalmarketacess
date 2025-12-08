import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Multiple ways to reach us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're here to help however you prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-6">
              Send us a detailed message and we'll respond within 2 hours during business hours.
            </p>
            <a
              href="mailto:support@marketsignaltrades.com"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2"
            >
              <span>support@marketsignaltrades.com</span>
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-6">
              Get instant answers from our support team through our live chat feature.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center space-x-2">
              <span>Start chatting now</span>
            </button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Our Office</h3>
            <p className="text-gray-600 mb-6">
              Meet us in person at our London headquarters. Schedule your visit in advance.
            </p>
            <div className="text-gray-700 font-semibold">
              75 Uxbridge Rd, London W5 5SL, England UK
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Office Hours</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="font-semibold text-gray-900">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="font-semibold text-gray-900">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need immediate assistance?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              For urgent matters or account-related emergencies, our priority support team is available 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all font-semibold">
                <MessageCircle className="w-5 h-5" />
                <span>Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
