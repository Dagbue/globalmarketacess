import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useReadUserById from "../hooks/auth/useReadUserById.ts";


export default function AuthSuccess() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const { readUserById, isLoading } = useReadUserById();

  useEffect(() => {
    const fetchData = async () => {
      const storedUserId = localStorage.getItem('userId');

      if (storedUserId) {
        const response = await readUserById({ userId: storedUserId });
        if (response && response.user) {
          localStorage.setItem('userData', JSON.stringify(response.user));
          localStorage.setItem('userFirstName', JSON.stringify(response.user.firstName));
          localStorage.setItem('userLastName', JSON.stringify(response.user.lastName));
          localStorage.setItem('currency', JSON.stringify(response.user.currency));
        }
      }

      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const bitcoinRate = response.data.bitcoin.usd;
        const ethereumRate = response.data.ethereum.usd;
        localStorage.setItem('bitcoinRate', JSON.stringify(bitcoinRate));
        localStorage.setItem('ethereumRate', JSON.stringify(ethereumRate));
      } catch (error) {
        console.error('Error fetching crypto rates:', error);
      }

      setTimeout(() => setShowContent(true), 100);
    };

    fetchData();
  }, []);

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e27] overflow-hidden relative">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Gentle Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

        <div className={`relative z-10 w-full max-w-3xl px-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="relative w-24 h-24 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                    <Check size={48} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-12 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Account Created
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Successfully
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Welcome to Globalmarketacess! Your account is now active and ready to start trading.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:border-blue-800/50 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Secure</h3>
                <p className="text-slate-400 text-sm">Bank-level encryption protects your account</p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:border-blue-800/50 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Real-Time</h3>
                <p className="text-slate-400 text-sm">Access live market data instantly</p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:border-blue-800/50 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                <p className="text-slate-400 text-sm">Expert help whenever you need it</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
                onClick={() => navigate('/dashboard')}
                disabled={isLoading}
                className="group inline-flex items-center gap-3 px-12 py-4 bg-[#0a0e27] border-2 border-blue-600/50 text-white rounded-xl font-bold text-lg hover:bg-blue-600/10 hover:border-blue-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                  <>
                    <span>Enter Dashboard</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
              )}
            </button>

            {/* Additional Info */}
            <p className="mt-8 text-slate-500 text-sm">
              Your account setup is complete. Start exploring global markets now.
            </p>
          </div>
        </div>
      </div>
  );
}