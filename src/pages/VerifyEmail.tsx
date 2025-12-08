import { useState, useRef, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Sparkles, Mail, Shield, Clock } from 'lucide-react';
import {companyLogo3} from "../assets";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }

    setOtp(newOtp);

    const lastFilledIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      navigate('/login');
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
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
                <span className="text-blue-300 font-semibold text-sm">Join 50,000+ Traders Worldwide</span>
              </div>

              <h1 className="text-5xl font-black text-white leading-tight">
                Verify Your
                <span
                    className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Email Address
              </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                Check your inbox for the verification code to complete your registration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Instant Delivery</h3>
                  <p className="text-slate-400 text-sm">Codes sent via secure email servers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50 transition-all">
                  <Shield className="w-6 h-6 text-cyan-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Secure Verification</h3>
                  <p className="text-slate-400 text-sm">Protecting your account from day one</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all">
                  <Clock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Quick Setup</h3>
                  <p className="text-slate-400 text-sm">Get trading in under 2 minutes</p>
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
                Email Verification
              </h2>
              <p className="text-gray-600 text-lg mb-2">
                Enter the 6-digit code we sent to
              </p>
              <p className="text-gray-900 font-bold">{email}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={el => inputRefs.current[index] = el}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-14 h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900"
                    />
                ))}
              </div>

              <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={otp.some(digit => digit === '')}
              >
                Verify Email
              </button>

              <div className="text-center pt-4">
                <p className="text-gray-600 mb-3">
                  Didn't receive the code?
                </p>
                <button
                    type="button"
                    onClick={handleResend}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  Resend Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}