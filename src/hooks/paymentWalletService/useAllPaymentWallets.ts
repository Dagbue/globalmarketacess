import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { ErrorType, readAllPaymentWalletResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";
import PaymentWalletService from "../../api/paymentWalletService.ts";

const useAllPaymentWallets = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllPaymentWallets = async (): Promise<readAllPaymentWalletResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await PaymentWalletService.allWallets();

            if (status === 200 && responseData) {
                const walletData = responseData as readAllPaymentWalletResponse;

                if (walletData.responseMessage.includes("success")) {
                    toast.success("All payment wallets retrieved successfully!");
                    return walletData;
                } else {
                    toast.error(walletData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all payment wallets. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all payment wallets";
                toast.error(errorMessage);
                logger("Fetch all payment wallets error", axiosError, { level: "error", tag: "fetch-all-payment-wallets" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllPaymentWallets, isSubmitting };
};

export default useAllPaymentWallets;