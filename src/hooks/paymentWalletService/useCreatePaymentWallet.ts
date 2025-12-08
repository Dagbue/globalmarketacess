import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { BaseResponse, ErrorType, createPaymentWalletRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";
import PaymentWalletService from "../../api/paymentWalletService.ts";

const useCreatePaymentWallet = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createPaymentWallet = async (dataToServer: createPaymentWalletRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await PaymentWalletService.createWallet(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    toast.success("Payment wallet created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Payment wallet creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during payment wallet creation";
                toast.error(errorMessage);
                logger("Create payment wallet error", axiosError, { level: "error", tag: "create-payment-wallet" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createPaymentWallet, isSubmitting };
};

export default useCreatePaymentWallet;