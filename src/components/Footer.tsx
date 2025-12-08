import { TrendingUp, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-slate-300 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-dark-blue-500/10 to-dark-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center shadow-glass">
                <TrendingUp className="w-6 h-6 text-dark-blue-400" />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-dark-blue-200 to-dark-blue-300">
                Globalmarketacess
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Founded in 2014, Globalmarketacess operates from London, UK, providing secure and sophisticated trading infrastructure for global markets. We deliver institutional-grade technology for equities, forex, cryptocurrency, and commodities trading.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:glass-hover hover:shadow-glass">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:glass-hover hover:shadow-glass">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:glass-hover hover:shadow-glass">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:glass-hover hover:shadow-glass">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-dark-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/login" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-dark-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sign In
              </a></li>
              <li><a href="/register" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-dark-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Register
              </a></li>
              <li><a href="/faq" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-dark-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ
              </a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-dark-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dark-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">75 Uxbridge Rd, London W5 5SL, England UK</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-dark-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@globalmarketacess.com" className="text-slate-300 hover:text-white transition-colors">
                  support@globalmarketacess.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Regulatory Compliance</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Globalmarketacess operates under strict regulatory oversight across multiple jurisdictions. Licensed and authorized to provide financial services. Registration number 10588120.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Risk Disclosure</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Trading financial instruments involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results. Only trade with capital you can afford to lose.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-y border-white/10">
            <div className="px-5 py-2.5 glass-card rounded-xl shadow-glass">
              <span className="text-white font-semibold text-sm">SSL Secured</span>
            </div>
            <div className="px-5 py-2.5 glass-card rounded-xl shadow-glass">
              <span className="text-white font-semibold text-sm">PCI Compliant</span>
            </div>
            <div className="px-5 py-2.5 glass-card rounded-xl shadow-glass">
              <span className="text-white font-semibold text-sm">ISO Certified</span>
            </div>
            <div className="px-5 py-2.5 glass-card rounded-xl shadow-glass">
              <span className="text-white font-semibold text-sm">FCA Regulated</span>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="text-slate-400 text-sm">
              All rights reserved. Copyright © 2014 - 2025 Globalmarketacess
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
