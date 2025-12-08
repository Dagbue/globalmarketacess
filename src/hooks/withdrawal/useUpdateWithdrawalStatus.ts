import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { BaseResponse, ErrorType, updateWithdrawalStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateWithdrawalStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateWithdrawalStatus = async (dataToServer: updateWithdrawalStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await WithdrawalService.updateWithdrawalStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Withdrawal status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Withdrawal status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during withdrawal status update";
                toast.error(errorMessage);
                logger("Update withdrawal status error", axiosError, { level: "error", tag: "update-withdrawal-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateWithdrawalStatus, isSubmitting };
};

export default useUpdateWithdrawalStatus;