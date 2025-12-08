import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import tradeService from "../../api/depositService";
import type { BaseResponse, ErrorType, deleteDepositRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteDeposit = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteDeposit = async (dataToServer: deleteDepositRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await tradeService.deleteDeposit(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Deposit deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Deposit deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during deposit deletion";
                toast.error(errorMessage);
                logger("Delete deposit error", axiosError, { level: "error", tag: "delete-deposit" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteDeposit, isSubmitting };
};

export default useDeleteDeposit;