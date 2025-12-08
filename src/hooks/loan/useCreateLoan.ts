import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { BaseResponse, ErrorType, createLoanRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateLoan = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createLoan = async (dataToServer: createLoanRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await loanService.createLoan(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Loan created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Loan creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during loan creation";
                toast.error(errorMessage);
                logger("Create loan error", axiosError, { level: "error", tag: "create-loan" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createLoan, isSubmitting };
};

export default useCreateLoan;