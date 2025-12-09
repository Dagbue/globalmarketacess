import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Shield, Lock, Mail, Clock, TrendingUp} from 'lucide-react';
// import {companyLogo3} from "../assets";

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
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0e27] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20">
            {/*<Link to="/" className="mb-12">*/}
            {/*  <img className="h-14" src={companyLogo3} alt="logo"/>*/}
            {/*</Link>*/}

            <Link to="/" className="flex items-center gap-3 group mb-10">
              <div className="w-11 h-11 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">
              Globalmarketacess
            </span>
            </Link>

            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                <Shield className="w-4 h-4 text-blue-400 mr-2"/>
                <span className="text-slate-300 font-medium text-sm">Secure Password Recovery</span>
              </div>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Don't Worry,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  We've Got You Covered
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Enter your email and we'll send you instructions to reset your password securely.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Lock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Encrypted Recovery Process</h3>
                  <p className="text-slate-400 text-sm">Secure link sent via encrypted email servers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Mail className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Multi-Layer Verification</h3>
                  <p className="text-slate-400 text-sm">Time-limited secure tokens for your protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Clock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Rapid Account Access</h3>
                  <p className="text-slate-400 text-sm">Reset within minutes and resume trading</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="flex items-center lg:hidden space-x-3 mb-8">
                {/*<Link to="/" className="flex items-center space-x-2">*/}
                {/*  <img className="h-24" src={companyLogo3} alt="logo" />*/}
                {/*</Link>*/}
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
                  // className="w-full bg-[#0a0e27] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0d1230] transition-all duration-300"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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