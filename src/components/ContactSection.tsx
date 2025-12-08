import { Mail, MapPin, ArrowRight, Clock, MessageCircle, Headphones } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ContactSection() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/contact');
  };

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Get In Touch</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              with Us?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions about trading or need support? Our team is here to help you succeed
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-800/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group/link"
                >
                  support@marketsignaltrades.com
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-800/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Come visit our headquarters in London
                </p>
                <p className="text-white font-semibold">
                  75 Uxbridge Rd, London W5 5SL, England UK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-center hover:border-blue-800/50 transition-all">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">24/7 Support</h4>
            <p className="text-slate-400 text-sm">
              Round-the-clock assistance for all your trading needs
            </p>
          </div>

          <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-center hover:border-blue-800/50 transition-all">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Live Chat</h4>
            <p className="text-slate-400 text-sm">
              Instant support through our in-platform messaging
            </p>
          </div>

          <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-center hover:border-blue-800/50 transition-all">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Quick Response</h4>
            <p className="text-slate-400 text-sm">
              Average response time under 2 hours during business hours
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Trading with Confidence
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust Market Signal Trades for secure and profitable trading
            </p>

            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
