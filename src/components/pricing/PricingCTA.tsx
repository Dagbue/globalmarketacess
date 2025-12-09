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
  const benefits = [
    { icon: Shield, title: 'Secure & Regulated', description: 'Bank-level security with 256-bit encryption. Your investments are protected by industry-leading security protocols and insurance.' },
    { icon: TrendingUp, title: 'Proven Track Record', description: 'Over 8 years of consistent returns with 98.7% customer satisfaction. Our performance speaks for itself.' },
    { icon: Users, title: 'Expert Support Team', description: 'Dedicated account managers and 24/7 support from certified financial advisors who understand your goals.' },
  ];

  return (
    <>
      <section className="relative py-24 px-6 bg-[#0a0e27]">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Investors
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                Choose Us
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Join thousands of satisfied investors who trust us with their financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                  <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-slate-800/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Investment Journey?
                </h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Get personalized guidance from our investment experts. We'll help you choose the perfect plan for your financial goals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-800/50 transition-all">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Email us</div>
                      <a
                        href="mailto:support@globalmarketacess.com"
                        className="text-white font-semibold hover:text-blue-400 transition-colors"
                      >
                        support@globalmarketacess.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-800/50 transition-all">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Visit our office</div>
                      <div className="text-white font-semibold">
                        75 Uxbridge Rd, London W5 5SL, England UK
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBack2}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Live Chat Support</span>
                </button>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-slate-700/50">
                <h4 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h4>

                <div className="space-y-6">
                  {[
                    { title: 'Create Your Account', desc: 'Sign up in under 2 minutes with just your email' },
                    { title: 'Choose Your Plan', desc: 'Select the investment tier that matches your goals' },
                    { title: 'Start Investing', desc: 'Fund your account and watch your wealth grow' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">{step.title}</h5>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <div className="text-center">
                    <div className="text-slate-400 mb-6">Setup fee $0 - Start for free</div>
                    <button
                      onClick={handleBack}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
                    >
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
