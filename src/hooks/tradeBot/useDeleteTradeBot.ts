import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { BaseResponse, ErrorType, deleteTradeBotRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteTradeBot = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteTradeBot = async (dataToServer: deleteTradeBotRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeBotService.deleteTradeBot(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Trade bot deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade bot deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade bot deletion";
                toast.error(errorMessage);
                logger("Delete trade bot error", axiosError, { level: "error", tag: "delete-trade-bot" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteTradeBot, isSubmitting };
};

export default useDeleteTradeBot;