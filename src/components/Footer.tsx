import { TrendingUp, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-purple-500/10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 animate-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
                Globalmarketacess
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Founded in 2014, Globalmarketacess operates from London, UK, providing secure and sophisticated trading infrastructure for global markets. We deliver institutional-grade technology for equities, forex, cryptocurrency, and commodities trading.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="glass-purple w-10 h-10 hover:bg-purple-500/20 rounded-xl flex items-center justify-center transition-all border border-purple-500/10 hover:border-purple-500/30 animate-glow">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" className="glass-purple w-10 h-10 hover:bg-fuchsia-500/20 rounded-xl flex items-center justify-center transition-all border border-fuchsia-500/10 hover:border-fuchsia-500/30 animate-glow">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-fuchsia-400 transition-colors" />
              </a>
              <a href="#" className="glass-magenta w-10 h-10 hover:bg-magenta-500/20 rounded-xl flex items-center justify-center transition-all border border-magenta-500/10 hover:border-magenta-500/30 animate-glow">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-magenta-400 transition-colors" />
              </a>
              <a href="#" className="glass-purple w-10 h-10 hover:bg-pink-500/20 rounded-xl flex items-center justify-center transition-all border border-pink-500/10 hover:border-pink-500/30 animate-glow">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></span>
                Home
              </a></li>
              <li><a href="/login" className="text-slate-400 hover:text-fuchsia-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></span>
                Sign In
              </a></li>
              <li><a href="/register" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></span>
                Register
              </a></li>
              <li><a href="/faq" className="text-slate-400 hover:text-fuchsia-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></span>
                FAQ
              </a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></span>
                Contact
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">75 Uxbridge Rd, London W5 5SL, England UK</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@globalmarketacess.com" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                  support@globalmarketacess.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/10 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Regulatory Compliance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Globalmarketacess operates under strict regulatory oversight across multiple jurisdictions. Licensed and authorized to provide financial services. Registration number 10588120.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Risk Disclosure</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trading financial instruments involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results. Only trade with capital you can afford to lose.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-y border-purple-500/10">
            <div className="glass-purple px-5 py-2.5 rounded-xl border border-purple-500/10 animate-glow">
              <span className="text-slate-300 font-semibold text-sm">SSL Secured</span>
            </div>
            <div className="glass-magenta px-5 py-2.5 rounded-xl border border-fuchsia-500/10 animate-glow">
              <span className="text-slate-300 font-semibold text-sm">PCI Compliant</span>
            </div>
            <div className="glass-purple px-5 py-2.5 rounded-xl border border-purple-500/10 animate-glow">
              <span className="text-slate-300 font-semibold text-sm">ISO Certified</span>
            </div>
            <div className="glass-magenta px-5 py-2.5 rounded-xl border border-fuchsia-500/10 animate-glow">
              <span className="text-slate-300 font-semibold text-sm">FCA Regulated</span>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="text-slate-500 text-sm">
              All rights reserved. Copyright © 2014 - 2025 Globalmarketacess
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
