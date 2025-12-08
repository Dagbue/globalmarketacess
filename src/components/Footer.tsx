import { Sparkles, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden border-t border-emerald-500/20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-60"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/40">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400">
                Globalmarketacess
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-base">
              Established in 2014, headquartered in London, UK. We provide institutional-grade trading infrastructure serving global markets. Licensed and regulated financial services provider specializing in equities, forex, cryptocurrencies, and commodities.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800/60 backdrop-blur-xl hover:bg-emerald-500/20 rounded-2xl flex items-center justify-center transition-all border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/60 backdrop-blur-xl hover:bg-emerald-500/20 rounded-2xl flex items-center justify-center transition-all border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/60 backdrop-blur-xl hover:bg-emerald-500/20 rounded-2xl flex items-center justify-center transition-all border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/60 backdrop-blur-xl hover:bg-emerald-500/20 rounded-2xl flex items-center justify-center transition-all border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/login" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sign In
              </a></li>
              <li><a href="/register" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Register
              </a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ
              </a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group text-base">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-8">Get In Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-base">75 Uxbridge Rd, London W5 5SL, England UK</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@globalmarketacess.com" className="text-gray-400 hover:text-emerald-400 transition-colors text-base">
                  support@globalmarketacess.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 pt-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-white font-black text-lg mb-5">Regulatory Information</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Globalmarketacess operates under comprehensive regulatory oversight across multiple jurisdictions. Fully licensed and authorized financial services provider. Company registration number 10588120.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black text-lg mb-5">Risk Warning</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Trading leveraged financial instruments carries substantial risk. Past performance does not guarantee future results. Invest responsibly with funds you can afford to lose.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 py-10 border-y border-emerald-500/20">
            <div className="px-6 py-3 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-lg">
              <span className="text-gray-300 font-bold text-base">SSL Secured</span>
            </div>
            <div className="px-6 py-3 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-lg">
              <span className="text-gray-300 font-bold text-base">PCI Compliant</span>
            </div>
            <div className="px-6 py-3 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-lg">
              <span className="text-gray-300 font-bold text-base">ISO Certified</span>
            </div>
            <div className="px-6 py-3 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-lg">
              <span className="text-gray-300 font-bold text-base">FCA Regulated</span>
            </div>
          </div>

          <div className="pt-10 text-center">
            <p className="text-gray-500 text-base">
              All rights reserved. Copyright © 2014 - 2025 Globalmarketacess
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
