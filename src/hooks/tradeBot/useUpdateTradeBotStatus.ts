import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { BaseResponse, ErrorType, updateTradeBotStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateTradeBotStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateTradeBotStatus = async (dataToServer: updateTradeBotStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeBotService.updateTradeBotStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Trade bot status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade bot status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade bot status update";
                toast.error(errorMessage);
                logger("Update trade bot status error", axiosError, { level: "error", tag: "update-trade-bot-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateTradeBotStatus, isSubmitting };
};

export default useUpdateTradeBotStatus;