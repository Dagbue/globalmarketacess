import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { BaseResponse, ErrorType, createWithdrawalRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateWithdrawal = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createWithdrawal = async (dataToServer: createWithdrawalRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await WithdrawalService.createWithdrawal(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Withdrawal created successfully, Pending Approval!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Withdrawal creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during withdrawal creation";
                toast.error(errorMessage);
                logger("Create withdrawal error", axiosError, { level: "error", tag: "create-withdrawal" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createWithdrawal, isSubmitting };
};

export default useCreateWithdrawal;