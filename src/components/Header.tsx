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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-hover border-b border-dark-blue-500/30 shadow-glass-hover'
        : 'glass border-b border-white/10'
    }`}>
      <TickerTapeWidget />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-500 to-dark-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative w-12 h-12 glass-card rounded-2xl flex items-center justify-center shadow-glow-blue group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-dark-blue-400" />
              </div>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-dark-blue-200 to-dark-blue-300">
              Globalmarketacess
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/about"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/about')
                  ? 'text-white glass-card shadow-glass'
                  : 'text-slate-300 hover:text-white hover:glass'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/testimonials')
                  ? 'text-white glass-card shadow-glass'
                  : 'text-slate-300 hover:text-white hover:glass'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/pricing')
                  ? 'text-white glass-card shadow-glass'
                  : 'text-slate-300 hover:text-white hover:glass'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/contact')
                  ? 'text-white glass-card shadow-glass'
                  : 'text-slate-300 hover:text-white hover:glass'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/faq')
                  ? 'text-white glass-card shadow-glass'
                  : 'text-slate-300 hover:text-white hover:glass'
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link to="/login" className="hidden lg:block px-6 py-2.5 text-slate-300 hover:text-white transition-all duration-300 font-medium glass rounded-xl hover:glass-hover">
              Sign In
            </Link>
            <Link to="/register" className="hidden lg:block relative group px-7 py-3 bg-gradient-to-r from-dark-blue-500 to-dark-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow-blue hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-400 to-dark-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white glass rounded-xl transition-all duration-300 hover:glass-hover"
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
        className={`fixed left-0 right-0 glass-hover border-b border-dark-blue-500/20 shadow-glass-hover transform transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-6">
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/about"
              className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/about')
                  ? 'glass-card text-white shadow-glass'
                  : 'text-slate-300 hover:glass hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/testimonials')
                  ? 'glass-card text-white shadow-glass'
                  : 'text-slate-300 hover:glass hover:text-white'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/pricing')
                  ? 'glass-card text-white shadow-glass'
                  : 'text-slate-300 hover:glass hover:text-white'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/contact')
                  ? 'glass-card text-white shadow-glass'
                  : 'text-slate-300 hover:glass hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                isActive('/faq')
                  ? 'glass-card text-white shadow-glass'
                  : 'text-slate-300 hover:glass hover:text-white'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-6 pb-2 space-y-3 border-t border-white/10 mt-6">
            <Link
              to="/login"
              className="block w-full px-6 py-3.5 text-center text-slate-300 hover:text-white transition-all duration-300 font-medium glass rounded-xl hover:glass-hover"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3.5 text-center bg-gradient-to-r from-dark-blue-500 to-dark-blue-600 text-white rounded-xl hover:shadow-glow-blue transition-all duration-300 font-semibold"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
