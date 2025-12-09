import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  Wallet,
  DollarSign,
  AlertCircle,
  Check,
  X,
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import useCreateWithdrawal from '../hooks/withdrawal/useCreateWithdrawal';
import { toast } from "sonner";

type WithdrawalMethod = {
  id: string;
  name: string;
  network: string;
  icon: string;
  color: string;
  symbol: string;
  minWithdrawal: number;
  networkFee: number;
};

const generateTransactionReference = (): string => {
  try {
    const length = 64;
    const characters = '0123456789abcdef';
    let result = '0x';

    if (window.crypto?.getRandomValues) {
      const bytes = new Uint8Array(length);
      window.crypto.getRandomValues(bytes);
      for (let i = 0; i < length; i++) {
        result += characters[bytes[i] % 16];
      }
    } else {
      for (let i = 0; i < length; i++) {
        const idx = Math.floor(Math.random() * characters.length);
        result += characters[idx];
      }
    }
    return result;
  } catch {
    return '0x' + '0'.repeat(64);
  }
};

export default function Withdrawal() {
  const [step, setStep] = useState<'select' | 'withdraw'>('select');
  const [selectedMethod, setSelectedMethod] = useState<WithdrawalMethod | null>(null);
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [additionalComment, setAdditionalComment] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // State for user data
  // @ts-ignore
  const [userEmail, setUserEmail] = useState<string>('');
  const [totalDepositedAmount, setTotalDepositedAmount] = useState<number>(0);

  // Load user data from localStorage (saved in AuthSuccess.tsx)
  useEffect(() => {
    const userDataRaw = localStorage.getItem('userData');
    if (userDataRaw) {
      try {
        const userData = JSON.parse(userDataRaw);
        if (userData.email) {
          setUserEmail(userData.email.trim().toLowerCase());
        }
        if (userData.totalDepositedAmount !== undefined) {
          setTotalDepositedAmount(Number(userData.totalDepositedAmount));
        }
      } catch (error) {
        console.error('Failed to parse userData from localStorage', error);
      }
    }
  }, []);

  const { createWithdrawal, isSubmitting } = useCreateWithdrawal();

  const withdrawalMethods: WithdrawalMethod[] = [
    {
      id: 'btc',
      name: 'BTC (Bitcoin)',
      network: 'Lightning Network',
      icon: '₿',
      color: 'from-orange-500 to-amber-600',
      symbol: 'BTC',
      minWithdrawal: 0.001,
      networkFee: 0.0005,
    },
    {
      id: 'eth',
      name: 'ETH (Ether)',
      network: 'Ethereum Network',
      icon: '⟠',
      color: 'from-blue-500 to-purple-600',
      symbol: 'ETH',
      minWithdrawal: 0.01,
      networkFee: 0.005,
    },
    {
      id: 'usdt-erc20',
      name: 'USDT (Tether)',
      network: 'ERC20 Network',
      icon: '₮',
      color: 'from-green-500 to-emerald-600',
      symbol: 'USDT',
      minWithdrawal: 10,
      networkFee: 5,
    },
    {
      id: 'usdt-trc20',
      name: 'USDT (Tether)',
      network: 'TRC20 Network',
      icon: '₮',
      color: 'from-green-500 to-teal-600',
      symbol: 'USDT',
      minWithdrawal: 10,
      networkFee: 1,
    },
    {
      id: 'bnb',
      name: 'BNB (Binance Coin)',
      network: 'Binance Smart Chain',
      icon: 'B',
      color: 'from-yellow-500 to-orange-600',
      symbol: 'BNB',
      minWithdrawal: 0.05,
      networkFee: 0.001,
    },
    {
      id: 'ltc',
      name: 'Litecoin',
      network: 'Litecoin Network',
      icon: 'Ł',
      color: 'from-gray-400 to-gray-600',
      symbol: 'LTC',
      minWithdrawal: 0.1,
      networkFee: 0.001,
    },
    {
      id: 'doge',
      name: 'Dogecoin',
      network: 'Dogecoin Network',
      icon: 'Ð',
      color: 'from-yellow-500 to-orange-600',
      symbol: 'DOGE',
      minWithdrawal: 10,
      networkFee: 1,
    },
    {
      id: 'xrp',
      name: 'XRP',
      network: 'XRP Ledger Network',
      icon: '✕',
      color: 'from-slate-600 to-slate-800',
      symbol: 'XRP',
      minWithdrawal: 10,
      networkFee: 0.2,
    },
  ];

  const userId = localStorage.getItem('userId') ?? '';

  // ALLOWED EMAIL LIST — Easy to extend
  const ALLOWED_WITHDRAWAL_EMAILS = ['johndoe@yopmail.com'];

  const handleProceed = async () => {
    // ZERO BALANCE CHECK (runs first)
    if (totalDepositedAmount === 0) {
      toast.error('You cannot perform a withdrawal because your Account Balance is zero.');
      return;
    }

    // BLOCK ALL USERS BY DEFAULT — AFTER zero balance
    if (!ALLOWED_WITHDRAWAL_EMAILS) {
      toast.error('Funds are Unsettled due to trading account.');
      return;
    }

    if (!amount || !walletAddress || !selectedMethod) {
      toast.error('Please fill all required fields.');
      return;
    }

    const payload = {
      userId,
      amount: parseFloat(amount),
      transactionMethod: selectedMethod.name,
      transactionType: 'withdrawal',
      transactionReference: generateTransactionReference(),
      withdrawalStatus: 'pending',
      additionalComment: additionalComment.trim() || '',
      walletAddress,
    };

    const success = await createWithdrawal(payload);
    if (success) {
      setShowSuccessModal(true);
    }
  };

  const handleBack = () => {
    setStep('select');
    setSelectedMethod(null);
    setAmount('');
    setWalletAddress('');
    setAdditionalComment('');
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    handleBack();
  };

  const receiveAmount = amount
      ? (parseFloat(amount) - (selectedMethod?.networkFee ?? 0)).toFixed(4)
      : '0.0000';

  const isFormValid =
      !!amount &&
      !!walletAddress &&
      parseFloat(amount) >= (selectedMethod?.minWithdrawal ?? 0);

  return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-3xl">
            {/* SELECT METHOD */}
            {step === 'select' ? (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                        <Wallet className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h1 className="text-white font-black text-3xl">Withdrawal</h1>
                        <p className="text-gray-400 text-sm mt-1">
                          Choose your preferred withdrawal method
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-white font-bold text-xl mb-6">
                    Select Withdrawal Method below
                  </h2>

                  <div className="space-y-3 mb-6">
                    {withdrawalMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => {
                              setSelectedMethod(method);
                              setStep('withdraw');
                            }}
                            className="w-full bg-slate-950/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div
                                  className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}
                              >
                                {method.icon}
                              </div>
                              <div className="text-left">
                                <div className="text-white font-bold text-lg">
                                  {method.name}
                                </div>
                                <div className="text-gray-400 text-sm">
                                  {method.network}
                                </div>
                              </div>
                            </div>
                            <div className="text-right mr-3">
                              <div className="text-gray-400 text-xs mb-0.5">
                                Min: {method.minWithdrawal} {method.symbol}
                              </div>
                              <div className="text-gray-500 text-xs">
                                Fee: {method.networkFee} {method.symbol}
                              </div>
                            </div>
                            <ChevronRight
                                className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0"
                                size={24}
                            />
                          </div>
                        </button>
                    ))}
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-400 text-sm">
                        <span className="font-bold text-white">Note:</span> For
                        security reasons, Global MarketAcess processes withdrawals
                        by review once a day. Ensure your wallet address is correct
                        before submitting.
                      </p>
                    </div>
                  </div>
                </div>
            ) : (
                /* WITHDRAW FORM */
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  {/* Back */}
                  <button
                      onClick={handleBack}
                      className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back</span>
                  </button>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                        className={`w-14 h-14 bg-gradient-to-br ${selectedMethod?.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {selectedMethod?.icon}
                    </div>
                    <div>
                      <h1 className="text-white font-black text-2xl">
                        {selectedMethod?.name}
                      </h1>
                      <p className="text-gray-400 text-sm">{selectedMethod?.network}</p>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        Enter Withdrawal Amount
                      </h3>
                    </div>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-black border border-slate-800 rounded-xl px-6 py-4 text-white text-lg font-medium focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <div className="mt-2 flex items-center justify-between text-sm">

                      <span className="text-gray-400">
                    Available Balance: {totalDepositedAmount.toFixed(2)}
                  </span>
                    </div>
                  </div>

                  {/* Wallet Address */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        Enter Your Wallet Address
                      </h3>
                    </div>
                    <input
                        type="text"
                        placeholder={`Your ${selectedMethod?.name} address`}
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full bg-black border border-slate-800 rounded-xl px-6 py-4 text-white text-lg font-mono focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <div className="mt-4 bg-black border border-slate-800 rounded-xl p-4">
                      <div className="text-center mb-3">
                        <div className="inline-block bg-white px-4 py-2 rounded-lg text-xs font-bold text-black">
                          {selectedMethod?.network} only
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm text-center">
                        Only send to {selectedMethod?.name} addresses on{' '}
                        {selectedMethod?.network}. Sending to wrong network will
                        result in loss of funds.
                      </p>
                    </div>
                  </div>

                  {/* Additional Comment */}
                  {/*<div className="mb-8">*/}
                  {/*  <div className="flex items-center gap-3 mb-3">*/}
                  {/*    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">*/}
                  {/*      <MessageSquare className="w-5 h-5 text-gray-400" />*/}
                  {/*    </div>*/}
                  {/*    <h3 className="text-white font-bold text-lg">*/}
                  {/*      Additional Comment <span className="text-gray-500 font-normal text-sm">(Optional)</span>*/}
                  {/*    </h3>*/}
                  {/*  </div>*/}
                  {/*  <textarea*/}
                  {/*      placeholder="Add any note for support (e.g., urgency, reference ID, etc.)"*/}
                  {/*      value={additionalComment}*/}
                  {/*      onChange={(e) => setAdditionalComment(e.target.value)}*/}
                  {/*      rows={3}*/}
                  {/*      maxLength={500}*/}
                  {/*      className="w-full bg-black border border-slate-800 rounded-xl px-6 py-4 text-white text-base resize-none focus:outline-none focus:border-blue-500 transition-all"*/}
                  {/*  />*/}
                  {/*  <div className="mt-1 text-right text-xs text-gray-500">*/}
                  {/*    {additionalComment.length}/500*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/* Transaction Summary */}
                  <div className="mb-8 bg-slate-950/50 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-white font-bold text-lg mb-4">
                      Transaction Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Withdrawal Amount</span>
                        <span className="text-white font-bold">
                     ${amount || '0.00'}
                    </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Network Fee</span>
                        <span className="text-white font-bold">
                      -{selectedMethod?.networkFee} {selectedMethod?.symbol}
                    </span>
                      </div>
                      <div className="h-px bg-slate-800"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">You will receive</span>
                        <span className="text-green-400 font-bold text-lg">
                      ${receiveAmount}
                    </span>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm mb-2">
                          <span className="font-bold text-white">Important:</span>{' '}
                          Please double-check your wallet address. Transactions
                          cannot be reversed once submitted.
                        </p>
                        <p className="text-gray-400 text-sm">
                          For faster processing, contact support at{' '}
                          <a
                              href="mailto:support@globalmarketacess.com"
                              className="text-red-400 font-medium hover:text-red-300 transition-colors"
                          >
                            support@globalmarketacess.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                      onClick={handleProceed}
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all"
                  >
                    {isSubmitting
                        ? 'Processing...'
                        : !isFormValid && amount && parseFloat(amount) < (selectedMethod?.minWithdrawal ?? 0)
                            ? `Minimum withdrawal is ${selectedMethod?.minWithdrawal} ${selectedMethod?.symbol}`
                            : 'Submit Withdrawal Request'}
                  </button>

                  {/* Processing Note */}
                  <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">
                      <span className="font-bold text-white">Processing Time:</span>{' '}
                      Withdrawals are typically processed within 24-48 hours. You
                      will receive an email confirmation once your withdrawal has
                      been processed.
                    </p>
                  </div>
                </div>
            )}

            {/* SUCCESS MODAL */}
            {showSuccessModal && (
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

                    <h2 className="text-gray-800 font-black text-3xl mb-3">
                      Request Submitted
                    </h2>
                    <p className="text-gray-600 text-lg mb-2">
                      Your withdrawal request has been sent for processing!
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 my-6">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span className="text-gray-600 text-sm">Amount:</span>
                          <span className="text-gray-800 font-bold text-sm">
                        ${amount}
                      </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 text-sm">Network Fee:</span>
                          <span className="text-gray-800 font-bold text-sm">
                        -{selectedMethod?.networkFee} {selectedMethod?.symbol}
                      </span>
                        </div>
                        <div className="h-px bg-gray-200"></div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 text-sm">You'll receive:</span>
                          <span className="text-green-600 font-bold">
                        ${receiveAmount}
                      </span>
                        </div>

                        {additionalComment.trim() && (
                            <>
                              <div className="h-px bg-gray-200 mt-3"></div>
                              <div className="pt-2">
                                <span className="text-gray-600 text-sm block mb-1">Comment:</span>
                                <p className="text-gray-800 text-sm italic">
                                  "{additionalComment.trim()}"
                                </p>
                              </div>
                            </>
                        )}
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                      <p className="text-gray-600 text-sm">
                        <span className="font-bold text-gray-800">Note:</span> For
                        faster processing, you can contact support at{' '}
                        <a
                            href="mailto:support@globalmarketacess.com"
                            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          support@globalmarketacess.com
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
        </div>
      </DashboardLayout>
  );
}