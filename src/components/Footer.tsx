import { TrendingUp, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Shield, Award, Lock, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Heavy Glassmorphic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#0066ff]/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/3 right-1/3 w-[700px] h-[700px] bg-[#0080ff]/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#00ccff]/10 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top Level - Brand Showcase with Heavy Glass */}
        <div className="py-12 border-b border-[#0066ff]/20">
          <div className="bg-gradient-to-br from-[#0066ff]/10 via-[#0080ff]/5 to-[#00ccff]/10 backdrop-blur-xl rounded-3xl p-8 border border-[#0066ff]/30 shadow-2xl shadow-[#0066ff]/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] via-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0066ff]/40 animate-pulse">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
                    Globalmarketacess
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Institutional-grade trading infrastructure since 2014
                </p>
              </div>

              {/* Social Links - Horizontal Layout */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/30 to-[#0080ff]/30 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-[#0066ff]/10 backdrop-blur-xl w-14 h-14 hover:bg-[#0066ff]/20 rounded-2xl flex items-center justify-center transition-all border border-[#0066ff]/30 hover:border-[#0066ff]/60 hover:scale-110">
                      <Facebook className="w-6 h-6 text-[#0066ff] group-hover:text-[#00ccff] transition-colors" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff]/30 to-[#00ccff]/30 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-[#0080ff]/10 backdrop-blur-xl w-14 h-14 hover:bg-[#0080ff]/20 rounded-2xl flex items-center justify-center transition-all border border-[#0080ff]/30 hover:border-[#0080ff]/60 hover:scale-110">
                      <Twitter className="w-6 h-6 text-[#0080ff] group-hover:text-[#00ccff] transition-colors" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/30 to-[#0066ff]/30 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-[#00ccff]/10 backdrop-blur-xl w-14 h-14 hover:bg-[#00ccff]/20 rounded-2xl flex items-center justify-center transition-all border border-[#00ccff]/30 hover:border-[#00ccff]/60 hover:scale-110">
                      <Linkedin className="w-6 h-6 text-[#00ccff] group-hover:text-[#0080ff] transition-colors" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/30 to-[#00ccff]/30 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-[#0066ff]/10 backdrop-blur-xl w-14 h-14 hover:bg-[#0066ff]/20 rounded-2xl flex items-center justify-center transition-all border border-[#0066ff]/30 hover:border-[#0066ff]/60 hover:scale-110">
                      <Instagram className="w-6 h-6 text-[#0066ff] group-hover:text-[#00ccff] transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Level - Navigation & Contact in Glass Cards */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Card */}
            <div className="bg-gradient-to-br from-[#0066ff]/5 via-[#0080ff]/3 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-[#0066ff]/20 hover:border-[#0066ff]/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#0066ff]/10">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                <div className="w-2 h-2 bg-[#0066ff] rounded-full mr-3 animate-pulse"></div>
                About Us
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Founded in 2014, Globalmarketacess operates from London, UK, providing secure and sophisticated trading infrastructure for global markets. We deliver institutional-grade technology for equities, forex, cryptocurrency, and commodities trading.
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="bg-gradient-to-br from-[#0080ff]/5 via-[#00ccff]/3 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#0080ff]/10">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                <div className="w-2 h-2 bg-[#0080ff] rounded-full mr-3 animate-pulse"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-slate-400 hover:text-[#0066ff] transition-all flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-[#0066ff]" />
                    <span className="group-hover:translate-x-2 transition-transform">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className="text-slate-400 hover:text-[#0080ff] transition-all flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-[#0080ff]" />
                    <span className="group-hover:translate-x-2 transition-transform">Sign In</span>
                  </a>
                </li>
                <li>
                  <a href="/register" className="text-slate-400 hover:text-[#00ccff] transition-all flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-[#00ccff]" />
                    <span className="group-hover:translate-x-2 transition-transform">Register</span>
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-slate-400 hover:text-[#0066ff] transition-all flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-[#0066ff]" />
                    <span className="group-hover:translate-x-2 transition-transform">FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-[#0080ff] transition-all flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-[#0080ff]" />
                    <span className="group-hover:translate-x-2 transition-transform">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#00ccff]/5 via-[#0066ff]/3 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-[#00ccff]/20 hover:border-[#00ccff]/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#00ccff]/10">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                <div className="w-2 h-2 bg-[#00ccff] rounded-full mr-3 animate-pulse"></div>
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-[#0066ff] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-400 text-sm">75 Uxbridge Rd, London W5 5SL, England UK</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Mail className="w-5 h-5 text-[#0080ff] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:support@globalmarketacess.com" className="text-slate-400 hover:text-[#0080ff] transition-colors text-sm">
                    support@globalmarketacess.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Level - Compliance & Risk in Dual Glass Sections */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#0066ff]/8 via-[#0080ff]/4 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-[#0066ff]/25 shadow-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#0066ff] mr-3" />
                <h4 className="text-white font-bold text-lg">Regulatory Compliance</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Globalmarketacess operates under strict regulatory oversight across multiple jurisdictions. Licensed and authorized to provide financial services. Registration number 10588120.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0080ff]/8 via-[#00ccff]/4 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-[#0080ff]/25 shadow-xl">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-[#0080ff] mr-3" />
                <h4 className="text-white font-bold text-lg">Risk Disclosure</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trading financial instruments involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results. Only trade with capital you can afford to lose.
              </p>
            </div>
          </div>

          {/* Security Badges in Heavy Glass Container */}
          <div className="bg-gradient-to-r from-[#0066ff]/5 via-[#0080ff]/8 to-[#00ccff]/5 backdrop-blur-2xl rounded-2xl p-6 border border-[#0066ff]/30 shadow-2xl mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-[#0066ff]/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0066ff]/15 to-[#0080ff]/10 backdrop-blur-xl px-6 py-3 rounded-xl border border-[#0066ff]/40 hover:border-[#0066ff]/60 transition-all">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-[#0066ff]" />
                    <span className="text-slate-300 font-semibold text-sm">SSL Secured</span>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-[#0080ff]/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0080ff]/15 to-[#00ccff]/10 backdrop-blur-xl px-6 py-3 rounded-xl border border-[#0080ff]/40 hover:border-[#0080ff]/60 transition-all">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#0080ff]" />
                    <span className="text-slate-300 font-semibold text-sm">PCI Compliant</span>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-[#00ccff]/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#00ccff]/15 to-[#0066ff]/10 backdrop-blur-xl px-6 py-3 rounded-xl border border-[#00ccff]/40 hover:border-[#00ccff]/60 transition-all">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#00ccff]" />
                    <span className="text-slate-300 font-semibold text-sm">ISO Certified</span>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-[#0066ff]/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0066ff]/15 to-[#0080ff]/10 backdrop-blur-xl px-6 py-3 rounded-xl border border-[#0066ff]/40 hover:border-[#0066ff]/60 transition-all">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-[#0066ff]" />
                    <span className="text-slate-300 font-semibold text-sm">FCA Regulated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Level - Copyright in Heavy Glass Bar */}
        <div className="pb-8">
          <div className="bg-gradient-to-r from-[#0066ff]/10 via-[#0080ff]/15 to-[#00ccff]/10 backdrop-blur-2xl rounded-2xl px-8 py-6 border border-[#0066ff]/30 shadow-2xl shadow-[#0066ff]/10">
            <div className="text-center">
              <div className="inline-block">
                <p className="text-slate-400 text-sm font-medium">
                  All rights reserved. Copyright © 2014 - 2025{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] font-bold">
                    Globalmarketacess
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
