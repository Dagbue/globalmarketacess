import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { ErrorType, readTradeBotByIdRequest, readTradeBotByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadTradeBotById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readTradeBotById = async (dataToServer: readTradeBotByIdRequest): Promise<readTradeBotByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeBotService.readTradeBotById(dataToServer);

            if (status === 200 && responseData) {
                const tradeBotData = responseData as readTradeBotByIdResponse;

                if (tradeBotData.responseMessage.includes("success")) {
                    toast.success("Trade bot retrieved successfully!");
                    return tradeBotData;
                } else {
                    toast.error(tradeBotData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve trade bot. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving trade bot";
                toast.error(errorMessage);
                logger("Read trade bot by ID error", axiosError, { level: "error", tag: "read-trade-bot-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readTradeBotById, isSubmitting };
};

export default useReadTradeBotById;