import { Mail, MapPin, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ContactSection() {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/contact');
  };
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 glass-purple border border-purple-500/30 rounded-full mb-6 animate-glow">
            <span className="text-purple-400 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 mb-4 animate-glow">
            Ready to Work with Us
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about trading, need technical support, or want to discuss partnership opportunities? Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-magenta rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all animate-float">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 animate-glow">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-400 mb-4">Send us an email and we'll respond within 24 hours</p>
                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="text-purple-400 hover:text-purple-300 font-semibold text-lg inline-flex items-center group"
                >
                  support@marketsignaltrades.com
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-magenta rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/30 animate-glow">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-slate-400 mb-4">Come visit our headquarters in London</p>
                <p className="text-white font-semibold text-lg">
                  75 Uxbridge Rd, London W5 5SL, England UK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-purple rounded-2xl p-6 shadow-lg border border-purple-500/20 text-center hover:border-purple-500/40 transition-all animate-float">
            <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30 animate-glow">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-bold text-white mb-2">24/7 Support</h4>
            <p className="text-slate-400 text-sm">Round-the-clock assistance for all your trading needs</p>
          </div>

          <div className="glass-purple rounded-2xl p-6 shadow-lg border border-purple-500/20 text-center hover:border-purple-500/40 transition-all animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center mx-auto mb-4 border border-fuchsia-500/30 animate-glow">
              <MessageCircle className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Live Chat</h4>
            <p className="text-slate-400 text-sm">Instant support through our in-platform messaging</p>
          </div>

          <div className="glass-purple rounded-2xl p-6 shadow-lg border border-purple-500/20 text-center hover:border-purple-500/40 transition-all animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center mx-auto mb-4 border border-pink-500/30 animate-glow">
              <Clock className="w-6 h-6 text-pink-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Quick Response</h4>
            <p className="text-slate-400 text-sm">Average response time under 2 hours during business hours</p>
          </div>
        </div>

        <div className="glass-magenta rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden border border-purple-500/20 animate-float">
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
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust Market Signal Trades for secure, reliable, and profitable
              trading experiences.
            </p>
            <button
                onClick={handleBack}
                className="group px-12 py-5 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-bold text-lg inline-flex items-center space-x-3 hover:scale-105 animate-glow">
              <span>Contact Us Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
