import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/depositService";
import type { ErrorType, readDepositByIdRequest, readDepositByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadDepositById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readDepositById = async (dataToServer: readDepositByIdRequest): Promise<readDepositByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.readDepositById(dataToServer);

            if (status === 200 && responseData) {
                const depositData = responseData as readDepositByIdResponse;

                if (depositData.responseMessage.includes("success")) {
                    toast.success("Deposit retrieved successfully!");
                    return depositData;
                } else {
                    toast.error(depositData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve deposit. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving deposit";
                toast.error(errorMessage);
                logger("Read deposit by ID error", axiosError, { level: "error", tag: "read-deposit-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readDepositById, isSubmitting };
};

export default useReadDepositById;