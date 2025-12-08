import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { ErrorType, readAllLoanResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllLoans = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllLoans = async (): Promise<readAllLoanResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.allLoans();

            if (status === 200 && responseData) {
                const loanData = responseData as readAllLoanResponse;

                if (loanData.responseMessage.includes("Loan found")) {
                    // toast.success("All loans retrieved successfully!");
                    return loanData;
                } else {
                    toast.error(loanData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all loans. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all loans";
                toast.error(errorMessage);
                logger("Fetch all loans error", axiosError, { level: "error", tag: "fetch-all-loans" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllLoans, isSubmitting };
};

export default useAllLoans;