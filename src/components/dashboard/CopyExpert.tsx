import { useState, useEffect } from 'react';
import { Search, Eye, Users, TrendingUp, DollarSign, Activity, X, Copy, Check, AlertTriangle, Loader2 } from 'lucide-react';
import useReadUserById from '../../hooks/auth/useReadUserById';
import { readUserByIdResponse, readPaymentWalletByIdRequest, createExpertRequest, createDepositRequest } from '../../utils/interfacesAndTypes';
import useReadPaymentWalletById from '../../hooks/paymentWalletService/useReadPaymentWalletById';
import useCreateDeposit from '../../hooks/deposit/useCreateDeposit';
import useCreateExpert from '../../hooks/expert/useCreateExpert';
import { formatUserCurrencyAmount } from '../../utils/currencyHelpers';

type Expert = {
  id: string;
  name: string;
  avatar: string;
  country: string;
  countryFlag: string;
  winRate: number;
  profitShare: number;
  wins: number;
  losses: number;
  totalReturn: string;
  monthlyReturn: string;
  style: string;
  risk: 'Low' | 'Medium' | 'High';
  followers: number;
  rating: number;
  experience: string;
  minCopy: string;
  copyFee: string;
  availableDurations: string[];
  recentTrades: Array<{
    pair: string;
    pips: number;
    profit: number;
  }>;
  description: string;
  monthlyPerformance: Array<{ month: string; profit: number }>;
};

type PaymentMethodType = {
  id: string;
  name: string;
  network: string;
  icon: string;
  address: string;
};

const initialPaymentMethods: PaymentMethodType[] = [
  { id: 'btc', name: 'Bitcoin', network: 'BTC Mainnet', icon: '₿', address: '' },
  { id: 'eth', name: 'Ethereum', network: 'Ethereum Network', icon: '⟠', address: '' },
  { id: 'usdt-erc20', name: 'USDT', network: 'ERC20', icon: '₮', address: '' },
  { id: 'usdt-trc20', name: 'USDT', network: 'TRC20', icon: '₮', address: '' },
  { id: 'ltc', name: 'Litecoin', network: 'Litecoin Network', icon: 'Ł', address: '' },
  { id: 'doge', name: 'Dogecoin', network: 'Dogecoin Network', icon: 'Ð', address: '' },
  { id: 'xrp', name: 'XRP', network: 'XRP Ledger', icon: '✕', address: '' },
];

const mockExperts: Expert[] = [
  {
    id: '1',
    name: 'Alex G',
    avatar: 'https://i.pravatar.cc/150?img=12',
    country: 'United States',
    countryFlag: '🇺🇸',
    winRate: 87,
    profitShare: 25,
    wins: 234,
    losses: 34,
    totalReturn: '+342%',
    monthlyReturn: '+28.5%',
    style: 'Setandforget Strategy',
    risk: 'Medium',
    followers: 1247,
    rating: 4.8,
    experience: '8 years',
    minCopy: '$1,000.00',
    copyFee: '$99.90',
    availableDurations: ['1 Day', '1 Week', '1 Month', '3 Months', '6 Months', '1 Year'],
    recentTrades: [
      { pair: 'EURUSD', pips: 156, profit: 234.00 },
      { pair: 'GBPUSD', pips: 89, profit: 145.00 },
      { pair: 'USDJPY', pips: -23, profit: -45.00 },
    ],
    description: 'Professional forex trader specializing in major currency pairs with consistent monthly returns.',
    monthlyPerformance: [
      { month: 'Jan', profit: 15 },
      { month: 'Feb', profit: 22 },
      { month: 'Mar', profit: -8 },
      { month: 'Apr', profit: 35 },
      { month: 'May', profit: 28 },
      { month: 'Jun', profit: 42 },
    ],
  },
  {
    id: '2',
    name: 'Hitha Palepu',
    avatar: 'https://i.pravatar.cc/150?img=5',
    country: 'India',
    countryFlag: '🇮🇳',
    winRate: 92,
    profitShare: 20,
    wins: 445,
    losses: 38,
    totalReturn: '+567%',
    monthlyReturn: '+35.2%',
    style: 'Scalping',
    risk: 'Low',
    followers: 2156,
    rating: 4.9,
    experience: '10 years',
    minCopy: '$500.00',
    copyFee: '$79.90',
    availableDurations: ['1 Day', '1 Week', '1 Month', '3 Months', '6 Months', '1 Year'],
    recentTrades: [
      { pair: 'GBPJPY', pips: 203, profit: 412.00 },
      { pair: 'EURUSD', pips: 145, profit: 289.00 },
      { pair: 'AUDUSD', pips: 67, profit: 98.00 },
    ],
    description: 'Expert scalper with a focus on quick profits and minimal risk exposure across multiple pairs.',
    monthlyPerformance: [
      { month: 'Jan', profit: 28 },
      { month: 'Feb', profit: 31 },
      { month: 'Mar', profit: 25 },
      { month: 'Apr', profit: 38 },
      { month: 'May', profit: 33 },
      { month: 'Jun', profit: 45 },
    ],
  },
  {
    id: '3',
    name: 'Hither Mann',
    avatar: 'https://i.pravatar.cc/150?img=8',
    country: 'Monaco',
    countryFlag: '🇲🇨',
    winRate: 78,
    profitShare: 30,
    wins: 312,
    losses: 88,
    totalReturn: '+234%',
    monthlyReturn: '+19.8%',
    style: 'Day Trading',
    risk: 'High',
    followers: 892,
    rating: 4.5,
    experience: '6 years',
    minCopy: '$2,000.00',
    copyFee: '$149.90',
    availableDurations: ['1 Week', '1 Month', '3 Months', '6 Months'],
    recentTrades: [
      { pair: 'BTCUSD', pips: 1200, profit: 1543.00 },
      { pair: 'ETHUSD', pips: 450, profit: 678.00 },
      { pair: 'XAUUSD', pips: -120, profit: -234.00 },
    ],
    description: 'Aggressive day trader focusing on high-volatility assets with substantial profit potential.',
    monthlyPerformance: [
      { month: 'Jan', profit: 18 },
      { month: 'Feb', profit: 25 },
      { month: 'Mar', profit: 12 },
      { month: 'Apr', profit: 30 },
      { month: 'May', profit: 22 },
      { month: 'Jun', profit: 35 },
    ],
  },
];

export default function CopyExpert() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethodType | null>(null);
  const [copied, setCopied] = useState(false);
  const [paymentMethodsState, setPaymentMethodsState] = useState<PaymentMethodType[]>(initialPaymentMethods);
  const [isLoadingWallets, setIsLoadingWallets] = useState(true);
  const [applicationReference, setApplicationReference] = useState('');
  const [userData, setUserData] = useState<any | null>(null);

  const { readUserById } = useReadUserById();
  const { readPaymentWalletById } = useReadPaymentWalletById();
  const { createExpert, isSubmitting: isSubmittingExpert } = useCreateExpert();
  const { createDeposit, isSubmitting: isSubmittingDeposit } = useCreateDeposit();

  useEffect(() => {
    const fetchData = async () => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        try {
          const response: readUserByIdResponse | null = await readUserById({ userId: storedUserId });
          if (response?.user) {
            setUserData(response.user);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    const fetchWalletAddresses = async () => {
      setIsLoadingWallets(true);
      try {
        const request: readPaymentWalletByIdRequest = { walletId: 2 };
        const response = await readPaymentWalletById(request);
        setPaymentMethodsState(prev => prev.map(method => {
          if (method.id === 'btc') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.bitcoinAddress || '' };
          }
          if (method.id === 'eth') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.ethereumAddress || '' };
          }
          if (method.id === 'usdt-erc20') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.UsdtERC20Address || '' };
          }
          if (method.id === 'usdt-trc20') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.UsdtTRC20Address || '' };
          }
          if (method.id === 'doge') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.DogecoinAddress || '' };
          }
          if (method.id === 'ltc') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.LitecoinAddress || '' };
          }
          if (method.id === 'xrp') {
            // @ts-ignore
            return { ...method, address: response.paymentWallet.XRPAddress || '' };
          }
          return method;
        }));
      } catch (error) {
        console.error('Error fetching wallet addresses:', error);
      } finally {
        setIsLoadingWallets(false);
      }
    };

    fetchData();
    fetchWalletAddresses();
  }, []);

  const filteredExperts = mockExperts.filter(expert =>
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.style.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-400 bg-green-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'High': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const handleCopyExpert = (expert: Expert) => {
    setSelectedExpert(expert);
    setShowCopyModal(true);
  };

  const handleViewDetails = (expert: Expert) => {
    setSelectedExpert(expert);
    setShowDetailsModal(true);
  };

  const handleProceedToVerification = () => {
    if (selectedDuration) {
      setShowCopyModal(false);
      setTimeout(() => {
        setShowDetailsModal(true);
      }, 200);
    }
  };

  const handleProceedToPayment = () => {
    if (selectedPaymentMethod) {
      setShowDetailsModal(false);
      setTimeout(() => {
        setShowPaymentModal(true);
      }, 200);
    }
  };

  const generateRandomString = (): string => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const handleConfirmPayment = async () => {
    if (!selectedExpert || !selectedDuration || !selectedPaymentMethod || !userData) return;

    const reference = generateRandomString();
    setApplicationReference(reference);

    const expertData: createExpertRequest = {
      userId: userData.userId,
      expertImage: "",
      expertName: selectedExpert.name,
      expertWinRate: selectedExpert.winRate,
      profitShare: selectedExpert.profitShare,
      wins: selectedExpert.wins,
      losses: selectedExpert.losses,
      expertStatus: 'pending',
      copyDuration: selectedDuration,
    };

    const expertSuccess = await createExpert(expertData);

    if (expertSuccess) {
      const depositData: createDepositRequest = {
        userId: userData.userId,
        amount: parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')),
        transactionMethod: selectedPaymentMethod.id,
        transactionType: 'copy-fee',
        depositStatus: 'pending',
        transactionReference: reference,
        additionalComment: 'Copy Expert Fee',
      };

      const depositSuccess = await createDeposit(depositData);

      if (depositSuccess) {
        setShowPaymentModal(false);
        setTimeout(() => {
          setShowSuccessModal(true);
        }, 200);
      }
    }
  };

  const handleCopyAddress = async () => {
    if (selectedPaymentMethod && selectedPaymentMethod.address !== 'N/A') {
      await navigator.clipboard.writeText(selectedPaymentMethod.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowPaymentModal(false);
    setShowDetailsModal(false);
    setShowCopyModal(false);
    setSelectedExpert(null);
    setSelectedDuration('');
    setSelectedPaymentMethod(null);
    setCopied(false);
    setApplicationReference('');
  };

  const generateQRCode = (address: string) => {
    if (address === 'N/A' || address === '') return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}`;
  };

  return (
      <div>
        <div className="w-full">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-white font-bold text-3xl mb-2">Copy Experts</h2>
            <p className="text-gray-400 text-lg">Follow and copy successful traders automatically</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                  type="text"
                  placeholder="Search experts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Total Copied</span>
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">0</div>
              <div className="text-gray-500 text-sm">Active copies</div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Copy Profit</span>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">$0.00</div>
              <div className="text-gray-500 text-sm">This month</div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Success Rate</span>
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">0%</div>
              <div className="text-gray-500 text-sm">Profitable copies</div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Total Invested</span>
                <DollarSign className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">$0.00</div>
              <div className="text-gray-500 text-sm">In copy trading</div>
            </div>
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {filteredExperts.map((expert) => (
                <div
                    key={expert.id}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
                >
                  {/* Expert Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full border-2 border-blue-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{expert.name}</h3>
                        <span className="text-xl">{expert.countryFlag}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{expert.country}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(expert.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                        ★
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-green-400 font-bold text-2xl mb-1">{expert.winRate}%</div>
                      <div className="text-gray-400 text-sm">Win Rate</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold text-2xl mb-1">{expert.profitShare}%</div>
                      <div className="text-gray-400 text-sm">Profit Share</div>
                    </div>
                  </div>

                  {/* Win/Loss */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-white font-bold text-xl mb-1">{expert.wins}</div>
                      <div className="text-gray-400 text-sm">Wins</div>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold text-xl mb-1">{expert.losses}</div>
                      <div className="text-gray-400 text-sm">Losses</div>
                    </div>
                  </div>

                  {/* Returns */}
                  <div className="bg-slate-950/50 rounded-lg p-4 mb-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Total Return</span>
                      <span className="text-green-400 font-bold">{expert.totalReturn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Monthly Return</span>
                      <span className="text-green-400 font-bold">{expert.monthlyReturn}</span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Style:</span>
                      <span className="text-white text-sm font-medium">{expert.style}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Risk:</span>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${getRiskColor(expert.risk)}`}>
                    {expert.risk}
                  </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Followers:</span>
                      <span className="text-white text-sm font-bold">{expert.followers.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                        onClick={() => handleCopyExpert(expert)}
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                    >
                      Copy Expert
                    </button>
                    <button
                        onClick={() => handleViewDetails(expert)}
                        className="w-12 h-12 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-xl font-bold transition-all">
              Previous
            </button>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-lg font-bold">1</button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-lg font-bold transition-all">
                2
              </button>
            </div>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-xl font-bold transition-all">
              Next
            </button>
          </div>
        </div>

        {/* Copy Expert Modal */}
        {showCopyModal && selectedExpert && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-slate-800 rounded-2xl p-6 max-w-3xl w-full border border-slate-700 relative my-8 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => setShowCopyModal(false)}
                    className="absolute top-6 right-6 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                      src={selectedExpert.avatar}
                      alt={selectedExpert.name}
                      className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="text-white font-bold text-2xl">Copy {selectedExpert.name}</h3>
                    <p className="text-gray-400">
                      {selectedExpert.style} • {selectedExpert.country}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <div className="text-green-400 font-bold text-2xl mb-1">{selectedExpert.winRate}%</div>
                    <div className="text-gray-400 text-xs">Win Rate</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <div className="text-blue-400 font-bold text-2xl mb-1">{selectedExpert.totalReturn}</div>
                    <div className="text-gray-400 text-xs">Total Return</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <div className="text-white font-bold text-2xl mb-1">{selectedExpert.followers}</div>
                    <div className="text-gray-400 text-xs">Followers</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <div className="text-orange-400 font-bold text-2xl mb-1">{selectedExpert.experience}</div>
                    <div className="text-gray-400 text-xs">Experience</div>
                  </div>
                </div>

                {/* Copy Settings */}
                <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-bold text-lg mb-4">Copy Settings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Profit Share:</span>
                      <span className="text-white font-bold">{selectedExpert.profitShare}% of profits</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Risk Level:</span>
                      <span className={`font-bold px-3 py-1 rounded-full ${getRiskColor(selectedExpert.risk)}`}>
                    {selectedExpert.risk}
                  </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Copy Ratio:</span>
                      <span className="text-white font-bold">1:1 (Proportional)</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Copy Fee:</span>
                      <span className="text-white font-bold">{formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</span>
                    </div>
                  </div>
                </div>

                {/* Duration Selection */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-3">
                    Copy Duration <span className="text-red-400">*</span>
                  </label>
                  <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all"
                  >
                    <option value="">Select duration</option>
                    {selectedExpert.availableDurations.map((duration) => (
                        <option key={duration} value={duration}>
                          {duration}
                        </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                      onClick={() => setShowCopyModal(false)}
                      className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                      onClick={handleProceedToVerification}
                      disabled={!selectedDuration}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedExpert && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-slate-800 rounded-2xl p-6 max-w-3xl w-full border border-slate-700 relative my-8 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => setShowDetailsModal(false)}
                    className="absolute top-6 right-6 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                {/* Expert Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                      src={selectedExpert.avatar}
                      alt={selectedExpert.name}
                      className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-1">{selectedExpert.name}</h3>
                    <p className="text-gray-400 text-sm mb-1">
                      {selectedExpert.style} • {selectedExpert.country}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(selectedExpert.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                      ★
                    </span>
                      ))}
                      <span className="text-gray-400 text-xs ml-2">({selectedExpert.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Performance Overview */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-3">Performance Overview</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-xl p-3">
                        <div className="text-green-400 font-bold text-xl mb-1">{selectedExpert.totalReturn}</div>
                        <div className="text-gray-400 text-xs">Total Return</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-3">
                        <div className="text-blue-400 font-bold text-xl mb-1">{selectedExpert.monthlyReturn}</div>
                        <div className="text-gray-400 text-xs">Monthly Return</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-3">
                        <div className="text-white font-bold text-xl mb-1">{selectedExpert.followers}</div>
                        <div className="text-gray-400 text-xs">Followers</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-3">
                        <div className="text-cyan-400 font-bold text-xl mb-1">89</div>
                        <div className="text-gray-400 text-xs">Active Copiers</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Trades */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-3">Recent Trades</h4>
                    <div className="space-y-2">
                      {selectedExpert.recentTrades.map((trade, index) => (
                          <div
                              key={index}
                              className="bg-slate-900/50 rounded-xl p-3 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-white font-bold text-sm mb-1">{trade.pair}</div>
                              <div className="text-gray-400 text-xs">
                                {trade.pips > 0 ? '+' : ''}{trade.pips} pips
                              </div>
                            </div>
                            <div className={`font-bold ${trade.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* About Expert */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-3">About This Expert</h4>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <p className="text-gray-300 text-sm mb-4">{selectedExpert.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Experience:</span>
                          <span className="text-white font-bold">{selectedExpert.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Min Copy:</span>
                          <span className="text-white font-bold">{formatUserCurrencyAmount(parseFloat(selectedExpert.minCopy.replace(/[^0-9.]/g, '')))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Copy Fee:</span>
                          <span className="text-white font-bold">{formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
                    <div className="flex gap-2">
                      <div className="text-blue-400 mt-0.5">ℹ️</div>
                      <p className="text-gray-300 text-xs">
                        Before copy can commence, the fee should be paid and communicated to support for further instructions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verify Copy Details Section */}
                {selectedDuration && (
                    <div className="mt-6 bg-slate-900/50 rounded-xl p-4">
                      <h4 className="text-white font-bold text-lg mb-4">Verify Copy Details</h4>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center py-2 border-b border-slate-700">
                          <span className="text-gray-400 text-sm">Selected Duration:</span>
                          <span className="text-white font-bold text-sm">{selectedDuration}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700">
                          <span className="text-gray-400 text-sm">Copy Fee:</span>
                          <span className="text-white font-bold text-sm">{formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-medium mb-2">
                          Payment Method <span className="text-red-400">*</span>
                        </label>
                        <select
                            value={selectedPaymentMethod?.id || ''}
                            onChange={(e) => {
                              const method = paymentMethodsState.find(m => m.id === e.target.value);
                              setSelectedPaymentMethod(method || null);
                            }}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-all"
                        >
                          <option value="">Select payment method</option>
                          {paymentMethodsState.map((method) => (
                              <option key={method.id} value={method.id}>
                                {method.icon} {method.name} - {method.network}
                              </option>
                          ))}
                        </select>
                      </div>

                      <button
                          onClick={handleProceedToPayment}
                          disabled={!selectedPaymentMethod || isLoadingWallets}
                          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                )}
              </div>
            </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && selectedExpert && selectedPaymentMethod && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full border border-slate-700 relative my-8 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => setShowPaymentModal(false)}
                    className="absolute top-6 right-6 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-2xl">
                    {selectedPaymentMethod.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Pay Copy Fee</h3>
                    <p className="text-gray-400 text-sm">Amount: {formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</p>
                  </div>
                </div>

                {/* Instructions */}
                <div className="text-center mb-6">
                  <h4 className="text-white font-bold text-lg mb-2">How to pay your copy fee:</h4>
                  <p className="text-gray-400 text-sm">Transfer exactly {formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))} to the details below</p>
                </div>

                {/* Info Box */}
                <div className="bg-slate-900/50 rounded-xl p-3 mb-4">
                  <p className="text-gray-300 text-xs">
                    <span className="font-bold text-white">Note:</span> After making your deposit, send a screenshot/proof to{' '}
                    <a
                        href="mailto:support@marketmoverstrade.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      support@marketmoverstrade.com
                    </a>{' '}
                    for documentation
                  </p>
                </div>

                {/* Warning Boxes */}
                <div className="space-y-3 mb-6">
                  <div className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-xl p-3">
                    <div className="flex gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-yellow-400 font-bold text-xs mb-1">CRITICAL WARNING:</p>
                        <p className="text-gray-300 text-xs">
                          PAYMENTS MUST BE MADE ONLY TO THE ADDRESS AND NETWORK BELOW. SENDING TO THE WRONG ADDRESS OR NETWORK WILL RESULT IN PERMANENT LOSS OF FUNDS. DO NOT SEND PAYMENTS TO WALLET ADDRESSES SHARED BY AGENTS. CONFIRM THE ADDRESS AND NETWORK MATCH EXACTLY. IF IN DOUBT, STOP THE TRANSACTION AND CONTACT SUPPORT IMMEDIATELY.
                        </p>
                      </div>
                    </div>
                  </div>

                  {selectedPaymentMethod.id !== 'wallet' && (
                      <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-3">
                        <div className="flex gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-red-400 font-bold text-xs mb-1">NETWORK ALERT:</p>
                            <p className="text-gray-300 text-xs">
                              You MUST use the {selectedPaymentMethod.network} for this deposit. Please double-check and note the network carefully before sending funds. Using the wrong network will result in loss of funds.
                            </p>
                          </div>
                        </div>
                      </div>
                  )}
                </div>

                {/* Wallet Details */}
                {selectedPaymentMethod.id !== 'wallet' ? (
                    <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                      <h4 className="text-white font-bold text-center text-lg mb-4">Wallet: {selectedPaymentMethod.name}</h4>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-2 text-center">Network:</label>
                          <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-center">
                            <span className="text-white font-mono text-sm">{selectedPaymentMethod.network}</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-2 text-center">Wallet Address:</label>
                          <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-center">
                            {isLoadingWallets && ['btc', 'eth', 'usdt-trc20'].includes(selectedPaymentMethod.id) ? (
                                <div className="flex items-center justify-center text-gray-400">
                                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                  Loading...
                                </div>
                            ) : (
                                <span className="text-white font-mono text-xs break-all">{selectedPaymentMethod.address}</span>
                            )}
                          </div>
                        </div>

                        {!isLoadingWallets && selectedPaymentMethod.address && selectedPaymentMethod.address !== '' && (
                            <div className="text-center">
                              <img
                                  src={generateQRCode(selectedPaymentMethod.address)}
                                  alt="QR Code"
                                  className="mx-auto bg-white p-2 rounded-xl"
                              />
                            </div>
                        )}

                        <button
                            onClick={handleCopyAddress}
                            disabled={selectedPaymentMethod.address === 'N/A' || selectedPaymentMethod.address === '' || (isLoadingWallets && ['btc', 'eth', 'usdt-trc20'].includes(selectedPaymentMethod.id))}
                            className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {copied ? (
                              <>
                                <Check className="w-4 h-4" />
                                Address Copied!
                              </>
                          ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy Address
                              </>
                          )}
                        </button>
                      </div>
                    </div>
                ) : (
                    <div className="bg-slate-900/50 rounded-xl p-4 mb-6 text-center">
                      <p className="text-gray-300 text-sm">
                        The copy fee of <span className="text-white font-bold">{formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</span> will be deducted from your account balance.
                      </p>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="text-gray-400 text-sm">
                    Payment Method: <span className="text-white font-bold">{selectedPaymentMethod.name}</span>
                  </div>
                  <button
                      onClick={handleConfirmPayment}
                      disabled={isSubmittingExpert || isSubmittingDeposit || (isLoadingWallets && ['btc', 'eth', 'usdt-trc20'].includes(selectedPaymentMethod.id))}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmittingExpert || isSubmittingDeposit ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        'Confirm Payment'
                    )}
                  </button>
                </div>
              </div>
            </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && selectedExpert && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-300 relative">
                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                </div>

                <h2 className="text-gray-800 font-black text-3xl mb-3">Request Submitted</h2>
                <p className="text-gray-600 text-lg mb-2">Your copy request has been received!</p>

                <div className="bg-gray-50 rounded-xl p-4 my-6">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Expert:</span>
                      <span className="text-gray-800 font-bold text-sm">{selectedExpert.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Duration:</span>
                      <span className="text-gray-800 font-bold text-sm">{selectedDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Copy Fee:</span>
                      <span className="text-gray-800 font-bold text-sm">{formatUserCurrencyAmount(parseFloat(selectedExpert.copyFee.replace(/[^0-9.]/g, '')))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Payment Method:</span>
                      <span className="text-gray-800 font-bold text-sm">{selectedPaymentMethod?.name}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Status:</span>
                      <span className="text-orange-600 font-bold">Pending Confirmation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Reference:</span>
                      <span className="text-gray-800 font-bold">CP-{applicationReference}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-gray-600 text-sm">
                    <span className="font-bold text-gray-800">Note:</span> Your copy request will be activated after payment verification. For faster processing, send payment proof to{' '}
                    <a
                        href="mailto:support@marketmoverstrade.com"
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      support@marketmoverstrade.com
                    </a>
                  </p>
                </div>

                <button
                    onClick={handleCloseModal}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-12 py-3 rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
        )}
      </div>
  );
}