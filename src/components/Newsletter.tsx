import { Mail, TrendingUp, LineChart, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-36 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/15 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter">
              Stay Ahead of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 mt-2">
                The Market
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
              Receive premium market intelligence, actionable trading signals, and expert insights delivered straight to your inbox. Never miss critical market movements again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-emerald-500/15 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <TrendingUp className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-black text-white mb-2 text-lg">Market Analysis</h3>
                  <p className="text-sm text-gray-400">Professional insights daily</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-teal-500/15 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-teal-500/30 shadow-lg shadow-teal-500/20">
                  <LineChart className="w-7 h-7 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-black text-white mb-2 text-lg">Trade Signals</h3>
                  <p className="text-sm text-gray-400">High-probability setups</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-lime-500/15 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-lime-500/30 shadow-lg shadow-lime-500/20">
                  <Bell className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-black text-white mb-2 text-lg">Live Alerts</h3>
                  <p className="text-sm text-gray-400">Instant event notifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-green-500/15 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-green-500/30 shadow-lg shadow-green-500/20">
                  <Mail className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="font-black text-white mb-2 text-lg">Weekly Reports</h3>
                  <p className="text-sm text-gray-400">Comprehensive summaries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-lime-500/25 rounded-[3rem] blur-[80px]"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl border border-emerald-500/30">
              <h3 className="text-4xl font-black text-white mb-8 tracking-tight">
                Subscribe Today
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-800/60 backdrop-blur-xl border border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-800/60 backdrop-blur-xl border border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1.5 w-5 h-5 text-emerald-500 bg-gray-800 border-emerald-500/30 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed">
                    I agree to receive trading insights and can unsubscribe anytime
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all font-black text-xl hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Mail className="w-6 h-6" />
                  <span>Join Newsletter</span>
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-8">
                Join 50,000+ traders receiving premium market insights weekly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
