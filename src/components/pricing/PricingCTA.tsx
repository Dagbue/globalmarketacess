import {  Mail, MapPin, MessageCircle, Shield, Users, TrendingUp, Sparkles, Award, Target, Phone, CheckCircle } from 'lucide-react';
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
      <section className="py-28 px-6 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Heavy Glass */}
          <div className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0066ff]/20 rounded-full blur-[120px]"></div>

            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 glass-strong rounded-full blur-lg scale-110"></div>
              <div className="relative inline-flex items-center px-8 py-4 glass-card border-2 border-[#0080ff]/50 rounded-full shadow-xl shadow-[#0066ff]/30 animate-glow backdrop-blur-3xl">
                <Sparkles className="w-5 h-5 text-[#00ccff] mr-3 animate-pulse" />
                <span className="text-[#00ccff] font-bold text-base tracking-wide">Why Choose Us</span>
                <Award className="w-5 h-5 text-[#0080ff] ml-3 animate-pulse" />
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
                Why elite investors choose us
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto font-medium">
              Join thousands of sophisticated investors who trust us with their wealth aspirations
            </p>
          </div>

          {/* Features Grid with 3D Overlapping Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-28 relative">
            {/* Card 1 - Tilted with Multiple Layers */}
            <div className="group relative transform hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 glass-strong rounded-3xl rotate-3 scale-95 opacity-30 blur-lg"></div>
              <div className="absolute inset-0 glass-strong rounded-3xl -rotate-2 scale-97 opacity-50 blur-md"></div>
              <div className="relative glass-card backdrop-blur-3xl rounded-3xl p-10 border-2 border-[#0066ff]/40 hover:border-[#0080ff]/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#0066ff]/30 rotate-1 hover:rotate-0">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 glass-strong rounded-full blur-2xl opacity-40"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-[#0066ff]/50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-3xl blur-2xl opacity-70"></div>
                    <Shield className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5">Secure & Regulated</h3>
                  <p className="text-blue-200 leading-relaxed font-medium text-base">
                    Military-grade security with 256-bit encryption. Your investments are fortified by cutting-edge security protocols and comprehensive insurance coverage.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Featured Center Card with Extra Emphasis */}
            <div className="group relative transform hover:scale-110 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 glass-strong rounded-3xl -rotate-1 scale-96 opacity-40 blur-lg"></div>
              <div className="absolute inset-0 glass-strong rounded-3xl rotate-2 scale-98 opacity-60 blur-sm"></div>
              <div className="relative glass-card backdrop-blur-3xl rounded-3xl p-10 border-2 border-[#00ccff]/60 hover:border-[#00ccff]/90 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-[#00ccff]/40 scale-105 -rotate-1 hover:rotate-0">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 glass-strong rounded-full blur-2xl opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#00ccff] to-[#0080ff] rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-[#00ccff]/60 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff] to-[#0080ff] rounded-3xl blur-2xl opacity-70 animate-pulse"></div>
                    <TrendingUp className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5">Proven Excellence</h3>
                  <p className="text-blue-200 leading-relaxed font-medium text-base">
                    Over 8 years of consistent premium returns with 98.7% client satisfaction. Our track record demonstrates unwavering excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Stacked Layers */}
            <div className="group relative transform hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 glass-strong rounded-3xl -rotate-3 scale-95 opacity-30 blur-lg"></div>
              <div className="absolute inset-0 glass-strong rounded-3xl rotate-2 scale-97 opacity-50 blur-md"></div>
              <div className="relative glass-card backdrop-blur-3xl rounded-3xl p-10 border-2 border-[#0080ff]/40 hover:border-[#00ccff]/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#0080ff]/30 -rotate-1 hover:rotate-0">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 glass-strong rounded-full blur-2xl opacity-40"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-[#0080ff]/50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-3xl blur-2xl opacity-70"></div>
                    <Users className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5">Elite Support Team</h3>
                  <p className="text-blue-200 leading-relaxed font-medium text-base">
                    Dedicated wealth advisors and 24/7 concierge support from certified financial strategists who champion your success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Section with Asymmetric Layout */}
          <div className="relative">
            {/* Multi-layer Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-[#00ccff] to-[#0080ff] rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#0080ff] via-[#0066ff] to-[#00ccff] rounded-[3rem] blur-2xl opacity-15"></div>

            {/* Stacked Glass Backgrounds */}
            <div className="absolute inset-0 glass-strong rounded-[3rem] -rotate-1 scale-98 opacity-30 blur-sm"></div>
            <div className="absolute inset-0 glass-strong rounded-[3rem] rotate-1 scale-99 opacity-50"></div>

            <div className="relative glass-card backdrop-blur-3xl rounded-[3rem] p-10 lg:p-16 shadow-2xl overflow-hidden border-2 border-[#00ccff]/40">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff12_1px,transparent_1px),linear-gradient(to_bottom,#0066ff12_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

              {/* Floating Orbs */}
              <div className="absolute top-20 right-20 w-60 h-60 bg-[#00ccff]/15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#0066ff]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Side - Content */}
                <div className="text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl shadow-2xl shadow-[#00ccff]/50 mb-8">
                    <Target className="w-10 h-10 text-white"/>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                    Ready to elevate your wealth journey?
                  </h3>
                  <p className="text-blue-200 text-lg mb-10 leading-relaxed font-medium">
                    Receive personalized guidance from our elite investment strategists. We'll craft the perfect wealth plan aligned with your financial vision.
                  </p>

                  {/* Contact Info Cards with Glass */}
                  <div className="space-y-4 mb-10">
                    <div className="group flex items-start space-x-4 glass-strong rounded-2xl p-5 backdrop-blur-2xl border border-[#0066ff]/30 hover:border-[#00ccff]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#0066ff]/20">
                      <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center backdrop-blur-xl flex-shrink-0 border border-[#0066ff]/30 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-[#00ccff]" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-300 mb-1 font-semibold">Email us</div>
                        <a
                          href="mailto:support@marketsignaltrades.com"
                          className="text-white font-bold hover:text-[#00ccff] transition-colors text-base"
                        >
                          support@marketsignaltrades.com
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 glass-strong rounded-2xl p-5 backdrop-blur-2xl border border-[#0066ff]/30 hover:border-[#00ccff]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#0066ff]/20">
                      <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center backdrop-blur-xl flex-shrink-0 border border-[#0066ff]/30 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-[#00ccff]" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-300 mb-1 font-semibold">Visit our office</div>
                        <div className="text-white font-bold text-base">
                          75 Uxbridge Rd, London W5 5SL, England UK
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                        onClick={handleBack2}
                        className="group/btn relative inline-flex items-center space-x-2 px-8 py-5 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#00ccff]/60 transition-all font-black text-base hover:scale-105 border-2 border-white/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] via-[#0080ff] to-[#0066ff] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      <MessageCircle className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Live VIP Chat</span>
                    </button>

                    <button
                        onClick={handleBack}
                        className="px-8 py-5 glass-strong text-white rounded-2xl hover:bg-[#0066ff]/30 transition-all font-black text-base border-2 border-[#0066ff]/50 hover:border-[#00ccff]/70 hover:shadow-xl hover:shadow-[#0066ff]/30 backdrop-blur-2xl">
                      View Plans
                    </button>
                  </div>
                </div>

                {/* Right Side - Quick Start Card with Overlapping Layers */}
                <div className="relative">
                  {/* Stacked Background Layers */}
                  <div className="absolute inset-0 glass-strong rounded-3xl rotate-2 scale-95 opacity-30 blur-md"></div>
                  <div className="absolute inset-0 glass-strong rounded-3xl -rotate-1 scale-97 opacity-50 blur-sm"></div>

                  <div className="relative glass-card backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border-2 border-[#0066ff]/40 hover:border-[#00ccff]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[#0066ff]/30">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-3xl font-black text-white">Quick Start Guide</h4>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-xl flex items-center justify-center shadow-xl shadow-[#0066ff]/40">
                        <CheckCircle className="w-6 h-6 text-white"/>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Step 1 */}
                      <div className="relative group/step">
                        <div className="absolute inset-0 glass-strong rounded-2xl opacity-0 group-hover/step:opacity-100 transition-opacity blur-sm"></div>
                        <div className="relative flex items-start space-x-5 glass-strong rounded-2xl p-5 backdrop-blur-xl border border-[#0066ff]/20 hover:border-[#0080ff]/50 transition-all duration-300">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl shadow-xl shadow-[#0066ff]/40">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl blur-lg opacity-60"></div>
                            <span className="relative z-10">1</span>
                          </div>
                          <div>
                            <h5 className="font-black text-white mb-2 text-lg">Create Your Account</h5>
                            <p className="text-blue-200 text-sm font-medium">Sign up in under 2 minutes with just your email</p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative group/step">
                        <div className="absolute inset-0 glass-strong rounded-2xl opacity-0 group-hover/step:opacity-100 transition-opacity blur-sm"></div>
                        <div className="relative flex items-start space-x-5 glass-strong rounded-2xl p-5 backdrop-blur-xl border border-[#0066ff]/20 hover:border-[#00ccff]/50 transition-all duration-300">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl shadow-xl shadow-[#0080ff]/40">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl blur-lg opacity-60"></div>
                            <span className="relative z-10">2</span>
                          </div>
                          <div>
                            <h5 className="font-black text-white mb-2 text-lg">Choose Your Plan</h5>
                            <p className="text-blue-200 text-sm font-medium">Select the wealth tier that matches your vision</p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative group/step">
                        <div className="absolute inset-0 glass-strong rounded-2xl opacity-0 group-hover/step:opacity-100 transition-opacity blur-sm"></div>
                        <div className="relative flex items-start space-x-5 glass-strong rounded-2xl p-5 backdrop-blur-xl border border-[#0066ff]/20 hover:border-[#00ccff]/50 transition-all duration-300">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl shadow-xl shadow-[#00ccff]/40">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff] to-[#0066ff] rounded-2xl blur-lg opacity-60"></div>
                            <span className="relative z-10">3</span>
                          </div>
                          <div>
                            <h5 className="font-black text-white mb-2 text-lg">Start Growing Wealth</h5>
                            <p className="text-blue-200 text-sm font-medium">Fund your account and watch your prosperity flourish</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 pt-8 border-t-2 border-[#0066ff]/30">
                      <div className="relative">
                        <div className="absolute inset-0 glass-strong rounded-xl blur-md opacity-50"></div>
                        <div className="relative text-center glass-strong rounded-2xl p-6 backdrop-blur-xl border border-[#0066ff]/20">
                          <div className="text-[#00ccff] mb-6 font-black text-lg flex items-center justify-center">
                            <Sparkles className="w-5 h-5 mr-2"/>
                            Setup fee $0 - Begin for free
                            <Sparkles className="w-5 h-5 ml-2"/>
                          </div>
                          <button
                              onClick={handleBack}
                              className="group/final relative w-full bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#0080ff] text-white py-5 rounded-xl hover:shadow-xl hover:shadow-[#00ccff]/50 transition-all font-black text-base hover:scale-105 border-2 border-white/20 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] via-[#0066ff] to-[#0080ff] opacity-0 group-hover/final:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10">Open Your Premium Account</span>
                          </button>
                        </div>
                      </div>
                    </div>
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
