import { Shield, Lock, FileCheck, Eye, CheckCircle, ShieldCheck } from 'lucide-react';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Bank-Grade Encryption',
      description: '256-bit SSL encryption protects all your data and transactions with military-grade security.'
    },
    {
      icon: Shield,
      title: 'Two-Factor Authentication',
      description: 'Additional security layer ensuring only you can access your trading account.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Licensed and regulated across multiple jurisdictions including FCA, CySEC, and ASIC.'
    },
    {
      icon: Eye,
      title: 'Fund Segregation',
      description: 'Client funds held in segregated accounts with tier-1 banks for maximum protection.'
    },
    {
      icon: ShieldCheck,
      title: 'Regular Audits',
      description: 'Independent third-party audits ensure transparency and compliance at all times.'
    },
    {
      icon: CheckCircle,
      title: 'Insurance Protection',
      description: 'Additional insurance coverage protecting client funds up to regulated limits.'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Security First</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Your Security Is Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Top Priority
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Trade with confidence knowing your funds and data are protected by industry-leading security protocols and regulatory compliance.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-10 group-hover:border-blue-800/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">
                Setting New Standards in Global Finance Technology
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Globalmarketacess is on a mission to provide a fair, secure, and easy-to-use platform with the highest class of financial technologies globally.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-10 group-hover:border-blue-800/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">
                Democratizing Wealth-Building Opportunities
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                We believe everyone should have equal access to financial markets, regardless of their background or location.
              </p>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl group-hover:bg-blue-600/10 transition-all"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 group-hover:border-blue-800/50 transition-all h-full">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 font-medium">FCA Regulated</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 font-medium">SSL Secured</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 font-medium">ISO Certified</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 font-medium">Funds Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
