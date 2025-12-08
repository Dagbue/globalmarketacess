import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { BaseResponse, ErrorType, deletePaymentWalletRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";
import PaymentWalletService from "../../api/paymentWalletService.ts";

const useDeletePaymentWallet = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deletePaymentWallet = async (dataToServer: deletePaymentWalletRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await PaymentWalletService.deleteWallet(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Payment wallet deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Payment wallet deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during payment wallet deletion";
                toast.error(errorMessage);
                logger("Delete payment wallet error", axiosError, { level: "error", tag: "delete-payment-wallet" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deletePaymentWallet, isSubmitting };
};

export default useDeletePaymentWallet;