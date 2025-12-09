import { useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login with credential check
    const validEmail = "admin@globalmarketacess.com";
    const validPassword = "12Prince$";

    if (formData.email === validEmail && formData.password === validPassword) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.location.href = '/admin/users';
    } else {
      setError('Invalid email or password. Please try again.');
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-4 bg-white rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-4 bg-white rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-3 text-white text-sm">Remember me</label>
            </div>

            {error && (
                <div className="text-red-500 text-center text-sm">{error}</div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-base hover:scale-105 flex items-center justify-center"
            >
              {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Secure Admin Access
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminLogin;