import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { BaseResponse, ErrorType, deleteTradeRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteTrade = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteTrade = async (dataToServer: deleteTradeRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.deleteTrade(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Trade deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade deletion";
                toast.error(errorMessage);
                logger("Delete trade error", axiosError, { level: "error", tag: "delete-trade" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteTrade, isSubmitting };
};

export default useDeleteTrade;