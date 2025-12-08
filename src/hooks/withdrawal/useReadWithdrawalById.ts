import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { ErrorType, readWithdrawalByIdRequest, readWithdrawalByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadWithdrawalById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readWithdrawalById = async (dataToServer: readWithdrawalByIdRequest): Promise<readWithdrawalByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await WithdrawalService.readWithdrawalById(dataToServer);

            if (status === 200 && responseData) {
                const withdrawalData = responseData as readWithdrawalByIdResponse;

                if (withdrawalData.responseMessage.includes("success")) {
                    toast.success("Withdrawal retrieved successfully!");
                    return withdrawalData;
                } else {
                    toast.error(withdrawalData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve withdrawal. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving withdrawal";
                toast.error(errorMessage);
                logger("Read withdrawal by ID error", axiosError, { level: "error", tag: "read-withdrawal-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readWithdrawalById, isSubmitting };
};

export default useReadWithdrawalById;