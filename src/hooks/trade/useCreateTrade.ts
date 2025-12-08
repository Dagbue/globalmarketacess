import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { BaseResponse, ErrorType, createTradeRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateTrade = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createTrade = async (dataToServer: createTradeRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.createTrade(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    toast.success("Trade created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Trade creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during trade creation";
                toast.error(errorMessage);
                logger("Create trade error", axiosError, { level: "error", tag: "create-trade" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createTrade, isSubmitting };
};

export default useCreateTrade;