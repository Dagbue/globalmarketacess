import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, TrendingUp, Lock, Mail, Shield, Zap } from 'lucide-react';
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 glass-card rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 glass-strong rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 glass rounded-full animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Features */}
          <div className="hidden lg:block space-y-8">
            <Link to="/" className="inline-block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all animate-glow"></div>
                <div className="relative glass-strong p-4 rounded-2xl">
                  <img className="h-20" src={companyLogo3} alt="logo" />
                </div>
              </div>
            </Link>

            <div className="space-y-6">
              <div className="glass-card p-8 rounded-3xl backdrop-blur-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-6 animate-pulse">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm">Trusted by 50,000+ Traders</span>
                </div>

                <h1 className="text-5xl font-black text-white leading-tight mb-4">
                  Welcome Back to
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                    Your Trading Hub
                  </span>
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Access institutional-grade trading tools and real-time market data.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass p-6 rounded-2xl backdrop-blur-2xl hover:glass-card transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Bank-Level Security</h3>
                      <p className="text-slate-400 text-sm">256-bit encryption & 2FA protection</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl backdrop-blur-2xl hover:glass-card transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Lightning-Fast Execution</h3>
                      <p className="text-slate-400 text-sm">Sub-millisecond order processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative glass-strong p-4 rounded-2xl">
                  <img className="h-16" src={companyLogo3} alt="logo" />
                </div>
              </div>
            </Link>

            {/* Glassmorphic Login Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-blue-600/50 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-glow"></div>

              <div className="relative glass-strong backdrop-blur-3xl rounded-3xl p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                    <Lock className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 font-semibold text-sm">Secure Login</span>
                  </div>

                  <h2 className="text-3xl font-black text-white mb-2">Sign In</h2>
                  <p className="text-slate-300">Access your trading account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-bold text-blue-100 mb-2">
                      Email Address
                    </label>
                    <div className="relative group/input">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/70 group-focus-within/input:text-cyan-400 transition-colors" />
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 glass-card backdrop-blur-2xl rounded-xl border-2 border-white/10 focus:border-blue-400/50 text-white placeholder:text-slate-400 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-bold text-blue-100 mb-2">
                      Password
                    </label>
                    <div className="relative group/input">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/70 group-focus-within/input:text-cyan-400 transition-colors" />
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-12 pr-12 py-4 glass-card backdrop-blur-2xl rounded-xl border-2 border-white/10 focus:border-blue-400/50 text-white placeholder:text-slate-400 outline-none transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        className="w-5 h-5 rounded-md glass-card border-2 border-white/20 focus:border-blue-400 checked:bg-blue-500 transition-all"
                      />
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group/btn py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 animate-glow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Signing In...
                        </>
                      ) : (
                        'Sign In'
                      )}
                    </span>
                  </button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 glass rounded-full text-slate-400">OR</span>
                    </div>
                  </div>

                  <p className="text-center text-slate-300">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      Sign up here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
