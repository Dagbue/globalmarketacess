import { Mail, TrendingUp, BarChart3, Bell, Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[140px] animate-glow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ccff08_1px,transparent_1px),linear-gradient(to_bottom,#00ccff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Unique centered layout with floating cards */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 glass-strong border border-blue-500/30 rounded-full mb-8 shadow-lg shadow-blue-500/20 animate-glow">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">STAY INFORMED</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Never Miss a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
              Market Opportunity
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Get exclusive market intelligence, trading signals, and expert analysis delivered directly to your inbox.
            Stay informed with real-time insights from professional traders.
          </p>
        </div>

        {/* Floating benefit cards in a circular arrangement */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Daily Market Insights', description: 'Expert analysis and trends', color: 'from-blue-500 to-cyan-600' },
              { icon: BarChart3, title: 'Trading Signals', description: 'Verified opportunities', color: 'from-cyan-500 to-blue-500' },
              { icon: Bell, title: 'Real-Time Alerts', description: 'Instant notifications', color: 'from-blue-600 to-cyan-500' },
              { icon: Mail, title: 'Weekly Digest', description: 'Curated summaries', color: 'from-cyan-600 to-blue-600' },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/30 hover:shadow-[0_15px_50px_-10px_rgba(0,102,255,0.4)] transition-all duration-500 hover:-translate-y-2 text-center animate-float"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 animate-glow`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-sm text-slate-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Unique subscription form - centered with glassmorphism */}
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-glow"></div>

          <div className="relative glass-strong rounded-3xl p-10 lg:p-12 shadow-2xl border border-blue-500/30 backdrop-blur-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40 animate-glow">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                Join Our Newsletter
              </h3>
              <p className="text-slate-400">
                Get exclusive insights delivered to your inbox weekly
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl glass-card border border-blue-500/30 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all backdrop-blur-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl glass-card border border-blue-500/30 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all backdrop-blur-xl"
                  />
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 border border-blue-500/20">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-5 h-5 text-blue-500 bg-slate-800 border-blue-500/30 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-300 leading-relaxed">
                    I agree to receive marketing communications and can unsubscribe anytime. By subscribing, you'll get access to exclusive trading insights and market analysis.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center justify-center space-x-3 animate-glow group"
              >
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Subscribe Now</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-blue-500/20">
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-400">50K+ Subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-400">No Spam Ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-400">Unsubscribe Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
