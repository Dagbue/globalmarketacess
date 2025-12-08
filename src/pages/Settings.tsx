import { useState, useEffect } from 'react';
import { User, Lock, Bell, Image, Wallet, Shield, Copy, Check, Eye, EyeOff } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { toast } from "sonner";
import useUpdateUser from "../hooks/auth/useUpdateUser";
import useUploadBase64 from "../hooks/S3Bucket/useUploadBase64";
import useResetPassword from "../hooks/auth/useResetPassword";

// === Type Definitions ===
interface UpdateUserRequest {
  userId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  address?: string;
  phoneNumber?: string;
  frontId?: string;
  backId?: string;
  displayPicture?: string;
  walletName?: string;
  walletAddress?: string;
}

interface UploadBase64Request {
  username: string;
  base64: string;
  region: string;
  source: string;
  s3bucket: string;
}

interface UploadBase64Response {
  url: string;
}

interface ResetPasswordRequest {
  email: string;
  newPassword: string;
}

type Tab = 'profile' | 'password' | 'preferences' | 'picture' | 'wallet' | '2fa';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [copied, setCopied] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [displayPicture, setDisplayPicture] = useState<string>('');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    phone: '',
    frontId: '',
    backId: '',
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [walletData, setWalletData] = useState({
    walletName: '',
    walletAddress: '',
  });

  const [preferences, setPreferences] = useState({
    currency: 'USD',
    timezone: '(GMT-12:00) International Date Line West',
    notifications: {
      digitalCurrency: false,
      merchantOrder: false,
      recommendations: false,
    },
  });

  const { updateUser, isSubmitting } = useUpdateUser();
  const { uploadBase64, isUploading } = useUploadBase64();
  const { resetPassword, isPasswordSubmitting } = useResetPassword();

  const referralLink = 'https://marketsignaltrades.com/register';

  // === Load user data from localStorage on mount ===
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserId(parsedData.userId || '');
        setProfileData({
          firstName: parsedData.firstName || '',
          lastName: parsedData.lastName || '',
          email: parsedData.email || '',
          country: parsedData.country || '',
          address: parsedData.address || '',
          phone: parsedData.phoneNumber?.toString() || '',
          frontId: parsedData.frontId || '',
          backId: parsedData.backId || '',
        });
        setWalletData({
          walletName: parsedData.walletName || '',
          walletAddress: parsedData.walletAddress || '',
        });

        // Set display picture from userData
        const picture = parsedData.displayPicture?.trim();
        if (picture && picture !== '') {
          setDisplayPicture(picture);
        }

        console.log('tabs', parsedData.frontId);
        console.log('tabs', parsedData.backId);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFrontFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFrontFile(e.target.files[0]);
    }
  };

  const handleBackFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackFile(e.target.files[0]);
    }
  };

  const handleUpdateProfile = async () => {
    if (!userId) {
      toast.error('User ID not available. Please log in again.');
      return;
    }

    if (isSubmitting || isUploading) return;

    let frontUrl = '';
    let backUrl = '';

    try {
      if (frontFile) {
        const base64 = await fileToBase64(frontFile);
        const uploadPayload: UploadBase64Request = {
          username: `front_id_${userId}_${Date.now()}`,
          base64,
          region: 'us-east-1',
          source: 'qucoon',
          s3bucket: 'apvertise-repo',
        };
        // @ts-ignore
        const uploadResponse: UploadBase64Response | null = await uploadBase64(uploadPayload);
        if (uploadResponse) {
          frontUrl = uploadResponse.url;
          setFrontFile(null);
        } else {
          toast.error('Failed to upload front ID. Please try again.');
          return;
        }
      }

      if (backFile) {
        const base64 = await fileToBase64(backFile);
        const uploadPayload: UploadBase64Request = {
          username: `back_id_${userId}_${Date.now()}`,
          base64,
          region: 'us-east-1',
          source: 'qucoon',
          s3bucket: 'apvertise-repo',
        };
        // @ts-ignore
        const uploadResponse: UploadBase64Response | null = await uploadBase64(uploadPayload);
        if (uploadResponse) {
          backUrl = uploadResponse.url;
          setBackFile(null);
        } else {
          toast.error('Failed to upload back ID. Please try again.');
          return;
        }
      }

      const updatePayload: Partial<UpdateUserRequest> = {
        userId,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        country: profileData.country,
        address: profileData.address,
        phoneNumber: profileData.phone,
        ...(frontUrl ? { frontId: frontUrl } : {}),
        ...(backUrl ? { backId: backUrl } : {}),
      };

      // @ts-ignore
      const success = await updateUser(updatePayload);
      if (success) {
        const currentUserData = JSON.parse(localStorage.getItem('userData') || '{}');
        const updatedUserData = { ...currentUserData, ...updatePayload };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        toast.success('Profile updated successfully!');

        // Update local profileData state
        setProfileData(prev => ({
          ...prev,
          frontId: frontUrl || prev.frontId,
          backId: backUrl || prev.backId,
        }));
      }
    } catch (error) {
      toast.error('An error occurred during profile update.');
      console.error(error);
    }
  };

  const handleChangePassword = async () => {
    if (isPasswordSubmitting) return;

    if (!profileData.email) {
      toast.error('Email not available. Please check your profile.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match.');
      return;
    }

    if (!passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error('Please fill in new password fields.');
      return;
    }

    try {
      const payload: ResetPasswordRequest = {
        email: profileData.email,
        newPassword: passwordData.newPassword,
      };

      const success = await resetPassword(payload);
      if (success) {
        setPasswordData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        toast.success('Password changed successfully!');
      }
    } catch (error) {
      toast.error('An error occurred during password change.');
      console.error(error);
    }
  };

  const handleUpdatePicture = async () => {
    if (!userId) {
      toast.error('User ID not available. Please log in again.');
      return;
    }

    if (isSubmitting || isUploading) return;

    if (!selectedFile) {
      toast.error('Please select a file to upload.');
      return;
    }

    let pictureUrl = '';

    try {
      const base64 = await fileToBase64(selectedFile);
      const uploadPayload: UploadBase64Request = {
        username: `display_picture_${userId}_${Date.now()}`,
        base64,
        region: 'us-east-1',
        source: 'qucoon',
        s3bucket: 'apvertise-repo',
      };
      // @ts-ignore
      const uploadResponse: UploadBase64Response | null = await uploadBase64(uploadPayload);
      if (uploadResponse) {
        pictureUrl = uploadResponse.url;
        setSelectedFile(null);
      } else {
        toast.error('Failed to upload display picture. Please try again.');
        return;
      }

      const updatePayload: Partial<UpdateUserRequest> = {
        userId,
        displayPicture: pictureUrl,
      };

      // @ts-ignore
      const success = await updateUser(updatePayload);
      if (success) {
        const currentUserData = JSON.parse(localStorage.getItem('userData') || '{}');
        const updatedUserData = { ...currentUserData, ...updatePayload };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setDisplayPicture(pictureUrl);
        toast.success('Display picture updated successfully!');
      }
    } catch (error) {
      toast.error('An error occurred during picture update.');
      console.error(error);
    }
  };

  const handleSetWallet = async () => {
    if (!userId) {
      toast.error('User ID not available. Please log in again.');
      return;
    }

    if (isSubmitting) return;

    if (!walletData.walletName || !walletData.walletAddress) {
      toast.error('Please fill in wallet name and address.');
      return;
    }

    try {
      const updatePayload: Partial<UpdateUserRequest> = {
        userId,
        walletName: walletData.walletName,
        walletAddress: walletData.walletAddress,
      };

      // @ts-ignore
      const success = await updateUser(updatePayload);
      if (success) {
        const currentUserData = JSON.parse(localStorage.getItem('userData') || '{}');
        const updatedUserData = { ...currentUserData, ...updatePayload };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        toast.success('Wallet address set successfully!');
      }
    } catch (error) {
      toast.error('An error occurred during wallet update.');
      console.error(error);
    }
  };

  const tabs = [
    { id: 'profile' as Tab, label: 'Edit Profile', icon: User },
    { id: 'password' as Tab, label: 'Change Password', icon: Lock },
    { id: 'preferences' as Tab, label: 'Preferences', icon: Bell },
    { id: 'picture' as Tab, label: 'Display Picture', icon: Image },
    { id: 'wallet' as Tab, label: 'Wallet Address', icon: Wallet },
    { id: '2fa' as Tab, label: 'SetUp 2FA', icon: Shield },
  ];

  return (
      <DashboardLayout>
        <div className="p-4 sm:p-6 min-h-screen">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-2">Settings</h1>
            <p className="text-gray-400 text-sm sm:text-base">Manage your account settings and preferences</p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                  <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                          activeTab === tab.id
                              ? 'bg-white text-slate-900'
                              : 'bg-slate-900/50 text-white hover:bg-slate-800 border border-slate-800'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </div>
                  </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="max-w-full">
            {/* Edit Profile */}
            {activeTab === 'profile' && (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">User Profile</h2>

                    {/* === CONDITIONAL PROFILE IMAGE (same as DashboardLayout) === */}
                    <div className="flex items-center gap-6 mt-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        {displayPicture && (
                            <img
                                src={displayPicture}
                                alt="Profile"
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                        )}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center ${
                                displayPicture ? 'hidden' : ''
                            }`}
                        >
                          <User className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          {profileData.firstName} {profileData.lastName}
                        </div>
                        <div className="text-gray-400 text-sm">{profileData.email}</div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3">
                      <input
                          type="text"
                          value={referralLink}
                          readOnly
                          className="flex-1 bg-transparent text-gray-400 text-sm outline-none"
                      />
                      <button
                          onClick={handleCopyLink}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-white font-bold text-xl mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white font-medium mb-2 block">First Name</label>
                        <input
                            type="text"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Last Name</label>
                        <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Email</label>
                        <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Country</label>
                        <input
                            type="text"
                            value={profileData.country}
                            onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Address</label>
                        <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Phone Number</label>
                        <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ID Uploads - Show view only if BOTH exist */}
                  {profileData.frontId && profileData.backId ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                          <p className="text-white font-medium">Front ID card</p>
                          <a
                              href={profileData.frontId}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 font-medium text-lg"
                          >
                            view
                          </a>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white font-medium">Back ID card</p>
                          <a
                              href={profileData.backId}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 font-medium text-lg"
                          >
                            view
                          </a>
                        </div>
                      </div>
                  ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="text-white font-medium mb-2 block">
                            Identification Card (Upload front of ID card for verification)
                          </label>
                          <input
                              type="file"
                              accept="image/*"
                              onChange={handleFrontFileChange}
                              className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-800 file:text-white file:font-medium hover:file:bg-slate-700"
                          />
                        </div>
                        <div>
                          <label className="text-white font-medium mb-2 block">
                            Identification Card (Upload back of ID card for verification)
                          </label>
                          <input
                              type="file"
                              accept="image/*"
                              onChange={handleBackFileChange}
                              className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-800 file:text-white file:font-medium hover:file:bg-slate-700"
                          />
                        </div>
                      </div>
                  )}

                  <button
                      onClick={handleUpdateProfile}
                      disabled={isSubmitting || isUploading}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting || isUploading ? 'Updating...' : 'Update Details'}
                  </button>
                </div>
            )}

            {/* Change Password */}
            {activeTab === 'password' && (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">Change Password</h2>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="text-white font-medium mb-2 block">Enter Old Password</label>
                      <div className="relative">
                        <input
                            type={showOldPassword ? 'text' : 'password'}
                            value={passwordData.oldPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                        >
                          {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Enter New Password</label>
                      <div className="relative">
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                        >
                          {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Confirm New Password</label>
                      <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                      onClick={handleChangePassword}
                      disabled={isPasswordSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50"
                  >
                    {isPasswordSubmitting ? 'Processing...' : 'Proceed'}
                  </button>
                </div>
            )}

            {/* Preferences */}
            {activeTab === 'preferences' && (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">Preferences</h2>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white font-medium mb-2 block">Local Currency</label>
                        <select
                            value={preferences.currency}
                            onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        >
                          <option>USD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                          <option>JPY</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">Time Zone</label>
                        <select
                            value={preferences.timezone}
                            onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                        >
                          <option>(GMT-12:00) International Date Line West</option>
                          <option>(GMT-11:00) Midway Island, Samoa</option>
                          <option>(GMT-10:00) Hawaii</option>
                          <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                          <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                          <option>(GMT+00:00) London, Dublin, Edinburgh</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all mb-12">
                    Save
                  </button>

                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">Notifications</h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                          type="checkbox"
                          checked={preferences.notifications.digitalCurrency}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            notifications: { ...preferences.notifications, digitalCurrency: e.target.checked }
                          })}
                          className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <span className="text-white group-hover:text-gray-200 transition-colors">I send or receive digital currency</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                          type="checkbox"
                          checked={preferences.notifications.merchantOrder}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            notifications: { ...preferences.notifications, merchantOrder: e.target.checked }
                          })}
                          className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <span className="text-white group-hover:text-gray-200 transition-colors">I receive merchant order</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                          type="checkbox"
                          checked={preferences.notifications.recommendations}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            notifications: { ...preferences.notifications, recommendations: e.target.checked }
                          })}
                          className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <span className="text-white group-hover:text-gray-200 transition-colors">There are recommendations for my account</span>
                    </label>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all">
                    Save
                  </button>
                </div>
            )}

            {/* Display Picture */}
            {activeTab === 'picture' && (
                <div
                    className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">User Profile</h2>
                  </div>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      {displayPicture && (
                          <img
                              src={displayPicture}
                              alt="Profile"
                              className="absolute inset-0 w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                          />
                      )}
                      <div
                          className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center ${
                              displayPicture ? 'hidden' : ''
                          }`}
                      >
                        <User className="w-10 h-10 text-white"/>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{profileData.firstName} {profileData.lastName}</div>
                      <div className="text-gray-400 text-sm">{profileData.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="flex-1 bg-black border border-slate-800 rounded-xl px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-800 file:text-white file:font-medium hover:file:bg-slate-700"
                    />

                  </div>
                  <button
                      onClick={handleUpdatePicture}
                      disabled={isSubmitting || isUploading}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting || isUploading ? 'Uploading...' : 'Upload'}
                  </button>
                </div>
            )}

            {/* Wallet Address */}
            {activeTab === 'wallet' && (
                <div
                    className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">Set Withdrawal Wallet Address</h2>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="text-white font-medium mb-2 block">Wallet Name</label>
                      <input
                          type="text"
                          value={walletData.walletName}
                          onChange={(e) => setWalletData({ ...walletData, walletName: e.target.value })}
                          className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Wallet Address</label>
                      <input
                          type="text"
                          value={walletData.walletAddress}
                          onChange={(e) => setWalletData({ ...walletData, walletAddress: e.target.value })}
                          className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                      onClick={handleSetWallet}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Setting...' : 'Set Wallet Address'}
                  </button>
                </div>
            )}

            {/* 2FA Setup */}
            {activeTab === '2fa' && (
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Two-Factor Authentication</h2>
                    <p className="text-gray-400 text-sm sm:text-base">Add an extra layer of security to your account by enabling two-factor authentication.</p>
                  </div>

                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">Enable Two-Factor Authentication</h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                      Protect your account with an additional security layer. You'll need to enter a verification code each time you log in.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all">
                      Enable 2FA
                    </button>
                  </div>
                </div>
            )}
          </div>
        </div>
      </DashboardLayout>
  );
}