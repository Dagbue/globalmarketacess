import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { BaseResponse, ErrorType, createTradeBotRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateTradeBot = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createTradeBot = async (dataToServer: createTradeBotRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeBotService.createTradeBot(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Trade bot created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade bot creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade bot creation";
                toast.error(errorMessage);
                logger("Create trade bot error", axiosError, { level: "error", tag: "create-trade-bot" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createTradeBot, isSubmitting };
};

export default useCreateTradeBot;