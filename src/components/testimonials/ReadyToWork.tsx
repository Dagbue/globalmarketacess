import { ArrowRight, Mail, MapPin, Shield, Users, Award, Rocket, CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function ReadyToWork() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const benefits = [
    { icon: Shield, title: 'Secure & Regulated', description: 'Bank-level security and full regulatory compliance' },
    { icon: Users, title: 'Expert Support', description: '24/7 dedicated team to help you succeed' },
    { icon: Award, title: 'Award-Winning', description: 'Industry-recognized platform trusted worldwide' },
  ];

  const features = ['Instant account setup', 'No hidden fees', 'Professional tools included'];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Start Your Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Trading Journey?
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands of successful traders and take control of your financial future
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-slate-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Start Working Together
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Have questions? Our team is here to help you get started and guide you every step of the way.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-800/50 transition-all">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1 font-medium">Email us at</div>
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
                    <div className="text-sm text-slate-400 mb-1 font-medium">Visit us at</div>
                    <div className="text-white font-semibold">
                      75 Uxbridge Rd, London W5 5SL, England UK
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-blue-400 mb-2">$1,000</div>
                  <div className="text-slate-400 font-medium">Minimum deposit to start</div>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBack}
                  className="group w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <span>Open Free Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-4 text-center text-sm text-slate-500">
                  No credit card required
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-600/20 rounded-xl p-6 text-center">
                <div className="text-slate-400 text-sm mb-2 font-medium">Trusted by</div>
                <div className="text-4xl font-bold text-blue-400 mb-1">50,000+</div>
                <div className="text-slate-400">Active traders worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}