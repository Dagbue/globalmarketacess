import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { BaseResponse, ErrorType, updateLoanStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateLoanStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateLoanStatus = async (dataToServer: updateLoanStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.updateLoanStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Loan status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Loan status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during loan status update";
                toast.error(errorMessage);
                logger("Update loan status error", axiosError, { level: "error", tag: "update-loan-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateLoanStatus, isSubmitting };
};

export default useUpdateLoanStatus;