import { Mail, TrendingUp, BarChart3, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-500/10 rounded-full blur-[140px] animate-glow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Never Miss a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 animate-glow">
                Market Opportunity
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Get exclusive market intelligence, trading signals, and expert analysis delivered directly to your inbox.
              Stay informed with real-time insights from professional traders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="flex items-start space-x-3 animate-float">
                <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20 animate-glow">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Daily Market Insights</h3>
                  <p className="text-sm text-slate-400">Expert analysis and trends</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center flex-shrink-0 border border-fuchsia-500/20 animate-glow">
                  <BarChart3 className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Trading Signals</h3>
                  <p className="text-sm text-slate-400">Verified opportunities</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center flex-shrink-0 border border-pink-500/20 animate-glow">
                  <Bell className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Real-Time Alerts</h3>
                  <p className="text-sm text-slate-400">Instant notifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 animate-float" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 glass-purple rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20 animate-glow">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Weekly Digest</h3>
                  <p className="text-sm text-slate-400">Curated summaries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-3xl animate-glow"></div>
            <div className="relative glass-magenta rounded-3xl p-8 shadow-2xl border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-6">
                Join Our Newsletter
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl glass-purple border border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl glass-purple border border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1.5 w-4 h-4 text-purple-500 bg-slate-800 border-purple-500/30 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-400">
                    I agree to receive marketing communications and can unsubscribe anytime
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center justify-center space-x-2 animate-glow"
                >
                  <Mail className="w-5 h-5" />
                  <span>Subscribe Now</span>
                </button>
              </form>

              <p className="text-xs text-slate-500 text-center mt-6">
                Join thousands of traders receiving exclusive insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
