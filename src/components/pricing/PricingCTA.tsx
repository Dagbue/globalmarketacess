import {  Mail, MapPin, MessageCircle, Shield, Users, TrendingUp, Sparkles } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function PricingCTA() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  const handleBack2 = () => {
    navigate('/contact');
  };
  return (
    <>
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-8 animate-glow">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold text-sm tracking-wide">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">
                Why elite investors choose us
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join thousands of sophisticated investors who trust us with their wealth aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group glass-purple backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Secure & Regulated</h3>
              <p className="text-purple-200 leading-relaxed mb-6">
                Military-grade security with 256-bit encryption. Your investments are fortified by cutting-edge security protocols and comprehensive insurance coverage.
              </p>
            </div>

            <div className="group glass-magenta backdrop-blur-xl rounded-3xl p-8 border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/20 animate-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Proven Excellence</h3>
              <p className="text-purple-200 leading-relaxed mb-6">
                Over 8 years of consistent premium returns with 98.7% client satisfaction. Our track record demonstrates unwavering excellence.
              </p>
            </div>

            <div className="group glass backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 animate-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Elite Support Team</h3>
              <p className="text-purple-200 leading-relaxed mb-6">
                Dedicated wealth advisors and 24/7 concierge support from certified financial strategists who champion your success.
              </p>
            </div>
          </div>

          <div className="glass-purple backdrop-blur-xl rounded-3xl p-12 lg:p-16 relative overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-glow">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h3 className="text-3xl lg:text-4xl font-black mb-6">
                  Ready to elevate your wealth journey?
                </h3>
                <p className="text-purple-200 text-lg mb-8 leading-relaxed">
                  Receive personalized guidance from our elite investment strategists. We'll craft the perfect wealth plan aligned with your financial vision.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-magenta rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0 border border-purple-500/30">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 mb-1">Email us</div>
                      <a
                        href="mailto:support@marketsignaltrades.com"
                        className="text-white font-semibold hover:text-fuchsia-300 transition-colors"
                      >
                        support@marketsignaltrades.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0 border border-purple-500/30">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 mb-1">Visit our office</div>
                      <div className="text-white font-semibold">
                        75 Uxbridge Rd, London W5 5SL, England UK
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                      onClick={handleBack2}
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-fuchsia-500/40 transition-all font-semibold group hover:scale-105">
                    <MessageCircle className="w-5 h-5" />
                    <span>Live VIP Chat</span>
                  </button>
                </div>
              </div>

              <div className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-purple-500/30">
                <h4 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-purple-500/30">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Create Your Account</h5>
                      <p className="text-purple-200 text-sm">Sign up in under 2 minutes with just your email</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-fuchsia-500/30">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Choose Your Plan</h5>
                      <p className="text-purple-200 text-sm">Select the wealth tier that matches your vision</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-pink-500/30">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Start Growing Wealth</h5>
                      <p className="text-purple-200 text-sm">Fund your account and watch your prosperity flourish</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-purple-500/30">
                  <div className="text-center">
                    <div className="text-purple-300 mb-6 font-semibold">Setup fee $0 - Begin for free</div>
                    <button
                        onClick={handleBack}
                        className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/40 transition-all font-semibold hover:scale-105">
                      Open Your Premium Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
