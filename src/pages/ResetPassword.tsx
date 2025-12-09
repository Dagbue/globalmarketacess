import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Eye, EyeOff, Shield, Lock, Check, Zap } from 'lucide-react';
import useResetPassword from "../hooks/auth/useResetPassword.ts";
import { toast } from 'sonner';
import {companyLogo3} from "../assets";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const { resetPassword, isPasswordSubmitting } = useResetPassword();
  const email = localStorage.getItem('userEmail') || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!email) {
      toast.error("No email found. Please go back to forgot password.");
      return;
    }

    const dataToServer = {
      email,
      newPassword: formData.password,
    };

    const success = await resetPassword(dataToServer);
    if (success) {
      navigate('/login');
    }
  };

  return (
      <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0e27] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20">
            <Link to="/" className="mb-12">
              <img className="h-14" src={companyLogo3} alt="logo"/>
            </Link>

            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                <Shield className="w-4 h-4 text-blue-400 mr-2"/>
                <span className="text-slate-300 font-medium text-sm">Create a Strong Password</span>
              </div>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Reset Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Account Password
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Choose a strong, unique password to keep your trading account secure.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Lock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Military-Grade Encryption</h3>
                  <p className="text-slate-400 text-sm">Password secured with AES-256 encryption</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Check className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Password Strength Validation</h3>
                  <p className="text-slate-400 text-sm">Minimum 8 characters with mixed case and numbers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Zap className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Immediate Account Protection</h3>
                  <p className="text-slate-400 text-sm">Your account is secured instantly after reset</p>
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
                Set New Password
              </h2>
              <p className="text-gray-600 text-lg">
                Enter your new password below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your new password"
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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your new password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400 pr-12"
                      required
                  />
                  <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                  type="submit"
                  disabled={isPasswordSubmitting}
                  className="w-full bg-[#0a0e27] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0d1230] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPasswordSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Resetting...
                    </div>
                ) : (
                    'Reset Password'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}