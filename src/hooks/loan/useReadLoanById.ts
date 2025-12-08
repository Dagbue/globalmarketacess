import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { ErrorType, readLoanByIdRequest, readLoanByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadLoanById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readLoanById = async (dataToServer: readLoanByIdRequest): Promise<readLoanByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.readLoanById(dataToServer);

            if (status === 200 && responseData) {
                const loanData = responseData as readLoanByIdResponse;

                if (loanData.responseMessage.includes("success")) {
                    toast.success("Loan retrieved successfully!");
                    return loanData;
                } else {
                    toast.error(loanData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve loan. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving loan";
                toast.error(errorMessage);
                logger("Read loan by ID error", axiosError, { level: "error", tag: "read-loan-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readLoanById, isSubmitting };
};

export default useReadLoanById;