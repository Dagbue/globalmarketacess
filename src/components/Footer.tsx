import { TrendingUp, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e27] text-slate-300 overflow-hidden border-t border-blue-900/30">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">
                Globalmarketacess
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Established in 2014 and headquartered in the heart of London, Globalmarketacess powers over 1.8 million
              traders worldwide with institutional-grade infrastructure. From equities and forex to cryptocurrencies
              and commodities, we deliver battle-tested technology, bank-level security, and execution trusted by
              professionals and retail traders alike.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800/40 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all border border-slate-700/50 hover:border-blue-600/50">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/40 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all border border-slate-700/50 hover:border-blue-600/50">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/40 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all border border-slate-700/50 hover:border-blue-600/50">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/40 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all border border-slate-700/50 hover:border-blue-600/50">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/auth/Login" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sign In
              </a></li>
              <li><a href="/auth/Register" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Register
              </a></li>
              <li><a href="/faq" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ
              </a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">75 Uxbridge Rd, London W5 5SL, England UK</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@globalmarketacess.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  support@globalmarketacess.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/30 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Regulatory Compliance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Globalmarketacess is authorised and regulated by multiple top-tier financial authorities.
                UK registered company No. 10588120 with headquarters in London.
                Client funds are fully segregated, held with Tier-1 banks, and protected by the Financial Services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Risk Disclosure</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
                Between 74–89% of retail investor accounts lose money when trading CFDs.
                You should consider whether you understand how CFDs work and whether you can afford to take the
                high risk of losing your money.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-y border-blue-900/30">
            <div className="px-5 py-2.5 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <span className="text-slate-300 font-semibold text-sm">SSL Secured</span>
            </div>
            <div className="px-5 py-2.5 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <span className="text-slate-300 font-semibold text-sm">PCI Compliant</span>
            </div>
            <div className="px-5 py-2.5 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <span className="text-slate-300 font-semibold text-sm">ISO Certified</span>
            </div>
            <div className="px-5 py-2.5 bg-slate-800/40 rounded-lg border border-slate-700/50">
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
