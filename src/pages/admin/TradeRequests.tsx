import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { toast } from 'sonner';
import type { readAllTradeResponse, updateTradeRequest } from '../../utils/interfacesAndTypes';
import useDeleteTrade from '../../hooks/trade/useDeleteTrade';
import useUpdateTrade from '../../hooks/trade/useUpdateTrade';
import useAllTrades from '../../hooks/trade/useAllTrades';

interface DisplayTrade {
  tradeId: string | number;
  userId: number;
  tradeTime: string;
  symbolTraded: string;
  amountTrade: number;
  expectedPayout: number;
  leverage: string;
  endPrice: number;
  marketType: string;
  endTime: string;
  tradeStatus: string;
  tradeReference: string;
  tradeType: string;
  createdAt: string;
  updatedAt: string;
  stopLoss: string;
  takeProfit: string;
  entryPrice: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface UpdateTradeForm {
  tradeId: string | number;
  userId: number;
  tradeTime: string;
  symbolTraded: string;
  amountTrade: number;
  expectedPayout: number | null;
  leverage: string;
  endPrice: number | null;
  marketType: string;
  endTime: string; // "YYYY-MM-DDTHH:mm"
  tradeStatus: string;
  tradeReference: string;
  tradeType: string;
  createdAt: string;
  updatedAt: string;
  stopLoss: string;
  takeProfit: string;
  entryPrice: number | null;
  email: string;
  firstName: string;
  lastName: string;
}

const TradeRequests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedTrade, setSelectedTrade] = useState<DisplayTrade | null>(null);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [trades, setTrades] = useState<DisplayTrade[]>([]);
  const [updateForm, setUpdateForm] = useState<UpdateTradeForm | null>(null);

  const { fetchAllTrades, isSubmitting: isLoading } = useAllTrades();
  const { deleteTrade, isSubmitting: isDeleting } = useDeleteTrade();
  const { updateTrade, isSubmitting: isUpdating } = useUpdateTrade();

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    return `${month} ${day}${suffix} ${year}`;
  };

  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).replace(',', '');
  };

  // NEW: Convert datetime-local → MySQL DATETIME string
  const convertDateFormat = (dateStr: string): string => {
    if (!dateStr || dateStr.length < 16) return '';
    // Input: "2025-08-07T20:44" → Output: "2025-08-07 20:44:00"
    return `${dateStr}:00`;
  };

  const refetchTrades = async (): Promise<void> => {
    const data: readAllTradeResponse | null = await fetchAllTrades();
    if (data && data.trades) {
      const mappedTrades: DisplayTrade[] = data.trades.map((apiTrade: any) => ({
        tradeId: apiTrade.tradeId,
        userId: apiTrade.userId,
        tradeTime: apiTrade.tradeTime,
        symbolTraded: apiTrade.symbolTraded,
        amountTrade: apiTrade.amountTrade || 0,
        expectedPayout: apiTrade.expectedPayout || 0,
        leverage: apiTrade.leverage || '1X',
        endPrice: apiTrade.endPrice || 0,
        marketType: apiTrade.marketType || 'Crypto',
        endTime: apiTrade.endTime,
        tradeStatus: apiTrade.tradeStatus || 'pending',
        tradeReference: apiTrade.tradeReference || '',
        tradeType: apiTrade.tradeType || 'Buy',
        createdAt: apiTrade.createdAt,
        updatedAt: apiTrade.updatedAt,
        stopLoss: apiTrade.stopLoss || '0',
        takeProfit: apiTrade.takeProfit || '0',
        entryPrice: apiTrade.entryPrice || 0,
        email: apiTrade.email || '',
        firstName: apiTrade.firstName || '',
        lastName: apiTrade.lastName || '',
      }));
      setTrades(mappedTrades);
    }
  };

  useEffect(() => {
    refetchTrades();
  }, []);

  const filteredTrades: DisplayTrade[] = trades.filter((trade) =>
      trade.tradeId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.symbolTraded.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.marketType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.tradeReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${trade.firstName} ${trade.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages: number = Math.ceil(filteredTrades.length / entriesPerPage);
  const paginatedTrades: DisplayTrade[] = filteredTrades.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
  );

  const handleEdit = (trade: DisplayTrade): void => {
    setSelectedTrade(trade);
    setUpdateForm({
      tradeId: trade.tradeId,
      userId: trade.userId,
      tradeTime: trade.tradeTime,
      symbolTraded: trade.symbolTraded,
      amountTrade: trade.amountTrade,
      expectedPayout: trade.expectedPayout,
      leverage: trade.leverage,
      endPrice: trade.endPrice,
      marketType: trade.marketType,
      endTime: trade.endTime.slice(0, 16), // Only up to minutes
      tradeStatus: trade.tradeStatus,
      tradeReference: trade.tradeReference,
      tradeType: trade.tradeType,
      createdAt: trade.createdAt,
      updatedAt: trade.updatedAt,
      stopLoss: trade.stopLoss,
      takeProfit: trade.takeProfit,
      entryPrice: trade.entryPrice,
      email: trade.email,
      firstName: trade.firstName,
      lastName: trade.lastName,
    });
    setShowEditModal(true);
  };

  const handleDelete = (trade: DisplayTrade): void => {
    setSelectedTrade(trade);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (): Promise<void> => {
    if (selectedTrade) {
      const success = await deleteTrade({ tradeId: selectedTrade.tradeId });
      if (success) {
        toast.success('Trade deleted successfully!');
        setShowDeleteModal(false);
        setSelectedTrade(null);
        await refetchTrades();
      } else {
        toast.error('Failed to delete trade.');
      }
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!updateForm) return;

    // @ts-ignore
    const submitData: updateTradeRequest = {
      tradeId: updateForm.tradeId,
      userId: updateForm.userId,
      symbolTraded: updateForm.symbolTraded,
      amountTrade: Number(updateForm.amountTrade) || 0,
      expectedPayout: Number(updateForm.expectedPayout) || 0,
      leverage: updateForm.leverage,
      endPrice: Number(updateForm.endPrice) || 0,
      marketType: updateForm.marketType,
      endTime: convertDateFormat(updateForm.endTime), // ← FIXED
      tradeStatus: updateForm.tradeStatus,
      tradeReference: updateForm.tradeReference,
      tradeType: updateForm.tradeType,
      stopLoss: updateForm.stopLoss,
      takeProfit: updateForm.takeProfit,
      entryPrice: Number(updateForm.entryPrice) || 0,
      // DO NOT SEND: tradeTime, createdAt, updatedAt
    };

    const success = await updateTrade(submitData);
    if (success) {
      toast.success('Trade updated successfully!');
      setShowEditModal(false);
      setSelectedTrade(null);
      setUpdateForm(null);
      await refetchTrades();
    } else {
      toast.error('Failed to update trade.');
    }
  };

  const handleFormChange = (field: keyof UpdateTradeForm, value: any): void => {
    if (updateForm) {
      setUpdateForm({ ...updateForm, [field]: value });
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'won':
        return 'bg-green-100 text-green-800';
      case 'lost':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
        <AdminLayout>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading trades...</div>
          </div>
        </AdminLayout>
    );
  }

  return (
      <AdminLayout>
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Trade Requests</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">show</span>
              <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
                type="text"
                placeholder="Search Trade Requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Trade ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Trade Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">End Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Leverage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Market Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Payout</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {paginatedTrades.length > 0 ? (
                    paginatedTrades.map((trade) => (
                        <tr key={trade.tradeId} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{trade.tradeReference}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.firstName} {trade.lastName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.tradeType}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.endPrice}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.leverage}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.marketType}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.expectedPayout}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.amountTrade}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.symbolTraded}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(trade.createdAt)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(trade.tradeStatus)}`}>
                              {trade.tradeStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button
                                onClick={() => handleEdit(trade)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                            >
                              Edit
                            </button>
                            <button
                                onClick={() => handleDelete(trade)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                      <td colSpan={12} className="px-6 py-8 text-center text-sm text-gray-500">
                        {searchTerm ? 'No trades match the search criteria.' : 'No trades found.'}
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button
                            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
            )}
          </div>

          {/* Delete Modal */}
          {showDeleteModal && selectedTrade && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="h-6 w-6 text-red-600" />
                    </div>
                    <button onClick={() => setShowDeleteModal(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Trade</h3>
                  <p className="text-gray-600 mb-6">
                    Are you sure you want to delete trade <strong>{selectedTrade.tradeId}</strong>? This action cannot be undone.
                  </p>
                  <div className="flex space-x-3">
                    <button
                        onClick={confirmDelete}
                        disabled={isDeleting}
                        className="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-2 px-4 rounded font-medium transition-colors"
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                    <button
                        onClick={() => setShowDeleteModal(false)}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
          )}

          {/* Edit Modal */}
          {showEditModal && selectedTrade && updateForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
                <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold text-white">Update Trade Request</h2>
                    <button
                        onClick={() => {
                          setShowEditModal(false);
                          setSelectedTrade(null);
                          setUpdateForm(null);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
                    >
                      Back
                    </button>
                  </div>

                  <form onSubmit={handleUpdateSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Trade ID</label>
                        <input type="text" value={updateForm.tradeReference} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">User</label>
                        <input type="text" value={`${updateForm.firstName} ${updateForm.lastName}`} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Trade Type</label>
                        <input type="text" value={updateForm.tradeType} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">End Price [Can be Edited]</label>
                        <input
                            type="number"
                            value={updateForm.endPrice ?? ''}
                            onChange={(e) => handleFormChange('endPrice', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => { if (updateForm.endPrice === null) handleFormChange('endPrice', 0); }}
                            step="0.01"
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Leverage</label>
                        <input type="text" value={updateForm.leverage} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Amount</label>
                        <input type="text" value={updateForm.amountTrade} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Symbol</label>
                        <input type="text" value={updateForm.symbolTraded} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Payout [Can be Edited]</label>
                        <input
                            type="number"
                            value={updateForm.expectedPayout ?? ''}
                            onChange={(e) => handleFormChange('expectedPayout', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => { if (updateForm.expectedPayout === null) handleFormChange('expectedPayout', 0); }}
                            step="0.01"
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Market Type</label>
                        <input type="text" value={updateForm.marketType} readOnly className="w-full px-3 py-2 bg-white rounded-md border border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Stop Loss</label>
                        <input
                            type="text"
                            value={updateForm.stopLoss}
                            onChange={(e) => handleFormChange('stopLoss', e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Take Profit</label>
                        <input
                            type="text"
                            value={updateForm.takeProfit}
                            onChange={(e) => handleFormChange('takeProfit', e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Entry Price</label>
                        <input
                            type="number"
                            value={updateForm.entryPrice ?? ''}
                            onChange={(e) => handleFormChange('entryPrice', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => { if (updateForm.entryPrice === null) handleFormChange('entryPrice', 0); }}
                            step="0.01"
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Trade End Time: [Can be Edited]</label>
                        <div className="text-gray-400 text-xs mb-1">Current: {formatDateTime(updateForm.endTime + ':00')}</div>
                        <input
                            type="datetime-local"
                            value={updateForm.endTime}
                            onChange={(e) => handleFormChange('endTime', e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-1">Trade Status: [Can be Edited]</label>
                        <select
                            value={updateForm.tradeStatus}
                            onChange={(e) => handleFormChange('tradeStatus', e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                          type="button"
                          onClick={() => {
                            setShowEditModal(false);
                            setSelectedTrade(null);
                            setUpdateForm(null);
                          }}
                          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                          type="submit"
                          disabled={isUpdating}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded font-medium transition-colors"
                      >
                        {isUpdating ? 'Updating...' : 'Update Details'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          )}
        </div>
      </AdminLayout>
  );
};

export default TradeRequests;