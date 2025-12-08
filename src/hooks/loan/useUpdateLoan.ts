import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { BaseResponse, ErrorType, updateLoanRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateLoan = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateLoan = async (dataToServer: updateLoanRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.updateLoan(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Loan updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Loan update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during loan update";
                toast.error(errorMessage);
                logger("Update loan error", axiosError, { level: "error", tag: "update-loan" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateLoan, isSubmitting };
};

export default useUpdateLoan;