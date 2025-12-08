import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { ErrorType, readTradeByIdRequest, readTradeByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadTradeById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readTradeById = async (dataToServer: readTradeByIdRequest): Promise<readTradeByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.readTradeById(dataToServer);

            if (status === 200 && responseData) {
                const tradeData = responseData as readTradeByIdResponse;

                if (tradeData.responseMessage.includes("success")) {
                    toast.success("Trade retrieved successfully!");
                    return tradeData;
                } else {
                    toast.error(tradeData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve trade. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving trade";
                toast.error(errorMessage);
                logger("Read trade by ID error", axiosError, { level: "error", tag: "read-trade-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readTradeById, isSubmitting };
};

export default useReadTradeById;