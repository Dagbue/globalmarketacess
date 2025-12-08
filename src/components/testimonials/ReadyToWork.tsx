import { ArrowRight, Mail, MapPin, Shield, Users, Award, Sparkles, CheckCircle } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ReadyToWork() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-100 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-600 font-bold text-sm tracking-wide">START YOUR JOURNEY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Ready to start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">trading journey?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of successful traders and take control of your financial future
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center">Secure & Regulated</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              Your funds are protected with bank-level security and regulatory compliance
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center">Expert Support</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              24/7 dedicated support team ready to help you succeed in your trading
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center">Award-Winning Platform</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              Industry-recognized platform trusted by traders worldwide
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              <div className="text-white space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-4">
                    Let's start working together
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Have questions? Our team is here to help you get started and guide you every step of the way.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1 font-medium">Email us at</div>
                      <a
                        href="mailto:support@marketsignaltrades.com"
                        className="text-white font-bold hover:text-cyan-400 transition-colors"
                      >
                        support@marketsignaltrades.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1 font-medium">Visit us at</div>
                      <div className="text-white font-bold">
                        75 Uxbridge Rd, London W5 5SL, England UK
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-black text-slate-900 mb-2">$1,000</div>
                    <div className="text-slate-600 font-medium text-l">Minimum deposit to start</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {['Instant account setup', 'No hidden fees', 'Professional tools included'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                      onClick={handleBack}
                      className="group w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center space-x-3">
                    <span>Open Free Account</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="mt-4 text-center text-sm text-slate-500">
                    No credit card required
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 text-center">
                  <div className="text-slate-300 text-sm mb-2 font-medium">Trusted by</div>
                  <div className="text-4xl font-black text-white mb-1">50,000+</div>
                  <div className="text-slate-400">Active traders worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}