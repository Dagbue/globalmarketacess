import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TickerTapeWidget from "./widgets/TickerTapeWidget.tsx";
import {companyLogo3} from "../assets";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <TickerTapeWidget />
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-16" src={companyLogo3} alt="logo" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`transition-colors font-medium ${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Company
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors font-medium ${
                isActive('/testimonials')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`transition-colors font-medium ${
                isActive('/pricing')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                isActive('/contact')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className={`transition-colors font-medium ${
                isActive('/faq')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              F.A.Q
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:block px-6 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Log In
            </Link>
            <Link to="/register" className="hidden md:block px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium shadow-lg shadow-gray-900/20">
              Open Account
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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
        className={`fixed left-0 right-0 bg-white shadow-xl transform transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMobileMenuOpen ? 'top-[120px] max-h-screen opacity-100' : 'top-[120px] max-h-0 opacity-0'
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-1 px-4">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive('/about')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              About Company
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive('/testimonials')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive('/pricing')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive('/contact')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive('/faq')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              F.A.Q
            </Link>
          </div>

          <div className="px-4 pt-4 pb-2 space-y-3 border-t border-gray-100 mt-4">
            <Link
              to="/login"
              className="block w-full px-6 py-3 text-center text-gray-700 hover:text-blue-600 transition-colors font-medium border border-gray-300 rounded-lg hover:border-blue-600"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="block w-full px-6 py-3 text-center bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium shadow-lg shadow-gray-900/20"
            >
              Open Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
