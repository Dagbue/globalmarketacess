import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Mail, Clock } from 'lucide-react';
import {companyLogo3} from "../assets";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    navigate('/reset-password');
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
            <div className="flex items-center space-x-3 mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <img className="h-24" src={companyLogo3} alt="logo"/>
              </Link>
            </div>

            <div className="space-y-6 mb-12">
              <div
                  className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse"/>
                <span className="text-blue-300 font-semibold text-sm">Secure Password Recovery</span>
              </div>

              <h1 className="text-5xl font-black text-white leading-tight">
                Don't Worry,
                <span
                    className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                We've Got You Covered
              </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                Enter your email and we'll send you instructions to reset your password securely.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <Lock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Secure Process</h3>
                  <p className="text-slate-400 text-sm">Encrypted link sent via secure email servers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50 transition-all">
                  <Mail className="w-6 h-6 text-cyan-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Check Your Inbox</h3>
                  <p className="text-slate-400 text-sm">Instructions arrive within 2 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <Clock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Quick & Easy</h3>
                  <p className="text-slate-400 text-sm">Back to trading in no time</p>
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
                Forgot Password?
              </h2>
              <p className="text-gray-600 text-lg">
                No problem. Enter your email to reset it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                    required
                />
              </div>

              <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Proceed
              </button>

              <div className="text-center pt-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2 group">
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <span className="font-medium">Back to Sign In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}