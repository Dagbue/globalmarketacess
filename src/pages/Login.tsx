import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Users, Shield, TrendingUp, BarChart3 } from 'lucide-react';
import useLogin from "../hooks/auth/useLogin.ts";
import {companyLogo3} from "../assets";


export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const { loginUser, isSubmitting } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginUser({
      email: formData.email,
      password: formData.password
    });
    if (success) {
      navigate('/auth-success');
    }
  };

  return (
      <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0e27] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20 w-full">
            <Link to="/" className="mb-16">
              <img className="h-14" src={companyLogo3} alt="logo" />
            </Link>

            <div className="mb-16">
              <h1 className="text-5xl font-bold text-white leading-tight mb-4">
                Welcome Back to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Professional Trading
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Access your MT5 trading account and continue your journey in the global financial markets. Trade forex, indices, commodities, and cryptocurrencies with institutional-grade execution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 group-hover:border-blue-800/50 transition-all">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">15M+</div>
                  <div className="text-sm text-slate-400">Active Traders</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 group-hover:border-blue-800/50 transition-all">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-slate-400">Fund Security</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 group-hover:border-blue-800/50 transition-all">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">1400+</div>
                  <div className="text-sm text-slate-400">Global Assets</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 group-hover:border-blue-800/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
                  <div className="text-sm text-slate-400">Execution Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="flex items-center lg:hidden space-x-3 mb-8">
                <Link to="/" className="flex items-center space-x-2">
                  <img className="h-24" src={companyLogo3} alt="logo" />
                </Link>
              </div>

              <h2 className="text-4xl font-black text-gray-900 mb-3">
                Sign In
              </h2>
              <p className="text-gray-600 text-lg">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                    required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400 pr-12"
                      required
                  />
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      className="w-5 h-5 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-blue-600 transition-all"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing In...
                    </div>
                ) : (
                    'Sign In'
                )}
              </button>

              <div className="relative flex items-center justify-center my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative bg-white px-4 text-sm font-medium text-gray-500">OR</div>
              </div>

              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}