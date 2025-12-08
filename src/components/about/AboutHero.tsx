import { TrendingUp, Users, Globe, Award, ArrowRight, LineChart } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '150K+', label: 'Active Traders' },
    { value: '$2.5B+', label: 'Trading Volume' },
    { value: '180+', label: 'Countries Served' },
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">About Globalmarketacess</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Democratizing Global Financial Markets for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Every Investor
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Since 2014, we've been breaking down barriers in financial trading. Our mission is to provide institutional-grade trading infrastructure accessible to everyone, everywhere.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
            >
              Start Trading
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/40 hover:bg-slate-700/40 text-white rounded-lg font-semibold transition-all border border-slate-700/50 hover:border-blue-600/50"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl group-hover:bg-blue-600/10 transition-all"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center group-hover:border-blue-800/50 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 group-hover:border-blue-800/50 transition-all">
              <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-slate-400 leading-relaxed">
                Operating across 180+ countries with 24/7 multilingual support for traders worldwide.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 group-hover:border-blue-800/50 transition-all">
              <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Technology</h3>
              <p className="text-slate-400 leading-relaxed">
                Lightning-fast execution with institutional-grade infrastructure and real-time market data.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 group-hover:border-blue-800/50 transition-all">
              <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Leader</h3>
              <p className="text-slate-400 leading-relaxed">
                Award-winning platform trusted by thousands of traders and institutional clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}