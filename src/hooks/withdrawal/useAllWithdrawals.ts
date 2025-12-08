import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { ErrorType, readAllWithdrawalResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllWithdrawals = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllWithdrawals = async (): Promise<readAllWithdrawalResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await WithdrawalService.allWithdrawals();

            if (status === 200 && responseData) {
                const withdrawalData = responseData as readAllWithdrawalResponse;

                if (withdrawalData.responseMessage.includes("Withdrawal found")) {
                    // toast.success("All withdrawals retrieved successfully!");
                    return withdrawalData;
                } else {
                    toast.error(withdrawalData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all withdrawals. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all withdrawals";
                toast.error(errorMessage);
                logger("Fetch all withdrawals error", axiosError, { level: "error", tag: "fetch-all-withdrawals" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllWithdrawals, isSubmitting };
};

export default useAllWithdrawals;