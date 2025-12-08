import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { BaseResponse, ErrorType, updatePaymentWalletRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";
import PaymentWalletService from "../../api/paymentWalletService.ts";

const useUpdatePaymentWallet = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updatePaymentWallet = async (dataToServer: updatePaymentWalletRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await PaymentWalletService.updateWallet(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Payment wallet updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Payment wallet update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during payment wallet update";
                toast.error(errorMessage);
                logger("Update payment wallet error", axiosError, { level: "error", tag: "update-payment-wallet" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updatePaymentWallet, isSubmitting };
};

export default useUpdatePaymentWallet;