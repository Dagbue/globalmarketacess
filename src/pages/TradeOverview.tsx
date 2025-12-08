import { useState, useEffect } from 'react';
import { Search, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { formatUserCurrencyAmount, getCurrencySymbol, getUserCurrency } from "../utils/currencyHelpers.ts";
import useReadUserTrade from "../hooks/trade/useReadUserTrade.ts";
import { formatDate2 } from "../utils/helperFunctions.ts";

export default function TradeOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [userCurrency, setUserCurrency] = useState<string>(getUserCurrency());
  const storedUserId = localStorage.getItem('userId');

  const { data: tradeData, isLoading, isError } = useReadUserTrade(
      storedUserId ? { userId: storedUserId } : undefined
  );

  // Update currency on mount and listen for changes
  useEffect(() => {
    setUserCurrency(getUserCurrency());

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'currency') {
        try {
          const newCurrency = event.newValue ? JSON.parse(event.newValue) : 'USD';
          setUserCurrency(newCurrency);
        } catch (error) {
          console.error('Error parsing currency from storage event:', error);
          setUserCurrency('USD');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Default to empty array
  const recentTrades = tradeData?.trades || [];

  const filteredTrades = recentTrades.filter(trade =>
      trade.tradeId.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.symbolTraded.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTrades.length / itemsPerPage);
  const paginatedTrades = filteredTrades.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

  // Reset page if out of bounds
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [filteredTrades.length, totalPages, currentPage]);

  // === EXPORT TO CSV FUNCTION ===
  const handleExport = () => {
    if (filteredTrades.length === 0) return;

    const headers = [
      'Trade ID',
      'Type',
      'Trade Time',
      'Symbol',
      'Amount',
      'Expected Payout',
      'Leverage',
      'End Price',
      'End Time',
      'Status'
    ];

    const rows = filteredTrades.map((trade) => {
      const isWon = trade.tradeStatus.toLowerCase() === 'won';
      const isLost = trade.tradeStatus.toLowerCase() === 'lost';
      const isPending = trade.tradeStatus.toLowerCase() === 'pending';

      let payout = '';
      if (isPending) payout = 'Pending';
      else if (isWon) payout = formatUserCurrencyAmount(trade.expectedPayout);
      else if (isLost) payout = `-${formatUserCurrencyAmount(trade.amountTrade)}`;

      return [
        trade.tradeId,
        trade.tradeType,
        formatDate2(trade.tradeTime),
        trade.symbolTraded,
        formatUserCurrencyAmount(trade.amountTrade),
        payout,
        trade.leverage,
        formatUserCurrencyAmount(trade.endPrice),
        formatDate2(trade.endTime),
        trade.tradeStatus
      ];
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `trades_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <DashboardLayout>
        <div className="p-6 space-y-6">
          {/* Header with Export Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-white font-bold text-2xl sm:text-3xl">Trade Overview</h1>
            <button
                onClick={handleExport}
                disabled={isLoading || filteredTrades.length === 0}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download size={18} />
              Export
            </button>
          </div>

          {/* Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                  type="text"
                  placeholder="Search trades..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Trade Table */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                <tr className="border-b border-slate-800 bg-slate-900/30">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Trade ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Trade Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Trade Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Symbol Traded
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Expected Payout
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Leverage
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    End Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    End Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Trade Status
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                {isLoading ? (
                    <tr>
                      <td colSpan={9} className="px-6 py-20 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                      </td>
                    </tr>
                ) : isError ? (
                    <tr>
                      <td colSpan={9} className="px-6 py-20 text-center text-red-400">
                        Error loading trades. Please try again later.
                      </td>
                    </tr>
                ) : filteredTrades.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Search className="w-12 h-12 text-gray-600 mb-3" />
                          <p className="text-gray-400 text-lg font-medium">No trades found</p>
                          <p className="text-gray-500 text-sm">Try adjusting your search query</p>
                        </div>
                      </td>
                    </tr>
                ) : (
                    paginatedTrades.map((trade) => {
                      const isWon = trade.tradeStatus.toLowerCase() === 'won';
                      const isLost = trade.tradeStatus.toLowerCase() === 'lost';
                      const isPending = trade.tradeStatus.toLowerCase() === 'pending';

                      let payoutDisplay;
                      if (isPending) {
                        payoutDisplay = (
                            <span className="text-orange-400 font-bold text-sm flex items-center gap-1">
                          {getCurrencySymbol(userCurrency)} Pending
                        </span>
                        );
                      } else if (isWon) {
                        payoutDisplay = (
                            <span className="flex items-center gap-1 font-bold text-sm text-green-400">
                          <ArrowUpRight size={16} />
                              {formatUserCurrencyAmount(trade.expectedPayout)}
                        </span>
                        );
                      } else if (isLost) {
                        payoutDisplay = (
                            <span className="flex items-center gap-1 font-bold text-sm text-red-400">
                          <ArrowDownRight size={16} />
                              {formatUserCurrencyAmount(-trade.amountTrade)}
                        </span>
                        );
                      } else {
                        payoutDisplay = <span className="text-gray-400 text-sm">N/A</span>;
                      }

                      return (
                          <tr
                              key={trade.tradeId}
                              className="hover:bg-slate-900/30 transition-colors cursor-pointer"
                          >
                            <td className="px-6 py-4 text-white font-medium text-sm">
                              {trade.tradeId}
                            </td>
                            <td className="px-6 py-4">
                          <span
                              className={`font-bold text-sm ${
                                  trade.tradeType === 'Buy' ? 'text-green-400' : 'text-red-400'
                              }`}
                          >
                            {trade.tradeType}
                          </span>
                            </td>
                            <td className="px-6 py-4 text-gray-400 text-sm">
                              {formatDate2(trade.tradeTime)}
                            </td>
                            <td className="px-6 py-4 text-white font-medium text-sm">
                              {trade.symbolTraded}
                            </td>
                            <td className="px-6 py-4">
                              {payoutDisplay}
                            </td>
                            <td className="px-6 py-4 text-white font-medium text-sm">
                              {trade.leverage}
                            </td>
                            <td className="px-6 py-4 text-white font-medium text-sm">
                              {formatUserCurrencyAmount(trade.endPrice)}
                            </td>
                            <td className="px-6 py-4 text-gray-400 text-sm">
                              {formatDate2(trade.endTime)}
                            </td>
                            <td className="px-6 py-4">
                          <span
                              className={`px-4 py-1.5 rounded-lg font-bold text-xs uppercase inline-block ${
                                  isWon
                                      ? 'bg-green-500 text-white'
                                      : isLost
                                          ? 'bg-red-500 text-white'
                                          : 'bg-orange-500 text-white'
                              }`}
                          >
                            {trade.tradeStatus}
                          </span>
                            </td>
                          </tr>
                      );
                    })
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