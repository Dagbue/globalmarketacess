import { useMemo, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { DollarSign, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import useCreateDeposit from '../../hooks/deposit/useCreateDeposit';
import useUpdateDeposit from '../../hooks/deposit/useUpdateDeposit';
import useAllUsers from '../../hooks/auth/useAllUsers';
import useReadUserDeposit from '../../hooks/deposit/useReadUserDeposit';
import { toast } from 'sonner';
import { useQuery } from '@tanstack/react-query';
import type { createDepositRequest, updateDepositRequest, User } from '../../utils/interfacesAndTypes';

interface Deposit {
  depositId: number;
  userId: number;
  amount: number;
  transactionType: string;
  transactionReference: string;
  transactionMethod: string;
  additionalComment: string;
  depositStatus: string;
  depositDate: string;
  createdAt: string;
  updatedAt: string;
}

const AddDeposit = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    amount: '',
    depositMethod: '',
    additionalComment: ''
  });

  const [showDepositsModal, setShowDepositsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState<(Deposit & { userEmail: string }) | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { createDeposit, isSubmitting } = useCreateDeposit();
  const { updateDeposit, isSubmitting: isUpdating } = useUpdateDeposit();
  const { fetchAllUsers } = useAllUsers();

  const depositMethods = [
    'Bitcoin',
    'Ethereum',
    'USDT (ERC20)',
    'USDT (TRC20)',
    'Dogecoin',
    'Litecoin',
    'Xrp',
    'Bank Transfer',
  ];

  // Fetch all users
  const { data: users, isLoading: isLoadingUsers } = useQuery<User[], Error>({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const users = await fetchAllUsers();
      return users || [];
    }
  });

  // Email to UserId map for create
  const emailToUserId = useMemo(() => {
    const map: Record<string, string> = {};
    users?.forEach(user => {
      map[user.email] = user.userId.toString();
    });
    return map;
  }, [users]);

  // User emails for select
  const userEmails = useMemo(() => {
    return users?.map(user => user.email) || [];
  }, [users]);

  // Fetch user deposits when modal opens and user is selected
  const selectedUserId = formData.userEmail ? emailToUserId[formData.userEmail] : undefined;
  const { data: userDepositsResponse, isLoading: isLoadingDeposits, refetch } = useReadUserDeposit(
      selectedUserId ? { userId: selectedUserId } : undefined
  );

  // @ts-ignore
  const enrichedDeposits = useMemo<(Deposit & { userEmail: string })[]>(() => {
    const deposits = userDepositsResponse?.deposits || [];
    return deposits.map(dep => ({
      ...dep,
      userEmail: formData.userEmail || 'Unknown'
    }));
  }, [userDepositsResponse, formData.userEmail]);

  const filteredDeposits = useMemo(() => {
    return enrichedDeposits.filter(deposit =>
        deposit.transactionReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deposit.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deposit.transactionMethod.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (deposit.additionalComment || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [enrichedDeposits, searchTerm]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);
  const paginatedDeposits = useMemo(() => {
    return filteredDeposits.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
  }, [filteredDeposits, currentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateRandomString = (): string => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleMakeDeposit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = emailToUserId[formData.userEmail];
    if (!userId) {
      toast.error('Selected user not found');
      return;
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (!formData.depositMethod) {
      toast.error('Please select a deposit method');
      return;
    }

    const transactionReference = generateRandomString();

    // @ts-ignore
    const depositData: createDepositRequest = {
      userId,
      amount: parseFloat(formData.amount),
      transactionMethod: formData.depositMethod,
      transactionType: 'deposit',
      depositStatus: 'pending',
      transactionReference,
      additionalComment: formData.additionalComment || undefined
    };

    const success = await createDeposit(depositData);

    if (success) {
      setFormData({
        userEmail: '',
        amount: '',
        depositMethod: '',
        additionalComment: ''
      });
      await refetch(); // Refresh deposits after creating a new one
    }
  };

  const handleLoadUsersDeposits = () => {
    if (!formData.userEmail) {
      toast.error('Please select a user email first');
      return;
    }
    setShowDepositsModal(true);
  };

  // @ts-ignore
  const handleEditDeposit = (deposit: Deposit & { userEmail: string }) => {
    setSelectedDeposit(deposit);
    setShowEditModal(true);
  };

  const handleUpdateDeposit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDeposit) return;

    const form = new FormData(e.currentTarget);
    const amount = form.get('amount') as string;
    const depositStatus = form.get('depositStatus') as string;
    const transactionMethod = form.get('transactionMethod') as string;
    const transactionType = form.get('transactionType') as string;
    const transactionReference = form.get('transactionReference') as string;
    const additionalComment = form.get('additionalComment') as string;

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (!depositStatus) {
      toast.error('Please enter a valid deposit status');
      return;
    }

    if (!transactionMethod) {
      toast.error('Please enter a valid transaction method');
      return;
    }

    if (!transactionType) {
      toast.error('Please enter a valid transaction type');
      return;
    }

    if (!transactionReference) {
      toast.error('Please enter a valid transaction reference');
      return;
    }

    // @ts-ignore
    const updateData: updateDepositRequest = {
      depositId: selectedDeposit.depositId,
      userId: selectedDeposit.userId.toString(),
      amount: parseFloat(amount),
      transactionMethod,
      transactionType,
      transactionReference,
      additionalComment: additionalComment || undefined,
      depositStatus,
    };

    const success = await updateDeposit(updateData);

    if (success) {
      setShowEditModal(false);
      setSelectedDeposit(null);
      await refetch(); // Refresh deposits after updating
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-600 text-white';
      case 'declined':
        return 'bg-red-600 text-white';
      case 'pending':
        return 'bg-orange-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    const suffix = day % 10 === 1 && day !== 11 ? 'st' :
        day % 10 === 2 && day !== 12 ? 'nd' :
            day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    return `${month} ${day}${suffix} '${year}`;
  };

  return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[80vh] p-4">
          <div className="w-full max-w-md">
            <div className="bg-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">MAKE DEPOSIT</h1>
              </div>

              <form onSubmit={handleMakeDeposit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Select User Email</label>
                  <select
                      name="userEmail"
                      value={formData.userEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select User Email</option>
                    {userEmails.map((email) => (
                        <option key={email} value={email}>{email}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Amount</label>
                  <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="Enter Amount"
                      required
                      min="0.01"
                      step="0.01"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Deposit Method</label>
                  <select
                      name="depositMethod"
                      value={formData.depositMethod}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Deposit Method</option>
                    {depositMethods.map((method) => (
                        <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Additional Comment</label>
                  <input
                      type="text"
                      name="additionalComment"
                      value={formData.additionalComment}
                      onChange={handleInputChange}
                      placeholder="Enter Comment"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || isLoadingUsers}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                      'Make Deposit'
                  )}
                </button>

                <button
                    type="button"
                    onClick={handleLoadUsersDeposits}
                    disabled={isLoadingDeposits || isLoadingUsers}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Load User Deposits
                </button>
              </form>
            </div>
          </div>

          {showDepositsModal && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}>
                <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-hidden">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">User Deposits</h2>
                    <button
                        onClick={() => setShowDepositsModal(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="p-6 border-b border-gray-200">
                    <div className="relative max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                          type="text"
                          placeholder="Search deposits..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto max-h-96">
                    <table className="w-full">
                      <thead className="bg-gray-800 sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S/N</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Transaction Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Transaction Reference</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">User Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                        {/*<th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>*/}
                      </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                      {isLoadingDeposits || isLoadingUsers ? (
                          <tr>
                            <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                              Loading deposits...
                            </td>
                          </tr>
                      ) : paginatedDeposits.length === 0 ? (
                          <tr>
                            <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                              No deposits found
                            </td>
                          </tr>
                      ) : (
                          paginatedDeposits.map((deposit, index) => (
                              <tr key={deposit.depositId} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.amount.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.transactionType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{deposit.transactionReference}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{deposit.userEmail}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(deposit.createdAt)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(deposit.depositStatus)}`}>
                              {deposit.depositStatus}
                            </span>
                                </td>
                                {/*<td className="px-6 py-4 whitespace-nowrap text-sm">*/}
                                {/*  <button*/}
                                {/*      onClick={() => handleEditDeposit(deposit)}*/}
                                {/*      className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center"*/}
                                {/*  >*/}
                                {/*    <Edit className="h-4 w-4 mr-1" />*/}
                                {/*    Edit*/}
                                {/*  </button>*/}
                                {/*</td>*/}
                              </tr>
                          ))
                      )}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              disabled={currentPage === 1}
                              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              disabled={currentPage === totalPages}
                              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {showEditModal && selectedDeposit && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}>
                <div className="bg-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-6 border-b border-gray-600">
                    <h2 className="text-xl font-bold text-white">UPDATE DEPOSIT INFO</h2>
                    <button
                        onClick={() => setShowEditModal(false)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
                    >
                      Back
                    </button>
                  </div>

                  <div className="w-full h-px bg-gray-600"></div>

                  <form onSubmit={handleUpdateDeposit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            defaultValue={selectedDeposit.amount.toFixed(2)}
                            required
                            min="0.01"
                            step="0.01"
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Deposit Status</label>
                        <select
                            name="depositStatus"
                            defaultValue={selectedDeposit.depositStatus}
                            required
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="declined">Declined</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Transaction Method</label>
                        <select
                            name="transactionMethod"
                            defaultValue={selectedDeposit.transactionMethod}
                            required
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Transaction Method</option>
                          {depositMethods.map((method) => (
                              <option key={method} value={method}>{method}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Transaction Type</label>
                        <input
                            type="text"
                            name="transactionType"
                            defaultValue={selectedDeposit.transactionType}
                            required
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Transaction Reference</label>
                        <input
                            type="text"
                            name="transactionReference"
                            defaultValue={selectedDeposit.transactionReference}
                            required
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-3">Additional Comment</label>
                        <input
                            type="text"
                            name="additionalComment"
                            defaultValue={selectedDeposit.additionalComment}
                            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-white text-sm font-medium mb-3">
                        Date Created: {formatDate(selectedDeposit.createdAt)}
                      </div>
                      <div className="text-white text-sm font-medium mb-3">Edit Date Created</div>
                      <input
                          type="date"
                          name="dateCreated"
                          defaultValue={selectedDeposit.createdAt.split('T')[0]}
                          className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="mt-8">
                      <button
                          type="submit"
                          disabled={isUpdating}
                          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded font-semibold transition-colors"
                      >
                        {isUpdating ? 'Updating...' : 'Update Deposit'}
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

export default AddDeposit;