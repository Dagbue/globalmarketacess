import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/depositService";
import type { ErrorType, readAllDepositResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllDeposits = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllDeposits = async (): Promise<readAllDepositResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.allDeposits();

            if (status === 200 && responseData) {
                const depositData = responseData as readAllDepositResponse;

                if (depositData.responseMessage.includes("Deposits found")) {
                    // toast.success("All deposits retrieved successfully!");
                    return depositData;
                } else {
                    toast.error(depositData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all deposits. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all deposits";
                toast.error(errorMessage);
                logger("Fetch all deposits error", axiosError, { level: "error", tag: "fetch-all-deposits" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllDeposits, isSubmitting };
};

export default useAllDeposits;