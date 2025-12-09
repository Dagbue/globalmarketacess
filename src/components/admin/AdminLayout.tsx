import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  // LayoutDashboardIcon,
  ArrowDownLeft,
  ArrowUpRight,
  // FileText,
  Plus,
  CreditCard,
  Upload,
  // Settings,
  UserPlus,
  LogOut,
  Menu,
  X, TrendingUp
} from 'lucide-react';
// import {companyLogo2} from "../../assets";
// import {companyLogo} from "../../assets";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    // { icon: <LayoutDashboardIcon className="h-5 w-5" />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <Users className="h-5 w-5" />, label: 'List Of Users', path: '/admin/users' },
    { icon: <ArrowDownLeft className="h-5 w-5" />, label: 'Deposit Request', path: '/admin/deposits' },
    { icon: <ArrowUpRight className="h-5 w-5" />, label: 'Withdrawal Request', path: '/admin/withdrawals' },
    // { icon: <FileText className="h-5 w-5" />, label: 'Loan Request', path: '/admin/loans' },
    { icon: <TrendingUp className="h-5 w-5" />, label: 'Trade Request', path: '/admin/trades' },
    // { icon: <Users className="h-5 w-5" />, label: 'Copy Expert Request', path: '/admin/copy-experts' },
    // { icon: <TrendingUp className="h-5 w-5" />, label: 'Trading Bot Request', path: '/admin/trading-bots' },
    { icon: <Plus className="h-5 w-5" />, label: 'Add Trade', path: '/admin/add-trade' },
    { icon: <Plus className="h-5 w-5" />, label: 'Add Deposit', path: '/admin/add-deposit' },
    { icon: <CreditCard className="h-5 w-5" />, label: 'Payment Details', path: '/admin/payment-details' },
    { icon: <Upload className="h-5 w-5" />, label: 'Uploaded ID\'s', path: '/admin/uploaded-ids' },
    // { icon: <Settings className="h-5 w-5" />, label: 'Change Password', path: '/admin/change-password' },
    { icon: <UserPlus className="h-5 w-5" />, label: 'Add New User', path: '/admin/add-new-user' },
    { icon: <LogOut className="h-5 w-5" />, label: 'Logout', path: '/admin/login' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
          className={`w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-6 w-6"/>
          </button>
        </div>

        {/* Logo */}
        <div className="p-2 border-b border-gray-800 lg:mt-0 -mt-16">
          <div className="flex items-center justify-center">
            {/*<img className="h-16" src={companyLogo2} alt="logo"/>*/}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                          location.pathname === item.path
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      onClick={() => setSidebarOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3 text-sm">{item.label}</span>
                  </Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm px-4 lg:px-6 py-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Admin Info */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <span className="text-gray-700 font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;