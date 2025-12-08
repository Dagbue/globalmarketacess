import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">
            Multiple ways to reach us
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're here to help however you prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-purple border border-purple-500/30 rounded-3xl p-8 hover:border-fuchsia-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
            <p className="text-slate-300 mb-6">
              Send us a detailed message and we'll respond within 2 hours during business hours.
            </p>
            <a
              href="mailto:support@marketsignaltrades.com"
              className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>support@marketsignaltrades.com</span>
            </a>
          </div>

          <div className="glass-magenta border border-fuchsia-500/30 rounded-3xl p-8 hover:border-pink-400/50 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/30">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Live Chat</h3>
            <p className="text-slate-300 mb-6">
              Get instant answers from our support team through our live chat feature.
            </p>
            <button className="text-pink-400 hover:text-pink-300 font-semibold inline-flex items-center space-x-2 transition-colors">
              <span>Start chatting now</span>
            </button>
          </div>

          <div className="glass-purple border border-purple-500/30 rounded-3xl p-8 hover:border-fuchsia-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Visit Our Office</h3>
            <p className="text-slate-300 mb-6">
              Meet us in person at our London headquarters. Schedule your visit in advance.
            </p>
            <div className="text-fuchsia-300 font-semibold">
              75 Uxbridge Rd, London W5 5SL, England UK
            </div>
          </div>

          <div className="glass-magenta border border-fuchsia-500/30 rounded-3xl p-8 hover:border-pink-400/50 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/30">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Office Hours</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="font-semibold text-white">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="font-semibold text-white">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-purple border border-purple-500/30 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-purple-500/20 animate-glow">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168,85,247,0.2) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need immediate assistance?
            </h3>
            <p className="text-xl text-fuchsia-200 mb-8 max-w-2xl mx-auto">
              For urgent matters or account-related emergencies, our priority support team is available 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-14 py-4 glass-magenta border border-fuchsia-400/30 text-white rounded-xl hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all font-semibold">
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
