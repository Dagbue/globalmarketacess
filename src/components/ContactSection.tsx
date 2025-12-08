import { Mail, MapPin, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ContactSection() {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/contact');
  };
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black  text-gray-900 mb-4 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Ready to Work with Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about trading, need technical support, or want to discuss partnership opportunities? Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center group"
                >
                  support@marketsignaltrades.com
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come visit our headquarters in London</p>
                <p className="text-gray-900 font-semibold text-lg">
                  75 Uxbridge Rd, London W5 5SL, England UK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Round-the-clock assistance for all your trading needs</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">Instant support through our in-platform messaging</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">Average response time under 2 hours during business hours</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 400">
              <path
                d="M0,200 Q300,100 600,200 T1200,200"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M0,250 Q300,150 600,250 T1200,250"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Trading with Confidence Today
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust Market Signal Trades for secure, reliable, and profitable
              trading experiences.
            </p>
            <button
                onClick={handleBack}
                className="group px-12 py-5 bg-white text-gray-900 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-bold text-lg shadow-2xl inline-flex items-center space-x-3">
              <span>Contact Us Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
