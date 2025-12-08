import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { ErrorType, readPaymentWalletByIdRequest, readPaymentWalletByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";
import PaymentWalletService from "../../api/paymentWalletService.ts";

const useReadPaymentWalletById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readPaymentWalletById = async (dataToServer: readPaymentWalletByIdRequest): Promise<readPaymentWalletByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await PaymentWalletService.readWalletById(dataToServer);

            if (status === 200 && responseData) {
                const walletData = responseData as readPaymentWalletByIdResponse;

                if (walletData.responseMessage.includes("Payment wallet retrieved successfully")) {
                    // toast.success("Payment wallet retrieved successfully!");
                    return walletData;
                } else {
                    toast.error(walletData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve payment wallet. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving payment wallet";
                toast.error(errorMessage);
                logger("Read payment wallet by ID error", axiosError, { level: "error", tag: "read-payment-wallet-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readPaymentWalletById, isSubmitting };
};

export default useReadPaymentWalletById;