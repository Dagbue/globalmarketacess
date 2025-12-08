import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/depositService"; // Adjusted import to use depositService
import type { BaseResponse, ErrorType, createDepositRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateDeposit = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createDeposit = async (dataToServer: createDepositRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.createDeposit(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Deposit created successfully, Pending Approval!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Deposit creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during deposit creation";
                toast.error(errorMessage);
                logger("Create deposit error", axiosError, { level: "error", tag: "create-deposit" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createDeposit, isSubmitting };
};

export default useCreateDeposit;