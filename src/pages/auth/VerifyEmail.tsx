import { useState, useRef, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Shield, Mail, CheckCircle, Clock} from 'lucide-react';
import {companyLogo3} from "../../assets";

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
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0e27] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20">
            <Link to="/" className="mb-12">
              <img className="h-16" src={companyLogo3} alt="logo"/>
            </Link>

            {/*<Link to="/" className="flex items-center gap-3 group mb-10">*/}
            {/*  <div className="w-11 h-11 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all">*/}
            {/*    <TrendingUp className="w-6 h-6 text-blue-400" />*/}
            {/*  </div>*/}
            {/*  <span className="text-xl font-bold text-white">*/}
            {/*  Globalmarketacess*/}
            {/*</span>*/}
            {/*</Link>*/}

            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                <Shield className="w-4 h-4 text-blue-400 mr-2"/>
                <span className="text-slate-300 font-medium text-sm">Join 50,000+ Traders Worldwide</span>
              </div>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Verify Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Email Address
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Check your inbox for the verification code to complete your registration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <CheckCircle className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Enhanced Account Protection</h3>
                  <p className="text-slate-400 text-sm">Verify ownership and secure your trading account</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Mail className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Spam-Free Communication</h3>
                  <p className="text-slate-400 text-sm">Receive important account updates and market alerts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Clock className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Instant Platform Access</h3>
                  <p className="text-slate-400 text-sm">Start trading immediately after verification</p>
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
                  // className="w-full bg-[#0a0e27] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0d1230] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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