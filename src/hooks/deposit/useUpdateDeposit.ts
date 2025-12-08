import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/depositService";
import type { BaseResponse, ErrorType, updateDepositRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateDeposit = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateDeposit = async (dataToServer: updateDepositRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.updateDeposit(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Deposit updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Deposit update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during deposit update";
                toast.error(errorMessage);
                logger("Update deposit error", axiosError, { level: "error", tag: "update-deposit" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateDeposit, isSubmitting };
};

export default useUpdateDeposit;