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
        ? 'glass-strong backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10'
        : 'glass-card backdrop-blur-md border-b border-white/10'
    }`}>
      <TickerTapeWidget />

      {/* Desktop Layout - Centered Logo with Floating Nav */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col items-center space-y-4">
          {/* Centered Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-glow"></div>
              <div className="relative w-14 h-14 glass-strong border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <TrendingUp className="w-7 h-7 text-cyan-300" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 tracking-tight">
              Globalmarketacess
            </span>
          </Link>

          {/* Floating Navigation Bubbles */}
          <nav className="flex items-center justify-center gap-3">
            <Link
              to="/about"
              className={`glass-card px-5 py-2.5 rounded-full transition-all duration-300 font-medium border hover:scale-105 hover:shadow-lg ${
                isActive('/about')
                  ? 'text-cyan-300 glass-strong border-blue-400/40 shadow-blue-500/30'
                  : 'text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30 hover:shadow-blue-500/20'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`glass-card px-5 py-2.5 rounded-full transition-all duration-300 font-medium border hover:scale-105 hover:shadow-lg ${
                isActive('/testimonials')
                  ? 'text-cyan-300 glass-strong border-blue-400/40 shadow-blue-500/30'
                  : 'text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30 hover:shadow-blue-500/20'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`glass-card px-5 py-2.5 rounded-full transition-all duration-300 font-medium border hover:scale-105 hover:shadow-lg ${
                isActive('/pricing')
                  ? 'text-cyan-300 glass-strong border-blue-400/40 shadow-blue-500/30'
                  : 'text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30 hover:shadow-blue-500/20'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`glass-card px-5 py-2.5 rounded-full transition-all duration-300 font-medium border hover:scale-105 hover:shadow-lg ${
                isActive('/contact')
                  ? 'text-cyan-300 glass-strong border-blue-400/40 shadow-blue-500/30'
                  : 'text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30 hover:shadow-blue-500/20'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`glass-card px-5 py-2.5 rounded-full transition-all duration-300 font-medium border hover:scale-105 hover:shadow-lg ${
                isActive('/faq')
                  ? 'text-cyan-300 glass-strong border-blue-400/40 shadow-blue-500/30'
                  : 'text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30 hover:shadow-blue-500/20'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="glass-card px-6 py-2.5 text-slate-300 hover:text-cyan-300 transition-all font-medium rounded-full border border-blue-500/20 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="relative group px-7 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 animate-glow border border-blue-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Get Started</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Traditional Side-by-Side */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-glow"></div>
              <div className="relative w-10 h-10 glass-strong border border-blue-400/30 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-cyan-300" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
              Globalmarketacess
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="glass-card p-2.5 text-slate-300 hover:text-cyan-300 rounded-xl transition-all border border-blue-500/20 hover:border-blue-400/30"
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
        className={`fixed left-0 right-0 glass-strong backdrop-blur-xl border-b border-blue-500/20 shadow-2xl transform transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-xl transition-all font-medium border ${
                isActive('/about')
                  ? 'glass-strong text-cyan-300 border-blue-400/40'
                  : 'glass-card text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-xl transition-all font-medium border ${
                isActive('/testimonials')
                  ? 'glass-strong text-cyan-300 border-blue-400/40'
                  : 'glass-card text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-xl transition-all font-medium border ${
                isActive('/pricing')
                  ? 'glass-strong text-cyan-300 border-blue-400/40'
                  : 'glass-card text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-xl transition-all font-medium border ${
                isActive('/contact')
                  ? 'glass-strong text-cyan-300 border-blue-400/40'
                  : 'glass-card text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-xl transition-all font-medium border ${
                isActive('/faq')
                  ? 'glass-strong text-cyan-300 border-blue-400/40'
                  : 'glass-card text-slate-300 border-blue-500/20 hover:text-cyan-300 hover:border-blue-400/30'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-blue-500/20 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-slate-300 hover:text-cyan-300 transition-all font-medium glass-card border border-blue-500/30 rounded-xl hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all font-semibold animate-glow border border-blue-400/30"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
