import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Search, ChevronLeft, ChevronRight, } from 'lucide-react';
import { toast } from 'sonner';
import useAllDeposits from "../../hooks/deposit/useAllDeposits.ts";
import useDeleteDeposit from "../../hooks/deposit/useDeleteDeposit.ts";
import useUpdateDepositStatus from "../../hooks/deposit/useUpdateDepositStatus.ts";
import {deleteDepositRequest, updateDepositStatusRequest} from "../../utils/interfacesAndTypes.ts";


interface DisplayDeposit {
  id: number;
  clientName: string;
  amount: number;
  paymentMode: string;
  dateApplied: string;
  description: string;
  status: string;
  depositId: number;
  // depositReason: string;
  userId: number;
}

const DepositRequests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedAction, setSelectedAction] = useState<{ type: 'approve' | 'decline', deposit: DisplayDeposit } | null>(null);
  const [selectedDelete, setSelectedDelete] = useState<DisplayDeposit | null>(null);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [deposits, setDeposits] = useState<DisplayDeposit[]>([]);

  const { fetchAllDeposits, isSubmitting } = useAllDeposits();
  const { deleteDeposit, isSubmitting: isDeleting } = useDeleteDeposit();
  const { updateDepositStatus, isSubmitting: isUpdatingStatus } = useUpdateDepositStatus();

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

  const refetchDeposits = async (): Promise<void> => {
    const data = await fetchAllDeposits();
    if (data && data.deposits) {
      const mappedDeposits: DisplayDeposit[] = data.deposits.map((apiDeposit: any) => ({
        id: apiDeposit.depositId,
        clientName: `${apiDeposit.firstName} ${apiDeposit.lastName}`,
        amount: apiDeposit.amount,
        paymentMode: apiDeposit.transactionMethod,
        dateApplied: formatDate(apiDeposit.createdAt),
        description: apiDeposit.additionalComment,
        depositReason: apiDeposit.depositReason,
        status: apiDeposit.depositStatus?.toLowerCase() || 'pending',
        depositId: apiDeposit.depositId,
        userId: apiDeposit.userId,
      }));
      setDeposits(mappedDeposits);
    }
  };

  useEffect(() => {
    refetchDeposits();
  }, []);

  const filteredDeposits: DisplayDeposit[] = deposits.filter((deposit: DisplayDeposit) =>
      deposit.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.paymentMode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages: number = Math.ceil(filteredDeposits.length / entriesPerPage);
  const paginatedDeposits: DisplayDeposit[] = filteredDeposits.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
  );

  const handleAction = (type: 'approve' | 'decline', deposit: DisplayDeposit): void => {
    setSelectedAction({ type, deposit });
    setShowConfirmModal(true);
  };

  const confirmAction = async (): Promise<void> => {
    if (selectedAction) {
      const { type, deposit } = selectedAction;
      const payload: updateDepositStatusRequest   = {
        depositId: deposit.depositId,
        depositStatus: type === 'approve' ? 'approved' : 'declined',
      };
      const success = await updateDepositStatus(payload);
      if (success) {
        toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} successful!`);
        setShowConfirmModal(false);
        setSelectedAction(null);
        await refetchDeposits();
      } else {
        toast.error(`Failed to ${type} deposit.`);
      }
    }
  };

  const handleDelete = (deposit: DisplayDeposit): void => {
    setSelectedDelete(deposit);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (): Promise<void> => {
    if (selectedDelete) {
      const payload: deleteDepositRequest = {
        depositId: selectedDelete.depositId,
      };
      const success = await deleteDeposit(payload);
      if (success) {
        toast.success('Deposit deleted successfully!');
        setShowDeleteModal(false);
        setSelectedDelete(null);
        await refetchDeposits();
      } else {
        toast.error('Failed to delete deposit.');
      }
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionButtons = (deposit: DisplayDeposit): JSX.Element => {
    if (deposit.status === 'approved') {
      return (
          <button className="bg-green-500 text-white px-4 py-1 rounded text-sm font-medium">
            Already Approved
          </button>
      );
    } else if (deposit.status === 'declined') {
      return (
          <button className="bg-red-500 text-white px-4 py-1 rounded text-sm font-medium">
            Already Declined
          </button>
      );
    } else {
      return (
          <div className="flex space-x-2">
            <button
                onClick={() => handleAction('approve', deposit)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Approve
            </button>
            <button
                onClick={() => handleAction('decline', deposit)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Decline
            </button>
            <button
                onClick={() => handleDelete(deposit)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Delete
            </button>
          </div>
      );
    }
  };

  if (isSubmitting) {
    return (
        <AdminLayout>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading deposits...</div>
          </div>
        </AdminLayout>
    );
  }

  return (
      <AdminLayout>
          <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Deposit Requests</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">show</span>
                  <select
                      value={entriesPerPage}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEntriesPerPage(Number(e.target.value))}
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
            </div>

            {/* Search */}
            <div className="flex mt-4 justify-between items-center">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                <input
                    type="text"
                    placeholder="Search Deposit Requests..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Deposits Table */}
            <div className="bg-white mt-8 rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Client
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Payment
                      Mode
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date
                      Applied
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
                    {/*<th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Deposit Reason</th>*/}
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedDeposits.length > 0 ? (
                      paginatedDeposits.map((deposit: DisplayDeposit) => (
                          <tr key={deposit.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.clientName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${deposit.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.paymentMode}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.dateApplied}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.description}</td>
                            {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.depositReason}</td>*/}
                            <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(deposit.status)}`}>
                          {deposit.status.charAt(0).toUpperCase() + deposit.status.slice(1)}
                        </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {getActionButtons(deposit)}
                            </td>
                          </tr>
                      ))
                  ) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                          {searchTerm ? 'No deposits match the search criteria.' : 'No deposits found.'}
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 0 && (
                  <div
                      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
                          Page <span className="font-medium">{currentPage}</span> of <span
                            className="font-medium">{totalPages}</span>
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                          <button
                              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                              disabled={currentPage === 1}
                              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <ChevronLeft className="h-5 w-5"/>
                          </button>
                          <button
                              onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                              disabled={currentPage === totalPages}
                              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <ChevronRight className="h-5 w-5"/>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
              )}
            </div>

            {/* Confirmation Modal for Approve/Decline */}
            {showConfirmModal && selectedAction && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                     style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh'}}>
                  <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {selectedAction.type === 'approve' ? 'Approve Deposit' : 'Decline Deposit'}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Are you sure you want to {selectedAction.type} this deposit request
                        from {selectedAction.deposit.clientName} for ${selectedAction.deposit.amount.toLocaleString()}?
                      </p>
                      <div className="flex space-x-3">
                        <button
                            onClick={confirmAction}
                            disabled={isUpdatingStatus}
                            className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                                selectedAction.type === 'approve'
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50'
                                    : 'bg-red-600 hover:bg-red-700 text-white disabled:opacity-50'
                            }`}
                        >
                          {isUpdatingStatus ? 'Processing...' : selectedAction.type.charAt(0).toUpperCase() + selectedAction.type.slice(1)}
                        </button>
                        <button
                            onClick={() => setShowConfirmModal(false)}
                            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded font-medium transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                     style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh'}}>
                  <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Deposit</h3>
                      <p className="text-gray-600 mb-6">
                        Are you sure you want to delete this deposit request from {selectedDelete.clientName} for
                        ${selectedDelete.amount.toLocaleString()}? This action cannot be undone.
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
                </div>
            )}
          </div>
      </AdminLayout>
);
};

export default DepositRequests;