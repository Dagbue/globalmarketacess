// Currency configuration and helper functions
export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
}

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'ج.م' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵' },
];

// Get currency configuration by code
export const getCurrencyConfig = (currencyCode: string): CurrencyConfig => {
  return SUPPORTED_CURRENCIES.find(currency => currency.code === currencyCode) || SUPPORTED_CURRENCIES[1]; // Index 1 is USD
};

// Format amount with currency symbol and proper decimal places
export const formatCurrencyAmount = (amount: number, currencyCode: string): string => {
  const currency = getCurrencyConfig(currencyCode);

  // Determine decimal places based on currency
  const decimalPlaces = ['JPY', 'KRW', 'VND', 'IDR'].includes(currencyCode) ? 0 : 2;

  const formattedAmount = amount.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });

  return `${currency.symbol}${formattedAmount}`;
};

// Get user's selected currency from localStorage
export const getUserCurrency = (): string => {
  const storedCurrency = localStorage.getItem('currency');
  if (storedCurrency) {
    try {
      return JSON.parse(storedCurrency);
    } catch (error) {
      console.error('Error parsing currency:', error);
    }
  }
  return 'USD'; // Default to USD
};

// Save user currency preference
export const saveUserCurrency = (currencyCode: string): void => {
  try {
    localStorage.setItem('currency', JSON.stringify(currencyCode));
  } catch (error) {
    console.error('Error saving user currency preference:', error);
  }
};

// Get currency symbol only
export const getCurrencySymbol = (currencyCode: string): string => {
  const currency = getCurrencyConfig(currencyCode);
  return currency.symbol;
};

// Format amount for display in user's preferred currency
export const formatUserCurrencyAmount = (amount: number): string => {
  const userCurrency = getUserCurrency();
  return formatCurrencyAmount(amount, userCurrency);
};