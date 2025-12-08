import { Mail, MapPin, ArrowRight, Clock, MessageCircle, Phone, Globe, HeadphonesIcon } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ContactSection() {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/contact');
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 glass-strong border border-blue-500/30 rounded-full mb-6 animate-glow">
            <span className="text-cyan-400 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 mb-4 animate-glow">
            Ready to Work with Us
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about trading, need technical support, or want to discuss partnership opportunities? Our team is here to help you succeed.
          </p>
        </div>

        {/* New asymmetric contact layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main contact card - spans 2 columns */}
          <div className="lg:col-span-2 glass-strong rounded-3xl p-10 lg:p-12 shadow-2xl border border-blue-500/30 backdrop-blur-xl animate-float">
            <h3 className="text-3xl font-black text-white mb-8">Get in Touch</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="group glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Email Us</h4>
                <p className="text-slate-400 text-sm mb-3">24-hour response time</p>
                <a
                  href="mailto:support@marketsignaltrades.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center group"
                >
                  support@marketsignaltrades.com
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="group glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-blue-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,204,255,0.4)] transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 animate-glow">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Call Us</h4>
                <p className="text-slate-400 text-sm mb-3">Mon-Fri, 9AM-6PM GMT</p>
                <a
                  href="tel:+442012345678"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center group"
                >
                  +44 20 1234 5678
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="group glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Visit Us</h4>
                <p className="text-slate-400 text-sm mb-3">Our London headquarters</p>
                <p className="text-white font-semibold text-sm">
                  75 Uxbridge Rd, London<br/>W5 5SL, England UK
                </p>
              </div>

              <div className="group glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-blue-500/40 hover:shadow-[0_15px_50px_-10px_rgba(0,204,255,0.4)] transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 animate-glow">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Live Chat</h4>
                <p className="text-slate-400 text-sm mb-3">Available 24/7</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center group">
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 animate-glow">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">24/7 Support Available</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our dedicated support team is always ready to assist you with any questions or concerns.
                    We pride ourselves on providing fast, reliable, and professional service around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side info cards - stack vertically */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-lg border border-blue-500/20 text-center hover:border-cyan-500/40 transition-all animate-float">
              <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 animate-glow">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2 text-lg">24/7 Support</h4>
              <p className="text-slate-400 text-sm">Round-the-clock assistance for all your trading needs</p>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-lg border border-cyan-500/20 text-center hover:border-blue-500/40 transition-all animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 animate-glow">
                <MessageCircle className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="font-bold text-white mb-2 text-lg">Live Chat</h4>
              <p className="text-slate-400 text-sm">Instant support through our in-platform messaging</p>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-lg border border-blue-500/20 text-center hover:border-cyan-500/40 transition-all animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 animate-glow">
                <Clock className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2 text-lg">Quick Response</h4>
              <p className="text-slate-400 text-sm">Average response time under 2 hours during business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA with new design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-glow"></div>

          <div className="relative glass-strong rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-blue-500/30 backdrop-blur-xl animate-float">
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

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-black text-white mb-4">
                  Start Trading with Confidence Today
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Join thousands of traders who trust Market Signal Trades for secure, reliable, and profitable
                  trading experiences.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button
                  onClick={handleBack}
                  className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg inline-flex items-center space-x-3 hover:scale-105 animate-glow"
                >
                  <span>Contact Us Now</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
