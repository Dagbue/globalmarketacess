import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';
import AuthSuccess from './pages/AuthSuccess';
import Terms from './pages/Terms';
import Dashboard from './pages/Dashboard';
import TradeOverview from './pages/TradeOverview';
import Transactions from './pages/Transactions';
import FundWallet from './pages/FundWallet';
import Bonus from './pages/Bonus';
import Withdrawal from './pages/Withdrawal';
import Packages from './pages/Packages';
import Settings from './pages/Settings';
import CopyExperts from './pages/CopyExperts';
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import UsersList from "./pages/admin/UsersList.tsx";
import DepositRequests from "./pages/admin/DepositRequests.tsx";
import WithdrawalRequests from "./pages/admin/WithdrawalRequests.tsx";
import LoanRequests from "./pages/admin/LoanRequests.tsx";
import TradeRequests from "./pages/admin/TradeRequests.tsx";
import CopyExpertRequests from "./pages/admin/CopyExpertRequests.tsx";
import TradingBotRequests from "./pages/admin/TradingBotRequests.tsx";
import AddTrade from "./pages/admin/AddTrade.tsx";
import AddDeposit from "./pages/admin/AddDeposit.tsx";
import PaymentDetails from "./pages/admin/PaymentDetails.tsx";
import UploadedIds from "./pages/admin/UploadedIds.tsx";
import ChangePassword from "./pages/admin/ChangePassword.tsx";
import AddNewUser from "./pages/admin/AddNewUser.tsx";

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/contact', element: <Contact /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/auth-success', element: <AuthSuccess /> },
  { path: '/terms', element: <Terms /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/trade-overview', element: <TradeOverview /> },
  { path: '/dashboard/transactions', element: <Transactions /> },
  { path: '/dashboard/fund-wallet', element: <FundWallet /> },
  { path: '/dashboard/bonus', element: <Bonus /> },
  { path: '/dashboard/withdrawal', element: <Withdrawal /> },
  { path: '/dashboard/packages', element: <Packages /> },
  { path: '/dashboard/copy-experts', element: <CopyExperts /> },
  { path: '/dashboard/settings', element: <Settings /> },
  { path: '/admin/login', element: <AdminLogin /> },
  { path: '/admin/dashboard', element: <AdminDashboard /> },
  { path: '/admin/users', element: <UsersList /> },
  { path: '/admin/deposits', element: <DepositRequests /> },
  { path: '/admin/withdrawals', element: <WithdrawalRequests /> },
  { path: '/admin/loans', element: <LoanRequests /> },
  { path: '/admin/trades', element: <TradeRequests /> },
  { path: '/admin/copy-experts', element: <CopyExpertRequests /> },
  { path: '/admin/trading-bots', element: <TradingBotRequests /> },
  { path: '/admin/add-trade', element: <AddTrade /> },
  { path: '/admin/add-deposit', element: <AddDeposit /> },
  { path: '/admin/payment-details', element: <PaymentDetails /> },
  { path: '/admin/uploaded-ids', element: <UploadedIds /> },
  { path: '/admin/change-password', element: <ChangePassword /> },
  { path: '/admin/add-new-user', element: <AddNewUser /> },
];

export const pagesWithoutLayout = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/auth-success',
  '/dashboard',
  '/dashboard/trade-overview',
  '/dashboard/transactions',
  '/dashboard/fund-wallet',
  '/dashboard/bonus',
  '/dashboard/withdrawal',
  '/dashboard/packages',
  '/dashboard/copy-experts',
  '/dashboard/settings',
  '/admin/login',
  '/admin/dashboard',
  '/admin/users',
  '/admin/deposits',
  '/admin/withdrawals',
  '/admin/loans',
  '/admin/trades',
  '/admin/copy-experts',
  '/admin/trading-bots',
  '/admin/add-trade',
  '/admin/add-deposit',
  '/admin/payment-details',
  '/admin/uploaded-ids',
  '/admin/change-password',
  '/admin/add-new-user',
];
