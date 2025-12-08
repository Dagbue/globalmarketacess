import { Mail, TrendingUp, BarChart3, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-4xl font-black text-white leading-tight">
              Stay Ahead of the Markets.
            </h2>
            <p className="text-l text-gray-300 leading-relaxed">
              Never miss a market opportunity. Receive curated market intelligence, actionable trading strategies, macroeconomic analysis, and early access to new platform features—all delivered to your inbox daily.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Market Insights</h3>
                  <p className="text-sm text-gray-400">Professional daily analysis</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Trading Signals</h3>
                  <p className="text-sm text-gray-400">Verified trade setups</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Price Alerts</h3>
                  <p className="text-sm text-gray-400">Instant breakout alerts</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Weekly Reports</h3>
                  <p className="text-sm text-gray-400">Comprehensive summaries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Subscribe to Our Newsletter
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to receive marketing communications and understand I can unsubscribe
                  at any time
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe Now</span>
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Join 50,000+ traders already receiving our insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
