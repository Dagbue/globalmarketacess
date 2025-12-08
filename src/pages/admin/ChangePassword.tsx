import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChangePassword = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    if (formData.newPassword.length < 6) {
      alert('New password must be at least 6 characters long!');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Changing admin password:', formData);
    alert('Admin password changed successfully!');
    
    // Reset form
    setFormData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });

    setIsSubmitting(false);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-center min-h-[80vh] p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-700 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-6">Change Password</h1>
              <div className="w-full h-px bg-gray-600 mb-8"></div>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-6">
              {/* Enter Old Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">Enter Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Enter your current password"
                />
              </div>

              {/* Enter New Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">Enter New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Enter your new password"
                />
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Confirm your new password"
                />
              </div>

              {/* Proceed Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Proceed'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ChangePassword;