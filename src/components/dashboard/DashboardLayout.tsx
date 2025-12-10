import { ReactNode, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  ArrowLeftRight,
  Wallet,
  Gift,
  Download,
  Package,
  Settings,
  LogOut,
  Bell,
  User,
  Menu,
  X,
} from 'lucide-react';
import {companyLogo3} from "../../assets";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // State to hold the user's full name
  const [userFullName, setUserFullName] = useState<string>('User');
  // State to hold the user's display picture
  const [displayPicture, setDisplayPicture] = useState<string>('');

  // Load user data from localStorage on mount
  useEffect(() => {
    // Load first and last name
    const firstNameRaw = localStorage.getItem('userFirstName');
    const lastNameRaw = localStorage.getItem('userLastName');
    const userDataRaw = localStorage.getItem('userData'); // Full user object

    // Set full name
    if (firstNameRaw && lastNameRaw) {
      try {
        const firstName = JSON.parse(firstNameRaw);
        const lastName = JSON.parse(lastNameRaw);
        setUserFullName(`${firstName} ${lastName}`);
      } catch (error) {
        console.error('Failed to parse user name from localStorage', error);
        setUserFullName('User');
      }
    } else {
      setUserFullName('User');
    }

    // Set display picture
    if (userDataRaw) {
      try {
        const userData = JSON.parse(userDataRaw);
        const picture = userData.displayPicture?.trim();
        if (picture && picture !== '') {
          setDisplayPicture(picture);
        }
      } catch (error) {
        console.error('Failed to parse displayPicture from localStorage', error);
      }
    }
  }, []);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BarChart3, label: 'Trade Overview', path: '/dashboard/trade-overview' },
    { icon: ArrowLeftRight, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: Wallet, label: 'Fund Your Wallet', path: '/dashboard/fund-wallet' },
    { icon: Gift, label: 'Bonus', path: '/dashboard/bonus' },
    { icon: Download, label: 'Withdrawal', path: '/dashboard/withdrawal' },
    { icon: Package, label: 'Packages', path: '/dashboard/packages' },
    // { icon: Users, label: 'Copy Experts', path: '/dashboard/copy-experts' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    localStorage.clear();
    navigate('/login');
  };

  const handleSettingsRoute = () => {
    navigate('/dashboard/settings');
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
      <div className="min-h-screen bg-slate-950 flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-64 bg-slate-900 border-r border-slate-800 fixed left-0 top-0 bottom-0 z-30">
          {/* Logo */}
          <div className="p-6 border-b border-slate-800">
            <img className="h-16" src={companyLogo3} alt="logo"/>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                  <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                          isActive
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-slate-800'
                      }`}
                  >
                    <item.icon size={20} strokeWidth={2} />
                    <span>{item.label}</span>
                  </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
            <>
              <div
                  className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
              ></div>
              <aside className="fixed left-0 top-0 bottom-0 w-64 bg-slate-900 z-50 flex flex-col lg:hidden">
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                  <img className="h-14" src={companyLogo3} alt="logo"/>
                  <button
                      onClick={() => setSidebarOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24}/>
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                            }`}
                        >
                          <item.icon size={20} strokeWidth={2} />
                          <span>{item.label}</span>
                        </Link>
                    );
                  })}
                </nav>
              </aside>
            </>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
          {/* Top Bar */}
          <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 px-6 py-4 sticky top-0 z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden text-gray-400 hover:text-white transition-colors"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
              </div>

              <div className="flex items-center space-x-4">
                <button className=" relative p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile Button with Conditional Image */}
                <button
                    onClick={handleSettingsRoute}
                    className="flex items-center space-x-3 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">

                  <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                    {/* User Image */}
                    {displayPicture && (
                        <img
                            src={displayPicture}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    )}
                    {/* Fallback Icon */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center ${
                            displayPicture ? 'hidden' : ''
                        }`}
                    >
                      <User size={18} className="text-white" />
                    </div>

                  </div>
                  {/* User Name */}
                  <span className=" md:block text-white font-bold">
                  {userFullName}
                </span>
                </button>

                <button
                    onClick={handleLogoutClick}
                    className="px-4 py-2 bg-slate-800 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  <LogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-950">
            {children}
          </main>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full border border-slate-800 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                      <LogOut className="w-8 h-8 text-red-500" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-3">
                    Confirm Logout
                  </h3>

                  <p className="text-gray-400 text-center mb-6">
                    Are you sure you want to logout? You will need to login again to access your dashboard.
                  </p>

                  <div className="flex gap-3">
                    <button
                        onClick={handleLogoutCancel}
                        className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
                    >
                      Cancel
                    </button>
                    <button
                        onClick={handleLogoutConfirm}
                        className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}