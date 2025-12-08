import { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Calendar,
  DollarSign,
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import useReadUserDeposit from '../hooks/deposit/useReadUserDeposit';
import useReadUserWithdrawal from '../hooks/withdrawal/useReadUserWithdrawal';
import {truncateWithEllipsis} from "../utils/helperFunctions.ts";

type TransactionType = 'deposit' | 'withdrawal';

interface Transaction {
  id: number | string;
  amount: number;
  type: TransactionType;
  reference: string;
  date: string;
  time: string;
  status: string;
  method: string;
  originalDate: string;
}

const formatTransactionDate = (isoDate: string): { date: string; time: string } => {
  const dateObj = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: '2-digit' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options).replace(',', '');
  const formattedTime = dateObj.toLocaleTimeString('en-US', { hour12: false });
  return { date: formattedDate, time: formattedTime };
};

export default function Transactions() {
  const [activeTab, setActiveTab] = useState<'all' | TransactionType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const storedUserId = localStorage.getItem('userId');

  const {
    data: depositData,
    isLoading: isDepositLoading,
    isError: isDepositError,
  } = useReadUserDeposit(storedUserId ? { userId: storedUserId } : undefined);

  const {
    data: withdrawalData,
    isLoading: isWithdrawalLoading,
    isError: isWithdrawalError,
  } = useReadUserWithdrawal(storedUserId ? { userId: storedUserId } : undefined);

  const deposits = depositData?.deposits || [];
  const withdrawals = withdrawalData?.withdrawals || [];

  const allTransactions: Transaction[] = [
    ...deposits.map((dep) => {
      const { date, time } = formatTransactionDate(dep.depositDate || dep.createdAt);
      return {
        id: dep.depositId,
        amount: dep.amount,
        type: 'deposit' as TransactionType,
        reference: dep.transactionReference,
        date,
        time,
        status: dep.depositStatus.toLowerCase(),
        method: dep.transactionMethod,
        originalDate: dep.depositDate || dep.createdAt,
      };
    }),
    ...withdrawals.map((wd) => {
      const { date, time } = formatTransactionDate(wd.createdAt);
      return {
        id: wd.withdrawalId,
        amount: wd.amount,
        type: 'withdrawal' as TransactionType,
        reference: wd.transactionReference,
        date,
        time,
        status: wd.withdrawalStatus.toLowerCase(),
        method: wd.transactionMethod,
        originalDate: wd.createdAt,
      };
    }),
  ];

  const filteredTransactions = allTransactions
      .filter((transaction) => {
        const matchesSearch =
            transaction.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.method.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === 'all' || transaction.type === activeTab;
        return matchesSearch && matchesTab;
      })
      .sort((a, b) => new Date(b.originalDate).getTime() - new Date(a.originalDate).getTime());

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

  const stats = {
    totalDeposits: allTransactions
        .filter((t) => t.type === 'deposit' && t.status === 'approved')
        .reduce((sum, t) => sum + t.amount, 0),
    totalWithdrawals: allTransactions
        .filter((t) => t.type === 'withdrawal' && t.status === 'approved')
        .reduce((sum, t) => sum + t.amount, 0),
    pendingTransactions: allTransactions.filter((t) => t.status === 'pending').length,
  };

  const isLoading = isDepositLoading || isWithdrawalLoading;
  const isError = isDepositError || isWithdrawalError;

  // Reset page on tab/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  // Export to CSV
  const handleExport = () => {
    if (filteredTransactions.length === 0) return;

    const headers = ['S/N', 'Amount', 'Type', 'Method', 'Reference', 'Date', 'Time', 'Status'];
    const rows = filteredTransactions.map((t, index) => [
      (currentPage - 1) * itemsPerPage + index + 1,
      `$${t.amount.toLocaleString()}`,
      t.type.charAt(0).toUpperCase() + t.type.slice(1),
      t.method,
      t.reference,
      t.date,
      t.time,
      t.status.charAt(0).toUpperCase() + t.status.slice(1),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <DashboardLayout>
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2">Transactions</h1>
              <p className="text-gray-400 text-sm sm:text-base">
                View and manage all your deposits and withdrawals
              </p>
            </div>
            <button
                onClick={handleExport}
                disabled={isLoading || filteredTransactions.length === 0}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download size={18} />
              Export
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-green-400 text-sm font-medium mb-1">Total Deposits</p>
                  <p className="text-white text-3xl font-black">${stats.totalDeposits.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <ArrowDownRight className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <p className="text-green-400/70 text-xs">All approved deposits</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-orange-400 text-sm font-medium mb-1">Total Withdrawals</p>
                  <p className="text-white text-3xl font-black">${stats.totalWithdrawals.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <p className="text-orange-400/70 text-xs">All approved withdrawals</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-blue-400 text-sm font-medium mb-1">Pending</p>
                  <p className="text-white text-3xl font-black">{stats.pendingTransactions}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <p className="text-blue-400/70 text-xs">Awaiting processing</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
            <button
                onClick={() => setActiveTab('all')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'all'
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-900/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                }`}
            >
              All Transactions
            </button>
            <button
                onClick={() => setActiveTab('deposit')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'deposit'
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-900/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                }`}
            >
              Deposit
            </button>
            <button
                onClick={() => setActiveTab('withdrawal')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'withdrawal'
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-900/50 text-gray-400 hover:bg-slate-800 hover:text-white'
                }`}
            >
              Withdrawal
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                  type="text"
                  placeholder="Search transaction..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <button className="px-6 py-3 bg-slate-900/50 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>

          {/* Transaction Table */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                <tr className="border-b border-slate-800 bg-slate-900/30">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    S/N
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Transaction Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Transaction Reference
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                {isLoading ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-3"></div>
                          <p className="text-gray-400 text-lg font-medium">Loading transactions...</p>
                        </div>
                      </td>
                    </tr>
                ) : isError ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Search className="w-12 h-12 text-red-500 mb-3" />
                          <p className="text-red-400 text-lg font-medium">Error loading transactions</p>
                          <p className="text-gray-500 text-sm">Please try again later</p>
                        </div>
                      </td>
                    </tr>
                ) : paginatedTransactions.length > 0 ? (
                    paginatedTransactions.map((transaction, index) => (
                        <tr
                            key={`${transaction.id}-${transaction.type}`}
                            className="hover:bg-slate-900/30 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4 text-white font-medium text-sm">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                      transaction.type === 'deposit' ? 'bg-green-500/20' : 'bg-orange-500/20'
                                  }`}
                              >
                                <DollarSign
                                    className={`w-4 h-4 ${
                                        transaction.type === 'deposit' ? 'text-green-400' : 'text-orange-400'
                                    }`}
                                />
                              </div>
                              <span className="text-white font-bold text-sm">
                            ${transaction.amount.toLocaleString()}
                          </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                        <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold ${
                                transaction.type === 'deposit'
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-orange-500/20 text-orange-400'
                            }`}
                        >
                          {transaction.type === 'deposit' ? (
                              <ArrowDownRight size={14} />
                          ) : (
                              <ArrowUpRight size={14} />
                          )}
                          {transaction.type}
                        </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-sm">{transaction.method}</td>
                          <td className="px-6 py-4 text-white font-mono text-sm">
                            {truncateWithEllipsis(transaction.reference, 10)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-white text-sm font-medium">{transaction.date}</div>
                            <div className="text-gray-500 text-xs">{transaction.time}</div>
                          </td>
                          <td className="px-6 py-4">
                        <span
                            className={`px-4 py-1.5 rounded-lg font-bold text-xs uppercase inline-block ${
                                transaction.status === 'approved'
                                    ? 'bg-green-500 text-white'
                                    : transaction.status === 'pending'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-red-500 text-white'
                            }`}
                        >
                          {transaction.status}
                        </span>
                          </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Search className="w-12 h-12 text-gray-600 mb-3" />
                          <p className="text-gray-400 text-lg font-medium">No transactions found</p>
                          <p className="text-gray-500 text-sm">
                            Try adjusting your search or filter
                          </p>
                        </div>
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-slate-800 bg-slate-900/30">
                  <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all"
                  >
                    Previous
                  </button>
                  <span className="text-gray-400 font-medium text-sm sm:text-base">
                Page {currentPage} of {totalPages}
              </span>
                  <button
                      onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all"
                  >
                    Next
                  </button>
                </div>
            )}
          </div>
        </div>
      </DashboardLayout>
  );
}