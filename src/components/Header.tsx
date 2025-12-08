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
        ? 'bg-[#0a0e27]/95 backdrop-blur-xl border-b border-blue-900/30 shadow-2xl shadow-blue-900/10'
        : 'bg-[#0a0e27]/80 backdrop-blur-md border-b border-blue-900/20'
    }`}>
      <TickerTapeWidget />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xl font-bold text-white">
              Globalmarketacess
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/about')
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-blue-600/10'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-blue-600/10'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-blue-600/10'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-blue-600/10'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-blue-600/10'
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden lg:block px-5 py-2.5 text-slate-300 hover:text-blue-400 transition-all font-medium hover:bg-blue-600/10 rounded-lg">
              Sign In
            </Link>
            <Link to="/register" className="hidden lg:block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30">
              Get Started
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-blue-400 hover:bg-blue-600/10 rounded-lg transition-all"
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
        className={`fixed left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-blue-900/30 shadow-2xl transform transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
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
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-blue-600/10 hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-blue-600/10 hover:text-blue-400'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-blue-600/10 hover:text-blue-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-blue-600/10 hover:text-blue-400'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-blue-600/10 hover:text-blue-400'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-blue-900/30 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-slate-300 hover:text-blue-400 transition-all font-medium border border-slate-700/50 rounded-lg hover:border-blue-600/50 hover:bg-blue-600/10"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-blue-600 hover:bg-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transition-all font-semibold"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
