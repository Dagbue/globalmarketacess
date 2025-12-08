import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { toast } from 'sonner';
import type { User } from '../../utils/interfacesAndTypes';
import useAllUsers from '../../hooks/auth/useAllUsers';
import useUpdateUser from '../../hooks/auth/useUpdateUser';
import useDeleteUser from '../../hooks/auth/useDeleteUser';
// import { SUPPORTED_CURRENCIES } from '../../utils/currencyHelpers';

interface DisplayUser {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string | number;
  referralCode: string;
  frontId: string;
  backId: string;
  totalDepositedAmount: number;
  phoneNumber: string | number;
  totalWithdrawals: number;
  btcBalance: number;
  displayPicture: string;
  walletAddress: string | number;
  walletName: string;
  twoFactorAuthenticationCode: string;
  userStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  country: string;
  address: string;
  otp: number | null;
  realizedProfit: number;
  profit: number;
  loss: number;

  // currentPlan: string | null;
  // currency: string;
  // creditScore: string;
  // copyProfit: number;
  // copiedTraders: string;
}

interface UpdateFormData {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string | number;
  referralCode: string;
  frontId: string;
  backId: string;
  totalDepositedAmount: number | null;
  phoneNumber: string | number;
  totalWithdrawals: number | null;
  btcBalance: number;
  displayPicture: string;
  walletAddress: string | number;
  walletName: string;
  twoFactorAuthenticationCode: string;
  userStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  country: string;
  address: string;
  otp: number | null;
  realizedProfit: number | null;
  profit: number | null;
  loss: number | null;

  // currentPlan: string | null;
  // currency: string;
  // creditScore: string;
  // copyProfit: number;
  // copiedTraders: string;
}

const UsersList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<DisplayUser | null>(null);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(8);
  const [users, setUsers] = useState<DisplayUser[]>([]);
  const [updateForm, setUpdateForm] = useState<UpdateFormData | null>(null);

  const { fetchAllUsers, isSubmitting } = useAllUsers();
  const { updateUser, isSubmitting: isUpdating } = useUpdateUser();
  const { deleteUser, isSubmitting: isDeleting } = useDeleteUser();

  const formatDate = (dateString: string | number | Date): string => {
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

  const refetchUsers = async (): Promise<void> => {
    const data = await fetchAllUsers();
    if (data) {
      const mappedUsers: DisplayUser[] = data.map((apiUser: User) => ({
        userId: apiUser.userId,
        firstName: apiUser.firstName || '',
        lastName: apiUser.lastName || '',
        email: apiUser.email || '',
        password: apiUser.password?.toString() || '',
        referralCode: apiUser.referralCode || '',
        frontId: apiUser.frontId || '',
        backId: apiUser.backId || '',
        totalDepositedAmount: apiUser.totalDepositedAmount || 0,
        phoneNumber: apiUser.phoneNumber?.toString() || '',
        totalWithdrawals: apiUser.totalWithdrawals || 0,
        btcBalance: apiUser.btcBalance || 0,
        displayPicture: apiUser.displayPicture || '',
        walletAddress: apiUser.walletAddress?.toString() || '',
        walletName: apiUser.walletName || '',
        twoFactorAuthenticationCode: apiUser.twoFactorAuthenticationCode || '',
        userStatus: apiUser.userStatus || 'pending',
        role: apiUser.role || 'user',
        createdAt: apiUser.createdAt || '',
        updatedAt: apiUser.updatedAt || '',
        country: apiUser.country || 'Unknown',
        address: apiUser.address || '',
        otp: apiUser.otp ?? null,
        realizedProfit: apiUser.realizedProfit || 0,
        profit: apiUser.profit || 0,
        loss: apiUser.loss || 0,
        // currentPlan: apiUser.currentPlan ?? null,
        // currency: apiUser.currency || 'USD',
        // creditScore: apiUser.creditScore || 'Poor',
        // copyProfit: apiUser.copyProfit || 0,
        // copiedTraders: apiUser.copiedTraders || '[]',
      }));
      setUsers(mappedUsers);
    }
  };

  useEffect(() => {
    refetchUsers();
  }, []);

  const filteredUsers: DisplayUser[] = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages: number = Math.ceil(filteredUsers.length / entriesPerPage);
  const paginatedUsers: DisplayUser[] = filteredUsers.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
  );

  const handleUpdate = (user: DisplayUser): void => {
    // @ts-ignore
    let parsedCopiedTraders: string[] = [];
    try {
      // @ts-ignore
      parsedCopiedTraders = user.copiedTraders ? JSON.parse(user.copiedTraders) : [];
    } catch {
      parsedCopiedTraders = [];
    }

    setSelectedUser(user);
    setUpdateForm({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      referralCode: user.referralCode,
      frontId: user.frontId,
      backId: user.backId,
      totalDepositedAmount: user.totalDepositedAmount,
      phoneNumber: user.phoneNumber,
      totalWithdrawals: user.totalWithdrawals,
      btcBalance: user.btcBalance,
      displayPicture: user.displayPicture,
      walletAddress: user.walletAddress,
      walletName: user.walletName,
      twoFactorAuthenticationCode: user.twoFactorAuthenticationCode,
      userStatus: user.userStatus,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      country: user.country,
      address: user.address,
      otp: user.otp,
      realizedProfit: user.realizedProfit,
      profit: user.profit,
      loss: user.loss,
      // currentPlan: user.currentPlan,
      // currency: user.currency,
      // creditScore: user.creditScore,
      // copyProfit: user.copyProfit,
      // copiedTraders: parsedCopiedTraders,
    });
    setShowUpdateModal(true);
  };

  const handleDelete = (user: DisplayUser): void => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (): Promise<void> => {
    if (selectedUser) {
      const success = await deleteUser({ userId: selectedUser.userId.toString() });
      if (success) {
        toast.success('User deleted successfully!');
        setShowDeleteModal(false);
        setSelectedUser(null);
        await refetchUsers();
      } else {
        toast.error('Failed to delete user.');
      }
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!updateForm) return;

    if (!updateForm.firstName || !updateForm.lastName || !updateForm.email) {
      toast.error('First Name, Last Name, and Email are required.');
      return;
    }

    const submitData = {
      userId: updateForm.userId,
      firstName: updateForm.firstName,
      lastName: updateForm.lastName,
      email: updateForm.email,
      password: updateForm.password,
      referralCode: updateForm.referralCode,
      frontId: updateForm.frontId,
      backId: updateForm.backId,
      totalDepositedAmount: Number(updateForm.totalDepositedAmount) || 0,
      phoneNumber: updateForm.phoneNumber.toString(),
      totalWithdrawals: Number(updateForm.totalWithdrawals) || 0,
      btcBalance: Number(updateForm.btcBalance) || 0,
      displayPicture: updateForm.displayPicture,
      walletAddress: updateForm.walletAddress.toString(),
      walletName: updateForm.walletName,
      twoFactorAuthenticationCode: updateForm.twoFactorAuthenticationCode,
      userStatus: updateForm.userStatus,
      role: updateForm.role,
      country: updateForm.country,
      address: updateForm.address,
      otp: updateForm.otp,
      realizedProfit: Number(updateForm.realizedProfit) || 0,
      profit: Number(updateForm.profit) || 0,
      loss: Number(updateForm.loss) || 0,
      // copyProfit: Number(updateForm.copyProfit) || 0,
      // copiedTraders: JSON.stringify(updateForm.copiedTraders || []),
      // currentPlan: updateForm.currentPlan ?? null,
      // DO NOT SEND createdAt or updatedAt — they are auto-managed by the database
    };

    // @ts-ignore
    const success = await updateUser(submitData);
    if (success) {
      toast.success('User updated successfully!');
      setShowUpdateModal(false);
      setSelectedUser(null);
      setUpdateForm(null);
      await refetchUsers();
    } else {
      toast.error('Failed to update user.');
    }
  };

  const handleFormChange = (field: keyof UpdateFormData, value: any): void => {
    if (updateForm) {
      setUpdateForm({
        ...updateForm,
        [field]: value,
      });
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      case 'pending':
      case 'unverified':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Options
  // @ts-ignore
  const creditScores = ['Excellent', 'Good', 'Poor'];
  // @ts-ignore
  const availableTraders = ['Alex G', 'Hitha Palepu', 'Hither Mann', 'Thomas Krakow', 'Steve Luke'];
  // @ts-ignore
  const planOptions = ['', 'Basic', 'Standard', 'Premium', 'Deluxe', '401k Plan'];

  if (isSubmitting) {
    return (
        <AdminLayout>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading users...</div>
          </div>
        </AdminLayout>
    );
  }

  return (
      <AdminLayout>
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">List of Users</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show</span>
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
          </div>

          {/* Search */}
          <div className="relative mt-4 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
                type="text"
                placeholder="Search User List..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Users Table */}
          <div className="bg-white mt-8 rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Full
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Password</th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Account
                    Balance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Deposited</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Withdrawn</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Profit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Loss</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {paginatedUsers.length > 0 ? (
                    paginatedUsers.map((user) => (
                        <tr key={user.userId} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.firstName} {user.lastName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.password}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.realizedProfit.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.totalDepositedAmount.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.totalWithdrawals.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.profit.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.loss.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(user.createdAt)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.userStatus)}`}>
                              {user.userStatus.charAt(0).toUpperCase() + user.userStatus.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button
                                onClick={() => handleUpdate(user)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                            >
                              Update
                            </button>
                            <button
                                onClick={() => handleDelete(user)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                      <td colSpan={14} className="px-6 py-4 text-center text-sm text-gray-500">
                        {searchTerm ? 'No users match the search criteria.' : 'No users found.'}
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 0 && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * entriesPerPage + 1}</span> to{' '}
                        <span className="font-medium">{Math.min(currentPage * entriesPerPage, filteredUsers.length)}</span> of{' '}
                        <span className="font-medium">{filteredUsers.length}</span> entries
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
          {showDeleteModal && selectedUser && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="h-6 w-6 text-red-600" />
                    </div>
                    <button onClick={() => setShowDeleteModal(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete User</h3>
                  <p className="text-gray-600 mb-6">
                    Are you sure you want to delete {selectedUser.firstName} {selectedUser.lastName}? This action cannot be undone.
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

          {/* Update Modal */}
          {showUpdateModal && selectedUser && updateForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
                <div className="bg-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-6 border-b border-gray-600">
                    <h2 className="text-xl font-bold text-white">Update User Info</h2>
                    <button
                        onClick={() => {
                          setShowUpdateModal(false);
                          setSelectedUser(null);
                          setUpdateForm(null);
                        }}
                        className="text-gray-300 hover:text-gray-100"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <form onSubmit={handleUpdateSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">First Name</label>
                        <input
                            type="text"
                            value={updateForm.firstName}
                            onChange={(e) => handleFormChange('firstName', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                        <input
                            type="text"
                            value={updateForm.lastName}
                            onChange={(e) => handleFormChange('lastName', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={updateForm.email}
                            onChange={(e) => handleFormChange('email', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Password</label>
                        <input
                            type="text"
                            value={updateForm.password}
                            onChange={(e) => handleFormChange('password', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Country</label>
                        <input
                            type="text"
                            value={updateForm.country}
                            onChange={(e) => handleFormChange('country', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                        <input
                            type="text"
                            value={updateForm.phoneNumber}
                            onChange={(e) => handleFormChange('phoneNumber', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Account Balance</label>
                        <input
                            type="number"
                            value={updateForm.realizedProfit ?? ''}
                            onChange={(e) => handleFormChange('realizedProfit', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => {
                              if (updateForm.realizedProfit === null) handleFormChange('realizedProfit', 0);
                            }}
                            min="0"
                            step="0.00000001"
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Total Deposited</label>
                        <input
                            type="number"
                            value={updateForm.totalDepositedAmount ?? ''}
                            onChange={(e) => handleFormChange('totalDepositedAmount', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => {
                              if (updateForm.totalDepositedAmount === null) handleFormChange('totalDepositedAmount', 0);
                            }}
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Total Withdrawn</label>
                        <input
                            type="number"
                            value={updateForm.totalWithdrawals ?? ''}
                            onChange={(e) => handleFormChange('totalWithdrawals', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => {
                              if (updateForm.totalWithdrawals === null) handleFormChange('totalWithdrawals', 0);
                            }}
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Profit</label>
                        <input
                            type="number"
                            value={updateForm.profit ?? ''}
                            onChange={(e) => handleFormChange('profit', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => {
                              if (updateForm.profit === null) handleFormChange('profit', 0);
                            }}
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Loss</label>
                        <input
                            type="number"
                            value={updateForm.loss ?? ''}
                            onChange={(e) => handleFormChange('loss', e.target.value === '' ? null : parseFloat(e.target.value) || 0)}
                            onBlur={() => {
                              if (updateForm.loss === null) handleFormChange('loss', 0);
                            }}
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      {/*<div>*/}
                      {/*  <label className="block text-white text-sm font-medium mb-2">Current Plan</label>*/}
                      {/*  <select*/}
                      {/*      value={updateForm.currentPlan || ''}*/}
                      {/*      onChange={(e) => handleFormChange('currentPlan', e.target.value || null)}*/}
                      {/*      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                      {/*  >*/}
                      {/*    {planOptions.map((plan) => (*/}
                      {/*        <option key={plan} value={plan.toLowerCase()}>*/}
                      {/*          {plan || 'None'}*/}
                      {/*        </option>*/}
                      {/*    ))}*/}
                      {/*  </select>*/}
                      {/*</div>*/}
                      {/*<div>*/}
                      {/*  <label className="block text-white text-sm font-medium mb-2">Currency</label>*/}
                      {/*  <select*/}
                      {/*      value={updateForm.currency}*/}
                      {/*      onChange={(e) => handleFormChange('currency', e.target.value)}*/}
                      {/*      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                      {/*  >*/}
                      {/*    {SUPPORTED_CURRENCIES.map((currency) => (*/}
                      {/*        <option key={currency.code} value={currency.code}>*/}
                      {/*          {currency.code} - {currency.name}*/}
                      {/*        </option>*/}
                      {/*    ))}*/}
                      {/*  </select>*/}
                      {/*</div>*/}
                      {/*<div>*/}
                      {/*  <label className="block text-white text-sm font-medium mb-2">Credit Score</label>*/}
                      {/*  <select*/}
                      {/*      value={updateForm.creditScore}*/}
                      {/*      onChange={(e) => handleFormChange('creditScore', e.target.value)}*/}
                      {/*      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                      {/*  >*/}
                      {/*    {creditScores.map((score) => (*/}
                      {/*        <option key={score} value={score}>{score}</option>*/}
                      {/*    ))}*/}
                      {/*  </select>*/}
                      {/*</div>*/}
                      {/*<div>*/}
                      {/*  <label className="block text-white text-sm font-medium mb-2">Copy Profit</label>*/}
                      {/*  <input*/}
                      {/*      type="number"*/}
                      {/*      value={updateForm.copyProfit}*/}
                      {/*      onChange={(e) => handleFormChange('copyProfit', parseFloat(e.target.value) || 0)}*/}
                      {/*      min="0"*/}
                      {/*      step="0.01"*/}
                      {/*      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                      {/*  />*/}
                      {/*</div>*/}
                      {/*<div>*/}
                      {/*  <label className="block text-white text-sm font-medium mb-2">Copied Traders</label>*/}
                      {/*  <select*/}
                      {/*      multiple*/}
                      {/*      value={updateForm.copiedTraders}*/}
                      {/*      onChange={(e) =>*/}
                      {/*          handleFormChange(*/}
                      {/*              'copiedTraders',*/}
                      {/*              Array.from(e.target.selectedOptions, (option) => option.value)*/}
                      {/*          )*/}
                      {/*      }*/}
                      {/*      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"*/}
                      {/*  >*/}
                      {/*    {availableTraders.map((trader) => (*/}
                      {/*        <option key={trader} value={trader}>{trader}</option>*/}
                      {/*    ))}*/}
                      {/*  </select>*/}
                      {/*  <p className="text-xs text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple</p>*/}
                      {/*</div>*/}
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Status</label>
                        <select
                            value={updateForm.userStatus}
                            onChange={(e) => handleFormChange('userStatus', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="verified">Verified</option>
                          <option value="unverified">Unverified</option>
                          <option value="suspended">Suspended</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Date Created</label>
                        <input
                            type="text"
                            value={formatDate(selectedUser.createdAt)}
                            readOnly
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex justify-end space-x-3">
                      <button
                          type="button"
                          onClick={() => {
                            setShowUpdateModal(false);
                            setSelectedUser(null);
                            setUpdateForm(null);
                          }}
                          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium transition-colors"
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

export default UsersList;