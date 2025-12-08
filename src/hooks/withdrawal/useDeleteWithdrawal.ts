import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { BaseResponse, ErrorType, deleteWithdrawalRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteWithdrawal = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteWithdrawal = async (dataToServer: deleteWithdrawalRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await WithdrawalService.deleteWithdrawal(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Withdrawal deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Withdrawal deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during withdrawal deletion";
                toast.error(errorMessage);
                logger("Delete withdrawal error", axiosError, { level: "error", tag: "delete-withdrawal" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteWithdrawal, isSubmitting };
};

export default useDeleteWithdrawal;