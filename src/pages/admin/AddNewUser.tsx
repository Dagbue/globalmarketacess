import { useState } from 'react';
import {Eye, EyeOff, Phone, Globe, Mail, Lock} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import useCreateAccount from '../../hooks/auth/useCreateAccount';
import { toast } from 'sonner';

const countries = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica",
  "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
  "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
  "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the",
  "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (Malvinas)",
  "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia",
  "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
  "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary",
  "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of",
  "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique",
  "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of",
  "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
  "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena",
  "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Sweden", "Switzerland",
  "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of",
  "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
  "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands",
  "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
].sort();

const AddNewUser = () => {
  const { createAccount, isSubmitting } = useCreateAccount();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    country: '',
    address: '',
    agreeToTerms: false,
  });

  const generateRandomString = (length: number = 8) => {
    return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
  };

  const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    const randomReferral = generateRandomString();
    const random2FA = generateRandomString(12);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      referralCode: randomReferral,
      frontId: '',
      backId: '',
      totalDepositedAmount: 0.0,
      phoneNumber: parseInt(formData.phoneNumber.replace(/\D/g, '')) || 0,
      totalWithdrawals: 0.0,
      btcBalance: 0.0,
      realizedProfit: 0.0,
      profit: 0.0,
      loss: 0.0,
      displayPicture: '',
      walletAddress: '',
      walletName: '',
      twoFactorAuthenticationCode: random2FA,
      userStatus: 'unVerified',
      role: 'Customer',
      country: formData.country,
      address: formData.address,
      otp: null,
      currentPlan: '',
      currency: 'USD',
      creditScore: 'poor',
      copyProfit: 0.0,
      copiedTraders: '',
    };

    const success = await createAccount(payload);
    if (success) {
      toast.success('User created successfully');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        country: '',
        address: '',
        agreeToTerms: false,
      });
    }
  };

  // @ts-ignore
  return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[80vh] p-4">
          <div className="w-full max-w-2xl">
            <div className="bg-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-6">Add New User</h1>
                <div className="w-full h-px bg-gray-600 mb-8"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-3">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-3">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-white text-sm font-medium mb-3">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                    <Mail className="absolute left-4 top-11 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <label className="block text-white text-sm font-medium mb-3">Phone</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+1 234 567 8900"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                    <Phone className="absolute left-4 top-11 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-3">Password</label>
                  <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength={6}
                      className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <Lock className="absolute left-4 top-11 h-5 w-5 text-gray-400" />
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-11 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-3">Confirm Password</label>
                  <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      minLength={6}
                      className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <Lock className="absolute left-4 top-11 h-5 w-5 text-gray-400" />
                  <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-11 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Country */}
                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-3">Country</label>
                  <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none"
                  >
                    <option value="">Select your country</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <Globe className="absolute left-4 top-11 h-5 w-5 text-gray-400" />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-white text-sm font-medium mb-3">Address</label>
                  <input
                      type="text"
                      name="address"
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleCheckboxChange}
                      required
                      className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-blue-600 transition-all flex-shrink-0"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                  I agree to Market Movers Trade{' '}
                    <a href="/terms" className="font-bold text-blue-400 hover:text-blue-300 underline">
                    Terms and Conditions
                  </a>
                </span>
                </label>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                      'Create User'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
  );
};

export default AddNewUser;