import { Info, TrendingUp, Shield, DollarSign, Clock, CheckCircle } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import {useNavigate} from "react-router-dom";

type Package = {
  id: string;
  name: string;
  percentage: number;
  duration: string;
  durationMonths: number;
  minimumDeposit: number;
  dailyRate: string;
  color: string;
  gradient: string;
  features: string[];
};

export default function Packages() {
  const packages: Package[] = [
    {
      id: 'silver',
      name: 'Silver',
      percentage: 10,
      duration: '4 Months',
      durationMonths: 4,
      minimumDeposit: 5000,
      dailyRate: '1.2%',
      color: 'from-gray-400 to-gray-600',
      gradient: 'from-gray-500/20 via-slate-900/20 to-slate-950',
      features: [
        'ENHANCED SECURITY',
        '1.2% DAILY',
        'GUARANTEED ROI',
        '24/7 SUPPORT',
        'Investment capital has a 30-day maturity term.',
        'Capital release is available on the exact maturity date.'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      percentage: 20,
      duration: '8 Months',
      durationMonths: 8,
      minimumDeposit: 25000,
      dailyRate: '1.4%',
      color: 'from-yellow-400 to-amber-600',
      gradient: 'from-amber-500/20 via-slate-900/20 to-slate-950',
      features: [
        'ENHANCED SECURITY',
        '1.4% DAILY',
        'GUARANTEED ROI',
        '24/7 SUPPORT',
        'Investment capital has a 30-day maturity term.',
        'Capital release is available on the exact maturity date.'
      ]
    },
    {
      id: 'diamond',
      name: 'Diamond',
      percentage: 30,
      duration: '12 Months',
      durationMonths: 12,
      minimumDeposit: 100000,
      dailyRate: '1.6%',
      color: 'from-cyan-400 to-blue-600',
      gradient: 'from-cyan-500/20 via-slate-900/20 to-slate-950',
      features: [
        'ENHANCED SECURITY',
        '1.6% DAILY',
        'GUARANTEED ROI',
        '24/7 SUPPORT',
        'Investment capital has a 30-day maturity term.',
        'Capital release is available on the exact maturity date.'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      percentage: 50,
      duration: '24 Months',
      durationMonths: 24,
      minimumDeposit: 250000,
      dailyRate: '1.8%',
      color: 'from-slate-300 to-slate-600',
      gradient: 'from-slate-400/20 via-slate-900/20 to-slate-950',
      features: [
        'ENHANCED SECURITY',
        '1.8% DAILY',
        'GUARANTEED ROI',
        '24/7 SUPPORT',
        'Investment capital has a 30-day maturity term.',
        'Capital release is available on the exact maturity date.'
      ]
    }
  ];
  const navigate = useNavigate();

  const getIcon = (feature: string) => {
    if (feature.includes('SECURITY')) return Shield;
    if (feature.includes('DAILY')) return TrendingUp;
    if (feature.includes('ROI')) return DollarSign;
    if (feature.includes('SUPPORT')) return Clock;
    return CheckCircle;
  };

  const handleBack = () => {
    navigate('/dashboard/fund-wallet');
  };

  return (
    <DashboardLayout>
      <div className="p-6 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white font-black text-4xl mb-3">Choose an Investment Plan</h1>
          <p className="text-gray-400 text-lg">Select the perfect investment package that suits your financial goals</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gradient-to-br ${pkg.gradient} border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5`}></div>

              <div className="relative p-8">
                {/* Header */}
                <div className="text-center mb-8 pb-6 border-b border-slate-800">
                  <h2 className="text-white font-black text-3xl mb-4">{pkg.name}</h2>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-white font-black text-6xl">{pkg.percentage}</span>
                      <span className="text-gray-400 font-bold text-3xl">%</span>
                    </div>
                  </div>

                  <div className="text-gray-400 text-lg font-medium mb-6">
                    {pkg.duration}
                  </div>

                  <button
                      onClick={handleBack}
                      className="w-full max-w-xs mx-auto bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
                    Invest Now
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {/* Minimum Deposit */}
                  <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                    <span className="text-white font-bold text-sm">
                      ${pkg.minimumDeposit.toLocaleString()} MINIMUM DEPOSIT
                    </span>
                    <button className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all group">
                      <Info className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </button>
                  </div>

                  {/* Other Features */}
                  {pkg.features.map((feature, index) => {
                    const Icon = getIcon(feature);
                    const isLongText = feature.length > 30;

                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-slate-950/30 rounded-xl border border-slate-800/50 hover:bg-slate-950/50 transition-all"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {!isLongText && (
                            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-gray-400" />
                            </div>
                          )}
                          <span className={`text-white ${isLongText ? 'text-sm' : 'font-bold text-sm'}`}>
                            {feature}
                          </span>
                        </div>
                        <button className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all group flex-shrink-0">
                          <Info className="w-4 h-4 text-gray-400 group-hover:text-white" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Badge */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-l font-medium">Active Investment Plan</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 via-slate-900/50 to-slate-950 border border-blue-500/30 rounded-3xl p-8 text-center">
            <h3 className="text-white font-black text-2xl mb-3">Need Help Choosing?</h3>
            <p className="text-gray-400 mb-6">
              Our investment advisors are available 24/7 to help you select the perfect package for your financial goals.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all">
              Contact Support
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-white font-black text-2xl mb-1">$50M+</div>
              <div className="text-gray-400 text-sm">Total Invested</div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-white font-black text-2xl mb-1">25K+</div>
              <div className="text-gray-400 text-sm">Active Investors</div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-white font-black text-2xl mb-1">100%</div>
              <div className="text-gray-400 text-sm">Secure & Protected</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
