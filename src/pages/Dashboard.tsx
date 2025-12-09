import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { DollarSign, Activity } from 'lucide-react';
import { useDispatch } from 'react-redux';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import PnLCalculator from '../components/dashboard/PnLCalculator';
import PlaceTrade from '../components/dashboard/PlaceTrade';
import TradingHistory from '../components/dashboard/TradingHistory';
import WatchlistTab from '../components/dashboard/WatchlistTab';
import TickerTapeWidget from "../components/widgets/TickerTapeWidget.tsx";
import useReadUserById from "../hooks/auth/useReadUserById.ts";
import {readUserByIdResponse} from "../utils/interfacesAndTypes.ts";
import {setTradingType} from "../redux/reduxSlices/tradingStatusSlice.ts";
import {formatUserCurrencyAmount} from "../utils/currencyHelpers.ts";


type TabType = 'place-trade' | 'history' | 'watchlist' | 'pnl';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('place-trade');
  const [userData, setUserData] = useState<readUserByIdResponse['user'] | null>(null);
  const [ethereumRate, setEthereumRate] = useState<number | null>(null);
  const { readUserById } = useReadUserById();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Fetch user data
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        const response = await readUserById({ userId: storedUserId });
        if (response && response.user) {
          setUserData(response.user);
        }
      }

      // Fetch ethereumRate from localStorage
      const storedEthereumRate = localStorage.getItem('ethereumRate');
      if (storedEthereumRate) {
        try {
          const parsedRate = JSON.parse(storedEthereumRate);
          setEthereumRate(parsedRate);
        } catch (error) {
          console.error('Error parsing ethereumRate from localStorage:', error);
        }
      }
    };

    fetchData();
  }, []);

  const ethBalance = ethereumRate && userData?.totalDepositedAmount
      ? (userData.totalDepositedAmount / ethereumRate).toFixed(8)
      : '0.00000000';

  const tradeButtons = [
    { label: 'Trade Forex', color: 'bg-red-600 hover:bg-red-700', type: 'Forex' },
    { label: 'Trade Crypto', color: 'bg-green-500 hover:bg-green-600', type: 'Crypto' },
    { label: 'Trade CFD', color: 'bg-orange-500 hover:bg-orange-600', type: 'CFD' },
    { label: 'Trade Stocks', color: 'bg-blue-600 hover:bg-blue-700', type: 'Stocks' },
  ];



  const renderTabContent = () => {
    switch (activeTab) {
      case 'place-trade':
        return <PlaceTrade />;
      case 'history':
        return <TradingHistory />;
      case 'watchlist':
        return <WatchlistTab />;
      case 'pnl':
        return <PnLCalculator />;
      default:
        return <PlaceTrade />;
    }
  };

  return (
      <DashboardLayout>
        <div className="p-6 space-y-6">
          {/* Market Ticker */}
          <TickerTapeWidget/>

          {/* Verification Message */}
          {userData?.userStatus === 'unverified' && (
              <div className="bg-amber-700 backdrop-blur-sm border border-amber-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
              <p className="text-white text-base sm:text-l">
                Your account is not verified. Kindly upload a valid government ID to verify your account.
                <span
                    onClick={() => navigate('/dashboard/settings')}
                    className="text-amber-400 hover:text-amber-300 ml-1 underline">
                  Click here to upload
                </span>
              </p>
              </div>
          )}

          {/* Trade Buttons */}
          <div className="hidden md:flex flex-row items-center gap-3 flex-wrap justify-between">
            <div className="flex flex-row items-center gap-3 flex-wrap">
              {tradeButtons.map((button, index) => (
                  <button
                      key={index}
                      onClick={() => dispatch(setTradingType(button.type))}
                      className={`px-6 py-2.5 text-white rounded-xl font-bold transition-all hover:shadow-lg ${button.color}`}
                  >
                    {button.label}
                  </button>
              ))}
            </div>
            <div
                onClick={() => navigate('/dashboard/fund-wallet')}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all whitespace-nowrap text-center"
            >
              + Fund Your Wallet
            </div>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Balance */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-gray-400 text-sm font-medium mb-2">Account Balance</div>
                  <div className="text-3xl md:text-4xl lg:text-4xl font-black text-green-400">{formatUserCurrencyAmount(userData?.realizedProfit || 0)}</div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Invested Amount */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-gray-400 text-sm font-medium mb-2">Invested Amount</div>
                  <div className="text-3xl md:text-4xl lg:text-4xl font-black text-green-400">{formatUserCurrencyAmount(userData?.totalDepositedAmount || 0)}</div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-gray-400 text-sm font-medium">Withdrawals</span>
                <span className="text-red-400 font-bold text-lg">{formatUserCurrencyAmount(userData?.totalWithdrawals || 0)}</span>
              </div>
            </div>

            {/* Ethereum Balance */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-gray-400 text-sm font-medium mb-2">Ethereum Balance</div>
                  <div className="text-2xl font-black text-green-400">{ethBalance} ETH</div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Profit</span>
                  <span className="text-green-400 font-bold text-lg">{formatUserCurrencyAmount(userData?.profit || 0)}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Loss</span>
                  <span className="text-red-400 font-bold text-lg">{formatUserCurrencyAmount(userData?.loss || 0)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area with Tabs */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 sm:p-6">
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 border-b border-slate-800 pb-3 sm:pb-4 overflow-x-auto scrollbar-hide">
              <button
                  onClick={() => setActiveTab('place-trade')}
                  className={`px-3 sm:px-5 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-xs sm:text-base ${
                      activeTab === 'place-trade'
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                Place Trade
              </button>
              <button
                  onClick={() => setActiveTab('history')}
                  className={`px-3 sm:px-5 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-xs sm:text-base ${
                      activeTab === 'history'
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                Trading History
              </button>
              <button
                  onClick={() => setActiveTab('watchlist')}
                  className={`px-3 sm:px-5 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-xs sm:text-base ${
                      activeTab === 'watchlist'
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                Watchlist
              </button>
              <button
                  onClick={() => setActiveTab('pnl')}
                  className={`px-3 sm:px-5 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-xs sm:text-base ${
                      activeTab === 'pnl'
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                PnL Calculator
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px] sm:min-h-[400px]">
              {renderTabContent()}
            </div>
          </div>

        </div>

        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      </DashboardLayout>
  );
}