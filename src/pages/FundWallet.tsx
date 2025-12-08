import { useState, useEffect } from 'react';
import { ChevronRight, Copy, Check, Wallet, ArrowLeft, DollarSign, X } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import useCreateDeposit from "../hooks/deposit/useCreateDeposit.ts";
import useReadPaymentWalletById from "../hooks/paymentWalletService/useReadPaymentWalletById.ts";
import { toast } from "sonner";

type PaymentMethod = {
  id: string;
  name: string;
  network: string;
  icon: string;
  color: string;
};

const generateQRCode = (address: string) => {
  if (!address) return '';
  return `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(address)}`;
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

export default function FundWallet() {
  const [step, setStep] = useState<'select' | 'deposit'>('select');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { createDeposit, isSubmitting: isCreating } = useCreateDeposit();
  const { readPaymentWalletById, isSubmitting: isFetching } = useReadPaymentWalletById();

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'eth',
      name: 'ETH (Ether)',
      network: 'Ethereum Network',
      icon: '⟠',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 'usdt-erc20',
      name: 'USDT (Tether)',
      network: 'ERC20 Network',
      icon: '₮',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'usdt-trc20',
      name: 'USDT (Tether)',
      network: 'TRC20 Network',
      icon: '₮',
      color: 'from-green-500 to-teal-600',
    },
    {
      id: 'doge',
      name: 'Dogecoin',
      network: 'Dogecoin Network',
      icon: 'Ð',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'ltc',
      name: 'Litecoin',
      network: 'Litecoin Network',
      icon: 'Ł',
      color: 'from-gray-400 to-gray-600',
    },
    {
      id: 'xrp',
      name: 'Xrp',
      network: 'XRP Ledger Network',
      icon: '✕',
      color: 'from-slate-600 to-slate-800',
    },
    {
      id: 'btc',
      name: 'BTC (Bitcoin)',
      network: 'Bitcoin Network',
      icon: '₿',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  // Preload wallet data once
  const [walletData, setWalletData] = useState<any>(null);

  useEffect(() => {
    const fetchWallet = async () => {
      const response = await readPaymentWalletById({ walletId: '2' });
      if (response?.paymentWallet) {
        setWalletData(response.paymentWallet);
      } else {
        toast.error("Failed to load payment wallet. Please try again.");
      }
    };
    fetchWallet();
  }, []);

  const handleMethodSelect = async (method: PaymentMethod) => {
    setSelectedMethod(method);
    setStep('deposit');
    setAddress(''); // Reset address

    if (!walletData) {
      toast.error("Wallet data not loaded yet. Please wait...");
      return;
    }

    // Map method ID to correct address field
    const addressMap: Record<string, string> = {
      btc: walletData.bitcoinAddress,
      eth: walletData.ethereumAddress,
      'usdt-erc20': walletData.UsdtERC20Address,
      'usdt-trc20': walletData.UsdtTRC20Address,
      ltc: walletData.LitecoinAddress,
      doge: walletData.DogecoinAddress,
      xrp: walletData.XRPAddress,
    };

    const selectedAddress = addressMap[method.id];
    if (selectedAddress) {
      setAddress(selectedAddress);
    } else {
      toast.error(`No ${method.name} address configured.`);
    }
  };

  const handleCopy = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const userId = localStorage.getItem('userId') || '';
  const transactionReference = generateRandomString();

  const handleProceed = async () => {
    if (amount && selectedMethod && address) {
      const depositData = {
        userId,
        amount: parseFloat(amount),
        transactionMethod: selectedMethod.name,
        transactionType: 'deposit',
        depositStatus: 'pending',
        transactionReference,
        additionalComment: comment || "",
      };

      const success = await createDeposit(depositData);
      if (success) {
        setShowSuccessModal(true);
      }
    }
  };

  const handleBack = () => {
    setStep('select');
    setSelectedMethod(null);
    setAmount('');
    setComment('');
    setAddress('');
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    handleBack();
  };

  return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-3xl">
            {step === 'select' ? (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                        <Wallet className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h1 className="text-white font-black text-3xl">Fund Your Wallet</h1>
                        <p className="text-gray-400 text-sm mt-1">Choose your preferred deposit method</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-white font-bold text-xl mb-6">Select Deposit Method below</h2>

                  <div className="space-y-3 mb-6">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => handleMethodSelect(method)}
                            disabled={isFetching}
                            className="w-full bg-slate-950/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all group disabled:opacity-50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>
                                {method.icon}
                              </div>
                              <div className="text-left">
                                <div className="text-white font-bold text-lg">{method.name}</div>
                                <div className="text-gray-400 text-sm">{method.network}</div>
                              </div>
                            </div>
                            <ChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={24} />
                          </div>
                        </button>
                    ))}
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">
                      <span className="font-bold text-white">Note:</span> Deposits will be credited to your Market
                      Signal Trades Account after 2 network confirmations.
                    </p>
                  </div>
                </div>
            ) : (
                <div
                    className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <button
                      onClick={handleBack}
                      className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={20}/>
                    <span className="font-medium">Back</span>
                  </button>

                  <div className="flex items-center gap-4 mb-8">
                    <div
                        className={`w-14 h-14 bg-gradient-to-br ${selectedMethod?.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                      {selectedMethod?.icon}
                    </div>
                    <div>
                      <h1 className="text-white font-black text-2xl">{selectedMethod?.name}</h1>
                      <p className="text-gray-400 text-sm">{selectedMethod?.network}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-gray-400"/>
                      </div>
                      <h3 className="text-white font-bold text-lg">Enter Amount Below</h3>
                    </div>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-black border border-slate-800 rounded-xl px-6 py-4 text-white text-lg font-medium focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/*<div className="mb-8">*/}
                  {/*  <div className="flex items-center gap-3 mb-3">*/}
                  {/*    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">*/}
                  {/*      <DollarSign className="w-5 h-5 text-gray-400"/>*/}
                  {/*    </div>*/}
                  {/*    <h3 className="text-white font-bold text-lg">Enter Additional Comment (Optional)</h3>*/}
                  {/*  </div>*/}
                  {/*  <input*/}
                  {/*      type="text"*/}
                  {/*      placeholder="Additional Comment (Optional)"*/}
                  {/*      value={comment}*/}
                  {/*      onChange={(e) => setComment(e.target.value)}*/}
                  {/*      className="w-full bg-black border border-slate-800 rounded-xl px-6 py-4 text-white text-lg font-medium focus:outline-none focus:border-blue-500 transition-all"*/}
                  {/*  />*/}
                  {/*</div>*/}

                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-gray-400"/>
                      </div>
                      <h3 className="text-white font-bold text-lg">Please send to address</h3>
                    </div>

                    {isFetching ? (
                        <p className="text-gray-400 text-sm">Loading wallet address...</p>
                    ) : !address ? (
                        <p className="text-red-400 text-sm">Address not available for this method.</p>
                    ) : (
                        <>
                          <div className="bg-black border border-slate-800 rounded-xl p-4 mb-2">
                            <div className="text-center mb-3">
                              <div
                                  className="inline-block bg-white px-4 py-2 rounded-lg text-xs font-bold text-black mb-2">
                                {selectedMethod?.network} only
                              </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-3 bg-slate-900/50 rounded-lg px-4 py-3">
                              <code className="text-white text-sm font-mono flex-1 break-all">
                                {address}
                              </code>
                              <button
                                  onClick={handleCopy}
                                  className="flex-shrink-0 w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all"
                              >
                                {copied ? (
                                    <Check className="w-5 h-5 text-green-400"/>
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-400"/>
                                )}
                              </button>
                            </div>
                          </div>

                          <p className="text-gray-400 text-sm mb-6">
                            Only send {selectedMethod?.name} on {selectedMethod?.network}.
                          </p>

                          <div className="text-center mb-4">
                            <p className="text-white font-medium mb-4">or scan the QR code:</p>
                            <div className="inline-block bg-white p-4 rounded-2xl">
                              <img
                                  src={generateQRCode(address)}
                                  alt="QR Code"
                                  className="w-64 h-64"
                              />
                            </div>
                          </div>
                        </>
                    )}
                  </div>

                  <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-6">
                    <p className="text-gray-400 text-sm">
                      <span className="font-bold text-white">Note:</span> After making your deposit, kindly send a
                      screenshot/proof of deposit to{' '}
                      <a href="mailto:support@marketsignaltrades.com" className="text-red-500 font-medium">
                        support@marketsignaltrades.com
                      </a>{' '}
                      for documentation and to boost the funding process
                    </p>
                  </div>

                  <button
                      onClick={handleProceed}
                      disabled={!amount || isCreating || !address}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all"
                  >
                    {isCreating ? 'Processing...' : 'Proceed'}
                  </button>

                  <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">
                      <span className="font-bold text-white">Note:</span> Deposits will be credited to your Market
                      Signal Trades Account after 2 network confirmations.
                    </p>
                  </div>
                </div>
            )}
          </div>

          {/* Success Modal */}
          {showSuccessModal && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
                <div
                    className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-300 relative">
                  <button
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all"
                  >
                    <X className="w-5 h-5 text-gray-600"/>
                  </button>

                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-white" strokeWidth={3} />
                    </div>
                  </div>

                  <h2 className="text-gray-800 font-black text-3xl mb-3">Request Submitted</h2>
                  <p className="text-gray-600 text-lg mb-2">Your deposit request has been received!</p>

                  <div className="bg-gray-50 rounded-xl p-4 my-6">
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Amount:</span>
                        <span className="text-gray-800 font-bold text-sm">${amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Method:</span>
                        <span className="text-gray-800 font-bold text-sm">{selectedMethod?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Network:</span>
                        <span className="text-gray-800 font-bold text-sm">{selectedMethod?.network}</span>
                      </div>
                      <div className="h-px bg-gray-200"></div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Status:</span>
                        <span className="text-orange-600 font-bold">Pending Confirmation</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="text-gray-600 text-sm">
                      <span className="font-bold text-gray-800">Note:</span> Your deposit will be credited after 2 network confirmations. For faster processing, send proof to{' '}
                      <a
                          href="mailto:support@marketsignaltrades.com"
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        support@marketsignaltrades.com
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
      </DashboardLayout>
  );
}