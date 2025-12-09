import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className={`relative z-10 w-full max-w-2xl px-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                  <Check size={64} className="text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <h1 className="text-5xl font-black text-white leading-tight">
                Success!
              </h1>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                Welcome to Globalmarketacess
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                  onClick={() => navigate('/dashboard')}
                  disabled={isLoading}
                  className="group px-12 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                    <>
                      <span>Proceed</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
  );
}