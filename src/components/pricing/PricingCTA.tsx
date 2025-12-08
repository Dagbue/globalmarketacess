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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm tracking-wide">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
              Why investors choose us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied investors who trust us with their financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Secure & Regulated</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bank-level security with 256-bit encryption. Your investments are protected by industry-leading security protocols and insurance.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over 8 years of consistent returns with 98.7% customer satisfaction. Our performance speaks for itself.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Expert Support Team</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dedicated account managers and 24/7 support from certified financial advisors who understand your goals.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h3 className="text-3xl lg:text-4xl font-black mb-6">
                  Ready to start your investment journey?
                </h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Get personalized guidance from our investment experts. We'll help you choose the perfect plan for your financial goals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-100 mb-1">Email us</div>
                      <a
                        href="mailto:support@marketsignaltrades.com"
                        className="text-white font-semibold hover:underline"
                      >
                        support@marketsignaltrades.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-100 mb-1">Visit our office</div>
                      <div className="text-white font-semibold">
                        75 Uxbridge Rd, London W5 5SL, England UK
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                      onClick={handleBack2}
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-900 rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all font-semibold group">
                    <MessageCircle className="w-5 h-5" />
                    <span>Live Chat Support</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Create Your Account</h5>
                      <p className="text-gray-600 text-sm">Sign up in under 2 minutes with just your email</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Choose Your Plan</h5>
                      <p className="text-gray-600 text-sm">Select the investment tier that matches your goals</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Start Investing</h5>
                      <p className="text-gray-600 text-sm">Fund your account and watch your wealth grow</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-gray-600 mb-6">Setup fee $0 - Start for free</div>
                    <button
                        onClick={handleBack}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold">
                      Open Your Account Now
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
