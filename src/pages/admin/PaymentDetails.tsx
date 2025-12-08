import { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { toast } from 'sonner';
import useCreatePaymentWallet from '../../hooks/paymentWalletService/useCreatePaymentWallet';
import useUpdatePaymentWallet from '../../hooks/paymentWalletService/useUpdatePaymentWallet';
import useReadPaymentWalletById from '../../hooks/paymentWalletService/useReadPaymentWalletById';

const PaymentDetails = () => {
  const { createPaymentWallet, isSubmitting: isCreating } = useCreatePaymentWallet();
  const { updatePaymentWallet, isSubmitting: isUpdating } = useUpdatePaymentWallet();
  const { readPaymentWalletById } = useReadPaymentWalletById();

  const [formData, setFormData] = useState({
    bitcoinAddress: '',
    ethereumAddress: '',
    UsdtERC20Address: '',
    UsdtTRC20Address: '',
    LitecoinAddress: '',
    DogecoinAddress: '',
    XRPAddress: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
  });

  const [hasWallet, setHasWallet] = useState(false);
  const [walletId] = useState(2); // Fixed wallet ID
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      setIsLoading(true);
      const data = await readPaymentWalletById({ walletId });
      if (data?.paymentWallet) {
        setFormData({
          bitcoinAddress: data.paymentWallet.bitcoinAddress || '',
          ethereumAddress: data.paymentWallet.ethereumAddress || '',
          UsdtERC20Address: data.paymentWallet.UsdtERC20Address || '',
          UsdtTRC20Address: data.paymentWallet.UsdtTRC20Address || '',
          LitecoinAddress: data.paymentWallet.LitecoinAddress || '',
          DogecoinAddress: data.paymentWallet.DogecoinAddress || '',
          XRPAddress: data.paymentWallet.XRPAddress || '',
          bankName: data.paymentWallet.bankName || '',
          accountNumber: data.paymentWallet.accountNumber?.toString() || '',
          routingNumber: data.paymentWallet.routingNumber?.toString() || '',
        });
        setHasWallet(true);
      } else {
        setHasWallet(false);
      }
      setIsLoading(false);
    };

    fetchWallet();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateAddresses = () => {
    const bitcoinRegex = /^(1|3|bc1)[a-zA-HJ-NP-Z0-9]{25,61}$/;
    const ethRegex = /^0x[a-fA-F0-9]{40}$/;
    const trc20Regex = /^T[a-zA-HJ-NP-Z0-9]{33}$/;
    // @ts-ignore
    const ltcRegex = /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/;
    const dogeRegex = /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/;
    const xrpRegex = /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/;

    if (formData.bitcoinAddress && !bitcoinRegex.test(formData.bitcoinAddress)) {
      toast.error('Invalid Bitcoin address. Must start with 1, 3, or bc1 and be 26–62 chars.');
      return false;
    }
    if (formData.ethereumAddress && !ethRegex.test(formData.ethereumAddress)) {
      toast.error('Invalid Ethereum address. Must be 42 chars starting with 0x.');
      return false;
    }
    if (formData.UsdtERC20Address && !ethRegex.test(formData.UsdtERC20Address)) {
      toast.error('Invalid USDT ERC20 address. Must be 42 chars starting with 0x.');
      return false;
    }
    if (formData.UsdtTRC20Address && !trc20Regex.test(formData.UsdtTRC20Address)) {
      toast.error('Invalid USDT TRC20 address. Must be 34 chars starting with T.');
      return false;
    }
    // if (formData.LitecoinAddress && !ltcRegex.test(formData.LitecoinAddress)) {
    //   toast.error('Invalid Litecoin address. Must start with L, M, or 3 and be 26–34 chars.');
    //   return false;
    // }
    if (formData.DogecoinAddress && !dogeRegex.test(formData.DogecoinAddress)) {
      toast.error('Invalid Dogecoin address. Must start with D and be 34 chars.');
      return false;
    }
    if (formData.XRPAddress && !xrpRegex.test(formData.XRPAddress)) {
      toast.error('Invalid XRP address. Must start with r and be 25–35 chars.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAddresses()) return;

    const accountNumberValue = formData.accountNumber.trim();
    const routingNumberValue = formData.routingNumber.trim();

    if (accountNumberValue && isNaN(Number(accountNumberValue))) {
      toast.error('Account Number must be a valid number.');
      return;
    }
    if (routingNumberValue && isNaN(Number(routingNumberValue))) {
      toast.error('Routing Number must be a valid number.');
      return;
    }

    const payload: any = {
      bitcoinAddress: formData.bitcoinAddress || null,
      ethereumAddress: formData.ethereumAddress || null,
      UsdtERC20Address: formData.UsdtERC20Address || null,
      UsdtTRC20Address: formData.UsdtTRC20Address || null,
      LitecoinAddress: formData.LitecoinAddress || null,
      DogecoinAddress: formData.DogecoinAddress || null,
      XRPAddress: formData.XRPAddress || null,
      bankName: formData.bankName || null,
      accountNumber: accountNumberValue ? Number(accountNumberValue) : null,
      routingNumber: routingNumberValue ? Number(routingNumberValue) : null,
    };

    let success = false;

    if (hasWallet) {
      success = await updatePaymentWallet({ ...payload, walletId });
      if (success) toast.success('Payment details updated successfully!');
      else toast.error('Failed to update payment details.');
    } else {
      success = await createPaymentWallet(payload);
      if (success) {
        toast.success('Payment details created successfully!');
        setHasWallet(true);
      } else {
        toast.error('Failed to create payment details.');
      }
    }

    if (success) {
      const refreshed = await readPaymentWalletById({ walletId });
      if (refreshed?.paymentWallet) {
        setFormData({
          bitcoinAddress: refreshed.paymentWallet.bitcoinAddress || '',
          ethereumAddress: refreshed.paymentWallet.ethereumAddress || '',
          UsdtERC20Address: refreshed.paymentWallet.UsdtERC20Address || '',
          UsdtTRC20Address: refreshed.paymentWallet.UsdtTRC20Address || '',
          LitecoinAddress: refreshed.paymentWallet.LitecoinAddress || '',
          DogecoinAddress: refreshed.paymentWallet.DogecoinAddress || '',
          XRPAddress: refreshed.paymentWallet.XRPAddress || '',
          bankName: refreshed.paymentWallet.bankName || '',
          accountNumber: refreshed.paymentWallet.accountNumber?.toString() || '',
          routingNumber: refreshed.paymentWallet.routingNumber?.toString() || '',
        });
      }
    }
  };

  if (isLoading) {
    return (
        <AdminLayout>
          <div className="flex items-center justify-center min-h-[80vh] p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </AdminLayout>
    );
  }

  return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[80vh] p-4">
          <div className="w-full max-w-4xl">
            <div className="bg-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-6">Payment Wallet Details</h1>
                <div className="w-full h-px bg-gray-600 mb-8"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bitcoin Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Bitcoin Address</label>
                    <input
                        type="text"
                        name="bitcoinAddress"
                        value={formData.bitcoinAddress}
                        onChange={handleInputChange}
                        placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Ethereum Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Ethereum Address</label>
                    <input
                        type="text"
                        name="ethereumAddress"
                        value={formData.ethereumAddress}
                        onChange={handleInputChange}
                        placeholder="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* USDT ERC20 */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">USDT (ERC20) Address</label>
                    <input
                        type="text"
                        name="UsdtERC20Address"
                        value={formData.UsdtERC20Address}
                        onChange={handleInputChange}
                        placeholder="0x1234567890abcdef1234567890abcdef12345678"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* USDT TRC20 */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">USDT (TRC20) Address</label>
                    <input
                        type="text"
                        name="UsdtTRC20Address"
                        value={formData.UsdtTRC20Address}
                        onChange={handleInputChange}
                        placeholder="TABC1234567890abcdef1234567890abcdef"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Litecoin Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Litecoin Address</label>
                    <input
                        type="text"
                        name="LitecoinAddress"
                        value={formData.LitecoinAddress}
                        onChange={handleInputChange}
                        placeholder="Labc1234567890abcdef1234567890ab"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Dogecoin Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Dogecoin Address</label>
                    <input
                        type="text"
                        name="DogecoinAddress"
                        value={formData.DogecoinAddress}
                        onChange={handleInputChange}
                        placeholder="DABC1234567890abcdef1234567890ab"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* XRP Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">XRP (Ripple) Address</label>
                    <input
                        type="text"
                        name="XRPAddress"
                        value={formData.XRPAddress}
                        onChange={handleInputChange}
                        placeholder="rABC1234567890abcdef1234567890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Bank Name */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Bank Name</label>
                    <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="Chase Bank"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Account Number */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Account Number</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        placeholder="1234567890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  {/* Routing Number */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Routing Number</label>
                    <input
                        type="text"
                        name="routingNumber"
                        value={formData.routingNumber}
                        onChange={handleInputChange}
                        placeholder="021000021"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>
                </div>

                <button
                    type="submit"
                    disabled={isCreating || isUpdating}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center mt-6"
                >
                  {(isCreating || isUpdating) ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                      hasWallet ? 'Update Payment Details' : 'Create Payment Details'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
  );
};

export default PaymentDetails;