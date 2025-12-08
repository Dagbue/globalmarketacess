import { useState, useEffect } from 'react';
import { Search, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import useReadUserTrade from "../../hooks/trade/useReadUserTrade";
import { formatDate2 } from "../../utils/helperFunctions.ts";
import { formatUserCurrencyAmount, getUserCurrency, getCurrencySymbol } from "../../utils/currencyHelpers.ts";

export default function TradingHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [userCurrency, setUserCurrency] = useState<string>(getUserCurrency());
  const storedUserId = localStorage.getItem('userId');

  const { data: tradeData, isLoading, isError } = useReadUserTrade(
      storedUserId ? { userId: storedUserId } : undefined
  );

  // Update currency on mount and listen for changes
  useEffect(() => {
    // Set initial currency from localStorage
    setUserCurrency(getUserCurrency());

    // Listen for currency changes in localStorage
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

  // Default to empty array if tradeData or tradeData.trades is undefined
  const recentTrades = tradeData?.trades || [];

  const filteredTrades = recentTrades.filter(trade =>
      trade.tradeId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.symbolTraded.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic: 10 items per page
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTrades.length / itemsPerPage);
  const paginatedTrades = filteredTrades.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

  return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white font-bold text-2xl mb-4">My trade history</h2>

          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                  type="text"
                  placeholder="Search trades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
              <tr className="border-b border-slate-800">
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Trade ID</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Trade Type</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Trade Time</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Symbol Traded</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Expected Payout</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Leverage</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">End Price</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">End Time</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Trade Status</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
              {isLoading ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                    </td>
                  </tr>
              ) : isError ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-red-400">
                      Error loading trades. Please try again later.
                    </td>
                  </tr>
              ) : paginatedTrades.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-gray-400">
                      No trades found.
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
                          <span className="text-orange-400 font-bold">{getCurrencySymbol(userCurrency)} PendingTrade</span>
                      );
                    } else if (isWon) {
                      payoutDisplay = (
                          <span className="flex items-center gap-1 font-bold text-green-400">
                        <ArrowUpRight size={16} />
                            {formatUserCurrencyAmount(trade.expectedPayout)}
                      </span>
                      );
                    } else if (isLost) {
                      payoutDisplay = (
                          <span className="flex items-center gap-1 font-bold text-red-400">
                        <ArrowDownRight size={16} />
                            {formatUserCurrencyAmount(-trade.amountTrade)}
                      </span>
                      );
                    } else {
                      payoutDisplay = <span className="text-gray-400">N/A</span>;
                    }

                    return (
                        <tr key={trade.tradeId} className="hover:bg-slate-800/50 transition-colors">
                          <td className="px-4 py-4 text-white font-medium">{trade.tradeId}</td>
                          <td className="px-4 py-4">
                        <span className={`font-bold ${trade.tradeType === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                          {trade.tradeType}
                        </span>
                          </td>
                          <td className="px-4 py-4 text-gray-400 text-sm">{formatDate2(trade.tradeTime)}</td>
                          <td className="px-4 py-4 text-white font-medium">{trade.symbolTraded}</td>
                          <td className="px-4 py-4">{payoutDisplay}</td>
                          <td className="px-4 py-4 text-white font-medium">{trade.leverage}</td>
                          <td className="px-4 py-4 text-white font-medium">{formatUserCurrencyAmount(trade.endPrice)}</td>
                          <td className="px-4 py-4 text-gray-400 text-sm">{formatDate2(trade.endTime)}</td>
                          <td className="px-4 py-4">
                        <span className={`px-4 py-1.5 rounded-lg font-bold text-sm inline-block ${
                            isWon
                                ? 'bg-green-500 text-white'
                                : isLost
                                    ? 'bg-red-500 text-white'
                                    : 'bg-orange-500 text-white'
                        }`}>
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

          {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-gray-400">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all disabled:opacity-50"
                >
                  Next
                </button>
              </div>
          )}
        </div>
      </div>
  );
}