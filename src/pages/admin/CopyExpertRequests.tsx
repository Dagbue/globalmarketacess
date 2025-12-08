import { useState, useEffect, useCallback, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import AuthService from '../../api/authService';
import type { User, updateExpertStatusRequest, deleteExpertRequest } from '../../utils/interfacesAndTypes';
import useAllExperts from '../../hooks/expert/useAllExperts';
import useUpdateExpertStatus from '../../hooks/expert/useUpdateExpertStatus';
import useDeleteExpert from '../../hooks/expert/useDeleteExpert';

interface Expert {
  expertId: number | string;
  userId: string;
  expertImage: string;
  expertName: string;
  expertWinRate: string;
  profitShare: string;
  wins: string;
  losses: string;
  expertStatus: string;
  copyDuration: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface EnrichedExpert extends Expert {
  clientName: string;
  dateApplied: string;
}

const CopyExpertRequests = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [selectedAction, setSelectedAction] = useState<{ type: 'approved' | 'declined' | 'delete'; expert: EnrichedExpert } | null>(null);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [users, setUsers] = useState<User[]>([]);
  const [experts, setExperts] = useState<EnrichedExpert[]>([]);
  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);

  const { fetchAllExperts, isSubmitting: loadingExperts } = useAllExperts();
  const { updateExpertStatus, isSubmitting: updatingStatus } = useUpdateExpertStatus();
  const { deleteExpert, isSubmitting: deleting } = useDeleteExpert();

  const userMap = useMemo(() => {
    return new Map<string, string>(users.map((u: User) => [u.userId.toString(), `${u.firstName} ${u.lastName}`]));
  }, [users]);

  const fetchUsers = useCallback(async () => {
    try {
      const { responseData, status, errorResponse } = await AuthService.allUsers();
      if (status === 200 && responseData) {
        console.log('Fetched users:', responseData);
        setUsers(responseData as User[]);
      } else {
        toast.error(errorResponse?.message || 'Failed to fetch users. Please try again.');
      }
    } catch (error) {
      console.error('Fetch users error:', error);
      toast.error('An unexpected error occurred while fetching users');
    }
  }, []);

  const fetchExperts = useCallback(async () => {
    const data = await fetchAllExperts();
    if (data && data.experts) {
      const enriched: EnrichedExpert[] = data.experts.map((e: Expert) => ({
        ...e,
        clientName: userMap.get(e.userId) || 'Unknown',
        dateApplied: new Date(e.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: '2-digit',
        }),
      }));
      console.log('Enriched experts:', enriched);
      setExperts(enriched);
    }
  }, [userMap]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (users.length > 0) {
      fetchExperts();
    }
  }, [users, fetchExperts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, entriesPerPage]);

  const filteredExperts = experts.filter((expert) =>
      expert.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertWinRate.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log('Filtered experts:', filteredExperts);

  const totalPages = Math.ceil(filteredExperts.length / entriesPerPage);
  const paginatedExperts = filteredExperts.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
  );

  const handleAction = (type: 'approved' | 'declined' | 'delete', expert: EnrichedExpert) => {
    setSelectedAction({ type, expert });
    setShowConfirmModal(true);
  };

  const confirmAction = async () => {
    if (!selectedAction) return;
    const { type, expert } = selectedAction;
    setIsActionLoading(true);
    let success = false;
    try {
      if (type === 'approved' || type === 'declined') {
        const request: updateExpertStatusRequest = {
          expertId: expert.expertId,
          expertStatus: type,
        };
        success = await updateExpertStatus(request);
      } else if (type === 'delete') {
        const request: deleteExpertRequest = {
          expertId: expert.expertId,
        };
        success = await deleteExpert(request);
      }
      if (success) {
        await fetchExperts();
      }
    } catch (error) {
      console.error('Action failed:', error);
      toast.error(`Failed to ${type} expert. Please try again.`);
    } finally {
      setIsActionLoading(false);
      setShowConfirmModal(false);
      setSelectedAction(null);
    }
  };

  const cancelAction = () => {
    setShowConfirmModal(false);
    setSelectedAction(null);
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

  const getActionButtons = (expert: EnrichedExpert) => {
    if (expert.expertStatus === 'approved' || expert.expertStatus === 'declined') {
      return (
          <div className="flex space-x-2">
            <button
                className={`text-white px-3 py-1 rounded text-sm font-medium ${
                    expert.expertStatus === 'approved' ? 'bg-green-500' : 'bg-red-500'
                }`}
                disabled
            >
              Already {expert.expertStatus}
            </button>
          </div>
      );
    } else {
      return (
          <div className="flex space-x-2">
            <button
                onClick={() => handleAction('approved', expert)}
                disabled={isActionLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium disabled:opacity-50"
            >
              Approve
            </button>
            <button
                onClick={() => handleAction('declined', expert)}
                disabled={isActionLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium disabled:opacity-50"
            >
              Decline
            </button>
            <button
                onClick={() => handleAction('delete', expert)}
                disabled={isActionLoading}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium disabled:opacity-50"
            >
              Delete
            </button>
          </div>
      );
    }
  };

  if (loadingExperts) {
    return (
        <AdminLayout>
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        </AdminLayout>
    );
  }

  return (
      <AdminLayout>
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Copy Expert Requests</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">show</span>
                <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    disabled={loadingExperts}
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
                  placeholder="Search Copy Expert Requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                  disabled={loadingExperts}
              />
            </div>
          </div>

          {/* Experts Table */}
          <div className="bg-white mt-8 rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Client
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Client
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Expert
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Win Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Profit
                    Share
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Copy
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date
                    Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {paginatedExperts.length > 0 ? (
                    paginatedExperts.map((expert) => (
                        <tr key={expert.expertId} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.firstName}&nbsp;{expert.lastName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.expertName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.expertWinRate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.profitShare}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.copyDuration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expert.dateApplied}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(expert.expertStatus)}`}>
                              {expert.expertStatus.charAt(0).toUpperCase() + expert.expertStatus.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {getActionButtons(expert)}
                          </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                        No experts found.
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
                        disabled={currentPage === 1 || loadingExperts}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages || loadingExperts}
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
                            disabled={currentPage === 1 || loadingExperts}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronLeft className="h-5 w-5"/>
                        </button>
                        <button
                            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages || loadingExperts}
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

          {/* Confirmation Modal */}
          {showConfirmModal && selectedAction && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                   style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh'}}>
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {selectedAction.type === 'delete'
                          ? 'Delete Expert'
                          : `${selectedAction.type === 'approved' ? 'Approve' : 'Decline'} Expert`}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Are you sure you want
                      to {selectedAction.type === 'approved' ? 'approve' : selectedAction.type === 'declined' ? 'decline' : 'delete'} this
                      expert request from{' '}
                      {selectedAction.expert.clientName}?
                    </p>
                    <div className="flex space-x-3">
                      <button
                          onClick={confirmAction}
                          disabled={isActionLoading || updatingStatus || deleting}
                          className={`flex-1 py-2 px-4 rounded font-medium transition-colors disabled:opacity-50 ${
                              selectedAction.type === 'approved'
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-red-600 hover:bg-red-700 text-white'
                          }`}
                      >
                        {isActionLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto"/> : (
                            selectedAction.type === 'delete' ? 'Delete' : (selectedAction.type === 'approved' ? 'Approve' : 'Decline')
                        )}
                      </button>
                      <button
                          onClick={cancelAction}
                          disabled={isActionLoading}
                          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded font-medium transition-colors disabled:opacity-50"
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

export default CopyExpertRequests;