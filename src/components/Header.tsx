import { Menu, X, Sparkles } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-gray-900/70 backdrop-blur-2xl border-b border-emerald-500/20 shadow-[0_8px_32px_rgba(16,185,129,0.15)]'
        : 'bg-gray-900/40 backdrop-blur-lg border-b border-white/5'
    }`}>
      <TickerTapeWidget />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent">
              Globalmarketacess
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2 bg-gray-800/30 backdrop-blur-xl rounded-2xl px-2 py-2 border border-emerald-500/10">
            <Link
              to="/about"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                isActive('/about')
                  ? 'text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                isActive('/testimonials')
                  ? 'text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                isActive('/pricing')
                  ? 'text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                isActive('/contact')
                  ? 'text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                isActive('/faq')
                  ? 'text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link to="/login" className="hidden lg:block px-6 py-2.5 text-gray-300 hover:text-emerald-400 transition-all font-semibold hover:bg-white/5 rounded-xl backdrop-blur-xl">
              Sign In
            </Link>
            <Link to="/register" className="hidden lg:block relative group px-7 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-xl font-bold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Launch App</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-all backdrop-blur-xl"
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
        className={`fixed left-0 right-0 bg-gray-900/95 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl transform transition-all duration-500 ease-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-1 px-4">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-xl transition-all font-semibold ${
                isActive('/about')
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-xl transition-all font-semibold ${
                isActive('/testimonials')
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-xl transition-all font-semibold ${
                isActive('/pricing')
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-xl transition-all font-semibold ${
                isActive('/contact')
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-xl transition-all font-semibold ${
                isActive('/faq')
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-white/10 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-gray-300 hover:text-emerald-400 transition-all font-semibold border border-gray-700 rounded-xl hover:border-emerald-500/50 hover:bg-white/5 backdrop-blur-xl"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-bold"
            >
              Launch App
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
