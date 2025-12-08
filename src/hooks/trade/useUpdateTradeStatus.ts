import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { BaseResponse, ErrorType, updateTradeStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateTradeStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateTradeStatus = async (dataToServer: updateTradeStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.updateTradeStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Trade status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade status update";
                toast.error(errorMessage);
                logger("Update trade status error", axiosError, { level: "error", tag: "update-trade-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateTradeStatus, isSubmitting };
};

export default useUpdateTradeStatus;