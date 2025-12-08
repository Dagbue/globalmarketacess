import { ArrowRight, Mail, MapPin, Shield, Users, Award, Sparkles, CheckCircle } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function ReadyToWork() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20 animate-glow">
            <Sparkles className="w-4 h-4 text-fuchsia-400 mr-2 animate-pulse" />
            <span className="text-purple-300 font-bold text-sm tracking-wide">START YOUR JOURNEY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">trading journey?</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Join thousands of successful traders and take control of your financial future
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          <div className="group glass-purple rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 text-center">Secure & Regulated</h3>
            <p className="text-purple-300 text-center leading-relaxed">
              Your funds are protected with bank-level security and regulatory compliance
            </p>
          </div>

          <div className="group glass-magenta rounded-3xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-500/50 hover:shadow-[0_20px_60px_-15px_rgba(232,121,249,0.4)] transition-all duration-500 hover:-translate-y-2 animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 text-center">Expert Support</h3>
            <p className="text-fuchsia-300 text-center leading-relaxed">
              24/7 dedicated support team ready to help you succeed in your trading
            </p>
          </div>

          <div className="group glass-purple rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 text-center">Award-Winning Platform</h3>
            <p className="text-purple-300 text-center leading-relaxed">
              Industry-recognized platform trusted by traders worldwide
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-glow"></div>

          <div className="relative glass-purple border border-purple-500/30 rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              <div className="text-white space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-4">
                    Let's start working together
                  </h3>
                  <p className="text-purple-300 text-lg leading-relaxed">
                    Have questions? Our team is here to help you get started and guide you every step of the way.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="group flex items-start space-x-4 p-4 glass border border-purple-500/20 rounded-2xl hover:glass-purple hover:border-purple-500/40 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-400 mb-1 font-medium">Email us at</div>
                      <a
                        href="mailto:support@marketsignaltrades.com"
                        className="text-white font-bold hover:text-fuchsia-400 transition-colors"
                      >
                        support@marketsignaltrades.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 glass border border-fuchsia-500/20 rounded-2xl hover:glass-magenta hover:border-fuchsia-500/40 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-400 mb-1 font-medium">Visit us at</div>
                      <div className="text-white font-bold">
                        75 Uxbridge Rd, London W5 5SL, England UK
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-8">
                <div className="glass-purple border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 mb-2">$1,000</div>
                    <div className="text-purple-300 font-medium text-l">Minimum deposit to start</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {['Instant account setup', 'No hidden fees', 'Professional tools included'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-purple-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                      onClick={handleBack}
                      className="group w-full px-8 py-5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center space-x-3 animate-glow">
                    <span>Open Free Account</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="mt-4 text-center text-sm text-purple-400">
                    No credit card required
                  </div>
                </div>

                <div className="glass-magenta border border-fuchsia-500/20 rounded-2xl p-6 text-center">
                  <div className="text-purple-400 text-sm mb-2 font-medium">Trusted by</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 mb-1">50,000+</div>
                  <div className="text-purple-300">Active traders worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
