import { Menu, X, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TickerTapeWidget from "./widgets/TickerTapeWidget.tsx";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl shadow-cyan-500/5'
        : 'bg-slate-900/60 backdrop-blur-md border-b border-white/5'
    }`}>
      <TickerTapeWidget />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-11 h-11 bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
              Globalmarketacess
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/about')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link to="/login" className="hidden lg:block px-5 py-2.5 text-slate-300 hover:text-cyan-400 transition-all font-medium hover:bg-white/5 rounded-lg">
              Sign In
            </Link>
            <Link to="/register" className="hidden lg:block relative group px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Get Started</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl transform transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-1 px-4">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/about')
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-white/10 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-slate-300 hover:text-cyan-400 transition-all font-medium border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-white/5"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
