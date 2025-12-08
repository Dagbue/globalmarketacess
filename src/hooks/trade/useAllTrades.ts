import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { ErrorType, readAllTradeResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllTrades = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllTrades = async (): Promise<readAllTradeResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.allTrades();

            if (status === 200 && responseData) {
                const tradeData = responseData as readAllTradeResponse;

                if (tradeData.responseMessage.includes("Trades found")) {
                    // toast.success("All trades retrieved successfully!");
                    return tradeData;
                } else {
                    toast.error(tradeData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all trades. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all trades";
                toast.error(errorMessage);
                logger("Fetch all trades error", axiosError, { level: "error", tag: "fetch-all-trades" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllTrades, isSubmitting };
};

export default useAllTrades;