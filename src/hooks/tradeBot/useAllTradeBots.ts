import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { ErrorType, readAllTradeBotResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllTradeBots = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllTradeBots = async (): Promise<readAllTradeBotResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeBotService.allTradeBot();

            if (status === 200 && responseData) {
                const tradeBotData = responseData as readAllTradeBotResponse;

                if (tradeBotData.responseMessage.includes("Trading bots found")) {
                    // toast.success("All trade bots retrieved successfully!");
                    return tradeBotData;
                } else {
                    toast.error(tradeBotData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all trade bots. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all trade bots";
                toast.error(errorMessage);
                logger("Fetch all trade bots error", axiosError, { level: "error", tag: "fetch-all-tradebots" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllTradeBots, isSubmitting };
};

export default useAllTradeBots;