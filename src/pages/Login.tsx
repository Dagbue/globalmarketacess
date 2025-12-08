import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Shield, Zap, BarChart3 } from 'lucide-react';
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
        <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20">
            <div className="flex items-center space-x-3 mb-12">
              <Link to="/" className="flex items-center space-x-2">
                <img className="h-24" src={companyLogo3} alt="logo" />
              </Link>
            </div>

            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
                <span className="text-blue-300 font-semibold text-sm">Trusted by 50,000+ Traders</span>
              </div>

              <h1 className="text-5xl font-black text-white leading-tight">
                Welcome Back to
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Your Trading Hub
              </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                Access real-time market data, execute trades instantly, and manage your portfolio with institutional-grade tools.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Bank-Level Security</h3>
                  <p className="text-slate-400 text-sm">256-bit encryption & 2FA protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50 transition-all">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Lightning-Fast Execution</h3>
                  <p className="text-slate-400 text-sm">Sub-millisecond order processing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Advanced Analytics</h3>
                  <p className="text-slate-400 text-sm">Real-time charts & market insights</p>
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