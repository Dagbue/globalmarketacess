import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { BaseResponse, ErrorType, deleteLoanRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteLoan = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteLoan = async (dataToServer: deleteLoanRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.deleteLoan(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Loan deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Loan deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during loan deletion";
                toast.error(errorMessage);
                logger("Delete loan error", axiosError, { level: "error", tag: "delete-loan" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteLoan, isSubmitting };
};

export default useDeleteLoan;