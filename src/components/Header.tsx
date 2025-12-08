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
        ? 'glass-strong backdrop-blur-xl border-b border-blue-500/10'
        : 'glass-card backdrop-blur-md border-b border-white/5'
    }`}>
      <TickerTapeWidget />

      {/* Desktop Layout - Traditional Horizontal */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-10 h-10 glass-card border border-blue-400/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-300" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight">
              Globalmarketacess
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/about')
                  ? 'text-cyan-300 glass-card'
                  : 'text-slate-300 hover:text-cyan-300 hover:glass'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'text-cyan-300 glass-card'
                  : 'text-slate-300 hover:text-cyan-300 hover:glass'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'text-cyan-300 glass-card'
                  : 'text-slate-300 hover:text-cyan-300 hover:glass'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'text-cyan-300 glass-card'
                  : 'text-slate-300 hover:text-cyan-300 hover:glass'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'text-cyan-300 glass-card'
                  : 'text-slate-300 hover:text-cyan-300 hover:glass'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 text-slate-300 hover:text-cyan-300 transition-all font-medium glass rounded-lg hover:glass-card"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="relative group px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Get Started</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-10 h-10 glass-card border border-blue-400/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-300" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Globalmarketacess
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="glass-card p-2.5 text-slate-300 hover:text-cyan-300 rounded-lg transition-all"
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

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 glass-strong backdrop-blur-xl border-b border-blue-500/10 transform transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/about')
                  ? 'glass-card text-cyan-300'
                  : 'glass text-slate-300 hover:text-cyan-300 hover:glass-card'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/testimonials')
                  ? 'glass-card text-cyan-300'
                  : 'glass text-slate-300 hover:text-cyan-300 hover:glass-card'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/pricing')
                  ? 'glass-card text-cyan-300'
                  : 'glass text-slate-300 hover:text-cyan-300 hover:glass-card'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/contact')
                  ? 'glass-card text-cyan-300'
                  : 'glass text-slate-300 hover:text-cyan-300 hover:glass-card'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/faq')
                  ? 'glass-card text-cyan-300'
                  : 'glass text-slate-300 hover:text-cyan-300 hover:glass-card'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-white/5 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-slate-300 hover:text-cyan-300 transition-all font-medium glass rounded-lg hover:glass-card"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg transition-all font-semibold hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
