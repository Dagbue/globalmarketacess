import { TrendingUp, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Market Signal Trades</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Established on November 14, 2014, Market Signal Trades has its headquarters at 75 Uxbridge Rd, London W5 5SL, UK. We are committed to delivering a secure and reliable platform for digital asset, stocks, and forex trading.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/login" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Login
              </a></li>
              <li><a href="/register" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Register
              </a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                F.A.Q
              </a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contacts
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">75 Uxbridge Rd, London W5 5SL, England UK</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@marketsignaltrades.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  support@marketsignaltrades.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Regulatory Information</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Market Signal Trades LLC is part of Market Signal Trades Group of companies with broker entities that are authorised and regulated across multiple jurisdictions. Registration number 10588120.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Risk Disclosure</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trading involves significant risk of loss. Past performance does not guarantee future results. Only invest capital you can afford to lose.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-y border-white/10">
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <span className="text-white font-semibold text-sm">Crystal Bitfury</span>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <span className="text-white font-semibold text-sm">CRPC Certified</span>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <span className="text-white font-semibold text-sm">Fireblocks</span>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <span className="text-white font-semibold text-sm">BaFin Regulated</span>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="text-gray-500 text-sm">
              All rights reserved. Copyright © 2014 - 2025 Market Signal Trades
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
