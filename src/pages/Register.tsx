import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Eye, EyeOff, Shield, DollarSign, Zap, GraduationCap, TrendingUp} from 'lucide-react';
import useCreateAccount from "../hooks/auth/useCreateAccount.ts";
// import {companyLogo3} from "../assets";

export default function Register() {
  const navigate = useNavigate();
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
  const { createAccount, isSubmitting } = useCreateAccount();

  const generateRandomString = (length: number = 8) => {
    return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, the Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia (Slovak Republic)",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ].sort(); // Sort alphabetically for better UX

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!"); // Or use toast
      return;
    }

    const randomString = generateRandomString();
    const randomString2 = generateRandomString(12); // Longer for 2FA code if needed

    const dataToServer = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      referralCode: randomString,
      frontId: "",
      backId: "",
      totalDepositedAmount: 0.00,
      phoneNumber: parseInt(formData.phoneNumber) || 0, // Parse to number, fallback to 0 if invalid
      totalWithdrawals: 0.00,
      btcBalance: 0.00,
      realizedProfit: 0.00,
      profit: 0.00,
      loss: 0.00,
      displayPicture: "",
      walletAddress: "",
      walletName: "",
      twoFactorAuthenticationCode: randomString2,
      userStatus: "unverified",
      role: "Customer",
      country: formData.country,
      address: formData.address,
      otp: null,
      currentPlan: "",
      currency: "USD",
      creditScore: "poor",
      copyProfit: 0.00,
      copiedTraders: "",
    };

    const success = await createAccount(dataToServer);
    if (success) {
      localStorage.setItem('userEmail', formData.email);
      navigate('/verify-email');
    }
  };

  return (
      <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0e27] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col justify-center px-16 py-20">
            {/*<Link to="/" className="mb-12">*/}
            {/*  <img className="h-14" src={companyLogo3} alt="logo"/>*/}
            {/*</Link>*/}

            <Link to="/" className="flex items-center gap-3 group mb-10">
              <div className="w-11 h-11 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">
              Globalmarketacess
            </span>
            </Link>

            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                <Shield className="w-4 h-4 text-blue-400 mr-2"/>
                <span className="text-slate-300 font-medium text-sm">Join 50,000+ Traders Worldwide</span>
              </div>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Start Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Trading Journey Today
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Create your account in minutes and access global markets with zero commission on stocks and ETFs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <DollarSign className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Zero Commission Trading</h3>
                  <p className="text-slate-400 text-sm">Trade stocks and ETFs with no hidden fees or charges</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <Zap className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Instant Account Activation</h3>
                  <p className="text-slate-400 text-sm">Start trading within minutes of verification</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600 transition-all">
                  <GraduationCap className="w-6 h-6 text-blue-400"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Professional Trading Education</h3>
                  <p className="text-slate-400 text-sm">Access to trading tutorials and market analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
          <div className="w-full max-w-md py-8">
            <div className="mb-10">
              <div className="flex items-center lg:hidden space-x-3 mb-8">
                {/*<Link to="/" className="flex items-center space-x-2">*/}
                {/*  <img className="h-24" src={companyLogo3} alt="logo" />*/}
                {/*</Link>*/}
              </div>

              <h2 className="text-4xl font-black text-gray-900 mb-3">
                Create Account
              </h2>
              <p className="text-gray-600 text-lg">
                Get started with your free trading account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                      required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                      required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400 pr-12"
                      required
                  />
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400 pr-12"
                      required
                  />
                  <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-bold text-gray-900 mb-2">
                  Country
                </label>
                <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900"
                    required
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-bold text-gray-900 mb-2">
                  Address
                </label>
                <input
                    id="address"
                    type="text"
                    placeholder="123 Main Street"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
                    required
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-blue-600 transition-all flex-shrink-0"
                    required
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                I agree to Globalmarketacess{' '}
                  <Link to="/terms" className="font-bold text-blue-600 hover:text-blue-700 underline">
                  Terms and Conditions
                </Link>
              </span>
              </label>

              <button
                  type="submit"
                  disabled={isSubmitting}
                  // className="w-full bg-[#0a0e27] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0d1230] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Account...
                    </div>
                ) : (
                    'Create Account'
                )}
              </button>

              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative bg-white px-4 text-sm font-medium text-gray-500">OR</div>
              </div>

              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}